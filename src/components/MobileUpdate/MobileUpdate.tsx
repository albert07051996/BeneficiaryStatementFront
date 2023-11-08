import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Form,
  Input,
  message,
  DatePicker,
  ConfigProvider,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser, updatePhoneNumber } from '../../redux/slices/userSlice';
import { UserDTO } from '../../types/UserDTO';
import { NavLink } from 'react-router-dom';
import './MobileUpdate.css';
import { ABOUT } from '../../router/paths';
import { SmsControlerForMobilUpdate } from './SmsControler/SmsControlerForMobilUpdate';
import userEvent from '@testing-library/user-event';
import moment from 'moment';
import { LOGIN_PAGE } from '../../router/paths';
import { useNavigate } from 'react-router-dom';
import geo from 'antd/es/locale/ka_GE';
import 'moment/locale/ka';

export const MobileUpdate = () => {
  const navigate = useNavigate();
  const loginError = useAppSelector(state => state.user.error);
  const loginLoading = useAppSelector(state => state.user.loading);
  const updatePhoneNumberSuccess = useAppSelector(
    state => state.user.updatePhoneNumberSuccess
  );
  const updatePhoneNumberError = useAppSelector(
    state => state.user.updatePhoneNumberError
  );

  useEffect(() => {
    Object.entries(updatePhoneNumberError || {}).forEach(([key, value]) => {
      message.error(`${value}`);
    });
  }, [updatePhoneNumberError]);

  useEffect(() => {
    if (updatePhoneNumberSuccess) {
      message.success('პაროლის ცვლილება დამატება');
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
    privateNumber: '',
    firstName: '',
    lastName: '',
    birthDate: new Date(moment().format('yyyy-MM-DD')),
    password: '',
    phoneNumber: '',
    smsCode: '',
  });

  const changeState = (e: any) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  const changedate = (date: any, dateString: any) => {
    setstate({ ...state, birthDate: moment(dateString).format('yyyy-MM-DD') });
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
    <div className="main">
      <h3 className="title">მობილურის განახლება</h3>
      <Form
        name="normal_registration"
        className="registration-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="privateNumber"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            className="radiusInput"
            name="privateNumber"
            placeholder="პირადი ნომერი"
            onChange={e => changeState(e)}
          />
        </Form.Item>
        <Form.Item
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            className="radiusInput"
            name="firstName"
            placeholder="სახელი (*)"
            onChange={e => changeState(e)}
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            className="radiusInput"
            name="lastName"
            placeholder="გვარი (*)"
            onChange={e => changeState(e)}
          />
        </Form.Item>
        <div className="starting-data">
          <ConfigProvider locale={geo}>
            <DatePicker
              format="DD-MM-YYYY"
              name="birthDate"
              className="datepicker"
              onChange={changedate}
              placeholder="დაბადების თარიღი"
              style={{
                borderRadius: 8,
                height: 30,
                width: 300,
              }}
            />
          </ConfigProvider>
        </div>
        <br />
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password
            className="radiusInput"
            name="password"
            placeholder="პაროლი (*)"
            prefix={<LockOutlined className="site-form-item-icon" />}
            onChange={e => changeState(e)}
          />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            className="radiusInput"
            name="phoneNumber"
            placeholder="ახალი მობილურის ნომერი"
            onChange={e => changeState(e)}
          />
        </Form.Item>
        <SmsControlerForMobilUpdate state={state} />
        <Input.Group compact>
          <Input
            style={{
              width: 'calc(100% - 200px)',
              float: 'right',
              padding: '5px',
              bottom: '50px',
            }}
            className="codeInput"
            name="smsCode"
            onChange={e => changeState(e)}
          />
        </Input.Group>
        <Form.Item>
          <Button
            loading={loginLoading}
            type="primary"
            htmlType="submit"
            className="registration-form-button"
            onClick={UpdateMobile}
          >
            განახლება
          </Button>
        </Form.Item>
      </Form>
      <div className="backToLoginMobile">
        {' '}
        <a href={LOGIN_PAGE}>ავტორიზაციის გვერდზე დაბრუნება</a>
      </div>
    </div>
  );
};
