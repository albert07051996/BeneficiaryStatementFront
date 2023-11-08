import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
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
  Tooltip,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  loginUser,
  updatePhoneNumber,
  updatePhoneNumberSuccessFalse,
} from '../../redux/slices/userSlice';
import { getPerson } from '../../redux/slices/steatmentSlice';

import { UserDTO } from '../../types/UserDTO';
import { NavLink } from 'react-router-dom';
import './MobileUpdateAfterLogging.css';
import { ABOUT } from '../../router/paths';
import { SmsControlerForMobilUpdate } from './SmsControler/SmsControlerForMobileUpdateAfterLogging';
import userEvent from '@testing-library/user-event';
import moment from 'moment';
import { LOGIN_PAGE } from '../../router/paths';
import { useNavigate } from 'react-router-dom';
import FormItem from 'antd/lib/form/FormItem';
// import { ProfileSider } from '../ProfileSider/ProfileSider'

export const MobileUpdateAfterLogging = () => {
  const navigate = useNavigate();
  const loginError = useAppSelector(state => state.user.error);
  const loginLoading = useAppSelector(state => state.user.loading);
  const updatePhoneNumberSuccess = useAppSelector(
    state => state.user.updatePhoneNumberSuccess
  );
  const updatePhoneNumberError = useAppSelector(
    state => state.user.updatePhoneNumberError
  );
  const person = useAppSelector(state => state.statment.personInfo);

  useEffect(() => {
    Object.entries(updatePhoneNumberError || {}).forEach(([key, value]) => {
      message.error(`${value}`);
    });
  }, [updatePhoneNumberError]);

  useEffect(() => {
    if (updatePhoneNumberSuccess == true) {
      message.success('მობილური წარმატებით შეიცვალა');
      // navigate(LOGIN_PAGE);
      dispatch(updatePhoneNumberSuccessFalse());

      dispatch(getPerson());
      // navigate(LOGIN_PAGE);
    }
  }, [updatePhoneNumberSuccess]);

  const [state, setstate] = useState<{
    privateNumber: string;
    firstName: string;
    lastName: string;
    birthDate: any;
    password: string;
    phoneNumber: string;
    smsCode: string;
  }>({
    privateNumber: person.privateNumber,
    firstName: person.firstName,
    lastName: person.lastName,
    birthDate: person.birthDate,
    password: '',
    phoneNumber: '',
    smsCode: '',
  });

  const changeState = (e: any) => {
    //console.log(e, "e")
    const { name, value } = e.target;
    //console.log(name, value)
    setstate({ ...state, [name]: value });
    //console.log(state, 'statia')
  };

  const changedate = (date: any, dateString: any) => {
    setstate({ ...state, birthDate: moment(dateString).format('yyyy-MM-DD') });
    //console.log(state, 'statia')
  };

  const UpdateMobile = () => {
    const obj = {
      password: state.password,
      phoneNumber: state.phoneNumber,
      privateNumber: state.privateNumber,
      smsCode: state.smsCode,
    };

    dispatch(updatePhoneNumber(obj));
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loginError) {
      message.error(loginError);
    }
  }, [loginError]);
  return (
    <>
      <Card className="mobileAfterLogCard">
        <div className="main">
          <div className="mobileTitle">მობილურის განახლება</div>
          <Form
            layout="vertical"
            name="normal_registration"
            initialValues={{
              remember: true,
            }}
          >
            <br />
            <Row gutter={10}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label="პაროლი"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password
                    className="inputForProfile"
                    name="password"
                    prefix={<LockOutlined />}
                    onChange={e => changeState(e)}
                  />
                </Form.Item>{' '}
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                {' '}
                <Form.Item
                  label="ახალი მობილურის ნომერი"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined />}
                    className="inputForProfile"
                    name="phoneNumber"
                    onChange={e => changeState(e)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Input.Group compact>
                  <br /> <br />
                  <Input
                    className="codeInputMobile"
                    maxLength={4}
                    name="smsCode"
                    onChange={e => changeState(e)}
                    prefix={
                      <Tooltip>
                        <SmsControlerForMobilUpdate state={state} />
                      </Tooltip>
                    }
                  />
                </Input.Group>
              </Col>
            </Row>
            <br /> <br />
            <br />
            <Form.Item>
              <Col xs={24} sm={24} md={12} lg={12} xl={10}></Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={10}>
                {' '}
                <Button
                  loading={loginLoading}
                  type="primary"
                  htmlType="submit"
                  className="profileMobileUpdateBtn"
                  onClick={UpdateMobile}
                >
                  განახლება
                </Button>{' '}
              </Col>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </>
  );
};
