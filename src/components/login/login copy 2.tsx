import { LockOutlined, UserOutlined, RightOutlined, WindowsFilled } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message, DatePicker, Col, Row, Card, Space, Tooltip, Carousel } from 'antd';
import React, { useEffect, useState, useRef, createRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser } from '../../redux/slices/userSlice';
import { UserDTO } from '../../types/UserDTO';
import { NavLink } from 'react-router-dom';
import './login.css';
import { Layout } from 'antd';
import { ABOUT, REGISTRATION_PAGE, MOBILEUPDATE_PAGE, PASSWORDRECOVERY_PAGE, LANDING_PAGE } from '../../router/paths';
import { SmsControl } from '../SmsControler/SmsControl1'
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
import Vector1 from '../../assets/images/Vector1.svg'
import Blood from '../../assets/images/Blood.svg'
import syringe from '../../assets/images/syringe.svg'
import Group89 from '../../assets/images/Group89.svg'
import bandage from '../../assets/images/bandage.svg'
import ampoul from '../../assets/images/ampoul.svg'
import nurse from '../../assets/images/nurse.svg'
import Group90 from '../../assets/images/Group90.svg'
import Group91 from '../../assets/images/Group91.svg'
import Grou92 from '../../assets/images/Grou92.svg'
import logo from '../../assets/images/logo.svg'
import Grou91 from '../../assets/images/Grou91.svg'
import ArrowRight from '../../assets/images/ArrowRight.svg'
import ArrowLeft from '../../assets/images/ArrowLeft.svg'
import apple from '../../assets/images/apple.svg';
import { PageFooter } from '../../components/footer/PageFooter';
import messenger from '../../assets/images/messenger.png';
import { useNavigate } from 'react-router-dom';
import FormItem from 'antd/lib/form/FormItem';
import { APIID } from '../../constants';
import jandacva from '../../assets/images/jandacva.png';



const { Header, Footer, Sider, Content } = Layout;

export const Login = () => {
  const loginError = useAppSelector(state => state.user.error);
  const loginLoading = useAppSelector(state => state.user.loading);
  const [password, setPassword] = useState<any>(null);
  const [userName, setUserName] = useState<any>(null);
  const [smsCode, setSmsCode] = useState<any>(null);
  const userSuccess = useAppSelector(state => state.user.userSuccess);
  const LoginError = useAppSelector(state => state.user.error);
  const token = localStorage.getItem('accesstoken');


  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const changeSmsCod = (e: any) => {
    // console.log(e.target.value, 'e')
    setSmsCode(e.target.value)
  }



  useEffect(() => {
    console.log("თავიდაN", token)
    if (token) {
      navigate(LANDING_PAGE)
      console.log("წაშლა")
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


  const onFinish = () => {
    const obj = {
      userName: userName,
      smsCode: smsCode
    };
    dispatch(loginUser(obj));
  }

  const changeUserName = (e: any) => {
    setUserName(e.target.value)
  }
  const changePassword = (e: any) => {
    setPassword(e.target.value)
  }

  const onChangeCarousel = (currentSlide: any) => {
    console.log(currentSlide);
  };
  const ref1 = useRef<any>()
  const ref2 = useRef<any>()
  const ref3 = useRef<any>()
  const ref4 = useRef<any>()


  // const ref = createRef<any>()

  const prev4 = () => {
    console.log(ref4, 'ref')
    ref4.current?.prev()
  }

  const next4 = () => {
    console.log(ref4, 'ref')
    ref4.current?.next()
  }

  const prev3 = () => {
    console.log(ref3, 'ref')
    ref3.current?.prev()
  }

  const next3 = () => {
    console.log(ref3, 'ref')
    ref3.current?.next()
  }

  const prev2 = () => {
    console.log(ref2, 'ref')
    ref2.current?.prev()
  }

  const next2 = () => {
    console.log(ref2, 'ref')
    ref2.current?.next()
  }
  const prev1 = () => {
    console.log(ref1, 'ref')
    ref1.current?.prev()
  }

  const next1 = () => {
    console.log(ref1, 'ref')
    ref1.current?.next()
  }

  return (
    <>

      <Layout style={{ minHeight: "100vh" }}>

        <br />

        <Content>
          <Row >

            <Col xs={24} sm={5} md={6} lg={6} xl={6} style={{ marginLeft: "100px" }}>

              <Space size={3}>

                <img
                  alt="example"
                  src={logo}
                  width={60}

                />
                <div>    My.moh.gov.ge </div>
              </Space>
            </Col>
          </Row>
          <br />

          {/* <div className="main-login-wrapper"> */}
          <Row gutter={[0, 40]}>
            <Col xs={24} sm={5} md={6} lg={6} xl={6} style={{ marginLeft: "90px", marginTop: "72px" }}>
              <div style={{ width: "90%" }}>
                <div className='mainlogin' >
                  <h1 className='title'>ავტორიზაცია</h1>
                  <Form
                    layout="vertical"
                    name="normal_login"
                    // className="login-form"
                    initialValues={{
                      remember: true,
                    }}
                  // onFinish={onFinish}
                  >

                    <Form.Item
                      label='მომხმარებელი'
                      name="userName"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Username!',
                        },
                      ]}
                    >
                      <Input
                        className='input'
                        placeholder="მომხმარებელი"
                        onChange={(e) => changeUserName(e)}
                      />
                    </Form.Item>
                    <Row gutter={10}>
                      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Item
                          label='პაროლი'
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Password!',
                            },
                          ]}
                        >
                          <Input.Password
                            placeholder="პაროლი"
                            className='input'
                            onChange={(e) => changePassword(e)} />
                        </Form.Item>
                      </Col></Row>
                    <Input.Group compact>
                      <FormItem label='SMS კოდი'>

                        <Input
                          className='input codeInput'
                          maxLength={4}
                          onChange={(e) => changeSmsCod(e)}

                          style={{ textAlign: 'center', paddingLeft: '30px' }}

                        />
                        <SmsControl password={password} userName={userName} />
                      </FormItem>

                    </Input.Group>
                    <br />
                    <Form.Item>
                      <a href={PASSWORDRECOVERY_PAGE}>
                        პაროლის აღდგენა...
                      </a>

                    </Form.Item>
                    <Form.Item>
                      <Button
                        loading={loginLoading}
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        onClick={onFinish}
                      >
                        შესვლა
                      </Button>
                    </Form.Item>
                    <a
                      href={REGISTRATION_PAGE}
                    >
                      გაიარე რეგისტრაცია
                    </a>
                  </Form>
                </div>
              </div >
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={16}>


              <Row gutter={[0, 40]}>
                <Col span={8}>
                  <Input className='searchMedicament' style={{ background: "#FFFF" }}
                  // className='otherTerminationReason'
                  // name='otherTerminationReason'
                  // onChange={(e) => changeState(e)}
                  />
                </Col>
                <Col span={24} style={{ width: 300 }}>
                  {/* <Card style={{ border: '1px solid #FFFF', borderRadius: '20px', backgroundColor: '#FFFF', width: '100%', margin: 'auto' }}> */}
                  <div style={{ margin: 'auto' }}>
                    <div className='card1'>
                      <div className='cardTitle'> ჯანდაცვის სერვისები
                        <Button onClick={prev1} ><img src={ArrowRight} /></Button>
                        <Button onClick={next1} ><img src={ArrowLeft} alt="" /></Button>
                      </div>
                    </div>
                    <div className='card2'>
                      <div className='cardTitle'> ჯანდაცვის სერვისები
                        <Button onClick={prev2} ><img src={ArrowRight} /></Button>
                        <Button onClick={next2} ><img src={ArrowLeft} alt="" /></Button>
                      </div>
                    </div>
                    <div className='card3'>
                      <div className='cardTitle'> ჯანდაცვის სერვისები
                        <Button onClick={prev3} ><img src={ArrowRight} /></Button>
                        <Button onClick={next3} ><img src={ArrowLeft} alt="" /></Button>
                      </div>
                    </div>
                    <div className='card4'>
                      <div className='cardTitle'> ჯანდაცვის სერვისები
                        <Button
                          onClick={prev4} ><img src={ArrowRight} /></Button>
                        <Button onClick={next4} ><img src={ArrowLeft} alt="" /></Button>
                      </div>
                    </div>
                    <div className='card4'>
                      <Carousel slidesToShow={4} slidesToScroll={4} ref={ref4}
                        // autoplay draggable
                        arrows={true}>

                        <div ><Card className='loginCards' style={{ backgroundImage: "" }}><img className='cardImg1' src={Blood} alt="example" /> <div className='textCenter'> ჯანდაცვის სერვისები</div></Card></div>

                        <div ><Card className='loginCards'><img className='cardImg2' src={medicalHistory} alt="example" /> <div className='textCenter'> 	სოციალური სერვისები </div></Card></div>
                        <div ><Card className='loginCards'><img className='cardImg3' src={ribbon} alt="example" /> <div className='textCenter'> 	დასაქმება</div></Card></div>
                        <div ><Card className='loginCards'><img className='cardImg3' src={virus} alt="example" /> <div className='textCenter'> 	მიღებული დაფინანსებები</div> </Card></div>
                        <div ><Card className='loginCards'><div className='textCenter'> 	5	სამედიცინო კლინიკების შესახებ ინფორმაცია</div> </Card></div>

                      </Carousel>
                    </div>


                    <div className='card3'>
                      <Carousel afterChange={onChangeCarousel} slidesToShow={3} slidesToScroll={3} draggable ref={ref3}
                        arrows={true}>

                        <div ><Card className='loginCards'><img className='cardImg1' src={Blood} alt="example" /> <div className='textCenter'> ჯანდაცვის სერვისები</div></Card></div>
                        <div ><Card className='loginCards'><img className='cardImg2' src={medicalHistory} alt="example" /> <div className='textCenter'> სოციალური სერვისები</div></Card></div>
                        <div ><Card className='loginCards'><img className='cardImg3' src={ribbon} alt="example" /> <div className='textCenter'>	დასაქმება</div> </Card></div>
                        <div ><Card className='loginCards'><img className='cardImg3' src={virus} alt="example" /> <div className='textCenter'> 	მიღებული დაფინანსებები</div> </Card></div>
                        <div ><Card className='loginCards'><div className='textCenter'> 	5	სამედიცინო კლინიკების შესახებ ინფორმაცია</div> </Card></div>

                      </Carousel>
                    </div>

                    <div className='card2'>
                      <Carousel afterChange={onChangeCarousel} slidesToShow={2} slidesToScroll={2} draggable ref={ref2}
                        arrows={true}>

                        <div ><Card className='loginCards'><img className='cardImg1' src={Blood} alt="example" /> <div className='textCenter'> ჯანდაცვის სერვისები</div></Card></div>
                        <div ><Card className='loginCards'><img className='cardImg2' src={medicalHistory} alt="example" /> <div className='textCenter'>	სოციალური სერვისები</div> </Card></div>
                        <div ><Card className='loginCards'><img className='cardImg3' src={ribbon} alt="example" /> <div className='textCenter'> 	დასაქმება</div></Card></div>
                        <div ><Card className='loginCards'><img className='cardImg3' src={virus} alt="example" /> <div className='textCenter'> 	მიღებული დაფინანსებები</div> </Card></div>
                        <div ><Card className='loginCards'><div className='textCenter'> 	5	სამედიცინო კლინიკების შესახებ ინფორმაცია</div> </Card></div>

                      </Carousel>
                    </div>


                    <div className='card1'>
                      <Carousel afterChange={onChangeCarousel} slidesToShow={1} slidesToScroll={1} draggable ref={ref1}
                        arrows={true}>

                        <div ><Card className='loginCards'><img className='cardImg1' src={Blood} alt="example" /> <div className='textCenter'> ჯანდაცვის სერვისები</div></Card></div>
                        <div ><Card className='loginCards'><img className='cardImg2' src={medicalHistory} alt="example" /> <div className='textCenter'>	სოციალური სერვისები</div> </Card></div>
                        <div ><Card className='loginCards'><img className='cardImg3' src={ribbon} alt="example" /> <div className='textCenter'>	დასაქმება</div> </Card></div>
                        <div ><Card className='loginCards'><img className='cardImg3' src={virus} alt="example" /> <div className='textCenter'>  	მიღებული დაფინანსებები</div></Card></div>
                        <div ><Card className='loginCards'><div className='textCenter'> 	5	სამედიცინო კლინიკების შესახებ ინფორმაცია</div> </Card></div>

                      </Carousel>
                    </div>
                  </div>
                  {/* </Card> */}
                </Col>
                {/* <Col span={24}> <Card style={{ border: '1px solid #FFFF', borderRadius: '20px', backgroundColor: '#FFFF', width: '100%' }}>
                  <div className='cardTitle'> ჯანდაცვის სერვისები <img src={ArrowRight} alt="" /> <img src={ArrowLeft} alt="" /></div>
                  <Row gutter={[80, 20]}>

                    <Col><Card className='loginCards'><img className='cardImg1' src={syringe} alt="example" /> <br /> ბენეფიციარის პაკეტი</Card></Col>
                    <Col><Card className='loginCards'><img className='cardImg2' src={bandage} alt="example" /> <br /> სამედიცინო ისტორია</Card></Col>
                    <Col><Card className='loginCard3'><img className='cardImg3' src={ampoul} alt="example" /> <br /> სკრინინგი</Card></Col>
                    <Col><Card className='loginCard3'><img className='cardImg3' src={nurse} alt="example" /> <br /> კოვიდ 19</Card></Col>


                  </Row>


                </Card></Col> */}
                {/* <Col span={24}> <Card style={{ border: '1px solid #FFFF', borderRadius: '20px', backgroundColor: '#FFFF', width: '100%' }}>
                  <div className='cardTitle'> ჯანდაცვის სერვისები <img src={ArrowRight} alt="" /> <img src={ArrowLeft} alt="" /></div>
                  <Row gutter={[80, 20]}>

                    <Col xs={24} sm={24} md={12} lg={6} xl={6}><img src={Group89} alt="example" /></Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}><img src={Group90} alt="example" /></Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}><img src={Grou91} alt="example" /></Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}><img src={Grou92} alt="example" /></Col>

                  </Row>
                </Card></Col> */}
              </Row>
            </Col>
          </Row>
          {/* </div> */}
        </Content>
        <br />

        {/* </div> */}
        <Footer className='LoginpageFooterNew'>
          <Row justify='center'>

            <Col xs={24} sm={3} md={6} lg={6} xl={6}>
              <div className='contact'>
                {/* <p>კონტაქტი</p>
                                    <p>0232 151 151</p>
                                    <p>info@moh.gov.ge</p> */}
              </div></Col>
            <Col xs={24} sm={7} md={6} lg={6} xl={6}>
              <p>გადმოიწერე მობაილ ვერსია</p>

              <Space>
                <img
                  alt="example"
                  src={playstore}
                  className="svgImg"
                />
                <img
                  alt="example"

                  src={apple}
                  className="svgImg"
                />
              </Space>
            </Col>
            <Col xs={24} sm={8} md={6} lg={6} xl={6}>
              <p>სიახლეების გამოწერა</p>
              <Input
                style={{ width: '50%', borderRadius: '20px', backgroundColor: '#e6edfd' }}
                placeholder="ელ.ფოსტა"
                suffix={
                  <Tooltip title="Extra information">
                    <RightOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
            </Col>
          </Row>
        </Footer>
      </Layout >

    </>
  );
};
