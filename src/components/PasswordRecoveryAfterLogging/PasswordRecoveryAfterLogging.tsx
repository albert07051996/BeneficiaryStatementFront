import { LockOutlined, UserOutlined } from '@ant-design/icons';
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
  confirmPasswordRecovery,
  resetOasswordRecoverySuccess,
} from '../../redux/slices/userSlice';
import { UserDTO } from '../../types/UserDTO';
import { NavLink } from 'react-router-dom';
import './PasswordRecoveryAfterLogging.css';
import { ABOUT } from '../../router/paths';
import { SmsControlerForPasswordRecovery } from './SmsControler/SmsControlerForPasswordRecovery';
import userEvent from '@testing-library/user-event';
import moment from 'moment';
import { LOGIN_PAGE } from '../../router/paths';
import { useNavigate } from 'react-router-dom';

export const PasswordRecoveryAfterLogging = () => {
  const navigate = useNavigate();

  const loginError = useAppSelector(state => state.user.error);
  const loginLoading = useAppSelector(state => state.user.loading);
  const passwordRecoverySuccess = useAppSelector(
    state => state.user.passwordRecoverySuccess
  );
  const passwordRecoveryError = useAppSelector(
    state => state.user.passwordRecoveryError
  );
  const person = useAppSelector(state => state.statment.personInfo);

  // passwordRecoverySuccess: false,
  //     passwordRecoveryError:
  const [state, setstate] = useState<{
    privateNumber: string;
    firstName: string;
    lastName: string;
    birthDate: any;
    password: string;
    smsCode: string;
    confirmedPassword: string;
  }>({
    privateNumber: person.privateNumber,
    firstName: person.firstName,
    lastName: person.lastName,
    birthDate: person.birthDate,
    password: '',
    smsCode: '',
    confirmedPassword: '',
  });

  useEffect(() => {
    Object.entries(passwordRecoveryError || {}).forEach(([key, value]) => {
      message.error(`${value}`);
    });
  }, [passwordRecoveryError]);

  useEffect(() => {
    if (passwordRecoverySuccess) {
      message.success('პაროლი წარმატებით შეიცვალა');
      dispatch(resetOasswordRecoverySuccess());

      navigate(LOGIN_PAGE);
    }
  }, [passwordRecoverySuccess]);

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

  const OnClickPasswordRecoveryConfirm = () => {
    const obj = {
      privateNumber: state.privateNumber,
      password: state.password,
      confirmedPassword: state.confirmedPassword,
      smsCode: state.smsCode,
    };
    dispatch(confirmPasswordRecovery(obj));
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loginError) {
      message.error(loginError);
    }
  }, [loginError]);
  return (
    <>
      <Card className="mainCard">
        <div className="recoveryTitle">პაროლის ცვლილება</div>
        <br />

        <Form
          layout="vertical"
          name="normal_registration"
          initialValues={{
            remember: true,
          }}
        >
          <Row gutter={10}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                name="password"
                label="პაროლი"
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
                  autoComplete="new-password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  onChange={e => changeState(e)}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                name="confirmedPassword"
                label="გაიმეორე პაროლი"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password
                  className="inputForProfile"
                  name="confirmedPassword"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  onChange={e => changeState(e)}
                />
              </Form.Item>{' '}
            </Col>
          </Row>

          <Col xs={24} sm={24} md={7} lg={12} xl={24} className="colForAlign">
            {' '}
            <Input.Group compact>
              <br /> <br />
              <Input
                className="profileCodeInput"
                maxLength={4}
                name="smsCode"
                onChange={e => changeState(e)}
                prefix={
                  <Tooltip>
                    <SmsControlerForPasswordRecovery state={state} />
                  </Tooltip>
                }
              />
            </Input.Group>
          </Col>
          {/* </Row> */}
          <br />
          <br />
          <br />
          <Form.Item>
            <Col xs={24} sm={24} md={7} lg={12} xl={12}>
              {' '}
              <Button
                loading={loginLoading}
                type="primary"
                htmlType="submit"
                className="profileRecoveryButton"
                onClick={OnClickPasswordRecoveryConfirm}
              >
                პაროლის ცვლილება
              </Button>
            </Col>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
