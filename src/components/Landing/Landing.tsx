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
  MenuProps,
  Menu,
  Calendar,
  Tooltip,
  Input,
  Layout,
  Slider,
} from 'antd';
import {
  CheckOutlined,
  EyeOutlined,
  FileDoneOutlined,
  RightOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import Rectangle from '../../assets/images/Rectangle.svg';
import Group91 from '../../assets/images/Group91.svg';
import Group92 from '../../assets/images/Group92.svg';
import React, { useEffect, useState } from 'react';
import {
  addPensionStatement,
  getPensionTypes,
} from '../../redux/slices/steatmentSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
// import { territorialUnit } from '../../constants';
import type { RadioChangeEvent } from 'antd';
import './Landing.css';
import axios from 'axios';
import moment from 'moment';
import { APIID } from '../../constants';
import Group439 from '../../assets/images/Group 439.svg';
import Sendfill from '../../assets/images/Sendfill.svg';
import Grou67 from '../../assets/images/Grou67.svg';
import playstore from '../../assets/images/playstore.svg';
import apple from '../../assets/images/apple.svg';
import { DownOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import {
  ABOUT,
  REGISTRATION_PAGE,
  ADDPENSIONSTEATMENT_PAGE,
  PASSWORDRECOVERY_PAGE,
  LANDING_PAGE,
} from '../../router/paths';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { SliderLanding } from '../Landing/Slider/SliderLanding';
import { StatementList } from '../Landing/StatementList';
import RightContent from '../RightContent/RightContent';
import { getPensionStatementById } from '../../redux/slices/editSteatmentSlice';
// import { Content, Footer } from 'antd/es/layout/layout';

const { Header, Content, Footer, Sider } = Layout;

export const Landing = () => {
  const dispatch = useAppDispatch();
  const [newRespons, setNewRespons] = useState<any>([]);
  const [loader, setloader] = useState<any>(true);
  const userSuccess = useAppSelector(state => state.user.userSuccess);
  const navigate = useNavigate();
  const token = localStorage.getItem('accesstoken');

  useEffect(() => {
    //console.log(token, 'lending gverdze')
    getPension();
    dispatch(getPensionTypes(1));

    // dispatch.getPensionTypes()
    // console.log( getPensionTypes, 'asdas' )
  }, []);


  function limit(string = '', limit = 0) {
    if (string.length > limit) {
      return string.slice(0, limit) + '...';
    } else return string;
  }

  const routeview = (id: any) => {
    navigate(ADDPENSIONSTEATMENT_PAGE);
  };
  const routeEdit = (id: any) => { };

  const getPension = async () => {
    try {
      const url = `${APIID}/api/Statement/getPersonStatements`;
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

  const generateDropDown = (item: any) => {
    console.log('itemitem', item);
    const items = [
      {
        key: '1',
        label: (
          <>
            {item?.pensionType?.rootId == '5a5bb5d8-ef44-43ed-40cc-08d8ea07976f' && (
              <Link to={`/EditPensionSteatmentPage/${item.id}`}>რედაქტირება</Link>
            )}
            {item?.pensionType?.rootId == 'd7096b15-60e2-44e3-898b-bf1f016ee7e0' && (
              <Link to={`/MinerSteatmentPage/edit/${item.id}`}>რედაქტირება</Link>
            )}
            {item?.pensionType?.rootId == '07e9955f-ce79-4b22-b637-97c1e19612e7' && (
              <Link to={`/stateCompensationPage/view/${item.id}`}>რედაქტირება</Link>
            )}
            {item?.pensionType?.rootId == '3FA85F64-5717-4562-B3FC-2C963F66AFA6' && (
              <Link to={`/householdSubsidyPage/view/${item.id}`}>რედაქტირება</Link>
            )}
          </>
        ),
      },
      {
        key: '2',
        label: <>
          {item?.pensionType?.rootId == '5a5bb5d8-ef44-43ed-40cc-08d8ea07976f' && (
            <Link to={`/PensionSteatmentPage/view/${item?.id}`}>დათვალიერება</Link>
          )}
          {item?.pensionType?.rootId == 'd7096b15-60e2-44e3-898b-bf1f016ee7e0' && (
            <Link to={`/MinerSteatmentPage/view/${item.id}`}>დათვალიერება</Link>
          )}
          {item?.pensionType?.rootId == '3fa85f64-5717-4562-b3fc-2c963f66afa6' && (
            <Link to={`/householdSubsidyPage/view/${item.id}`}>დათვალიერება</Link>
          )}
          {item?.pensionType?.rootId == '07e9955f-ce79-4b22-b637-97c1e19612e7' && (
            <Link to={`/stateCompensationPage/view/${item.id}`}>დათვალიერება</Link>
          )}
        </>
      },
    ];
    return (
      <div className='editDropDown'>
        <Dropdown menu={{ items }}>
          <div
            style={{ top: '50px' }}
            onClick={e => (e.preventDefault(), item.registrationNumber)}
          >
            <div>
              {' '}
              <EyeOutlined
                style={{
                  fontSize: '32px',
                  color: 'rgba(5, 28, 125, 0.8)',
                  marginTop: '15px',
                }}
              />
            </div>
          </div>
        </Dropdown>
      </div>
    );
  };
  return (
    <>
      <Layout >
        <SliderLanding />
        <Content className='landingLayout'>
          {/* <StatementList /> */}
          {loader == true ? (
            <div className="example">
              <Spin>
                <div className="margins">
                  <br />
                  {newRespons.map((item: any) => (
                    <Card className="borderBottom">
                      <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                          <FileDoneOutlined />
                          &nbsp;{item.registrationNumber}
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                          გაგზავნის თარიღი{' '}
                          {moment(item.createDate).format('yyyy-MM-DD')}
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                          {' '}
                          მოთხოვნის ტიპი{item.pensionType.name}
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
            <div>
              <br />
              <br />
              <br />
              <Row>
                {' '}
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <div className="titleCard">თქვენი ბოლო 10 განცხადება</div>
                  <br />
                  {newRespons.map((item: any) => (
                    <div
                    //  className="borderBottomResponse"
                    >
                      <Card className="borderBottom" key={item.registrationNumber}>
                        <div>
                          <Row>
                            <Col
                              xs={24}
                              sm={12}
                              md={5}
                              lg={5}
                              xl={5}
                              className="textColStyle "
                            >
                              რეგისტრაციის ნომერი
                              <br />
                              {item.registrationNumber}
                            </Col>
                            <Col
                              xs={24}
                              sm={12}
                              md={4}
                              lg={4}
                              xl={4}
                              className="textColStyle"
                            >
                              გაგზავნის თარიღი
                              <br />
                              {moment(item.createDate).format('yyyy-MM-DD')}
                            </Col>
                            <Col
                              xs={24}
                              sm={12}
                              md={4}
                              lg={4}
                              xl={5}
                              className="textColStyle"
                            >
                              გასაცემლის ტიპი
                              <br />
                              {item.pensionType.name.length >= 30
                                ? limit(item.pensionType.name + '...', 30)
                                : item.pensionType.name}
                            </Col>
                            <Col
                              xs={24}
                              sm={12}
                              md={4}
                              lg={4}
                              xl={4}
                              className="textColStyle"
                            >
                              მოთხოვნის ტიპი
                              <br />
                              {item.operationStatus.name}
                            </Col>
                            <Col
                              xs={24}
                              sm={12}
                              md={4}
                              lg={4}
                              xl={4}
                              className="textColStyle"
                            >
                              სტატუსი
                              <br /> {item.statementStatus}
                            </Col>
                            {generateDropDown(item)}
                          </Row>
                          <Row></Row>
                        </div>
                        <Row></Row>
                      </Card>
                    </div>
                  ))}
                  <br />
                </Col>
              </Row>{' '}
            </div>
          )}
        </Content>
      </Layout>
    </>
  );
};
