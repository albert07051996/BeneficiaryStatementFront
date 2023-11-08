import {
  Layout,
  Input,
  Col,
  Radio,
  DatePicker,
  Select,
  Row,
} from 'antd';
import React, { useState, useEffect } from 'react';
import { 
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

export const UploadInformation7 = (props: any) => {
  const listMedicalInstitutions = useAppSelector(
    state => state.statment.listMedicalInstitutions
  );
  const secondGlobalActExtractSeries = useAppSelector(
    state => state.statment.secondGlobalActExtractSeries
  );
  const secondGlobalActExtractNumber = useAppSelector(
    state => state.statment.secondGlobalActExtractNumber
  );
  const secondGlobalMedicalInstitutionHead = useAppSelector(
    state => state.statment.secondGlobalMedicalInstitutionHead
  );
  const secondGlobalDoctor = useAppSelector(
    state => state.statment.secondGlobalDoctor
  );
  const secondGlobalMedicalInstitutionId = useAppSelector(
    state => state.statment.secondGlobalMedicalInstitutionId
  );
  const secondGlobalLoStatus = useAppSelector(
    state => state.statment.secondGlobalLoStatus
  );
  const secondGlobalLoStatusDate = useAppSelector(
    state => state.statment.secondGlobalLoStatusDate
  );
  const secondGlobalMedicalCheck = useAppSelector(
    state => state.statment.secondGlobalMedicalCheck
  );
  const secondGlobalCheckDate = useAppSelector(
    state => state.statment.secondGlobalCheckDate
  );

  const secondGlobalDateOfNextCheck = useAppSelector(
    state => state.statment.secondGlobalDateOfNextCheck
  );
  const secondGlobalLoStatusLimitDate = useAppSelector(
    state => state.statment.secondGlobalLoStatusLimitDate
  );
  const secondGlobalLimitationPossibilityReason = useAppSelector(
    state => state.statment.secondGlobalLimitationPossibilityReason
  );
  const [collapsed, setCollapsed] = useState(false);
  const [medicalnstitution, setMedicalnstitution] = useState<any>();
  const [data, setdata] = useState<any>({ name: '', value: '' });
  const [checkedRadio, setCheckedRadio] = useState<any>(null);
  const dispatch = useAppDispatch();
  const { Option } = Select;
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

  const changeinputs = (e: any) => {
    const { name, value } = e.target;
    let k = { name: name, value: value };
    dispatch(changeState(k));
  };

  const changeLimitDate = (date: any, dateString: any) => {
    let k = {
      name: 'secondGlobalLoStatusLimitDate',
      value: dayjs(date).format('YYYY-MM-DD'),
    };
    dispatch(changeState(k));
  };

  const changedate = (date: any, dateString: any) => {
    let k = {
      name: 'secondGlobalCheckDate',
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
      name: 'secondGlobalDateOfNextCheck',
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
      name: 'secondGlobalMedicalCheck',
      value: e.target.value,
    };
    dispatch(changeState(k));
    };

  return (
    <>
      <div className="mainTop2">
        <div className="textOfDoc">
        <FileTextOutlined  className='textOfDocIcon' />
          შესაბამისი სამედიცინო დაწესებულების მიერ გაცემული სამედიცინო-სოციალური
          ექსპერტიზის შემოწმების აქტის ამონაწერი, რომელშიც მითითებული იქნება
          შესაძლებლობის შეზღუდვის მიზეზობრივი კავშირი ომთან
        </div>
      </div>
      <div className="cardPading">
        <Row gutter={20}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            xxl={12}>
            <div className="marginClass widthForTextName"> სამედიცინო დაწესებულების დასახელება </div>
            <Select          
              value={secondGlobalMedicalInstitutionId}
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
                handleChangeSelect(e, 'secondGlobalMedicalInstitutionId')
              }
            >
              {listMedicalInstitutions?.map((item: any) => (
                <Option key={item?.id} value={item?.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <br />        
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            xxl={12}>
            <div className="marginClass"> სსე აქტის ამონაწერის სერია * </div>
            <Input          
              value={secondGlobalActExtractSeries}
              className="uploadInputs"
              name="secondGlobalActExtractSeries"
              onChange={e => changeinputs(e)}
            />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={5} xl={5} xxl={6}>
            <div className="marginClass">სამედიცინო შემოწმება</div>

            <Radio.Group
              onChange={changeRadioButton}
              value={secondGlobalMedicalCheck}
            >
              <Radio value={1} className="marginClass">
                პირველადი
              </Radio>
              <br />
              <Radio value={2} className="marginClass">
                განმეორებადი
              </Radio>
            </Radio.Group>
          </Col>{' '}
          <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={5}>
            <div className="marginClass checkDateM">შემოწმების თარიღი</div>
            <DatePicker         
              locale={es}
              format="DD/MM/YYYY"
              className="datepickerUpload "
              onChange={changedate}
              allowClear={false}
              value={
                secondGlobalCheckDate != ''
                  ? dayjs(secondGlobalCheckDate)
                  : undefined
              }   
            />
          </Col>
          <Col xs={24} sm={24} md={10} lg={10} xl={2} xxl={1}></Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={12}>
            <div className="marginClass">შშ სტატუსი</div>
            <Select
              showSearch
              value={secondGlobalLoStatus}
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
              onChange={e => handleChangeSelect(e, 'secondGlobalLoStatus')}
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
            <div className="marginClass"> შშ სტატუსის ვადა </div>

            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder="გთხოვთ შეავსოთ"
              value={secondGlobalLoStatusDate}
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
              onChange={e => handleChangeSelect(e, 'secondGlobalLoStatusDate')}
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
              value={secondGlobalLimitationPossibilityReason}
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
              onChange={e =>
                handleChangeSelect(e, 'secondGlobalLimitationPossibilityReason')
              }
            >
              {LimitationPossibilityReason?.map((item: any) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={8}>
            <div className="marginClass"> სსე შემოწმების აქტის #</div>
            <Input
              className="uploadInputs"
              style={{ width: '100%' }}
              name="secondGlobalActExtractNumber"
              value={secondGlobalActExtractNumber}
              onChange={e => changeinputs(e)}
            />
          </Col>

        </Row>
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={8}>
            <div className="marginClass heightForTitle">
              {' '}
              სამედიცინო დაწესებულების ხელმძღვანელი{' '}
            </div>
            <Input
              className="uploadInputs"
              name="secondGlobalMedicalInstitutionHead"
              value={secondGlobalMedicalInstitutionHead}
              onChange={e => changeinputs(e)}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={9} xl={9} xxl={8}>
            <div className="marginClass heightForTitle"> ექიმი სპეციალისტი </div>
            <Input
              className="uploadInputs"
              name="secondGlobalDoctor"
              value={secondGlobalDoctor}
              onChange={e => changeinputs(e)}
            />
          </Col>
          {secondGlobalLoStatusDate == '1' && (
            <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={7}>
              <div className="marginClass heightForTitle"> მორიგი გადამოწმების თარიღი </div>
              <DatePicker
                locale={es}
                format="DD/MM/YYYY"
                className="datepickerUpload "
                onChange={nextChangedate}
                allowClear={false}
                value={
                  secondGlobalDateOfNextCheck != ''
                    ? dayjs(secondGlobalDateOfNextCheck)
                    : undefined
                }
              />
            </Col>
          )}
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            {secondGlobalLoStatusDate == '1' && (
              <>
                <div className="marginClass"> სტატუსი მიენიჭა ვადით </div>
                <DatePicker
                  locale={es}
                  style={{ maxWidth: 200 }}
                  format="DD/MM/YYYY"
                  className="datepickerUpload"
                  onChange={changeLimitDate}
                  allowClear={false}
                  value={secondGlobalLoStatusLimitDate != ''
                    ? dayjs(secondGlobalLoStatusLimitDate)
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
