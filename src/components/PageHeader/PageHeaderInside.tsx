import { Col, Row, Space } from 'antd';
import logo from '../../assets/images/logo.svg';
import React from 'react';
import './PageHeader.css';

const PageHeaderInside = () => {
  return (
    <Row className="marginForAllheader">
      <div className="spaceForResponse">
        <Col xl={2} lg={3} md={3} sm={3} xs={2} style={{ marginLeft: '45px' }}></Col>
      </div>
      <Col xs={1} sm={1} md={3} lg={12} xl={13}>
        <Space size={3} style={{ display: 'flex', alignItems: 'start' }}>
          <img style={{ cursor: 'pointer' }} alt="example" src={logo} width={30} /> &nbsp;
          <div className="logo-title_container">my.moh.gov.ge</div>
        </Space>
      </Col>
    </Row>
  );
};

export default PageHeaderInside;
