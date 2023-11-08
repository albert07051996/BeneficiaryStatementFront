import {
  Layout,
  Menu,
  Button,
  Dropdown,
  Space,
  Input,
  Col,
  Radio,
  DatePicker,
  Select,
  Row,
} from 'antd';
import React, { useState, useEffect } from 'react';
import { RouterList } from '../../router/Router';
import {
  getListPensionTypes,
  addPensionStatement,
  changeState,
} from '../../redux/slices/steatmentSlice';
import './uploadInformation.css';
import { MobileUpdateAfterLogging } from '../MobileUpdateAfterLogging/MobileUpdateAfterLogging';
import { useAppDispatch, useAppSelector } from '../../hooks';
import type { RadioChangeEvent } from 'antd';
import dayjs from 'dayjs';
import es from 'antd/es/date-picker/locale/ka_GE';
import { LoStatusDate } from '../../constants';
import { LoStatus } from '../../constants';
import { LimitationPossibilityReason } from '../../constants';
import { FileTextOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
export const UploadInformation = (props: any) => {
  const listMedicalInstitutions = useAppSelector(
    state => state.statment.listMedicalInstitutions
  );
  const globalExtractOfTheActDtoActExtractSeries = useAppSelector(
    state => state.statment.globalExtractOfTheActDtoActExtractSeries
  );
  const globalExtractOfTheActDtoActExtractNumber = useAppSelector(
    state => state.statment.globalExtractOfTheActDtoActExtractNumber
  );
  const globalExtractOfTheActDtoMedicalInstitutionHead = useAppSelector(
    state => state.statment.globalExtractOfTheActDtoMedicalInstitutionHead
  );
  const globalExtractOfTheActDtoDoctor = useAppSelector(
    state => state.statment.globalExtractOfTheActDtoDoctor
  );
  const globalExtractOfTheActDtoMedicalInstitutionId = useAppSelector(
    state => state.statment.globalExtractOfTheActDtoMedicalInstitutionId
  );
  const globalExtractOfTheActDtoLoStatus = useAppSelector(
    state => state.statment.globalExtractOfTheActDtoLoStatus
  );
  const globalExtractOfTheActDtoLoStatusDate = useAppSelector(
    state => state.statment.globalExtractOfTheActDtoLoStatusDate
  );
  const globalExtractOfTheActDtoMedicalCheck = useAppSelector(
    state => state.statment.globalExtractOfTheActDtoMedicalCheck
  );
  const globalExtractOfTheActDtoCheckDate = useAppSelector(
    state => state.statment.globalExtractOfTheActDtoCheckDate
  );

  const globalExtractOfTheActDtoDateOfNextCheck = useAppSelector(
    state => state.statment.globalExtractOfTheActDtoDateOfNextCheck
  );

  const globalExtractOfTheActDtoLimitationPossibilityReason = useAppSelector(
    state => state.statment.globalExtractOfTheActDtoLimitationPossibilityReason
  );

  const globalExtractOfTheActDtoLoStatusLimitDate = useAppSelector(
    state => state.statment.globalExtractOfTheActDtoLoStatusLimitDate
  );
  const [medicalnstitution, setMedicalnstitution] = useState<any>();
  const [collapsed, setCollapsed] = useState(false);
  const [data, setdata] = useState<any>({ name: '', value: '' });
  const [checkedRadio, setCheckedRadio] = useState<any>(null);
  const dispatch = useAppDispatch();
  const [state, setState] = useState<{
    extractOfTheActDtoMedicalInstitutionId: string;
    extractOfTheActDtoActExtractSeries: string;
    extractOfTheActDtoMedicalCheck: string;
    extractOfTheActDtoCheckDate: any;
    extractOfTheActDtoLoStatus: string;
    extractOfTheActDtoLoStatusDate: string;
    extractOfTheActDtoDateOfNextCheck: any;
    extractOfTheActDtoLimitationPossibilityReason: string;
    extractOfTheActDtoActExtractNumber: string;
    extractOfTheActDtoMedicalInstitutionHead: string;
    extractOfTheActDtoDoctor: string;
  }>({
    extractOfTheActDtoMedicalInstitutionId: '',
    extractOfTheActDtoActExtractSeries: '',
    extractOfTheActDtoMedicalCheck: '',
    extractOfTheActDtoCheckDate: '',
    extractOfTheActDtoLoStatus: '',
    extractOfTheActDtoLoStatusDate: '',
    extractOfTheActDtoDateOfNextCheck: '',
    extractOfTheActDtoLimitationPossibilityReason: '1',
    extractOfTheActDtoActExtractNumber: '',
    extractOfTheActDtoMedicalInstitutionHead: '',
    extractOfTheActDtoDoctor: '',
  });
  const { Option } = Select;
  const changeinputs = (e: any) => {
        const { name, value } = e.target;
       let k = { name: name, value: value };
    dispatch(changeState(k));

  };

  const changedate = (date: any, dateString: any) => {
     let k = {
      name: 'globalExtractOfTheActDtoCheckDate',
      value: dayjs(date).format('YYYY-MM-DD'),
    };
    dispatch(changeState(k));
  };

  const nextChangedate = (date: any, dateString: any) => {
    setState({
      ...state,
      extractOfTheActDtoDateOfNextCheck: dayjs(date).format('YYYY-MM-DD'),
    });
    let k = {
      name: 'globalExtractOfTheActDtoDateOfNextCheck',
      value: dayjs(date).format('YYYY-MM-DD'),
    };
    dispatch(changeState(k));
  };


  const changeLimitDate = (date: any, dateString: any) => {
    let k = {
      name: 'globalExtractOfTheActDtoLoStatusLimitDate',
      value: dayjs(date).format('YYYY-MM-DD'),
    };
    dispatch(changeState(k));
  };

  const handleChangeSelect = (id: any, name: string) => {
    let k = { name: name, value: id };
    dispatch(changeState(k));
  };

  const changeRadioButton = (e: RadioChangeEvent) => {   
    let k = {
      name: 'globalExtractOfTheActDtoMedicalCheck',
      value: e.target.value,
    };
    dispatch(changeState(k)); 
  };
  return (
    <>
      <div className="mainTop2">
        <div className='textOfDoc'>
        <FileTextOutlined  className='textOfDocIcon' />
          შესაბამისი სამედიცინო დაწესებულების მიერ გაცემული სამედიცინო-სოციალური
          ექსპერტიზის შემოწმების აქტის ამონაწერი
        </div>
      </div>
      <div className="cardPading">
        <Row gutter={20}>
          <Col
            className="infoCols"
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            xxl={12}
          >
            <div className="marginClass widthForTextName"> სამედიცინო დაწესებულების დასახელება </div>
            <Select
              value={globalExtractOfTheActDtoMedicalInstitutionId}
              showSearch
              className="infoSelects"
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
                handleChangeSelect(e, 'globalExtractOfTheActDtoMedicalInstitutionId')
              }
            >
              {listMedicalInstitutions?.map((item: any) => (
                <Option key={item?.id} value={item?.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col className="infoCols" xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <div className="marginClass"> სსე აქტის ამონაწერის სერია * </div>
            <Input
              value={globalExtractOfTheActDtoActExtractSeries}
              className="sseAct"
              // style={{width:'449px'}}
              name="globalExtractOfTheActDtoActExtractSeries"
              onChange={e => changeinputs(e)}
            />
          </Col>
        </Row>

        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={5} xl={5} xxl={6}>
            <div className="marginClass">სამედიცინო შემოწმება</div>

            <Radio.Group
              onChange={changeRadioButton}
              value={globalExtractOfTheActDtoMedicalCheck}
            >
              <Radio value={1} className="marginClass">
                პირველადი
              </Radio>
              <Radio value={2} className="marginClass">
                განმეორებადი
              </Radio>
            </Radio.Group>
          </Col>
          <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={5}>
            <div className="marginClass">შემოწმების თარიღი</div>
            <DatePicker
              locale={es}
              format="DD/MM/YYYY"
              className="datepickerUpload"
              onChange={changedate}
              allowClear={false}
              value={
                globalExtractOfTheActDtoCheckDate != ''
                  ? dayjs(globalExtractOfTheActDtoCheckDate)
                  : undefined
              }
            // value={globalExtractOfTheActDtoCheckDate}
            />
          </Col>
          <Col xs={24} sm={24} md={10} lg={10} xl={2} xxl={1}></Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={12}>
            <div className="marginClass">
              {' '}
              სტატუსი
            </div>
            <Select
              showSearch
              value={globalExtractOfTheActDtoLoStatus}
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
                handleChangeSelect(e, 'globalExtractOfTheActDtoLoStatus')
              }
            >
              {LoStatus?.map((item: any) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={8}>
            <div className="marginClass widthForText"> სსე შემოწმების აქტის # </div>
            <Input
              className="medicalInstitution"
              name="globalExtractOfTheActDtoActExtractNumber"
              value={globalExtractOfTheActDtoActExtractNumber}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={9} xl={9} xxl={8}>
            <div className="marginClass checkDateM">დაწესებულების ხელმძღვანელი </div>
            <Input
              className="medicalInstitution"
              name="globalExtractOfTheActDtoMedicalInstitutionHead"
              value={globalExtractOfTheActDtoMedicalInstitutionHead}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={7} xl={8} xxl={8}>
            <div className="marginClass"> ექიმი სპეციალისტი </div>
            <Input
              className="medicalInstitution"
              name="globalExtractOfTheActDtoDoctor"
              value={globalExtractOfTheActDtoDoctor}
              onChange={e => changeinputs(e)}
            />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={8}>
            <div className="marginClass"> შშ სტატუსის ვადა* </div>
            <Select
              showSearch
              style={{ width: '100%' }}          
              placeholder="გთხოვთ შეავსოთ"
              value={globalExtractOfTheActDtoLoStatusDate}
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
                handleChangeSelect(e, 'globalExtractOfTheActDtoLoStatusDate')
              }
            >
              {LoStatusDate?.map((item: any) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} sm={24} md={24} lg={9} xl={9} xxl={8}>
            <div className="marginClass widthForTextName2"> შესაძლებლობის შეზღუდვის მიზეზი</div>
            <Select
              disabled
              showSearch
              style={{ width: '100%' }}
              placeholder="გთხოვთ შეავსოთ"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              value={globalExtractOfTheActDtoLimitationPossibilityReason}
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
              onChange={e =>
                handleChangeSelect(
                  e,
                  'globalExtractOfTheActDtoLimitationPossibilityReason'
                )
              }
            >
              {LimitationPossibilityReason?.map((item: any) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={7}>
            {globalExtractOfTheActDtoLoStatusDate == '1' && (<>
              <div className="marginClass"> მორიგი შემოწმების თარიღი * </div>
              <DatePicker
                locale={es}
                // style={{ width: 150 }}
                format="DD/MM/YYYY"
                className="datepickerUpload"
                onChange={nextChangedate}
                allowClear={false}
                value={
                  globalExtractOfTheActDtoDateOfNextCheck != ''
                    ? dayjs(globalExtractOfTheActDtoDateOfNextCheck)
                    : undefined
                }
              />
            </>
            )}

          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            {globalExtractOfTheActDtoLoStatusDate == '1' && (
              <>
                <div className="marginClass"> სტატუსი მიენიჭა ვადით </div>
                <DatePicker
                  locale={es}
                  style={{ maxWidth: 200 }}
                  format="DD/MM/YYYY"
                  className="datepickerUpload"
                  onChange={changeLimitDate}
                  allowClear={false}
                  value={
                    globalExtractOfTheActDtoLoStatusLimitDate != ''
                      ? dayjs(globalExtractOfTheActDtoLoStatusLimitDate)
                      : undefined
                  }
                />
              </>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};