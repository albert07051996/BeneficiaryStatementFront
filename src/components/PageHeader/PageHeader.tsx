import { Col, Row, Space, Button, Dropdown, message, Switch } from 'antd';
import logo from '../../assets/images/logo.svg';
import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './PageHeader.css';
import { useNavigate } from 'react-router';
import { LOGIN_PAGE } from '../../router/paths';

const handleMenuClick: MenuProps['onClick'] = e => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
  },
]

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const PageHeader = () => {
  const navigate = useNavigate();

  const toLoginPage = () => {
  navigate(LOGIN_PAGE)
}

  return (
    <Row>
      <Col xl={2} lg={3} md={3} sm={3} xs={2}></Col>
      <Col xs={14} sm={12} md={12} lg={12} xl={13} onClick={toLoginPage}>
        <Space size={3}>
          <img style={{ cursor: 'pointer', marginRight:'16px' }} alt="example" src={logo} width={40} />
          <div className="logo-title_container">My.moh.gov.ge</div>
        </Space>
      </Col>

      <Col
        xs={8}
        sm={6}
        md={6}
        lg={6}
        xl={7}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',fontFamily:'firaGO' }}
      >
       GEO<Switch className='headerSwitch'/>ENG
      </Col>
      <Col xl={2} lg={3} md={3} sm={3} xs={2}></Col>
    </Row>
  );
};

export default PageHeader;
