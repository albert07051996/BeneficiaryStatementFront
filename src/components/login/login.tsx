import {
  LockOutlined,
  UserOutlined,
  RightOutlined,
  WindowsFilled,
} from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Form,
  Input,
  message,
  DatePicker,
  Col,
  Row,
  Card,
  Space,
  Tooltip,
  Carousel,
  Dropdown,
  Radio,
  RadioChangeEvent,
} from 'antd';
import React, { useEffect, useState, useRef, createRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser } from '../../redux/slices/userSlice';
import { UserDTO } from '../../types/UserDTO';
import { NavLink } from 'react-router-dom';
import './login.css';
import { Layout } from 'antd';
import {
  ABOUT,
  REGISTRATION_PAGE,
  MOBILEUPDATE_PAGE,
  PASSWORDRECOVERY_PAGE,
  LANDING_PAGE,
} from '../../router/paths';
import { SmsControl } from '../SmsControler/SmsControl1';
import userEvent from '@testing-library/user-event';
import Meta from 'antd/lib/card/Meta';
import Avatar from 'antd/lib/avatar/avatar';
import seo from '../../assets/images/seo.png';
import stamp from '../../assets/images/stamp.png';
import medicalHistory from '../../assets/images/medical-history.svg';
import ribbon from '../../assets/images/ribbon.svg';
import virus from '../../assets/images/virus.svg';
import applelogo from '../../assets/images/applelogo.png';
import playstore from '../../assets/images/playstore.svg';
import Vector1 from '../../assets/images/Vector1.svg';
import Blood from '../../assets/images/Blood.svg';
import syringe from '../../assets/images/syringe.svg';
import Group89 from '../../assets/images/Group89.svg';
import bandage from '../../assets/images/bandage.svg';
import ampoul from '../../assets/images/ampoul.svg';
import nurse from '../../assets/images/nurse.svg';
import Sendfill from '../../assets/images/Sendfill.svg';
import Group90 from '../../assets/images/Group90.svg';
import Group91 from '../../assets/images/Group91.svg';
import Grou92 from '../../assets/images/Grou92.svg';
import userLabel from '../../assets/images/userLabel.svg';
import Grou91 from '../../assets/images/Grou91.svg';
import ArrowRight from '../../assets/images/ArrowRight.svg';
import ArrowLeft from '../../assets/images/ArrowLeft.svg';
import Ellipse from '../../assets/images/Ellipse.svg';
import bank from '../../assets/images/cbd5cb45-0509-4fc2-a89f-76895689bc04.png';
import thumb from '../../assets/images/thumb_1.png';
import Slider from '../Slider/Slider';
import PageHeader from '../PageHeader/PageHeader';
import apple from '../../assets/images/apple.svg';
import { PageFooterLogin } from '../footerLogin/PageFooterLogin';
import messenger from '../../assets/images/messenger.png';
import { useNavigate } from 'react-router-dom';
import FormItem from 'antd/lib/form/FormItem';
import { APIID } from '../../constants';
import jandacva from '../../assets/images/jandacva.png';
import { SliderNika } from '../Slider copy/SliderNika';
// import gamarjoba from '../../assets/images/2.mp3'
const { Header, Footer, Sider, Content } = Layout;

export const Login = () => {
  // let audio = new Audio("/gamarjoba.mp3")
  const loginError = useAppSelector(state => state.user.error);
  const loginLoading = useAppSelector(state => state.user.loading);
  const [password, setPassword] = useState<any>(null);
  const [userName, setUserName] = useState<any>(null);
  const [smsCode, setSmsCode] = useState<any>(null);
  const userSuccess = useAppSelector(state => state.user.userSuccess);
  const LoginError = useAppSelector(state => state.user.error);
  const token = localStorage.getItem('accesstoken');
  const [radioValue, setRadioValue] = useState(1);

  const onRadioChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRadioValue(e.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const changeSmsCod = (e: any) => {
    // console.log(e.target.value, 'e')
    setSmsCode(e.target.value);
  };

  useEffect(() => {
    console.log('თავიდაN', token);
    if (token) {
      navigate(LANDING_PAGE);
      console.log('წაშლა');
    }
  }, []);

  useEffect(() => {
    if (token) {
      navigate(LANDING_PAGE);
    }
  }, [token]);

  useEffect(() => {
    Object.entries(LoginError || {}).forEach(([key, value]) => {
      message.error(`${value}`);
    });
  }, [LoginError]);

  // const hoverEnter =()=>{
  //   new Audio(gamarjoba).play();
  //   gamarjoba.play()

  // }
  const onFinish = () => {
    // new Audio(gamarjoba).play();

    const obj = {
      userName: userName,
      smsCode: smsCode,
    };
    dispatch(loginUser(obj));
    
  };

  const changeUserName = (e: any) => {
    setUserName(e.target.value);
   

  };
  const changePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onChangeCarousel = (currentSlide: any) => {
    console.log(currentSlide);
  };
  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();
  const ref4 = useRef<any>();

  // const ref = createRef<any>()

  const prev4 = () => {
    console.log(ref4, 'ref');
    ref4.current?.prev();
  };

  const next4 = () => {
    console.log(ref4, 'ref');
    ref4.current?.next();
  };

  const prev3 = () => {
    console.log(ref3, 'ref');
    ref3.current?.prev();
  };

  const next3 = () => {
    console.log(ref3, 'ref');
    ref3.current?.next();
  };

  const prev2 = () => {
    console.log(ref2, 'ref');
    ref2.current?.prev();
  };

  const next2 = () => {
    console.log(ref2, 'ref');
    ref2.current?.next();
  };
  const prev1 = () => {
    console.log(ref1, 'ref');
    ref1.current?.prev();
  };

  const next1 = () => {
    console.log(ref1, 'ref');
    ref1.current?.next();
  };

  return (
    <>
      <div className="split left cancel-slider">
        <Layout style={{ minHeight: '100vh' }}>
          <br />
          <Content>
            <PageHeader />
            <br />
            <Col className="marginAll">
              <Row gutter={[0, 40]}>
                <Col
                  xs={18}
                  sm={14}
                  md={14}
                  lg={14}
                  xl={12}
                  xxl={12}
                  className="forMediaMargineLog"
                  //  style={{ margin: "auto", marginTop: "60px", marginBottom: "60px" }}
                >
                  <div className="main_login_container" style={{ width: '100%' }}>
                    <div className="mainlogin">
                      <Row>
                        <Col
                          xs={24}
                          sm={24}
                          md={24}
                          lg={24}
                          xl={24}
                          // className="marginAll"
                        >
                          <h1 className="Logintitle">ავტორიზაცია</h1>
                        </Col>
                      </Row>
                      <Form
                        layout="vertical"
                        name="normal_login"
                        initialValues={{
                          remember: true,
                        }}
                      >
                        <Row>
                          <Col
                            xs={24}
                            sm={24}
                            md={24}
                            lg={24}
                            xl={24}
                            // className="marginAll"
                          >
                            <Radio.Group
                              onChange={onRadioChange}
                              value={radioValue}
                              style={{ marginTop: '21px' }}
                            >
                              <Radio value={1} className="radioBtn">
                                იურიდიული პირი
                              </Radio>
                              <Radio value={2} className="radioBtn2">
                                ფიზიკური პირი
                              </Radio>
                            </Radio.Group>

                            <Form.Item
                              className="for-labelColor"
                              // label="მომხმარებელი"
                              name="userName"
                              rules={[
                                {
                                  // required: true,
                                  message: 'Please input your Username!',
                                },
                              ]}
                            >
                              <div className="labelDiv">მომხმარებელი</div>
                              <Input
                                style={{ paddingLeft: '24px' }}
                                className="inputForLogin"
                                // placeholder="მომხმარებელი"
                                onChange={e => changeUserName(e)}
                                suffix={<UserOutlined style={{color:'rgba(5, 28, 125, 0.1)'}}/>}
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            xs={24}
                            sm={24}
                            md={24}
                            lg={24}
                            xl={24}
                            // className="marginAll"
                          >
                            <Form.Item
                              className="for-labelColor"
                              name="password"
                              rules={[
                                {
                                  // required: true,
                                  message: 'Please input your Password!',
                                },
                              ]}
                            >
                              <div className="labelDiv">პაროლი</div>
                              <Input.Password
                                style={{ paddingLeft: '24px' }}
                                // placeholder="პაროლი"
                                className="inputForLogin"
                                onChange={e => changePassword(e)}
                              />
                            </Form.Item>
                            <Form.Item>
                              <a
                                className="passwordRecoveryLink"
                                href={PASSWORDRECOVERY_PAGE}
                              >
                                დაგავიწყდა პაროლი?
                              </a>
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            xs={24}
                            sm={24}
                            md={24}
                            lg={24}
                            xl={24}
                            // className="marginAll"
                          >
                            <Col xs={24} sm={24} md={18} lg={16} xl={16}>
                              <Input.Group compact>
                                <FormItem
                                  className="for-labelColor"
                                  // label="ერთჯერადი კოდი"
                                >
                                  <div className='forCodeT'>ერთჯერადი კოდი</div>
                                  <Input
                                    placeholder="&nbsp; -&nbsp;-&nbsp;-&nbsp;-"
                                    className="codeInputForLogin"
                                    maxLength={4}
                                    onChange={e => changeSmsCod(e)}
                                    prefix={
                                      <Tooltip>
                                        <SmsControl
                                          password={password}
                                          userName={userName}
                                        />
                                      </Tooltip>
                                    }
                                  />
                                </FormItem>
                              </Input.Group>
                            </Col>
                          </Col>
                        </Row>
                        {/* <br /> */}
                        <Row>
                          <Col
                            xs={24}
                            sm={24}
                            md={24}
                            lg={24}
                            xl={24}
                            // className="marginAll"
                          ></Col>
                        </Row>
                        <Row>
                          <Col
                            xs={24}
                            sm={24}
                            md={24}
                            lg={24}
                            xl={24}
                            // className="marginAll"
                          >
                            <Form.Item>
                              <Row gutter={[16, 20]}>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                  <Button
                                    className="toRegPage"
                                    href={REGISTRATION_PAGE}
                                  >
                                   გაიარე რეგისტრაცია
                                  </Button>{' '}
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                  <Button
                                    loading={loginLoading}
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    onClick={onFinish}
                                    // onMouseOver={hoverEnter}
                                  >
                                    შესვლა
                                  </Button>{' '}
                                </Col>
                              </Row>
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            xs={24}
                            sm={24}
                            md={24}
                            lg={24}
                            xl={24}
                            // className="marginAll"
                          ></Col>
                        </Row>
                      </Form>
                    </div>
                  </div>
                </Col>
                {/* <Col xs={24} sm={24} md={18} lg={12} xl={16} >
                  <Row gutter={[0, 40]}>
                    <Col span={24} style={{ width: 300 }}>
                    </Col>
                  </Row>
                </Col> */}
              </Row>
            </Col>
            {/* </div> */}
          </Content>
          <br />

          {/* </div> */}
          {/* <PageFooterLogin /> */}
        </Layout>
      </div>
      <div className="split right carousel-main_container">
        <SliderNika />
      </div>
    </>
  );
};
