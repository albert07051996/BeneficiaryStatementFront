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
import { RelationType } from '../../constants';
import { FileTextOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

export const UploadInformation9 = (props: any, SubsidyPension: any) => {
  const { Option } = Select;
  const [medicalnstitution, setMedicalnstitution] = useState<any>();
  const [data, setdata] = useState<any>({ name: '', value: '' });
  const personInfo = useAppSelector(state => state.statment.personInfo);
  const dispatch = useAppDispatch();
  const view = window.location.pathname.includes('view')
  const globalStatment = useAppSelector(state => state.statment);
  const hasFamilyMember = useAppSelector(
    state => state.statment.hasFamilyMember
  );

  useEffect(() => {
    if (hasFamilyMember === false) {
      globalName();
      globallastName();
      globalPrivateNumber();
    }
  }, [hasFamilyMember]);

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

  const globalName = () => {
    let k = { name: "globalvictimOfPoliticalFirstName", value: personInfo.firstName };
    dispatch(changeState(k));
  };

  const globallastName = () => {
    let k = { name: "globalvictimOfPoliticalLastName", value: personInfo.lastName };
    dispatch(changeState(k));
  };

  const globalPrivateNumber = () => {
    let k = { name: "globalvictimOfPoliticalRepressedPrivateNumber", value: personInfo.privateNumber };
    dispatch(changeState(k));
  };
  return (
    <div>
      <div className="mainTop2">
        <div className="textOfDoc">
          <FileTextOutlined className='textOfDocIcon' />
          სასამართლოს გადაწყვეტილება პოლიტიკური რეპრესიების მსხვერპლად აღიარების შესახებ
        </div>
      </div>
      <br />
      <div className="cardPading">
        <Row gutter={20}>
          {hasFamilyMember === true ? (<>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              <div className="marginClass">გადაწყვეტილების ნომერი</div>
              <Input
                className="uploadInputs"
                name="globalvictimOfPoliticalCourtDecisionNumber"
                onChange={e => changeinputs(e)}
                value={globalStatment.globalvictimOfPoliticalCourtDecisionNumber}
                disabled={view}
              />
            </Col>
            <Row gutter={30}>
              <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
                <div className="marginClass ">ნათესაური კავშირი </div>
                <Select
                  value={globalStatment.globalRepressedRelationType}
                  showSearch
                  className='spouseSelect'
                  placeholder="გთხოვთ შეავსოთ"
                  optionFilterProp="children"
                  disabled={view}
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
                    handleChangeSelect(e, 'globalRepressedRelationType')
                  }
                >
                  {RelationType?.map((item: any) => (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col xs={24} sm={24} md={7} lg={6} xl={6} xxl={6}>
                <div className="marginClass"> სახელი </div>
                <Input
                  className="uploadInputs"
                  name="globalvictimOfPoliticalFirstName"
                  onChange={e => changeinputs(e)}
                  disabled={view}
                  value={globalStatment.globalvictimOfPoliticalFirstName}
                />
              </Col>
              <Col xs={24} sm={24} md={7} lg={6} xl={6} xxl={6}>
                <div className="marginClass">გვარი</div>
                <Input
                  className="uploadInputs"
                  name="globalvictimOfPoliticalLastName"
                  disabled={view}
                  onChange={e => changeinputs(e)}
                  value={globalStatment.globalvictimOfPoliticalLastName}
                />
              </Col>
              <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={6}>

                <div className="marginClass">პირადი ნომერი</div>
                <Input
                  className="uploadInputs"
                  name="globalvictimOfPoliticalRepressedPrivateNumber"
                  onChange={e => changeinputs(e)}
                  disabled={view}
                  value={globalStatment.globalvictimOfPoliticalRepressedPrivateNumber}
                />
              </Col>
            </Row>
          </>) : (<>

            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              <div className="marginClass">გადაწყვეტილების ნომერი</div>
              <Input
                className="uploadInputs"
                name="globalvictimOfPoliticalCourtDecisionNumber"
                onChange={e => changeinputs(e)}
                disabled={view}
                value={globalStatment.globalvictimOfPoliticalCourtDecisionNumber}
              />
            </Col>
          </>)}
        </Row>
      </div>
    </div>
  );
};
