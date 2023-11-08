import {
  Layout,
  Input,
  Col,
  DatePicker,
  Select,
  Row,
} from 'antd';
import {

  changeState,
} from '../../redux/slices/steatmentSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ParentRelationType } from '../../constants';
import dayjs from 'dayjs';
import { FileTextOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

export const UploadInformation10 = (props: any) => {
  const dispatch = useAppDispatch();
  const { Option } = Select;
  const globalCertificateOfDeathMotherDtoPrivateNumber = useAppSelector(
    state => state.statment.globalCertificateOfDeathMotherDtoPrivateNumber
  );
  const globalCertificateOfDeathMotherDtoFirstName = useAppSelector(
    state => state.statment.globalCertificateOfDeathMotherDtoFirstName
  );
  const globalCertificateOfDeathMotherDtoLastName = useAppSelector(
    state => state.statment.globalCertificateOfDeathMotherDtoLastName
  );
  const globalCertificateOfDeathMotherDtoDeathDate = useAppSelector(
    state => state.statment.globalCertificateOfDeathMotherDtoDeathDate
  );
  const globalCertificateOfDeathMotherDtoDeathSertificateNumber = useAppSelector(
    state => state.statment.globalCertificateOfDeathMotherDtoDeathSertificateNumber
  );

  const handleChangeSelect = (id: any, name: string) => {
    let k = { name: name, value: id };
    dispatch(changeState(k));
  };

  const Changedate = (date: any, dateString: any) => {
    let k = {
      name: 'globalDeathSertificateDeathDate',
      value: dayjs(date).format('YYYY-MM-DD'),
    };
    dispatch(changeState(k));
  };

  const changeinputs = (e: any) => {
    const { name, value } = e.target;
    let k = { name: name, value: value };
    dispatch(changeState(k));
  };

  return (
    <div>
      <div className="mainTop2">
        <div className="textOfDoc"><FileTextOutlined className='textOfDocIcon' /> მარჩენალის გარდაცვალების მოწმობა (დედის მონაცემები)</div>
      </div>
      <div className="cardPading">
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={7}>
            <div className="marginClass"> პირადი ნომერი</div>
            <Input
              className="uploadInputs"
              name="globalCertificateOfDeathMotherDtoPrivateNumber"
              onChange={e => changeinputs(e)}
              value={globalCertificateOfDeathMotherDtoPrivateNumber}
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={5}>
            <div className="marginClass"> სახელი </div>
            <Input
              value={globalCertificateOfDeathMotherDtoFirstName}
              className="uploadInputs"
              name="globalCertificateOfDeathMotherDtoFirstName"
              onChange={e => changeinputs(e)}
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={12}>
            <div className="marginClass"> გვარი </div>
            <Input
              className="uploadInputs"
              name="globalCertificateOfDeathMotherDtoLastName"
              onChange={e => changeinputs(e)}
              value={globalCertificateOfDeathMotherDtoLastName}
            />
          </Col>
        </Row>

        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={5} xl={5} xxl={6}>
            <div className="marginClass widthForDeath"> გარდაცვალების თარიღი </div>
            <DatePicker
              format="DD-MM-YYYY"
              className="datepickerUpload "
              onChange={Changedate}
              name="globalCertificateOfDeathMotherDtoDeathDate"
              value={
                globalCertificateOfDeathMotherDtoDeathDate != ''
                  ? dayjs(globalCertificateOfDeathMotherDtoDeathDate)
                  : undefined
              }
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={1} xxl={1}></Col>
          <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={5}>
            <div className="marginClass widthForDeath" >
              {' '}
              გარდაცვალების მოწმობის #{' '}
            </div>
            <Input
              className="uploadInputs"
              name="globalCertificateOfDeathMotherDtoDeathSertificateNumber"
              onChange={e => changeinputs(e)}
              value={globalCertificateOfDeathMotherDtoDeathSertificateNumber}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={12}>
            <div className="marginClass">ნათესაური კავშირი </div>
            <Select
              value={'1'}
              showSearch
              className='spouseSelect'
              placeholder="გთხოვთ შეავსოთ"
              optionFilterProp="children"
              disabled
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
                handleChangeSelect(e, 'globalCertificateOfDeathMotherDtoRelationType')
              }
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
