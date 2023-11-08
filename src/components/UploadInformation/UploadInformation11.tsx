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
import { FileTextOutlined, SyncOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export const UploadInformation11 = (props: any) => {
  const dispatch = useAppDispatch();
  const { Option } = Select;
  const globalCertificateOfDeathFatherDtoPrivateNumber = useAppSelector(
    state => state.statment.globalCertificateOfDeathFatherDtoPrivateNumber
  );
  const globalCertificateOfDeathFatherDtoFirstName = useAppSelector(
    state => state.statment.globalCertificateOfDeathFatherDtoFirstName
  );
  const globalCertificateOfDeathFatherDtoLastName = useAppSelector(
    state => state.statment.globalCertificateOfDeathFatherDtoLastName
  );
  const globalCertificateOfDeathFatherDtoDeathDate = useAppSelector(
    state => state.statment.globalCertificateOfDeathFatherDtoDeathDate
  );
  const globalCertificateOfDeathFatherDtoDeathSertificateNumber = useAppSelector(
    state => state.statment.globalCertificateOfDeathFatherDtoDeathSertificateNumber
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
        <div className="textOfDoc"><FileTextOutlined className='textOfDocIcon' /> მარჩენალის გარდაცვალების მოწმობა (მამის მონაცემები)</div>
      </div>
      <div className="cardPading">
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={7}>
            <div className="marginClass"> პირადი ნომერი</div>
            <Input
              className="uploadInputs"
              name="globalCertificateOfDeathFatherDtoPrivateNumber"
              onChange={e => changeinputs(e)}
              value={globalCertificateOfDeathFatherDtoPrivateNumber}
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={5}>
            <div className="marginClass"> სახელი </div>
            <Input
              value={globalCertificateOfDeathFatherDtoFirstName}
              className="uploadInputs"
              name="globalCertificateOfDeathFatherDtoFirstName"
              onChange={e => changeinputs(e)}
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={12}>
            <div className="marginClass"> გვარი </div>
            <Input
              className="uploadInputs"
              name="globalCertificateOfDeathFatherDtoLastName"
              onChange={e => changeinputs(e)}
              value={globalCertificateOfDeathFatherDtoLastName}
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
              name="globalCertificateOfDeathFatherDtoDeathDate"
              value={
                globalCertificateOfDeathFatherDtoDeathDate != ''
                  ? dayjs(globalCertificateOfDeathFatherDtoDeathDate)
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
              name="globalCertificateOfDeathFatherDtoDeathSertificateNumber"
              onChange={e => changeinputs(e)}
              value={globalCertificateOfDeathFatherDtoDeathSertificateNumber}
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={12}>
            <div className="marginClass">ნათესაური კავშირი </div>
            <Select
              value={'2'}
              disabled
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
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
              onChange={e =>
                handleChangeSelect(e, 'globalCertificateOfDeathFatherDtoRelationType')
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
