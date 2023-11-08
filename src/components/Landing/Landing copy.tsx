import {
  Select,
  Button,
  Radio,
  Col,
  Row,
  Card,
  message,
  Spin,
  Dropdown,
  Space,
} from 'antd';
import { CheckOutlined, FileDoneOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import {
  addPensionStatement,
  getPensionTypes,
} from '../../redux/slices/steatmentSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
// import { territorialUnit } from '../../constants'
import type { RadioChangeEvent } from 'antd';
import './Landing.css';
import axios from 'axios';
import moment from 'moment';
import { APIID } from '../../constants';
import Group439 from '../../assets/images/Group 439.svg';
import { DownOutlined } from '@ant-design/icons';

export const Landing = () => {
  const dispatch = useAppDispatch();
  const [newRespons, setNewRespons] = useState<any>([]);
  const [loader, setloader] = useState<any>(true);
  const userSuccess = useAppSelector(state => state.user.userSuccess);

  const token = localStorage.getItem('accesstoken');

  useEffect(() => {
    //console.log(token, 'lending gverdze')
    getPension();
    dispatch(getPensionTypes(1));

    // dispatch.getPensionTypes()
    //console.log({ newRespons })
  }, []);

  // useEffect(() => {

  // }, [token]);

  const items = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
  ];

  const getPension = async () => {
    //console.log("Shemovs")
    try {
      const url = `${APIID}/api/Statement/getPersonStatements`;
      // const url = `https://localhost:44348/api/Statement/getPersonStatements`;

      const response = await axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        .then(res => res);
      setNewRespons(response.data);
      setloader(false);
      return new Blob([response.data], {
        type: response.headers['content-type'],
      });
    } catch (error) {
      message.error('ვერ მოხდა ინფორმაციის მოძიება!');
      setloader(false);
    }
  };
  // const sendRequest = () => {
  //   getPension()
  // }

  return (
    <>
      {loader == true ? (
        <div className="example">
          <Spin>
            <div className="margins">
              <div className="titleCard">თქვენი ბოლო 10 განცხადება</div>
              <br />
              {newRespons.map((item: any) => (
                <Card className="borderBottom">
                  <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      <FileDoneOutlined />
                      &nbsp;{item.registrationNumber}
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      გაგზავნის თარიღი და დრო{' '}
                      {moment(item.createDate).format('yyyy-MM-DD')}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      {item.pensionType.name}
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={12}
                      lg={12}
                      xl={12}
                      style={{ borderRadius: '5px' }}
                    >
                      {' '}
                      {item.statementStatus}
                    </Col>
                  </Row>
                </Card>
              ))}
              <br />
            </div>
            <br />
          </Spin>
        </div>
      ) : (
        <div className="margins">
          <div className="titleCard">თქვენი ბოლო 10 განცხადება</div>
          <br />
          {newRespons.map((item: any) => (
            <Card className="borderBottom">
              <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <FileDoneOutlined />
                  &nbsp;{item.registrationNumber}
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  გაგზავნის თარიღი და დრო{' '}
                  {moment(item.createDate).format('yyyy-MM-DD')}
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                  {item.pensionType.name}
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                  {item.operationStatus.name}
                </Col>

                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  style={{ borderRadius: '5px' }}
                >
                  {' '}
                  {item.statementStatus}
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={4}>
                  {/* <Space size="middle"> */}

                  {/* </Space> */}
                  <img src={Group439} alt="example" />
                </Col>
              </Row>

              <Row></Row>
            </Card>
          ))}
          <br />
        </div>
      )}
    </>
  );
};
