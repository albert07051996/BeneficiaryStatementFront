import React, { useCallback, useState, useEffect } from 'react';
import { Button, Input, message, Col } from 'antd';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { UserDTO } from '../../../types/UserDTO';
import {
  loginUser,
  sendSms,
  passwordRecovery,
  passwordSmsSuccessFalse,
} from '../../../redux/slices/userSlice';

type smsProps = {
  state: any;
};

export const SmsControlerForPasswordRecovery = (props: smsProps) => {
  const dispatch = useAppDispatch();
  const passwordSmsSuccess = useAppSelector(state => state.user.passwordSmsSuccess);
  const passwordSmsError = useAppSelector(state => state.user.passwordSmsError);

  const [smsData, setSmsData] = useState<any>(null);
  const [smsSecconds, setSmsSecconds] = useState<number>(6);
  const [smsShow, setSmsShow] = useState<boolean>(false);
  const [smsInterval, setSmsInterval] = useState<any>(null);
  const [startCounter, setStartCounter] = useState<boolean>(false);

  useEffect(() => {
    Object.entries(passwordSmsError || {}).forEach(([key, value]) => {
      message.error(`${value}`);
    });
  }, [passwordSmsError]);

  // useEffect(() => {
  //    //console.log(passwordSmsError, 'passwordSmsError')
  //   if (passwordSmsError?.messages[0]) {
  //     message.error(passwordSmsError);
  //   }
  // }, [passwordSmsError]);

  useEffect(() => {
    if (passwordSmsSuccess) {
      //  //console.log(passwordSmsSuccess, 'passwordSmsSuccess')
      message.success('sms გამოგზავნილია მითითებულ ნომერზე');
      dispatch(passwordSmsSuccessFalse());
    }
  }, [passwordSmsSuccess]);

  useEffect(() => {
    if (startCounter === true) {
      //console.log(startCounter)
      setSmsShow(true);

      const timerId = setInterval(() => setSmsSecconds(smsSecconds - 1), 1000);
      return () => clearInterval(timerId);
    }
  }, [smsSecconds, startCounter]);

  useEffect(() => {
    if (smsSecconds === 0 && startCounter === true) {
      //console.log(smsSecconds, startCounter)
      setStartCounter(false);
      setSmsSecconds(60);
      setSmsShow(false);
      //console.log(smsSecconds, startCounter, "meore us ef")
    }
  }, [smsSecconds, startCounter]);

  const handleSmsClick = async () => {
    setStartCounter(true);
    //console.log(props.state, "obk")
    dispatch(passwordRecovery(props.state));
  };

  const resetTimer = () => {
    //console.log("შეჩერდა ტაიმერი")
    setSmsSecconds(6);
    setSmsShow(false);
    clearInterval(smsInterval);
  };

  const timerControl = () => {
    //console.log(smsShow, 'შოუ სმს')

    return (
      <>
        <Input.Group compact>
          {smsShow ? (
            <Col span={4}>
              <Button
                className="smsBtnProfile"
                disabled
                onClick={handleSmsClick}
                // style={{ borderRadius: '8px', backgroundColor: '#235D99', color: '#fff', width:'60px' }}
              >
                {smsSecconds}
              </Button>
            </Col>
          ) : (
            <Col span={4}>
              <Button
                onClick={handleSmsClick}
                className="smsBtnProfile"
                // style={{  borderRadius: '8px', backgroundColor: '#235D99;', color: '#fff', fontSize: '12px', padding:'1px' }}
              >
                SMS კოდი
              </Button>
            </Col>
          )}
        </Input.Group>
      </>
    );
  };

  return <>{timerControl()}</>;
};
