import {
  LockOutlined,
  PhoneOutlined,
  RightOutlined,
  SettingOutlined,
  UnlockOutlined,
  UserOutlined,
} from '@ant-design/icons';
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
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser, confirmSignUp } from '../../redux/slices/userSlice';
import { UserDTO } from '../../types/UserDTO';
import { NavLink } from 'react-router-dom';
import './ProfileSider.css';
import { ABOUT } from '../../router/paths';
// import { SmsControl } from '../SmsControler/SmsControl1'
import { SmsControlReg } from '../SmsControler/SmsControlReg';
import userEvent from '@testing-library/user-event';
import seo from '../../assets/images/seo.png';
import stamp from '../../assets/images/stamp.png';
import vimeo from '../../assets/images/vimeo.png';
import playstore from '../../assets/images/playstore.svg';
import apple from '../../assets/images/apple.svg';
import Profile from '../../assets/images/Profile.svg';
import Unlock from '../../assets/images/Unlock.svg';
import Call from '../../assets/images/Call.svg';
import Setting from '../../assets/images/Setting.svg';
import { Layout } from 'antd';
import { LOGIN_PAGE, LANDING_PAGE } from '../../router/paths';
import { useNavigate } from 'react-router-dom';
import { MobileUpdateAfterLoggingPage } from '../../Pages/MobileUpdateAfterLoggingPage';
import { PasswordRecoveryAfterLoggingPage } from '../../Pages/PasswordRecoveryAfterLoggingPage';
import { ProfilePage } from '../../Pages/ProfilePage';
// import { PageFooter } from '../footer/PageFooter';

const { Footer } = Layout;
export const ProfileSider = () => {
  const person = useAppSelector(state => state.statment.personInfo);

  const navigate = useNavigate();

  const { TabPane } = Tabs;

  return (
    <>
      {/* <Card> */}
      <div className="mySider">
        <Tabs className="profileTabCard" tabPosition="left">
          <TabPane
            tab={
              // <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="profileBtn">
                <UserOutlined style={{ color: '#346DF2' }} /> &nbsp; პროფილი
              </div>
              // </Col>
            }
            key="1"
          >
            <ProfilePage />
          </TabPane>
          <TabPane
            tab={
              <div className="profileBtn">
                <UnlockOutlined style={{ color: '#346DF2' }} /> &nbsp; პაროლის
                ცვლილება
              </div>
            }
            key="2"
          >
            <PasswordRecoveryAfterLoggingPage />
          </TabPane>
          <TabPane
            tab={
              <div className="profileBtn">
                <PhoneOutlined style={{ color: '#346DF2' }} /> &nbsp; მობილურის
                ცვლილება
              </div>
            }
            key="3"
          >
            <MobileUpdateAfterLoggingPage />
          </TabPane>
          <TabPane
            tab={
              <div className="profileBtn">
                <SettingOutlined style={{ color: '#346DF2' }} /> &nbsp; პარამეტრები
              </div>
            }
            key="4"
          >
            პარამეტრები
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};
