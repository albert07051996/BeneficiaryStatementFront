import { Button, Col, Form, Input, Row, Tooltip, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SmsControlerForMobilUpdate } from '../MobileUpdateAfterLogging/SmsControler/SmsControlerForMobileUpdateAfterLogging';
import { useNavigate } from 'react-router';
import { updatePhoneNumberSuccessFalse } from '../../redux/slices/userSlice';
import { getPerson, updatePhoneNumber } from '../../redux/slices/steatmentSlice';
import { LOGIN_PAGE } from '../../router/paths';
import moment from 'moment';

export const ChangeMobileNumber = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate();
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
      if (updatePhoneNumberSuccess) {
        message.success('მობილური წარმატებით შეიცვალა');
        // navigate(LOGIN_PAGE);
        dispatch(updatePhoneNumberSuccessFalse());
  
        dispatch(getPerson());
        navigate(LOGIN_PAGE);
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
    console.log(state,'_staeae')
  
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
  
  

    return (
        <div className='pt65' >
            <Form
                form={form}
                scrollToFirstError
                name="normal_registration"
                // onFinish={onFinish}
                colon={false}
            >
                <Row gutter={[16, 32]}>
                    <Col xxl={3} xl={3} md={3}></Col>
                    <Col xxl={9} xl={9} md={9}>
                        <div className='columnFlex'>
                            <label className='profileInfoLabel'>პაროლი</label>
                            <Form.Item
                                required
                                name="password"

                                // rules={[
                                //     {
                                //         required: true,
                                //         message: 'მობილურის ნომრის შეყვანა სავალდებულოა',
                                //     },
                                // ]}
                            >
                                <Input
                                    placeholder='პაროლი'
                                    onChange={e => changeState(e)}
                                    name='password'
                                />
                            </Form.Item>
                        </div>

                    </Col>
                    <Col xxl={9} xl={9} md={9}>
                        <div className='columnFlex'>
                            <label className='profileInfoLabel'>ახალი მობილურის ნომერი</label>
                            <Form.Item
                                required
                                name="phoneNumber"
                                // rules={[
                                //     {
                                //         required: true,
                                //         message: 'მობილურის ნომრის შეყვანა სავალდებულოა',
                                //     },
                                // ]}
                            >
                                <Input
                                    placeholder='მობილურის ნომერი'
                                    onChange={e => changeState(e)}
                                    name='phoneNumber'

                                />
                            </Form.Item>
                        </div>
                    </Col>
                    <Col xxl={3} xl={3} md={3}></Col>
                </Row>
                <Row className='mt24'>
                <Col xxl={3} xl={3} md={3}></Col>
                <Col className='smsForProfilePassWrapper' xxl={9} xl={9} md={9}>
                        <Input.Group compact className='smsForProfilePass'>
                            <label className='profileInfoLabel'>ერთჯერადი კოდი</label>
                            <Input
                                placeholder='----'
                                className='smsInputPassChange'
                                name="smsCode"
                                maxLength={4}
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
                <div className='horizontal-center mt24'>
                    <Form.Item
                    >
                        <Button
                            htmlType='submit'
                            className='savebtnPassChange'
                            onClick={UpdateMobile}
                        >
                            შენახვა
                        </Button>
                    </Form.Item>
                </div>
            </Form>

        </div>
    )
}
