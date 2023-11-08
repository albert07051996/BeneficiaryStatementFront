import {
  Layout,
  Input,
  Col,
  Select,
  Row,
} from 'antd';
import React, { useState, useEffect } from 'react';
import {
  changeState,
} from '../../redux/slices/steatmentSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import type { RadioChangeEvent } from 'antd';
import { SpouseRelationType } from '../../constants';
import { FileTextOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

export const UploadInformation4 = (props: any) => {
  const [medicalnstitution, setMedicalnstitution] = useState<any>();
  const [data, setdata] = useState<any>({ name: '', value: '' });
  const [checkedRadio, setCheckedRadio] = useState<any>(null);
  const [typeOfRelative, setTypeOfRelative] = useState<any>('');
  const spouseMarriageCertificateNumber = useAppSelector(
    state => state.statment.spouseMarriageCertificateNumber
  );
  const spouseSpouseRelationType = useAppSelector(
    state => state.statment.spouseSpouseRelationType
  );
  const spousePrivateNumber = useAppSelector(
    state => state.statment.spousePrivateNumber
  );
  const spouseFirstName = useAppSelector(state => state.statment.spouseFirstName);
  const spouseLastName = useAppSelector(state => state.statment.spouseLastName);
  const personInfo = useAppSelector(
    state => state.statment.personInfo
  );
  const dispatch = useAppDispatch();
  const { Option } = Select;

  const changeinputs = (e: any) => {
    setMedicalnstitution(e.target.value);
    let k = { ...data, name: e.target.name, value: e.target.value };
    setdata(k);
    dispatch(changeState(k));
  };

  const handleChangeSelect = (id: any, name: string) => {
     let k = { name: name, value: id };
    dispatch(changeState(k));
  };

  useEffect(() => {
    setFirstName()
    setLastName()
    setPrivateNumber()
  }, []);

  const setFirstName = () => {
    let k = { name: "spouseFirstName", value: personInfo.firstName };
    dispatch(changeState(k));
  }

  const setLastName = () => {
    let k = { name: "spouseLastName", value: personInfo.lastName };
    dispatch(changeState(k));
  }
  const setPrivateNumber = () => {
    let k = { name: "spousePrivateNumber", value: personInfo.privateNumber };
    dispatch(changeState(k));
  }
  return (
    <div>
      <div className="mainTop2">
        <div className="textOfDoc"><FileTextOutlined  className='textOfDocIcon' />გარდაცვლილი პირის ქორწინების მოწმობა (მეუღლის შემთხვევაში)</div>
      </div>
      <div className="cardPading">
        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <div className="marginClass">ქორწინების მოწმობის #</div>
            <Input
              className='uploadInputs'
              name="spouseMarriageCertificateNumber"
              value={spouseMarriageCertificateNumber}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <div className="marginClass">განმცხადებლის დამოკიდებულება გარდაცვლილ მეუღლესთან</div>
            <Select
              value={spouseSpouseRelationType}
              className='spouseSelect'
              showSearch
              placeholder="გთხოვთ შეავსოთ"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare((optionB!.children as unknown as string).toLowerCase())
              }
              onChange={e => handleChangeSelect(e, 'spouseSpouseRelationType')}
            >
              {SpouseRelationType?.map((item: any) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <div className="marginClass"> განმცხადებლის პირადი ნომერი</div>
            <Input
              className='uploadInputs'
              name="spousePrivateNumber"
              value={spousePrivateNumber}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={6} xxl={6}>
            <div className="marginClass">სახელი</div>
            <Input
              className='uploadInputs'
              name="spouseFirstName"
              value={spouseFirstName}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={6} xxl={6}>
            <div className="marginClass"> გვარი</div>
            <Input
              className='uploadInputs'
              name="spouseLastName"
              value={spouseLastName}
              onChange={e => changeinputs(e)}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
