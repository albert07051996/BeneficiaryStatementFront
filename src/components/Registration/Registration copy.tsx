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
  ConfigProvider,
  Carousel,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser, confirmSignUp } from '../../redux/slices/userSlice';
import { UserDTO } from '../../types/UserDTO';
import { NavLink } from 'react-router-dom';
import './Registration.css';
import { ABOUT } from '../../router/paths';
// import { SmsControl } from '../SmsControler/SmsControl1'
import { SmsControlReg } from '../SmsControler/SmsControlReg';
import userEvent from '@testing-library/user-event';
import seo from '../../assets/images/seo.png';
import stamp from '../../assets/images/stamp.png';
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
import logo from '../../assets/images/logo.svg';
import Grou92 from '../../assets/images/Grou92.svg';
import Grou91 from '../../assets/images/Grou91.svg';
import Slider from '../Slider/Slider';
import PageHeader from '../PageHeader/PageHeader';
// import { PageFooter } from '../footer/PageFooter';
import apple from '../../assets/images/apple.svg';
import { Layout } from 'antd';
import { LOGIN_PAGE, LANDING_PAGE, HOME_PATH } from '../../router/paths';
import { useNavigate } from 'react-router-dom';
import geo from 'antd/es/locale/ka_GE';
import 'moment/locale/ka';
import FormItem from 'antd/lib/form/FormItem';
import { LoginPage } from '../../Pages/LoginPage copy';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const { Header, Footer, Content } = Layout;
export const Registration = () => {
  const loginError = useAppSelector(state => state.user.error);
  // const success = useAppSelector(state => state.user.success);
  const registrSuccess = useAppSelector(state => state.user.registrSuccess);
  const registrError = useAppSelector(state => state.user.registrError);
  const loginLoading = useAppSelector(state => state.user.loading);
  // const [userName, setUserName] = useState<any>(null);
  const [privateNumber, setPrivateNumber] = useState<any>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [birthday, setBirthday] = useState<any>();
  const [email, setEmail] = useState<any>();
  // const [documentNumber, setDocumentNumber] = useState<any>();
  const [actualAddress, setActualAddress] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [confirmedPassword, setConfirmedPassword] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [smsCode, setSmsCode] = useState<any>();
  const navigate = useNavigate();
  const [accessPersonalInformation1, setAccessPersonalInformation1] =
    useState<any>(false);
  const [iGotAcquaintedChecked, setIGotAcquaintedChecked] = useState<any>(false);

  const dispatch = useAppDispatch();

  const inputDateChange = (date: any, dateString: string) => {
    console.log('e inputDateChange', date, dateString);
    setBirthday(dateString);
  };

  useEffect(() => {
    if (loginError) {
      message.error(loginError);
    }
  }, [loginError]);

  useEffect(() => {
    Object.entries(registrError || {}).forEach(([key, value]) => {
      message.error(`${value}`);
    });
  }, [registrError]);

  useEffect(() => {
    if (registrSuccess) {
      message.success(`თქვენ წარმატებით დარეგისტრირდით`);
      navigate(LOGIN_PAGE);
    }
  }, [registrSuccess]);

  const onChangeCarousel = (currentSlide: any) => {
    console.log(currentSlide);
  };

  const registration = () => {
    const obj = {
      privateNumber: privateNumber,
      phoneNumber: phoneNumber,
      smsCode: smsCode,
    };
    dispatch(confirmSignUp(obj));
  };
  const handleAgree = () => {
    setAccessPersonalInformation1(true);
  };

  const handleCheckRegistration = (e: CheckboxChangeEvent) => {
    setIGotAcquaintedChecked(e.target.checked);
    console.log('checked');
  };

  return (
    // <>
    //     {accessPersonalInformation1 !== true ? (

    //         <div className="accept">
    //             <div>
    //                 <div className='regRuleTitle'>წესები და პირობები</div>
    //                 <br />

    //                 <div className='rulesText'>
    //                     ჩემი პირადი პროფილის გასახსნელად, მითითებული პირადი ინფორმაციის გადამოწმების მიზნით,<br />
    //                     დამუშავებული იქნას ჩემი პერსონალური მონაცემები, მათ შორის სხვა კომპეტენტური ადმინისტრაციული<br />
    //                     ორგანოს მიერ წარმოებულ ელექტრონულ ბაზებთან დადარებით.
    //                 </div>

    //             </div>
    //             <br />
    //             <button
    //                 className="submitRules"
    //                 onClick={handleAgree}
    //             >
    //                 თანახმა ვარ{" "}
    //             </button>
    //             <br />
    //             <br />
    //             <button
    //                 className="rulesBackToLog"
    //             // onClick=href
    //             >
    //                 <a href={LOGIN_PAGE} className='backToLogin'>
    //                     ავტორიზაციის გვერდზე დაბრუნება{" "}
    //                 </a>
    //             </button>
    //         </div>

    //     ) : (
    <>
      <div className="split left cancel-slider">
        <Layout
          className="height-for_1200px"
          style={{ background: '#E6EDFD', minHeight: '100vh' }}
        >
          <PageHeader />
          <br />
          <Content>
            {accessPersonalInformation1 !== true ? (
              <div
                className="accept"
                style={{ margin: 'auto', marginTop: '150px', marginBottom: '60px' }}
              >
                <div>
                  <div className="regRuleTitle">წესები და პირობები</div>
                  <br />

                  <div className="rulesText">
                    ჩემი პირადი პროფილის გასახსნელად, მითითებული პირადი ინფორმაციის
                    გადამოწმების მიზნით,
                    <br />
                    დამუშავებული იქნას ჩემი პერსონალური მონაცემები, მათ შორის სხვა
                    კომპეტენტური ადმინისტრაციული
                    <br />
                    ორგანოს მიერ წარმოებულ ელექტრონულ ბაზებთან დადარებით.
                  </div>
                </div>
                <br />
                <Checkbox
                  onChange={handleCheckRegistration}
                  className="checkBoxText"
                >
                  თანახმა ვარ
                </Checkbox>
                <br />
                <br />
                {iGotAcquaintedChecked === true && (
                  <Button className="rulesBtnReg" onClick={handleAgree}>
                    თანახმა ვარ{' '}
                  </Button>
                )}
                <br />

                <br />

                <button
                  className="rulesBackToLog"
                  // onClick=href
                >
                  <a href={LOGIN_PAGE} className="backToLogin">
                    ავტორიზაციის გვერდზე დაბრუნება{' '}
                  </a>
                </button>
              </div>
            ) : (
              <Row gutter={[0, 40]}>
                <ConfigProvider
                  locale={geo}
                  // dayValues={geo}
                >
                  <Col
                    style={{ width: '100%', margin: 'auto', marginTop: '10px' }}
                    xs={22}
                    sm={20}
                    md={16}
                    lg={16}
                    xl={16}
                    xxl={14}
                  >
                    <div className="main-reg-container">
                      <h1 className="registration-title title">რეგისტრაცია</h1>
                      <Row>
                        <Form
                          style={{ width: '100%' }}
                          layout="vertical"
                          name="normal_registration"
                          className=""
                          initialValues={{
                            remember: true,
                          }}
                          // onFinish={onFinish}
                        >
                          <Col
                            xs={18}
                            sm={14}
                            md={14}
                            lg={14}
                            xl={18}
                            xxl={18}
                            style={{ margin: 'auto', marginTop: '12px' }}
                          >
                            <Form.Item
                              className="for-labelColor"
                              label="პირადი ნომერი"
                              name="personalNumber"
                              rules={[
                                {
                                  required: true,
                                  message: 'მიუთითეთ პირადი ნომერი',
                                },
                              ]}
                            >
                              <Input
                                className="reg-input input"
                                // onChange={changePrivateName}
                                onChange={e => setPrivateNumber(e.target.value)}
                              />
                            </Form.Item>
                          </Col>
                          {/* <LocaleProvider locale={enUS}> */}

                          <Col
                            xs={18}
                            sm={14}
                            md={14}
                            lg={14}
                            xl={18}
                            xxl={18}
                            style={{ margin: 'auto' }}
                          >
                            <Row gutter={10}>
                              <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <Form.Item
                                  className="for-labelColor"
                                  label="სახელი*"
                                  name="FirstName"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'მიუთითეთ ',
                                    },
                                  ]}
                                >
                                  <Input
                                    className="reg-input input"
                                    onChange={e => setFirstName(e.target.value)}
                                  />
                                </Form.Item>{' '}
                              </Col>
                              <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <Form.Item
                                  className="for-labelColor"
                                  label="გვარი*"
                                  name="LastName"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'მიუთითეთ გვარი',
                                    },
                                  ]}
                                >
                                  <Input
                                    className="reg-input input"
                                    onChange={e => setLastName(e.target.value)}
                                  />
                                </Form.Item>{' '}
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            xs={18}
                            sm={14}
                            md={14}
                            lg={14}
                            xl={18}
                            xxl={18}
                            style={{ margin: 'auto' }}
                          >
                            <Row gutter={10}>
                              <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <ConfigProvider locale={geo}>
                                  {/* <div className="starting-data"> */}
                                  <FormItem
                                    label="დაბადების თარიღი"
                                    className="for-labelColor"
                                  >
                                    <DatePicker
                                      format="DD-MM-YYYY"
                                      className="datepicker input "
                                      onChange={inputDateChange}
                                      style={{
                                        // background: '#F4F6FA',
                                        borderRadius: 8,
                                        // border: 'none',
                                        height: 30,
                                      }}
                                    />{' '}
                                  </FormItem>

                                  {/* </div> */}
                                </ConfigProvider>{' '}
                              </Col>
                              {/* <br /> */}
                              <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <Form.Item
                                  className="for-labelColor"
                                  label="ელ.ფოსტა*"
                                  name="Email"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'მიუთითეთ ელ.ფოსტა',
                                    },
                                  ]}
                                >
                                  <Input
                                    className="reg-input input "
                                    onChange={e => setEmail(e.target.value)}
                                  />
                                </Form.Item>{' '}
                              </Col>
                            </Row>
                          </Col>

                          <Col
                            xs={18}
                            sm={14}
                            md={14}
                            lg={14}
                            xl={18}
                            xxl={18}
                            style={{ margin: 'auto', marginTop: '-12px' }}
                          >
                            <Form.Item
                              className="for-labelColor"
                              label="ფაქტობრივი მისამართი"
                              name="ActualAddress"
                              rules={[
                                {
                                  required: true,
                                  message: 'მიუთითეთ ფაქტიური მისამართი',
                                },
                              ]}
                            >
                              <Input
                                autoComplete="off"
                                className="reg-input input"
                                onChange={e => setActualAddress(e.target.value)}
                              />
                            </Form.Item>
                          </Col>
                          <Col
                            xs={18}
                            sm={14}
                            md={14}
                            lg={14}
                            xl={18}
                            xxl={18}
                            style={{ margin: 'auto' }}
                          >
                            <Row gutter={10} className="for-column_500px">
                              <Col
                                xs={12}
                                sm={24}
                                md={24}
                                lg={24}
                                xl={24}
                                xxl={12}
                                style={{ marginTop: '-12px' }}
                              >
                                {' '}
                                <Form.Item
                                  className="for-labelColor for-column_500px_input"
                                  label="პაროლი"
                                  name="password"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'მიუთითეთ პაროლი',
                                    },
                                  ]}
                                >
                                  <Input.Password
                                    prefix={
                                      <LockOutlined className="site-form-item-icon" />
                                    }
                                    autoComplete="new-password"
                                    className="reg-input input"
                                    onChange={e => setPassword(e.target.value)}
                                  />
                                </Form.Item>
                              </Col>
                              <Col
                                xs={12}
                                sm={24}
                                md={24}
                                lg={24}
                                xl={24}
                                xxl={12}
                                style={{ marginTop: '-12px' }}
                              >
                                <Form.Item
                                  className="for-labelColor"
                                  label="გაიმეორეთ პაროლი"
                                  name="confirmedPassword"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'გაიმეორეთ პაროლი',
                                    },
                                  ]}
                                >
                                  <Input.Password
                                    prefix={
                                      <LockOutlined className="site-form-item-icon" />
                                    }
                                    className="reg-input input for-column_500px_input"
                                    onChange={e =>
                                      setConfirmedPassword(e.target.value)
                                    }
                                  />
                                </Form.Item>
                              </Col>{' '}
                            </Row>
                          </Col>

                          {/* <Col xs={18} sm={14} md={14} lg={14} xl={18} xxl={14} style={{ margin: "auto" }}> */}

                          {/* <Row gutter={10} > */}
                          <Col
                            xs={18}
                            sm={14}
                            md={14}
                            lg={14}
                            xl={18}
                            xxl={18}
                            style={{ margin: 'auto' }}
                          >
                            <Row gutter={10} className="for-column_500px">
                              <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <Form.Item
                                  className="for-labelColor"
                                  label="მობილური"
                                  name="Mobile"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'მიუთითეთ მობილურის ნომერი',
                                    },
                                  ]}
                                >
                                  <Input
                                    className="reg-input input mobileNumber"
                                    onChange={e => setPhoneNumber(e.target.value)}
                                  />
                                </Form.Item>
                              </Col>
                              <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <Form.Item
                                  className="for-labelColor"
                                  label="sms კოდი"
                                  name=""
                                  // rules={[
                                  //     {
                                  //         required: true,
                                  //         message: 'მიუთითეთ მობილურის ნომერი',
                                  //     },
                                  // ]}
                                >
                                  <Input.Group compact>
                                    <Input
                                      maxLength={4}
                                      className="reg-inputSms input sms-input"
                                      name="smsCode"
                                      onChange={e => setSmsCode(e.target.value)}
                                      prefix={
                                        <Tooltip>
                                          <SmsControlReg
                                            privateNumber={privateNumber}
                                            firstName={firstName}
                                            lastName={lastName}
                                            password={password}
                                            birthday={birthday}
                                            email={email}
                                            // actualAddress={actualAddress}
                                            confirmedPassword={confirmedPassword}
                                            phoneNumber={phoneNumber}
                                            accessPersonalInformation1={
                                              accessPersonalInformation1
                                            }
                                          />
                                        </Tooltip>
                                      }
                                    />
                                  </Input.Group>
                                </Form.Item>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            xs={18}
                            sm={14}
                            md={14}
                            lg={14}
                            xl={18}
                            xxl={14}
                            style={{ margin: 'auto' }}
                          >
                            <Form.Item className="for-labelColor">
                              {iGotAcquaintedChecked === true && (
                                <Button
                                  style={{ borderRadius: '10px' }}
                                  loading={loginLoading}
                                  type="primary"
                                  htmlType="submit"
                                  className="registration-form-button"
                                  onClick={registration}
                                >
                                  რეგისტრაცია
                                </Button>
                              )}
                            </Form.Item>
                          </Col>
                          <div className="backToLogin">
                            <a href={LOGIN_PAGE} className="backToLogin">
                              ავტორიზაციის გვერდზე დაბრუნება
                            </a>
                          </div>
                        </Form>
                      </Row>
                    </div>
                  </Col>
                </ConfigProvider>
              </Row>
            )}
          </Content>

          {/* <PageFooter /> */}
        </Layout>
      </div>
      <div className="split right carousel-main_container">
        <Slider />
      </div>
    </>
    // )}
    // </>
  );
};
