import { LockOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Form,
  Input,
  message,
  DatePicker,
  Row,
  Col,
  Card,
  Space,
  Tooltip,
  Tabs,
  ConfigProvider,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser, confirmSignUp } from '../../redux/slices/userSlice';
import { UserDTO } from '../../types/UserDTO';
import { NavLink } from 'react-router-dom';
import './Profile.css';
import { ABOUT } from '../../router/paths';
// import { SmsControl } from '../SmsControler/SmsControl1'
import { SmsControlReg } from '../SmsControler/SmsControlReg';
import userEvent from '@testing-library/user-event';
import seo from '../../assets/images/seo.png';
import stamp from '../../assets/images/stamp.png';
import vimeo from '../../assets/images/vimeo.png';
import playstore from '../../assets/images/playstore.svg';
import apple from '../../assets/images/apple.svg';
import { Layout } from 'antd';
import { LOGIN_PAGE, LANDING_PAGE } from '../../router/paths';
import { useNavigate } from 'react-router-dom';
import { MobileUpdateAfterLoggingPage } from '../../Pages/MobileUpdateAfterLoggingPage';
import { PasswordRecoveryAfterLoggingPage } from '../../Pages/PasswordRecoveryAfterLoggingPage';
import axios from 'axios';
import geo from 'antd/es/locale/ka_GE';
import 'moment/locale/ka';
// import { MobileUpdateAfterLoggingPage } from '../../Pages/MobileUpdateAfterLoggingPage'
import moment from 'moment';
import { APIID } from '../../constants';
import dayjs from 'dayjs';
import { PageFooter } from '../footer/PageFooter';
// import { PageFooter } from '../footer/PageFooter';

const { Footer } = Layout;
export const Profile = () => {
  const person = useAppSelector(state => state.statment.personInfo);
  const [loader, setloader] = useState<any>(true);
  const navigate = useNavigate();

  const [state, setstate] = useState<{
    userId: string;
    email: string;
    activeAddress: string;
  }>({
    userId: '',
    email: '',
    activeAddress: '',
  });

  useEffect(() => {
    //console.log(person, "person1232")
    setstate({
      ...state,
      userId: person.id,
      email: person.email,
      activeAddress: person.activeAddress,
    });
  }, [person]);

  const changeState = (e: any) => {
    //console.log(e, "e")
    const { name, value } = e.target;
    //console.log(name, value)
    setstate({ ...state, [name]: value });
    //console.log(state, 'statia')
  };

  const token = localStorage.getItem('accesstoken');

  const saveChange = async () => {
    //console.log("Shemovs")
    try {
      const url = `${APIID}/api/Person/UpdatePersonInfo`;
      const response = await axios
        .put(
          url,
          { ...state },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        .then(res => res);
      // setNewRespons(response.data)
      setloader(false);
      // return
      message.success('ინფორმაცია წარმადებით განახლდა');

      // new Blob([response.data], {
      //     type: response.headers["content-type"],

      // });
      navigate('/landingPage');
    } catch (error) {
      message.error('ვერ მოხდა ინფორმაციის განახლება');
      setloader(false);
    }
  };

  return (
    <>
      <Card style={{ border: 'none', marginTop: '109px', height: '490px' }} className='cardForProfile'>
        <div className="profileTitle">პირადი მონაცემები</div> <br />
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11}>
            <div className="inputTitles">სახელი</div>
            <Input
              className="inputForProfile"
              // name='privateNumber'
              placeholder="სახელი"
              value={person.firstName}
              // onChange={(e) => changeState(e)}
              disabled
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <div className="inputTitles">გვარი</div>
            <Input
              className="inputForProfile"
              // name='privateNumber'
              placeholder="გვარი"
              value={person.lastName}
              // onChange={(e) => changeState(e)}
              disabled
            />
            <br />
            <br />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11}>
            <div className="inputTitles">პირადი ნომერი</div>
            <Input
              className="inputForProfile"
              name="privateNumber"
              placeholder="პირადი ნომერი"
              value={person.privateNumber}
              // onChange={(e) => changeState(e)}
              disabled
            />
          </Col>
          &nbsp;
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <ConfigProvider locale={geo}>
              <div className="inputTitles">დაბადების თარიღი</div>
              <DatePicker
                className="inputForProfileDate"
                format="DD-MM-YYYY"

                value={
                  person?.birthDate != ''
                    ? dayjs(person?.birthDate)
                    : undefined
                }
                // value={moment(person?.birthDate)}
                placeholder="დაბადების თარიღი"
                disabled
                style={{
                  background: '#FFF',
                  // borderRadius: 8,
                  // border: 'none',
                  // height: 30,
                  width: '100%',
                  marginBottom: '56px',
                  border: 'none',
                }}
              />
            </ConfigProvider>
            <br />
            <br />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11}>
            <div className="inputTitles">იურიდიული მისამართი</div>
            <Input
              className="inputForProfile"
              // name='privateNumber'
              placeholder="იურიდიული მისამართი"
              value={person.address}
              disabled
            // onChange={(e) => changeState(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <div className="inputTitles">ფაქტიური მისამართი</div>
            <Input
              className="inputForProfile"
              name="activeAddress"
              // placeholder="ფაქტიური მისამართი"
              value={state?.activeAddress}
              onChange={e => changeState(e)}
            />
            <br />
            <br />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11}>
            <div className="inputTitles">მეილი</div>
            <Input
              className="inputForProfile"
              name="email"
              placeholder="მეილი"
              value={state.email}
              onChange={e => changeState(e)}
            />
          </Col>
          <br />
          <br />
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <div className="inputTitles">მობილურის ნომერი</div>
            <Input
              className="inputForProfile"
              name="phoneNumber"
              placeholder="phoneNumber"
              value={person?.phoneNumber}
              disabled
              onChange={e => changeState(e)}
            />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Button onClick={saveChange} className="saveBtnProfile">
          {' '}
          შენახვა
        </Button>
      </Card>
      {/* </div> */}
      {/* <PageFooter /> */}
    </>
  );
};
