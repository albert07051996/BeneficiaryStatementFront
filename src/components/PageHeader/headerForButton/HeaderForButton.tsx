import { Col, Row, Space } from 'antd';
import logo from '../../../assets/images/logo.svg';
import React from 'react';
import './HeaderForButton.css';

const HeaderForButton = () => {
  return (
    <div className="HeaderForButton">
      <Row className="marginForAllheader">
        {/* <div className="spaceForResponse"> */}
        <Col
          xl={2}
          lg={3}
          md={3}
          sm={3}
          xs={2}
          style={{ marginLeft: '5px', marginBottom: '12px' }}
        ></Col>
        {/* </div> */}
        <Col xs={1} sm={1} md={3} lg={12} xl={13} style={{ alignItems: 'center' }}>
          <Space size={3} style={{ display: 'flex', alignItems: 'end' }}>
            <img
              style={{ cursor: 'pointer', marginTop: '4px' }}
              alt="example"
              src={logo}
              width={30}
            />
            <div className="logo-title_container2">My.moh.gov.ge</div>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderForButton;
