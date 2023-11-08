import { Calendar, Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import './BranchesAndDebtor.css';
import { RadioChangeEvent } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import es from 'antd/es/date-picker/locale/ka_GE';

export const BranchesAndDebtorMiner = () => {
   const identityNumberTestUser = '10139242';
  const [value, setValue] = useState(1);
  let debtor = false;
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
 

  return (
    <div>
      <div className="mainCalendar">
        <Row gutter={[16, 16]}>
          <Col xl={24} xs={24}>
            <Card className="cardForCalendar">
              <div className="calendarTop">
                <div className="calendarTopText">07-01-1998</div>
              </div>
              <Calendar locale={es} fullscreen={false} />{' '}
            </Card>
          </Col>
          <Card className="cardForCalendar">
            <Col xl={24} xs={24}>
              <div className="debtorCardWrapper">
                <Card bordered={false} className="cardMarginBottom">
                  <div className="docRulesAlertIcon">
                    <ExclamationCircleOutlined className="iconForbran" />
                  </div>

                  <h2 className="debtorInfoText">
                    სოციალური დახმარების (მეშახტის) მისაღებად, უნდა გქონდეთ
                    მიწისქვეშა სამუშაოების შესრულებაზე 10 წლიანი სტაჟი
                  </h2>
                </Card>
              </div>
            </Col>          
          </Card>
        </Row>
      </div>
    </div>
  );
};
