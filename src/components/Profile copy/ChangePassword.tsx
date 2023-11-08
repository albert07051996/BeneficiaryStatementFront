import { Button, Col, Form, Input, Row, Tooltip, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SmsControlerForPasswordRecovery } from '../PasswordRecovery/SmsControler/SmsControlerForPasswordRecovery';
import { confirmPasswordRecovery, resetOasswordRecoverySuccess } from '../../redux/slices/userSlice';
import { LOGIN_PAGE } from '../../router/paths';
import { useNavigate } from 'react-router';
import moment from 'moment';


export const ChangePassword = () => {
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
    <div className='pt65' >
      <Form
        // form={form}
        scrollToFirstError
        name='changePasswordForm'
        // onFinish={onFinish}
        colon={false}
      >
        <Row gutter={[16, 32]}>
          <Col xxl={3} xl={3} md={3}></Col>
          <Col xxl={9} xl={9} md={9}>
            <div className='columnFlex'>
              <label className='profileInfoLabel'>ახალი პაროლი</label>
              <Form.Item
                required
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'არასწორი ფორმატი!',
                  },
                ]}

              >
                <Input
                  placeholder='ახალი პაროლი'
                  name='confirmedPassword'
                  onChange={e => changeState(e)}

                />
              </Form.Item>
            </div>
          </Col>
          <Col xxl={9} xl={9} md={9}>
            <div className='columnFlex'>
              <label className='profileInfoLabel'>გაიმეორე პაროლი</label>
              <Form.Item
                required
                name='confirmPassword'

                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: 'პაროლები არ ემთხვევა ერთმანეთს!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('პაროლები არ ემთხვევა ერთმანეთს!'));
                    },
                  }),
                ]}
              >
                <Input placeholder='გაიმეორე პაროლი'
                  name='password'
                  onChange={e => changeState(e)}


                />
              </Form.Item>
            </div>
          </Col>
          <Col xxl={3} xl={3} md={3}></Col>
        </Row>
        <Row  className='mt24'>
          <Col xxl={3} xl={3} md={3}></Col>
          <Col className='smsForProfilePassWrapper' xxl={9} xl={9} md={9}>
            <Input.Group compact className='smsForProfilePass'>
              <div className=' profileInfoLabel'>ერთჯერადი კოდი</div>
              <Input
                className="smsInputPassChange"
                placeholder='----'
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
          <Col xxl={3} xl={3} md={3}></Col>
        </Row>
        <div className='horizontal-center mt24'>
          <Form.Item
          >
            <Button
              htmlType='submit'
              className='savebtnPassChange'
              onClick={OnClickPasswordRecoveryConfirm}
            >
              შენახვა
            </Button>
          </Form.Item>
        </div>
      </Form>

    </div>
  )
}
