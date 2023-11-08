import { Calendar, Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import './BranchesAndDebtor.css';
import { RadioChangeEvent } from 'antd';
import es from 'antd/es/date-picker/locale/ka_GE';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import useWindowDimensions from '../../getWindowDimensions';

export const BranchesAndDebtor = () => {
  const identityNumberTestUser = '10139242';

  const [value, setValue] = useState(1);
  let debtor = false;

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const { height, width } = useWindowDimensions();

  return (
    <div>
      <div>
        <Row gutter={[16, 16]} className='mgt14' >
          <Col xl={24} xs={24}>
            <Card className="cardForCalendar">
             
              <Card bodyStyle={{width:'1200px !important'}}  className="cardForCard">
              <div className="calendarTop">
                <div className="calendarTopText">07-01-1998</div>
              </div>
              <Calendar locale={es} fullscreen={false} />{' '}
              </Card>
            </Card>
          </Col>
          <Col xl={24} xs={24}>
          <Card className="cardForCalendar">
        
              <div className="debtorCardWrapper">
                <Card bordered={false} className="cardMarginBottom">
                <div className="docRulesAlertIcon">                              
                  <ExclamationCircleOutlined 
                  className='iconForbran'
                              /></div>

                  <h2 className="debtorInfoText">
                    დადგენილ ვადაში (3 თვე) საჭირო დოკუმენტის წარმოუდგენლობის
                    შემთხვევაში, განცხადება დარჩება განუხილველი და განმეორებითი
                    მომართვის შემთხვევაში, განიხილება ახალი განცხადებისა და
                    დოკუმენტის რეგისტრაციის დღიდან.
                  </h2>
                </Card>
              </div>
          </Card>
          </Col>

        </Row>
      </div>
    </div>
  );
};
