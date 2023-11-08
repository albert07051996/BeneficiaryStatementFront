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
import { FileTextOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

export const UploadInformation6 = (props: any) => {
  const dispatch = useAppDispatch();
  const { Option } = Select;
  const [medicalnstitution, setMedicalnstitution] = useState<any>();
  const [data, setdata] = useState<any>({ name: '', value: '' });
  const [checkedRadio, setCheckedRadio] = useState<any>(null);
  const [typeOfRelative, setTypeOfRelative] = useState<any>('');
  const globalChildBirthCertificateNumber = useAppSelector(
    state => state.statment.globalChildBirthCertificateNumber
  );
  const globalChildBirthCertificateParentRelationType = useAppSelector(
    state => state.statment.globalChildBirthCertificateParentRelationType
  );
  const personInfo = useAppSelector(
    state => state.statment.personInfo
  );
  const ParentRelationType = [{
    id: "1",
    name: "დედა",
  },
  {
    id: "2",
    name: "მამა",
  },
  {
    id: "3",
    name: "ორივე მშობელი",
  },]

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
        <div className="textOfDoc"><FileTextOutlined  className='textOfDocIcon' /> მარჩენალგარდაცვლილი ბავშვის დაბადების მოწმობა</div>
      </div>
      <div className="cardPading">
        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <div className="marginClass">დაბადების მოწმობის #</div>
            <Input
              className='uploadInputs'
              name="globalChildBirthCertificateNumber"
              value={globalChildBirthCertificateNumber}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <div className="marginClass">გარდაცვლილის დამოკიდებულება შვილთან</div>
            <Select
              value={globalChildBirthCertificateParentRelationType}
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
              onChange={e => handleChangeSelect(e, 'globalChildBirthCertificateParentRelationType')}
            >
              {ParentRelationType?.map((item: any) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>  
      </div>
    </div>
  );
};
