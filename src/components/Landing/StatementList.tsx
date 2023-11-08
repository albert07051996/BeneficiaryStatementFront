import {
  Avatar,
  Button,
  Col,
  ConfigProvider,
  Input,
  List,
  Radio,
  Row,
  Select,
  Space,
  Tooltip,
} from 'antd';
import React from 'react';
import '../Landing/MyStatements.css';
import { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
// import useWindowDimensions from '../../../hooks/getWindowDimensions';
import {
  AudioOutlined,
  CheckCircleOutlined,
  ContainerOutlined,
  EditOutlined,
  EyeOutlined,
  FileDoneOutlined,
  FileOutlined,
  FileSyncOutlined,
  FlagOutlined,
  IssuesCloseOutlined,
  LikeOutlined,
  MessageOutlined,
  RollbackOutlined,
  SearchOutlined,
  SendOutlined,
  StarOutlined,
} from '@ant-design/icons';
// import { getApplicationType, getStatusOfStatement } from '../../../Pipes/myStatementsPipe';
import moment from 'moment';

// import { getUserApplications } from '../../../redux/slices/ApplicationSlice';
import geo from 'antd/es/locale/ka_GE';
import 'moment/locale/ka';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const StatementList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const { Search } = Input;

  // const myStatements = useAppSelector(state => state.Application.userApplications)
  // const loadingApplications = useAppSelector(state => state.Application.loading)

  const [pageParams, setPageParams] = useState({
    UserId: null,
    ApplicationNumber: null,
    ApplicationType: null,
    ApplicationStatus: null,
    StartDate: null,
    EndDate: null,
    Page: 1,
    Size: 5,
  });

  // console.log(myStatements, 'myStatements')

  // useEffect(() => {
  //     dispatch(getUserApplications(pageParams))
  // }, [pageParams])
  // console.log(pageParams, 'pageParams');

  const onChangeRangePicker = (value: any, dateString: any) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };

  const onSearch = (value: any) => {
    console.log(value, 'valueofsea');
  };

  const goToCase = (row: any) => {
    navigate(`/landingPages/statementPage/Application/${row.id}/view`);
  };

  const goToCaseEdit = (row: any) => {
    console.log('row', row);
    navigate(`/landingPages/statementPage/Application/${row.id}/edit`);
  };
  // 63ff041b494257dc41381a58

  // console.log(myStatements, ' mstat')
  return (
    <div className="mt80 statementsListWrapper">
      {/* <RangePicker onChange={onChange} /> */}
      <Radio.Group
        onChange={({ target }) =>
          setPageParams({ ...pageParams, ApplicationStatus: target.value })
        }
        defaultValue={null}
        size="large"
      >
        <Row gutter={[32, 16]}>
          <Col xl={4} xs={4}></Col>
          <Col xl={4} xs={4}>
            <div className="statusRadioWrapper">
              <div className="statusIconWrapper vertical-center horizontal-center">
                <div className="statusIconBackground vertical-center horizontal-center statusIconBackgroundAll">
                  <ContainerOutlined className="statusIconAbsolute statusIconAbsoluteAll" />
                </div>
              </div>
              <Radio.Button className="statusBtns" value={null}>
                <span className="statusText">ყველა განცხადება</span>
                <span className="statusTextNumb"> 124 </span>
              </Radio.Button>
            </div>
          </Col>
          <Col xl={4} xs={4}>
            <div className="statusRadioWrapper">
              <div className="statusIconWrapper vertical-center horizontal-center">
                <div className="statusIconBackground vertical-center horizontal-center statusIconBackgroundSent">
                  <SendOutlined className="statusIconAbsolute statusIconAbsoluteSent" />
                </div>
              </div>
              <Radio.Button className="statusBtns" value={3}>
                <span className="statusText">გაგზავნილი ინსპექტირებაზე</span>
                <span className="statusTextNumb"> 24 </span>
              </Radio.Button>
            </div>
          </Col>
          <Col xl={4} xs={4}>
            <div className="statusRadioWrapper">
              <div className="statusIconWrapper vertical-center horizontal-center">
                <div className="statusIconBackground vertical-center horizontal-center statusIconBackgroundStarted">
                  <FileSyncOutlined className="statusIconAbsolute statusIconAbsolutedStarted" />
                </div>
              </div>
              <Radio.Button className="statusBtns" value={4}>
                <span className="statusText">დაწყებულია ინსპექტირება</span>
                <span className="statusTextNumb"> 21 </span>
              </Radio.Button>
            </div>
          </Col>
          <Col xl={4} xs={4}>
            <div className="statusRadioWrapper">
              <div className="statusIconWrapper vertical-center horizontal-center">
                <div className="statusIconBackground vertical-center horizontal-center statusIconBackgroundDoneInsp">
                  <FileDoneOutlined className="statusIconAbsolute statusIconAbsoluteDoneInsp" />
                </div>
              </div>
              <Radio.Button className="statusBtns" value={5}>
                <span className="statusText">დასრულებულია ინსპექტირება</span>
                <span className="statusTextNumb"> 17 </span>
              </Radio.Button>
            </div>
          </Col>
          <Col xl={4} xs={4}></Col>
        </Row>
        <Row className="mt40" gutter={[32, 16]}>
          <Col xl={4} md={4} xs={4}></Col>
          <Col xl={4} md={4} xs={4}>
            <div className="statusRadioWrapper">
              <div className="statusIconWrapper vertical-center horizontal-center">
                <div className="statusIconBackground vertical-center horizontal-center statusIconBackgroundReceived">
                  <CheckCircleOutlined className="statusIconAbsolute statusIconAbsoluteReceived" />
                </div>
              </div>
              <Radio.Button className="statusBtns" value={1}>
                <span className="statusText">მიღებული</span>
                <span className="statusTextNumb"> 14 </span>
              </Radio.Button>
            </div>
          </Col>
          <Col xl={4} md={4} xs={4}>
            <div className="statusRadioWrapper">
              <div className="statusIconWrapper vertical-center horizontal-center">
                <div className="statusIconBackground vertical-center horizontal-center statusIconBackgroundBack">
                  <RollbackOutlined className="statusIconAbsolute statusIconAbsoluteBack" />
                </div>
              </div>
              <Radio.Button className="statusBtns" value={2}>
                <span className="statusText">დაბრუნებული</span>
                <span className="statusTextNumb"> 11 </span>
              </Radio.Button>
            </div>
          </Col>
          <Col xl={4} md={4} xs={4}>
            <div className="statusRadioWrapper">
              <div className="statusIconWrapper vertical-center horizontal-center">
                <div className="statusIconBackground vertical-center horizontal-center statusIconBackgroundAccepted">
                  <IssuesCloseOutlined className="statusIconAbsolute statusIconAbsolutedAccepted" />
                </div>
              </div>
              <Radio.Button className="statusBtns" value={6}>
                <span className="statusText">დადასტურებული</span>
                <span className="statusTextNumb"> 21 </span>
              </Radio.Button>
            </div>
          </Col>
          <Col xl={4} md={4} xs={4}>
            <div className="statusRadioWrapper">
              <div className="statusIconWrapper vertical-center horizontal-center">
                <div className="statusIconBackground vertical-center horizontal-center statusIconBackgroundFinished">
                  <FlagOutlined className="statusIconAbsolute statusIconAbsoluteFinished" />
                </div>
              </div>
              <Radio.Button className="statusBtns" value={7}>
                <span className="statusText">დასრულებული</span>
                <span className="statusTextNumb"> 7 </span>
              </Radio.Button>
            </div>
          </Col>
          <Col xl={4} md={4} xs={4}></Col>
        </Row>
      </Radio.Group>
      <Row gutter={[0, 32]} className="mt60 StatementsfiltersWrapper">
        <Col xl={6} xs={6}></Col>
        <Col className="mari" xl={5} xs={5}>
          <Search placeholder="განცხადების ნომერი" onSearch={onSearch} enterButton />
        </Col>
        <Col xl={3} xs={3}>
          <Select
            allowClear
            onChange={e => setPageParams({ ...pageParams, ApplicationType: e })}
            defaultValue={null}
            placeholder="განცხადების ტიპი"
          >
            <Option value="1">იმიგრაცია</Option>
            <Option value="2">ემიგრაცია</Option>
          </Select>
        </Col>
        <Col xl={4} xs={4}>
          <ConfigProvider locale={geo}>
            <RangePicker
              allowClear={false}
              onChange={a => console.log('Timeframe has changed')}
            />
          </ConfigProvider>
        </Col>
        <Col xl={6} xs={6}></Col>
      </Row>

      <Row className="mt24">
        <Col className="tableCol" xl={24} xs={24}>
          <List
            itemLayout="vertical"
            size="large"
            // loading={loadingApplications}
            pagination={{
              onChange: page => {
                console.log(page);
                setPageParams({ ...pageParams, Page: page });
              },
              pageSize: 5,
              // total: myStatements.paging.count,
              // showSizeChanger
            }}
            // dataSource={myStatements.data}
            // footer={
            //     <div>
            //         <b>ant design</b> footer part
            //     </div>
            // }
            renderItem={(app: any) => (
              <Col xl={24} xs={24}>
                <List.Item key={app.id}>
                  <div className="tableItemWrapper">
                    <Row gutter={[16, 16]}>
                      <Col xl={4} xs={4}>
                        <FileOutlined className="editIconBig" />
                      </Col>
                      <Col xl={4} xs={4}>
                        <div className="column">
                          <strong className="boldBlue">სტატუსი </strong>
                          {/* <span className='lightBlue'>{getStatusOfStatement(app.status)}</span> */}
                        </div>
                      </Col>
                      <Col xl={4} xs={4}>
                        <div className="column">
                          <strong className="boldBlue"> განცხადების ნომერი</strong>
                          <span className="lightBlue">
                            {' '}
                            {app.applicationNumber} {app.branchId}
                          </span>
                        </div>
                      </Col>
                      <Col xl={4} xs={4}>
                        <div className="column">
                          <strong className="boldBlue"> განცხადების ტიპი</strong>
                          {/* <span className='lightBlue'>  {getApplicationType(app.type)}</span> */}
                        </div>
                      </Col>
                      <Col xl={4} xs={4}>
                        <div className="column">
                          <strong className="boldBlue"> თარიღი</strong>
                          <span className="lightBlue">
                            {' '}
                            {moment(app.createDate).format('DD-MM-YYYY')}
                          </span>
                        </div>
                      </Col>
                      <Col xl={4} xs={4}>
                        <Tooltip title="ნახვა">
                          {' '}
                          <EyeOutlined
                            onClick={() => goToCase(app)}
                            className="viewIconBig pointer"
                          />{' '}
                        </Tooltip>
                        <Tooltip title="რედაქტირება">
                          {' '}
                          <EditOutlined
                            onClick={() => goToCaseEdit(app)}
                            className="editIconBig pointer ml10"
                          />{' '}
                        </Tooltip>
                      </Col>
                    </Row>
                  </div>
                </List.Item>
              </Col>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};
