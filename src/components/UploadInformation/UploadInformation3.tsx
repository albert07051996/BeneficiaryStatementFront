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
import { ParentRelationType } from '../../constants';
import { FileTextOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export const UploadInformation3 = (props: any) => {
  const [medicalnstitution, setMedicalnstitution] = useState<any>();
  const [data, setdata] = useState<any>({ name: '', value: '' });
  const [checkedRadio, setCheckedRadio] = useState<any>(null);
  const [typeOfRelative, setTypeOfRelative] = useState<any>('');
  const personInfo = useAppSelector(
    state => state.statment.personInfo
  );
  const parentMarriageCertificateNumber = useAppSelector(
    state => state.statment.parentMarriageCertificateNumber
  );
  const parentSpouseRelationType = useAppSelector(
    state => state.statment.parentSpouseRelationType
  );
  const parentPrivateNumber = useAppSelector(
    state => state.statment.parentPrivateNumber
  );
  const parentFirstName = useAppSelector(state => state.statment.parentFirstName);
  const parentLastName = useAppSelector(state => state.statment.parentLastName);
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
    let k = { name: "parentFirstName", value: personInfo.firstName };
    dispatch(changeState(k));
  }

  const setLastName = () => {
    let k = { name: "parentLastName", value: personInfo.lastName };
    dispatch(changeState(k));
  }
  const setPrivateNumber = () => {
    let k = { name: "parentPrivateNumber", value: personInfo.privateNumber };
    dispatch(changeState(k));
  }
  const handleChangeAttitude = (e: any) => {
    setTypeOfRelative(e);
    console.log(e);
    let k = { name: 'GlobalAttitude', value: e };
    dispatch(changeState(k));
  };
  const attitude = [
    {
      id: 'e325bfb3-ac7b-43db-a732-39123b0084f2',
      name: 'დედა',
    },
    {
      id: '010bba2f-cee6-45b2-b03d-2a0c2e5b0244',
      name: 'მამა',
    },
  ];

  console.log(window.location.pathname, ' window.location.pathname');

  return (
    <div>
      <div className="mainTop2">
        <div className="textOfDoc"><FileTextOutlined className='textOfDocIcon' />გარდაცვლილი პირის დაბადების მოწმობა (მშობლის შემთხვევაში)</div>
      </div>
      <div className="cardPading">
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <div className="marginClass">გარდაცვლილის დაბადების მოწმობა #</div>
            <Input
              name="parentMarriageCertificateNumber"
              className='uploadInputs'
              value={parentMarriageCertificateNumber}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <div className="marginClass">განმცხადებლის დამოკიდებულება გარდაცვლილ შვილთან</div>
            <Select
              value={parentSpouseRelationType}
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
              onChange={e => handleChangeSelect(e, 'parentSpouseRelationType')}
            >
              {ParentRelationType?.map((item: any) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <div className="marginClass">მშობლის პირადი ნომერი{' '}</div>
            <Input
              name="parentPrivateNumber"
              className='uploadInputs'
              value={parentPrivateNumber}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={6} xxl={6}>
            <div className="marginClass">სახელი</div>
            <Input
              name="parentFirstName"
              className='uploadInputs'
              value={parentFirstName}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={6} xxl={6}>
            <div className="marginClass">გვარი</div>
            <Input
              name="parentLastName"
              className='uploadInputs'
              value={parentLastName}
              onChange={e => changeinputs(e)}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
