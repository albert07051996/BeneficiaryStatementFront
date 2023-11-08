import React, { useCallback, useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
// import Swal from "sweetalert2";
import { Button, Input } from 'antd';
import axios from "axios";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { UserDTO } from '../../types/UserDTO';
import { loginUser, sendSms } from '../../redux/slices/userSlice';

// import OperatorAddSteitment from "../../../store/OperatorAddSteitment";
// import { observer } from "mobx-react-lite";
type smsProps = {
  userName?: string;
  password?: string
}

export const SmsControl = (props: smsProps) => {
  const dispatch = useAppDispatch();

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

  const [smsCode, setSmsCode] = useState<any>(null);

  // const [smsInfo, setSmsInfo] = useState([
  //   {
  //     userName: '',
  //     password: '',
  //   },
  // ]);


  const changeSmsCod = (e: any) => {
    //console.log(e.target.value, 'e')
    setSmsCode(e.target.value)
  }

  useEffect(() => {
    //  //console.log(props.userName, "userName")
    //  //console.log(props.password, "password")

    //console.log(startCounter, "zeda", smsCode, 'smsCode')

    if (startCounter === true) {
      //console.log(startCounter)
      setSmsShow(true);

      const timerId = setInterval(() => setSmsSecconds(smsSecconds - 1), 1000);
      return () => clearInterval(timerId);
      // if (smsSecconds > 0) {
      //   setSmsSecconds(smsSecconds - 1)
      // }
      // // smsSecconds > 0 && setInterval(() => setSmsSecconds(smsSecconds - 1), 1000);
      // return () => clearInterval(smsInterval)
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
      password: props.password
    };

    //console.log(obj, "obk")

    dispatch(sendSms(obj));
    //  //console.log(telephoneNumber, "telephoneNumber")
    //  //console.log(SmsId, "SmsId")

    // startTimer();




    //  //console.log("12345678", props);
    // const {
    //   privateNumber,
    //   phoneNumber,
    // id
    // } = this.props;

    // try {
    //    //console.log("shemodis111");
    //   const smsResult = await axios.post(
    //     "https://stateissuesagencyapitest.ssa.moh.local/api/Account/SendSms",
    //     {
    //       beneficiaryId: SmsId,
    //       phoneNumber: telephoneNumber,
    //     }
    //   );
    //    //console.log("smsResult11111111111111", smsResult);

    //   if (smsResult?.data?.isSuccess) {
    //     resetTimer();
    //     Swal.fire({
    //       icon: "info",
    //       confirmButtonText: "დახურვა",
    //       text: smsResult?.data.messages,
    //     });
    //   } else {
    //     setSmsData(smsResult)
    //     setState({ smsData: smsResult });
    //     const errorMessage = Object.values(smsResult?.data?.errors);
    //     Swal.fire({
    //       icon: "error",
    //       confirmButtonText: "დახურვა",
    //       text: errorMessage,
    //     });
    //   }
    // } catch (err) {
    //   const errorMessage = Object.values(err.response.data.errors);
    //    //console.log("err", err, errorMessage);
    //   resetTimer();
    //   Swal.fire({
    //     text: errorMessage,
    //     icon: "error",
    //     confirmButtonText: "დახურვა",
    //   });
    //   return;
    // }
  };

  const resetTimer = () => {
    //console.log("შეჩერდა ტაიმერი")
    setSmsSecconds(6);
    setSmsShow(false);
    clearInterval(smsInterval);
  };

  const timerControl = () => {
    //console.log(smsShow, 'შოუ სმს')
    // if (smsShow) {
    return (
      <>
        <Input.Group compact>
          <Input style={{ width: 'calc(100% - 200px)' }}
            onChange={(e) => changeSmsCod(e)}
          />
          {smsShow ?
            <Button
              // variant="outline-secondary sms-button"
              disabled
              onClick={handleSmsClick}
              style={{ zIndex: 0, width: "150px" }}
            >
              {smsSecconds}
            </Button> : <Button
              // variant="outline-secondary sms-button"
              onClick={handleSmsClick}
              style={{ zIndex: 0, width: "150px" }}
            >
              sms კოდი
            </Button>}
        </Input.Group>
      </>
    );
    // }
    // return (
    //   <Input.Group compact>
    //     <Input style={{ width: 'calc(100% - 200px)' }} placeholder="sms კოდი"
    //       onChange={(e) => changeSmsCod(e)}
    //     />
    //     <Button
    //       // variant="outline-secondary sms-button"
    //       onClick={handleSmsClick}
    //       style={{ zIndex: 0, width: "150px" }}
    //     >
    //       sms კოდი
    //     </Button>
    //   </Input.Group >
    // );
  };


  return <>
    {timerControl()}
  </>;
}