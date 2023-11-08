import React, { useCallback, useState, useEffect } from "react";
import { Button, Input, message } from 'antd';
import axios from "axios";
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { UserDTO } from '../../../types/UserDTO';
import { loginUser, sendSms, sendSmsForMobileUpdate } from '../../../redux/slices/userSlice';

type smsProps = {
  state: any
}

export const SmsControlerForMobilUpdate = (props: smsProps) => {
  const smsForMobileUpdateSuccess = useAppSelector(state => state.user.smsForMobileUpdateSuccess);
  const smsForMobileUpdateError = useAppSelector(state => state.user.smsForMobileUpdateError);

  const dispatch = useAppDispatch();
  const [smsData, setSmsData] = useState<any>(null);
  const [smsSecconds, setSmsSecconds] = useState<number>(6);
  const [smsShow, setSmsShow] = useState<boolean>(false);
  const [smsInterval, setSmsInterval] = useState<any>(null);
  const [startCounter, setStartCounter] = useState<boolean>(false);


  useEffect(() => {
    Object.entries(smsForMobileUpdateError || {}).forEach(([key, value]) => {
      message.error(`${value}`);
    });
  }, [smsForMobileUpdateError]);

  useEffect(() => {
    if (smsForMobileUpdateSuccess) {
      message.success("sms გამოგზავნილია მითითებულ ნომერზე");
    }
  }, [smsForMobileUpdateSuccess]);

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
    dispatch(sendSmsForMobileUpdate(props.state));
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
          {smsShow ?
            <Button
              disabled
              onClick={handleSmsClick}
              style={{ zIndex: 1, padding: '10px', bottom: '59px', left: '90%', borderRadius: '5px', backgroundColor: '#83BE59', color: '#fff' }}
            >
              {smsSecconds}
            </Button> : <Button
              onClick={handleSmsClick}
              style={{ zIndex: 1, padding: '5px 5px 5px 5px', bottom: '59px', left: '72%', borderRadius: '5px', backgroundColor: '#83BE59', color: '#fff' }}
            >
              SMS კოდი
            </Button>}
        </Input.Group>
      </>
    );
  };
  return <>
    {timerControl()}
  </>;
}