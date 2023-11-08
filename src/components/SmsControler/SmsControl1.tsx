import React, { useCallback, useState, useEffect } from 'react';
// import { Button } from "react-bootstrap";
// import Swal from "sweetalert2";
import { Button, Input, message } from 'antd';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { UserDTO } from '../../types/UserDTO';
import { loginUser, sendSms } from '../../redux/slices/userSlice';

// import OperatorAddSteitment from "../../../store/OperatorAddSteitment";
// import { observer } from "mobx-react-lite";
type smsProps = {
  userName?: string;
  password?: string;
};

export const SmsControl = (props: smsProps) => {
  const dispatch = useAppDispatch();
  const smsLoginSuccess = useAppSelector(state => state.user.smsLoginSuccess);
  const smsLoginError = useAppSelector(state => state.user.smsLoginError);

  useEffect(() => {
    // if (smsLoginError) {
    //   message.error("პაროლი არასწორია!");
    // }

    //console.log(smsLoginError, 'smsLoginError')
    Object.entries(smsLoginError || {}).forEach(([key, value]) => {
      message.error(`${value}`);
    });
  }, [smsLoginError]);

  useEffect(() => {
    if (smsLoginSuccess) {
      //console.log()
      message.success('sms გამოგზავნილია მითითებულ ნომერზე');
    }
  }, [smsLoginSuccess]);

  // const onFinish = (user: UserDTO) => {
  //    //console.log('Received values of form: ', user);

  //   let formData = new FormData();
  //   formData.append('password', user.password);
  //   formData.append('userName', user.userName);
  //   formData.append('userName', user.smsCode);

  //   dispatch(loginUser(formData));
  // };

  const [smsData, setSmsData] = useState<any>(null);
  const [smsSecconds, setSmsSecconds] = useState<number>(6);
  const [smsShow, setSmsShow] = useState<boolean>(false);
  const [smsInterval, setSmsInterval] = useState<any>(null);
  const [startCounter, setStartCounter] = useState<boolean>(false);

  useEffect(() => {
    if (startCounter === true) {
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

      // setSmsSecconds(5)
      // resetTimer();
      // timerControl();
    }
  }, [smsSecconds, startCounter]);

  const handleSmsClick = async () => {
    setStartCounter(true);
    const obj = {
      userName: props.userName,
      password: props.password,
    };
    dispatch(sendSms(obj));
  };

  const resetTimer = () => {
    setSmsSecconds(6);
    setSmsShow(false);
    clearInterval(smsInterval);
  };

  const timerControl = () => {
    return (
      <>
        <Input.Group compact>
          {smsShow ? (
            <Button
              disabled
              className="smsBtn"
              onClick={handleSmsClick}
            >
              {smsSecconds}
            </Button>
          ) : (
            <Button
              className="smsBtn"
              onClick={handleSmsClick}
            >
              SMS კოდი
            </Button>
          )}
        </Input.Group>
      </>
    );
  };

  return <>{timerControl()}</>;
};
