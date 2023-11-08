import {
  Layout,
  Input,
  Col,
  DatePicker,
  Select,
  Row,
  TourProps,
  Tour,
} from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import {
  changeState,
  getVeteranCategories,
} from '../../redux/slices/steatmentSlice';
import './uploadInformation.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import dayjs from 'dayjs';
import es from 'antd/es/date-picker/locale/ka_GE';
import { FileTextOutlined, QuestionCircleFilled } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

export const UploadInformation8 = (props: any) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const personInfo = useAppSelector(
    state => state.statment.personInfo
  );
  const globalFirstId = useAppSelector(state => state.statment.globalFirstId);
  const globalSecondId = useAppSelector(state => state.statment.globalSecondId);

  const globalVeteranStatusVeteranStatusGrantDate = useAppSelector(
    state => state.statment.globalVeteranStatusVeteranStatusGrantDate
  );
  const globalVeteranStatusVeteranCategoryId = useAppSelector(
    state => state.statment.globalVeteranStatusVeteranCategoryId
  );
  const globalVeteranStatusCode = useAppSelector(
    state => state.statment.globalVeteranStatusCode
  );
  const globalVeteranStatusFirstName = useAppSelector(
    state => state.statment.globalVeteranStatusFirstName
  );
  const globalVeteranStatusLastName = useAppSelector(
    state => state.statment.globalVeteranStatusLastName
  );

  const listVeteranCategories = useAppSelector(
    state => state.statment.listVeteranCategories
  );

  const listVeteranCategoriesSuccess = useAppSelector(
    state => state.statment.listVeteranCategoriesSuccess
  );
  const listVeteranCategoriesError = useAppSelector(
    state => state.statment.listVeteranCategoriesError
  );
  const globalVeteranStatusCode1 = useAppSelector(
    state => state.statment.globalVeteranStatusCode1
  );
  const globalVeteranStatusCode2 = useAppSelector(
    state => state.statment.globalVeteranStatusCode2
  );
  const globalVeteranStatusCode3 = useAppSelector(
    state => state.statment.globalVeteranStatusCode3
  );

  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const [firstDropDown, setFirstDropDown] = useState<any>([]);
  const [secondDropDown, setSecondDropDown] = useState<any>([]);
  const [firstactive, setFirstactive] = useState<any>(false);
  const [secondactive, setSecondactive] = useState<any>(false);
  const { Option } = Select;
  const [open, setOpen] = useState<boolean>(false);
  const steps: TourProps['steps'] = [
    {
      title: 'ინფორმაცია',
      description: 'შეიყვანეთ ვეტერანის კოდის პირველი სამი სიმბოლო.',
      target: () => ref1.current,
    },
    {
      title: 'ინფორმაცია',
      description: 'ველი შეივსო საჭირო ვეტერანის კოდის შუა მონაკვეთით',
      target: () => ref2.current,
    },
    {
      title: 'ინფორმაცია',
      description: 'შეიყვანეთ ვეტერანის კოდის ბოლო ოთხი სიმბოლო',
      target: () => ref3.current,
    },
  ];

  useEffect(() => {
    let listVeteranCategoriesArry =
      listVeteranCategories !== null
        ? listVeteranCategories
          .map((item: any) => {
            return {
              value: item.id,
              label: item.name,
              veteranCategoryId: item.veteranCategoryId,
              code: item.code,
            };
          })
          .filter(item => item.veteranCategoryId == globalFirstId)
        : [];
    setSecondDropDown(listVeteranCategoriesArry);
  }, [globalFirstId]);

  useEffect(() => {
    if (firstactive == true) {
      let first =
        listVeteranCategories !== null
          ? listVeteranCategories
            .map((item: any) => {
              return {
                value: item.id,
                label: item.name,
                veteranCategoryId: item.veteranCategoryId,
                code: item.code,
              };
            })
            .filter(item => item.value == globalFirstId && item.code.length != 0)
          : [];
      let k = { name: 'globalVeteranStatusCode2', value: first[0]?.code };
      dispatch(changeState(k));
      setFirstactive(false);
    }
  }, [firstactive]);

  useEffect(() => {
    if (secondactive == true) {  
      let second =
        listVeteranCategories != null
          ? listVeteranCategories
            .map((item: any) => {
              return {
                value: item.id,
                label: item.name,
                veteranCategoryId: item.veteranCategoryId,
                code: item?.code,
              };
            })
            .filter(item => item.value == globalSecondId && item.code.length != 0)
          : [];  
      let k = { name: 'globalVeteranStatusCode2', value: second[0]?.code };
      dispatch(changeState(k));
      setSecondactive(false);
    }
  }, [secondactive]);

  useEffect(() => {
    dispatch(getVeteranCategories());
  }, []);

  const changeinputs = (e: any) => {
    const { name, value } = e.target;
    let k = { name: name, value: value };
    dispatch(changeState(k));
  };

  const changedate = (date: any, dateString: any) => {
    let k = {
      name: 'globalVeteranStatusVeteranStatusGrantDate',
      value: dayjs(date).format('YYYY-MM-DD'),
    };
    dispatch(changeState(k));
  };

  const handleChangeSelect1 = (id: any, name: string) => {
    let k = { name: name, value: id };
    let s = { name: 'globalFirstId', value: id };
    let e = { name: 'globalSecondId', value: '' };
    setFirstactive(true);
    dispatch(changeState(k));
    dispatch(changeState(s));
    dispatch(changeState(e));
  };
  const handleChangeSelect2 = (id: any, name: string) => {
    let k = { name: name, value: id };
    let e = { name: 'globalSecondId', value: id };

    dispatch(changeState(k));
    dispatch(changeState(e));
    setSecondactive(true);
  };


  useEffect(() => {
    setFirstName()
    setLastName()

  }, []);

  const setFirstName = () => {
    let k = { name: "globalVeteranStatusFirstName", value: personInfo.firstName };
    dispatch(changeState(k));
  }

  const setLastName = () => {
    let k = { name: "globalVeteranStatusLastName", value: personInfo.lastName };
    dispatch(changeState(k));
  }


  return (
    <div>
      <div className="mainTop2">
        <div className="textOfDoc"><FileTextOutlined  className='textOfDocIcon' /> ვეტერანის სტატუსის დამადასტურებელი მოწმობა</div>
      </div>
      <div className="cardPading">
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={15} xl={12} xxl={12}>
            <div className="marginClass">ვეტერანის სტატუსი</div>
            <Select
              value={globalFirstId}
              showSearch            
              style={{ width: '100%' }}             
              placeholder="გთხოვთ შეავსოთ"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
              onChange={e =>
                handleChangeSelect1(e, 'globalVeteranStatusVeteranCategoryId')
              }
            >
              {listVeteranCategories &&
                listVeteranCategories?.map((item: any) => {
                  if (
                    item.veteranCategoryId == '00000000-0000-0000-0000-000000000000'
                  )
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.name}
                      </Option>
                    );
                })}
            </Select>
          </Col>
          <Col xs={24} sm={24} md={24} lg={15} xl={12} xxl={12}>
            {secondDropDown.length != 0 && (
              <>
                <div className="marginClass">ვეტერანის კატეგორია</div>
                <Select
                  value={globalSecondId}
                  showSearch             
                  style={{ width: '100%' }}
                  placeholder="გთხოვთ შეავსოთ"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option!.children as unknown as string).includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA!.children as unknown as string)
                      .toLowerCase()
                      .localeCompare(
                        (optionB!.children as unknown as string).toLowerCase()
                      )
                  }
                  onChange={e =>
                    handleChangeSelect2(e, 'globalVeteranStatusVeteranCategoryId')
                  }
                >
                  {secondDropDown?.map((item: any) => {
                    return (
                      <Option key={item.value} value={item.value}>
                        {item.label}
                      </Option>
                    );
                  })}
                </Select>
              </>
            )}
          </Col>
        </Row>
        <div className="marginClass">
          ვეტერანის კოდი        
          <QuestionCircleFilled
            className="QuestionCircleFilled"
            onClick={() => setOpen(true)}
          />
        </div>       
        <Row>
            
          <Col xs={5} sm={5} md={3} lg={2} xl={2} xxl={1}>
            <div ref={ref1}>
              <Input
                name="globalVeteranStatusCode1"
                value={globalVeteranStatusCode1}
                onChange={e => changeinputs(e)}
                maxLength={3}
                className="globalVeteranStatusCode1"
                placeholder="xxx"
              />
            </div>
          </Col>
          &nbsp;
          <Col xs={5} sm={5} md={3} lg={2} xl={2} xxl={1}>
            <div ref={ref2}>
              <Input
                name="globalVeteranStatusCode2"
                value={globalVeteranStatusCode2}
                disabled
                maxLength={3}
                className="globalVeteranStatusCode2"
                placeholder="xxx"
              />
            </div>
          </Col>
          &nbsp;
          <Col xs={5} sm={5} md={3} lg={2} xl={2} xxl={2}>
            <div ref={ref3} className='globalVeteranStatusCode3div'>
              <Input
                placeholder="xxxx"
                name="globalVeteranStatusCode3"
                value={globalVeteranStatusCode3}
                onChange={e => changeinputs(e)}
                className="globalVeteranStatusCode3"
                maxLength={4}
              />
            </div>
          </Col>
        </Row>
        {/* <Col span={1}></Col> */}

        <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
          <div className="marginClass">ვეტერანობის მინიჭების თარიღი</div>
          <DatePicker
            locale={es}
            format="DD/MM/YYYY"
            className="veteranDate"
            onChange={changedate}
            allowClear={false}
            value={
              globalVeteranStatusVeteranStatusGrantDate != ''
                ? dayjs(globalVeteranStatusVeteranStatusGrantDate)
                : undefined
            }
          />
        </Col>

        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <div className="marginClass"> სახელი</div>
            <Input
              className="uploadInputs"
              name="globalVeteranStatusFirstName"
              value={globalVeteranStatusFirstName}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <div className="marginClass">გვარი</div>
            <Input
              className="uploadInputs"
              name="globalVeteranStatusLastName"
              value={globalVeteranStatusLastName}
              onChange={e => changeinputs(e)}
            />
          </Col>
        </Row>
      </div>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />   
    </div>
  );
};
