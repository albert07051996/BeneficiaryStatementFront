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
import { RelationType } from '../../constants';
import dayjs from 'dayjs';
import {  FileTextOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export const UploadInformation2 = (props: any) => {
  const globalDeathSertificatePrivateNumber = useAppSelector(
    state => state.statment.globalDeathSertificatePrivateNumber
  );
  const globalDeathSertificateFirstName = useAppSelector(
    state => state.statment.globalDeathSertificateFirstName
  );
  const globalDeathSertificateLastName = useAppSelector(
    state => state.statment.globalDeathSertificateLastName
  );
  const globalDeathSertificateDeathDate = useAppSelector(
    state => state.statment.globalDeathSertificateDeathDate
  );
  const globalDeathSertificateDeathSertificateNumber = useAppSelector(
    state => state.statment.globalDeathSertificateDeathSertificateNumber
  );
  const globalDeathSertificateRelationType = useAppSelector(
    state => state.statment.globalDeathSertificateRelationType
  );
  const dispatch = useAppDispatch();

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

  const { Option } = Select;

  const changeinputs = (e: any) => {
    const { name, value } = e.target;
    let k = { name: name, value: value };
    dispatch(changeState(k));
  };

  return (
    <div>
      <div className="mainTop2">
        <div className="textOfDoc"><FileTextOutlined  className='textOfDocIcon' /> მარჩენალის გარდაცვალების მოწმობა</div>
      </div>
   
      <div className="cardPading">
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={7}>
            <div className="marginClass"> პირადი ნომერი</div>
            <Input
              className="uploadInputs"          
              name="globalDeathSertificatePrivateNumber"
              onChange={e => changeinputs(e)}
              value={globalDeathSertificatePrivateNumber}
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={5}>
            <div className="marginClass"> სახელი </div>
            <Input
              value={globalDeathSertificateFirstName}
              className="uploadInputs"         
              name="globalDeathSertificateFirstName"
              onChange={e => changeinputs(e)}
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={12}>
            <div className="marginClass"> გვარი </div>
            <Input
              className="uploadInputs"          
              name="globalDeathSertificateLastName"
              onChange={e => changeinputs(e)}
              value={globalDeathSertificateLastName}
            />
          </Col>
        </Row>

        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={5} xl={5} xxl={6}>
            <div className="marginClass heightForDeath"> გარდაცვალების თარიღი </div>
            <DatePicker
              format="DD-MM-YYYY"
              className="datepickerUpload "
              onChange={Changedate}
              name="globalDeathSertificateDeathDate"
              value={
                globalDeathSertificateDeathDate != ''
                  ? dayjs(globalDeathSertificateDeathDate)
                  : undefined
              }
            />
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={1} xxl={1}></Col>
          <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={5}>
            <div className="marginClass heightForDeath" >
              {' '}
              გარდაცვალების მოწმობის #{' '}
            </div>
            <Input
              className="uploadInputs"           
              name="globalDeathSertificateDeathSertificateNumber"
              onChange={e => changeinputs(e)}
              value={globalDeathSertificateDeathSertificateNumber}
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={12}>
            <div className="marginClass heightForDeath">ნათესაური კავშირი გარდაცვლილთან </div>
            <Select
              value={globalDeathSertificateRelationType}
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
                handleChangeSelect(e, 'globalDeathSertificateRelationType')
              }
            >
              {RelationType?.map((item: any) => (
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
