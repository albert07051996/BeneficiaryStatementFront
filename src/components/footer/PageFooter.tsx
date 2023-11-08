import React from 'react';
import './PageFooter.css';
import playstore from '../../assets/images/playstore.svg';
import apple from '../../assets/images/apple.svg';
import Sendfill from '../../assets/images/Sendfill.svg';
import { Col, Divider, Row, Space, Input, Tooltip, Button } from 'antd';
import { Footer } from 'antd/es/layout/layout';

export const PageFooter = () => {
  return (
    <>
      <Footer className="LoginpageFooterNew">
        <Row justify="center">
          <Col
            style={{ display: 'flex', alignItems: 'center' }}
            xs={12}
            sm={12}
            md={14}
            lg={14}
            xl={20}
          >         
            <Space>
              <img alt="example" src={playstore} className="svgImg" />
              <img alt="example" src={apple} className="svgImg" />
            </Space>
          </Col>
          <br className="brForFooter" /> <br className="brForFooter" />{' '}
          <br className="brForFooter" />
          <Col
            className="mailInputLogin-container"
            xs={13}
            sm={10}
            md={8}
            lg={6}
            xl={4}
          >  
            <Input
              className="mailInputLogin"
              placeholder="   ელ.ფოსტა"
              suffix={
                <Tooltip>
                  <Button className="mailBtn">
                    გამოწერა &nbsp; <img src={Sendfill} />
                  </Button>
                </Tooltip>
              }
            />
          </Col>
        </Row>
      
        <div className='ufleba'>ყველა უფლება დაცულია © 2023 საქართველოს შრომის, ჯანმრთელობისა და სოციალური დაცვის სამინისტრო</div>
      </Footer>
    </>
  );
};
