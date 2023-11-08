import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import './BranchesAndDebtor.css';
import {  RadioChangeEvent } from 'antd';


export const BranchesAndDebtor2 = () => {
  const identityNumberTestUser = '10139242';
  const [value, setValue] = useState(1);
  let debtor = false;
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <Row gutter={[16, 16]}>
          <Col xl={24} xs={24}>
            <div className="debtorCardWrapper">
              <Card bordered={false}>
                <div className="docRulesAlert">შენიშვნა !</div>

                <h2 className="debtorInfoText">
                აღნიშნული მოქმედება გამოიწყვევს თქვენი გასაცემელის შეწყვეტას
                </h2>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
