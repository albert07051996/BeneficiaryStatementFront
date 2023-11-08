import { Calendar, Col, Row } from 'antd';
import React from 'react';
import './RightContent.css';
import Rectangle from '..//../assets/images/Rectangle.svg';
import Group91 from '..//../assets/images/Group91.svg';
import Group92 from '..//..//assets/images/Group92.svg';

const RightContent = () => {
  return (
    <>
      <Col xs={24} sm={24} md={5} lg={7} xl={5} className="contentDisplay">
        <br /> <br /> <br />
        <div className="calendarTitle">სახელმწიფო პენსიის აღების პერიოდი</div>
        <br />
        <div className="calendar">
          <Calendar fullscreen={false} />{' '}
        </div>
        <br />
        <Row>
          <div className="imgsDiv">
            <div className="titleImg"> ბოლო სიახლეები</div> <br />
            <Col xs={24} sm={24} md={12} lg={12} xl={24}>
              <img src={Rectangle} alt="" className="colImg" />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={24}>
              <img src={Group91} alt="" className="colImg" />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={24}>
              <img src={Group92} alt="" className="colImg" />
            </Col>
          </div>
        </Row>
      </Col>
    </>
  );
};

export default RightContent;
