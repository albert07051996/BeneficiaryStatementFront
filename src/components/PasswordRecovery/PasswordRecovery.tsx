import {
  ContactsOutlined,
  LockOutlined,
  RightOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Form,
  Input,
  message,
  DatePicker,
  ConfigProvider,
  Layout,
  Col,
  Row,
  Space,
  Tooltip,
  Card,
  Carousel,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser, confirmPasswordRecovery } from '../../redux/slices/userSlice';
import { UserDTO } from '../../types/UserDTO';
import { NavLink } from 'react-router-dom';
import './PasswordRecovery.css';
import { ABOUT, REGISTRATION_PAGE } from '../../router/paths';
import { SmsControlerForPasswordRecovery } from './SmsControler/SmsControlerForPasswordRecovery';
import userEvent from '@testing-library/user-event';
import playstore from '../../assets/images/playstore.svg';
import medicalHistory from '../../assets/images/medical-history.svg';
import ribbon from '../../assets/images/ribbon.svg';
import virus from '../../assets/images/virus.svg';
import Vector1 from '../../assets/images/Vector1.svg';
import Blood from '../../assets/images/Blood.svg';
import ArrowRight from '../../assets/images/ArrowRight.svg';
import ArrowLeft from '../../assets/images/ArrowLeft.svg';
import syringe from '../../assets/images/syringe.svg';
import Group89 from '../../assets/images/Group89.svg';
import bandage from '../../assets/images/bandage.svg';
import ampoul from '../../assets/images/ampoul.svg';
import nurse from '../../assets/images/nurse.svg';
import Group90 from '../../assets/images/Group90.svg';
import Group91 from '../../assets/images/Group91.svg';
import Grou92 from '../../assets/images/Grou92.svg';
import Grou91 from '../../assets/images/Grou91.svg';
import Slider from '../Slider/Slider';
import PageHeader from '../PageHeader/PageHeader';
import logo from '../../assets/images/logo.svg';
import apple from '../../assets/images/apple.svg';
import moment from 'moment';
import { LOGIN_PAGE } from '../../router/paths';
import { useNavigate } from 'react-router-dom';
import geo from 'antd/es/locale/ka_GE';
import 'moment/locale/ka';
import FormItem from 'antd/lib/form/FormItem';
import { PageFooter } from '../footer/PageFooter';
import { SliderNika } from '../Slider copy/SliderNika';
import { PageFooterLogin } from '../footerLogin/PageFooterLogin';
import dayjs from 'dayjs';

const { Header, Footer, Content } = Layout;

export const PasswordRecovery = () => {
  const navigate = useNavigate();

  const loginError = useAppSelector(state => state.user.error);
  const loginLoading = useAppSelector(state => state.user.loading);
  const passwordRecoverySuccess = useAppSelector(
    state => state.user.passwordRecoverySuccess
  );
  const passwordRecoveryError = useAppSelector(
    state => state.user.passwordRecoveryError
  );

  const [state, setstate] = useState<{
    privateNumber: string;
    firstName: string;
    lastName: string;
    birthDate: any;
    password: string;
    smsCode: string;
    confirmedPassword: string;
  }>({
    privateNumber: '',
    firstName: '',
    lastName: '',
    birthDate: new Date(moment().format('yyyy-MM-DD')),
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
      message.success('შეიცვალა პაროლი!');
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
    setstate({ ...state, birthDate: dayjs(date).format('YYYY-MM-DD') });
  };

  const onChangeCarousel = (currentSlide: any) => {
    console.log(currentSlide);
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
      <div className="split left cancel-slider">
        <Layout style={{ minHeight: '100vh' }}>
          <br />
          <Content>
            <PageHeader />

            <Col className="marginAll">
              {/* <br /> */}

              <Row gutter={[0, 40]}>
                <Col
                  className="forMediaMarginePas"
                  //  style={{ width: '100%', margin: "auto", marginTop: "10px" }}
                  xs={22}
                  sm={20}
                  md={16}
                  lg={16}
                  xl={16}
                  xxl={14}
                >
                  <div className="mainRecovery mainRecovery2">
                    <h3 className="titleRecovery">პაროლის აღდგენა</h3>
                    <Row>
                      <Form
                        style={{ width: '100%' }}
                        name="normal_registration"
                        layout="vertical"
                        initialValues={{
                          remember: true,
                        }}
                      >
                        <Row gutter={10}>
                          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <Form.Item
                              className="for-labelColor"
                              // label="პირადი ნომერი"
                              name="privateNumber"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Username!',
                                },
                              ]}
                            >
                              <div className="labelDivPrivate">პირადო ნომერი</div>
                              <Input
                                style={{ paddingLeft: '24px' }}
                                className="inputForLogin"
                                name="privateNumber"
                                onChange={e => changeState(e)}
                                suffix={<ContactsOutlined />}
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <Form.Item
                              // label="დაბადების თარიღი"
                              className="for-labelColor"
                            >
                              {' '}
                              <ConfigProvider locale={geo}>
                                <div className="labelDivDate">დაბადების თარიღი</div>
                                <DatePicker
                                  format="DD/MM/YYYY"
                                  name="birthDate"
                                  className="inputForLogin"
                                  onChange={changedate}
                                  // placeholder="დაბადების თარიღი"
                                  style={{
                                    // borderRadius: 8,
                                    // height: 30,
                                    maxWidth: '300px',
                                    width: '100%',
                                    paddingLeft: '24px',
                                  }}
                                />
                              </ConfigProvider>{' '}
                            </Form.Item>
                          </Col>
                        </Row>
                        {/* <Col xs={18} sm={14} md={14} lg={14} xl={18} xxl={14} style={{ margin: "auto" }}> */}

                        <Row gutter={10}>
                          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <Form.Item
                              className="for-labelColor"
                              name="firstName"
                              // label="სახელი"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Username!',
                                },
                              ]}
                            >
                              <div className="labelDiv">სახელი</div>
                              <Input
                                style={{ paddingLeft: '24px' }}
                                className="inputForLogin"
                                name="firstName"
                                onChange={e => changeState(e)}
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            {' '}
                            <Form.Item
                              className="for-labelColor"
                              name="lastName"
                              // label="გვარი"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Username!',
                                },
                              ]}
                            >
                              <div className="labelDiv">გვარი</div>
                              <Input
                                style={{ paddingLeft: '24px' }}
                                className="inputForLogin"
                                name="lastName"
                                onChange={e => changeState(e)}
                              />
                            </Form.Item>{' '}
                          </Col>
                        </Row>
                        {/* </Col> */}

                        {/* <Row gutter={10} className='for-column_500px'> */}
                        <Row gutter={10}>
                          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <Form.Item
                              className="for-labelColor"
                              name="password"
                              // label="პაროლი"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your password!',
                                },
                              ]}
                            >
                              <div className="labelDiv">პაროლი</div>
                              <Input.Password
                                style={{ paddingLeft: '24px' }}
                                className="inputForLogin"
                                name="password"
                                autoComplete="new-password"
                                prefix={
                                  <LockOutlined className="site-form-item-icon" />
                                }
                                onChange={e => changeState(e)}
                              />
                            </Form.Item>{' '}
                          </Col>
                          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <Form.Item
                              className="for-labelColor"
                              name="confirmedPassword"
                              // label="გაიმეორეთ პაროლი"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your password!',
                                },
                              ]}
                            >
                              <div className="labelDivRe">გაიმეორეთ პაროლი</div>
                              <Input.Password
                                className="inputForLogin "
                                name="confirmedPassword"
                                prefix={
                                  <LockOutlined className="site-form-item-icon" />
                                }
                                onChange={e => changeState(e)}
                              />
                            </Form.Item>
                          </Col>{' '}
                        </Row>

                        <Row gutter={10}>
                          {/* <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <Form.Item
                              className="for-labelColor"
                              label="ტელეფონის ნომერი"
                              name="privateNumber"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your Username!',
                                },
                              ]}
                            >
                              <Input
                                className="recoveryInput input"
                                name="privateNumber"
                                onChange={e => changeState(e)}
                              />
                            </Form.Item>
                          </Col> */}
                          <Col xs={18} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <Form.Item
                              // label="ერთჯერადი კოდი"
                              className="for-labelColor"
                            >
                              <Input.Group compact>
                                <div className='recCode'>ერთჯერადი კოდი</div>
                                <Input
                                  placeholder=" -&nbsp;-&nbsp;-&nbsp;-"
                                  maxLength={4}
                                  className="inputForLoginCode"
                                  name="smsCode"
                                  onChange={e => changeState(e)}
                                  prefix={
                                    <Tooltip>
                                      <SmsControlerForPasswordRecovery
                                        state={state}
                                      />
                                    </Tooltip>
                                  }
                                />
                              </Input.Group>
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Button className="backToRegistrationPage">
                              <a href={LOGIN_PAGE} className='avtLink'>ავტორიზაცია</a>
                            </Button>
                          </Col>
                          <Col
                            xs={12} sm={12} md={12} lg={12} xl={12}
                          >
                            <Form.Item className="for-labelColor">
                              <Button
                                loading={loginLoading}
                                type="primary"
                                htmlType="submit"
                                className="recoveryFormBtn"
                                onClick={OnClickPasswordRecoveryConfirm}
                              >
                                პაროლის ცვლილება
                              </Button>
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Content>
          <br />
          {/* <br /> */}

          {/* </div> */}
          {/* <PageFooterLogin /> */}
        </Layout>
      </div>
      <div className="split right carousel-main_container">
        <SliderNika />
      </div>
      {/* </Row> */}
    </>
  );
};
