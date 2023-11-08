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

import { ParentRelationType } from '../../constants';
import { FileTextOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

export const UploadInformation5 = (props: any) => {
  const [medicalnstitution, setMedicalnstitution] = useState<any>();
  const [data, setdata] = useState<any>({ name: '', value: '' });
  const childBirthCertificateNumber = useAppSelector(
    state => state.statment.childBirthCertificateNumber
  );
  const childParentRelationType = useAppSelector(
    state => state.statment.childParentRelationType
  );
  const childPrivateNumber = useAppSelector(
    state => state.statment.childPrivateNumber
  );
  const childFirstName = useAppSelector(state => state.statment.childFirstName);
  const childLastName = useAppSelector(state => state.statment.childLastName);
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
    let k = { name: "childFirstName", value: personInfo.firstName };
    dispatch(changeState(k));
  }

  const setLastName = () => {
    let k = { name: "childLastName", value: personInfo.lastName };
    dispatch(changeState(k));
  }
  const setPrivateNumber = () => {
    let k = { name: "childPrivateNumber", value: personInfo.privateNumber };
    dispatch(changeState(k));
  }

  return (
    <div>
      <div className="mainTop2">
        <div className="textOfDoc"><FileTextOutlined  className='textOfDocIcon' /> დაბადების მოწმობა (შვილის შემთხვევაში)</div>
      </div>
      <div className="cardPading">
        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <div className="marginClass">დაბადების მოწმობის #</div>
            <Input
              className='uploadInputs'
              name="childBirthCertificateNumber"
              value={childBirthCertificateNumber}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <div className="marginClass">განმცხადებლის დამოკიდებულება შვილთან</div>
            <Select
              value={childParentRelationType}
              showSearch    
              className='spouseSelect'
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
              onChange={e => handleChangeSelect(e, 'childParentRelationType')}
            >
              {ParentRelationType?.map((item: any) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <div className="marginClass">გარდაცვლილის პირადი ნომერი დაბ.მოწმობიდან{' '}</div>
            <Input
              className='uploadInputs'
              name="childPrivateNumber"
              value={childPrivateNumber}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={6} xxl={6}>
            <div className="marginClass">სახელი</div>
            <Input
              className='uploadInputs'
              name="childFirstName"
              value={childFirstName}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={6} xxl={6}>
            <div className="marginClass">გვარი</div>
            <Input
              className='uploadInputs'
              name="childLastName"
              value={childLastName}
              onChange={e => changeinputs(e)}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
