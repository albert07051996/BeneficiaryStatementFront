import {
  Select,
  Button,
  Radio,
  Col,
  Row,
  Card,
  Upload,
  Input,
  Checkbox,
  DatePicker,
  message,
  Breadcrumb,
  InputNumber,
} from 'antd';
import {
  UploadOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

import React, { useEffect, useState } from 'react';
import {
  CheckActiveOtherStateIssue,
  GetMinerProfessions,
  clearCreateMinerStatementSuccess,
  UpdateMinerStatement,
} from '../../../redux/slices/steatmentSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import type { RadioChangeEvent } from 'antd';
import { LANDING_PAGE } from '../../../router/paths';
import { useNavigate,  useParams } from 'react-router-dom';
import {
  getMinerStatementById,
  setMinerStatementFalse,
} from '../../../redux/slices/editSteatmentSlice';
import Vector7 from '../../../assets/images/Vector7.svg';
import './AddMinerSteatment.css';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { BranchesAndDebtor2 } from '../../branches&Debtor/BranchesAndDebtor2';
import es from 'antd/es/date-picker/locale/ka_GE';
import dayjs from 'dayjs';
import { BranchesAndDebtorMiner } from '../../branches&Debtor/BranchesAndDebtorMiner';

export const EditMinerSteatment = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let viewRegime = window.location.pathname.includes('view');

  const dispatch = useAppDispatch();
  const person = useAppSelector(state => state.statment.personInfo);
  const answerOtherStateIssue = useAppSelector(
    state => state.statment.answerOtherStateIssue
  );

  const CreateMinerStatementSuccess = useAppSelector(
    state => state.statment.CreateMinerStatementSuccess
  );
  const CreateMinerStatementError = useAppSelector(
    state => state.statment.CreateMinerStatementError
  );
  const listMinerProffesions = useAppSelector(
    state => state.statment.listMinerProffesions
  );
  const addPensionStatementError = useAppSelector(
    state => state.statment.addPensionStatementError
  );
  const regions = useAppSelector(state => state.statment.regions);
  const listTerminationReason = useAppSelector(
    state => state.statment.listTerminationReason
  );
  const globalMinerStatement = useAppSelector(state => state.editSteatment);
  const [accept, setAccept] = useState<any>(false);
  const [active, setActive] = useState<any>(false);
  const [accessPersonalInformation2, setAccessPersonalInformation2] = useState<any>(true);
  const [iGotAcquaintedChecked, setIGotAcquaintedChecked] = useState<any>(true);
  const [agencyAdmissionChecked, setAgencyAdmissionChecked] = useState<any>(true);
  const [bankDetailsChecked, setBankDetailsChecked] = useState<any>(true);
  const [existingDocuments, setExistingDocuments] = useState<any>([]);
  const [differenceDocuments, setdifferenceDocuments] = useState<any>([]);
   const [docUploadSucces, setDocUploadSucces] = useState<any>(false);
  const [terminationReason, setTerminationReason] = useState<any>('');
  const [CurrentPensionTypeId, setCurrentPensionTypeId] = useState<any>(
    '00000000-0000-0000-0000-000000000000'
  );
  const [documentDropDown, setDocumentDropDown] = useState<any>([]);
  const { Dragger } = Upload;
  const { Option } = Select;
  const [state, setstate] = useState<{
    operationStatusId: string;
    regionValue: string;
    territorialUnitId: string;
    isEmployeed: string;
    phoneNumber: string;
    smsCode: string;
    documents: any;
    document: any;
    documentName: any;
    documentTypeId: any;
    stopOtherSteatments: boolean;
    otherTerminationReason: string;
    //
    employer: string;
    proffesion: string;
    date1: any;
    certificateNumber: string;
    workExperience: any;
    certificateDate: any | null;
    workplace: string;
    minerProfessionId: string;
    employmentStatus: string;
    workStartDate: any;
    terminationDate: any;
  }>({
    operationStatusId: '',
    regionValue: '',
    territorialUnitId: '00000000-0000-0000-0000-000000000000',
    isEmployeed: 'false',
    phoneNumber: '',
    smsCode: '',
    documents: [],
    document: null,
    documentName: '',
    documentTypeId: '',
    stopOtherSteatments: false,
    // terminationReason: '',
    otherTerminationReason: '',
    employer: '',
    proffesion: '',
    date1: '',
    certificateNumber: '',
    workExperience: 0,
    certificateDate: null,
    workplace: '',
    minerProfessionId: '',
    employmentStatus: '',
    workStartDate: '0001-01-01',
    terminationDate: '0001-01-01',
  });
  


  useEffect(() => {
    dispatch(getMinerStatementById(id));
  }, []);

  const inputdate1Change = (date: any, dateString: any) => {
      setstate({ ...state, certificateDate: dayjs(date).format('YYYY-MM-DD') });
  
  };
  const workStartDateChange = (date: any, dateString: any) => {
    setstate({ ...state, workStartDate: dayjs(date).format('YYYY-MM-DD') });
  };
  const terminationDateChange = (date: any, dateString: any) => {
    setstate({ ...state, terminationDate: dayjs(date).format('YYYY-MM-DD') });
  };

  useEffect(() => {
    dispatch(GetMinerProfessions('es'));
  }, []);

  useEffect(() => {
    const differenceDocumentsValue = [
      ...getDifference(documentDropDown, state.documents),
    ];
    const existingDocuments = [...getSome(documentDropDown, state.documents)];
    setExistingDocuments(existingDocuments);
    setdifferenceDocuments(differenceDocumentsValue);
  }, [documentDropDown]);

  useEffect(() => {
    if (state.operationStatusId == '41ab3791-a327-4117-bd8a-499a4b20d552') {
      dispatch(CheckActiveOtherStateIssue(person));
    }
  }, [state.operationStatusId, person]);

  useEffect(() => {
    if (person.hasStatements == false && person.payoutsList.length == 0) {
      setstate({
        ...state,
        operationStatusId: '41ab3791-a327-4117-bd8a-499a4b20d552',
      });
    }
  }, [person]);

  useEffect(() => {
    if (answerOtherStateIssue.length != 0) {    
      if (answerOtherStateIssue.pensionTypeId) {
        setCurrentPensionTypeId(answerOtherStateIssue.pensionTypeId);
      }
    }
  }, [answerOtherStateIssue]);

  const getDifference = (array1: any, array2: any) => {
    return array1.filter((object1: any) => {
      return !array2.some((object2: any) => {
        return object1.id === object2.DocumentTypeId;
      });
    });
  };

  const getSome = (array1: any, array2: any) => {
    return array1.filter((object1: any) => {
      return array2.some((object2: any) => {
        return object1.id === object2.DocumentTypeId;
      });
    });
  };

  useEffect(() => {
    const differenceDocumentsValue = [
      ...getDifference(documentDropDown, state.documents),
    ];
    const existingDocuments = [...getSome(documentDropDown, state.documents)];
    setExistingDocuments(existingDocuments);
    setdifferenceDocuments(differenceDocumentsValue);
    setDocUploadSucces(false);
  }, [docUploadSucces]);

  const [radio, setRadio] = useState<boolean>(false);
  const handleAddFile = async (file: any, fileList: any, Id: any) => {
    var docs = state.documents;
    docs.push({
      uid: file.uid,
      name: Id,
      DocumentTypeId: Id,
      FormFile: file,
    });

    setstate({
      ...state,
      documentName: '',
      documentTypeId: '',
      document: null,
      documents: docs,
    });
    setDocUploadSucces(true);
  };

  useEffect(() => {
    if (addPensionStatementError !== null) {
      Object.entries(addPensionStatementError || {}).forEach(([key, value]) => {
        message.error(`${value}`);
      });
    }
  }, [addPensionStatementError]);

  useEffect(() => {
    if (globalMinerStatement.MinerStatementByIdSuccess == true) {
      setstate({
        ...state,
        operationStatusId: globalMinerStatement.MinerStatement.operationStatus?.id,
        employer: globalMinerStatement.MinerStatement?.employer,
        minerProfessionId: globalMinerStatement.MinerStatement.minerProfession?.id,
        workplace: globalMinerStatement.MinerStatement?.workplace,
        employmentStatus: globalMinerStatement.MinerStatement?.employmentStatus,
        certificateNumber: globalMinerStatement.MinerStatement?.certificateNumber,
        certificateDate: globalMinerStatement.MinerStatement?.certificateDate,
        workStartDate: globalMinerStatement.MinerStatement?.workStartDate,
        workExperience: globalMinerStatement.MinerStatement?.workExperience,
        territorialUnitId:
          globalMinerStatement.MinerStatement.territorialUnitGroup?.id,

        regionValue:
          globalMinerStatement.MinerStatement.territorialUnitGroup
            ?.regionalServiceCenterId,   
      });
      setRadio(globalMinerStatement.MinerStatement.beneficiary.isCivilServant);
      setMinerStatementFalse();
      setActive(true);
    }
  }, [globalMinerStatement.MinerStatementByIdSuccess]);

  useEffect(() => {
    if (active == true) {
          getDefaultFileList();
      setActive(false);
    }
  }, [active]);

  useEffect(() => {   
    setPersonDocs(minerDoc);
  }, [person]);

  useEffect(() => {
    if (CreateMinerStatementSuccess !== false) {
      dispatch(clearCreateMinerStatementSuccess());
      message.success(`განცხადება წარმატებით გაიგზავნა`);
      localStorage.setItem('selectedKeys', '/landingpage');
      navigate('/landingpage');
    }
  }, [CreateMinerStatementSuccess]);

  useEffect(() => {
    if (CreateMinerStatementError !== null) {
      Object.entries(CreateMinerStatementError || {}).forEach(([key, value]) => {
        message.error(`${value}`);
      });
    }
  }, [CreateMinerStatementError]);

  const uploadRemove = (file: any) => {
    let elementPos = state?.documents
      .map(function (x: any) {
        return x.Uid;
      })
      .indexOf(file.uid);  
    const newFileList = state.documents.slice();
    newFileList.splice(elementPos, 1);
    setstate({
      ...state,
      documents: newFileList,
    });
    setDocUploadSucces(true);
  };

  const documentListForDashboard = [
    {
      id: 'a650f3a5-50bb-4acf-913b-ef93b871c734',
      name: 'საინფორმაციო ბარათი, გაცემული სახელმწიფო სერვისების განვითარების სააგენტოს მიერ, რომლითაც დასტურდება თქვენი საქართველოს ტერიტორიაზე ბოლო 10 წლის განმავლობაში კანონიერად ცხოვრება;',
    },
    // {
    //   id: 'cb8fddb4-282d-42cb-83d3-e9c1dcc69264',
    //   name: 'ცნობა იმის შესახებ, რომ არ იღებთ პენსიას მეორე ქვეყნიდან, რომლის მოქალაქედაც ითვლებით',
    // },
  ];

  const minerDoc = [
    {
      id: 'f3aefdb1-c0c4-4721-9625-0cac127b9bab',
      name: 'დამსაქმებლის მიერ გაცემული ცნობა',
    },
  ];

  const changeRadioButton = (e: RadioChangeEvent) => {
    setRadio(e.target.value);
  };
  const handleCheckChange1 = (e: CheckboxChangeEvent) => {
    setIGotAcquaintedChecked(e.target.checked);
  };
  const handleCheckChange2 = (e: CheckboxChangeEvent) => {
    setAgencyAdmissionChecked(e.target.checked);
  };
  const handleCheckChange3 = (e: CheckboxChangeEvent) => {
    setBankDetailsChecked(e.target.checked);
  };
  const handleCheckChange4 = (e: CheckboxChangeEvent) => {
    setAccessPersonalInformation2(e.target.checked);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    setstate({
      ...state,
      stopOtherSteatments: e.target.checked,
    });
  };

  const changeState = (e: any) => {
      const { name, value } = e.target; 
    setstate({ ...state, [name]: value });
  };

  const changeInt = (e: any) => {  
    setstate({ ...state, workExperience: e });
  };

  let formData = new FormData();
 const sendRequest = () => {
    formData.append('Employer', state.employer);
    formData.append('CertificateNumber', state.certificateNumber);
    state.certificateDate &&
      formData.append('CertificateDate', state.certificateDate);
    formData.append('Workplace', state.workplace);
    formData.append('MinerProfessionId', state.minerProfessionId);
    formData.append('EmploymentStatus', state.employmentStatus);
    state.workStartDate && formData.append('WorkStartDate', state.workStartDate);
    state.terminationDate &&
      formData.append('TerminationDate', state.terminationDate);
    id && formData.append('StatementId', id);
    formData.append('WorkExperience', state.workExperience);
    formData.append('CurrentPensionTypeId', CurrentPensionTypeId);
    formData.append('TerritorialUnitId', state?.territorialUnitId);
    formData.append('IGotAcquaintedChecked', iGotAcquaintedChecked);
    formData.append('AgencyAdmissionChecked', agencyAdmissionChecked);
    formData.append('BankDetailsChecked', bankDetailsChecked);
    formData.append('AccessPersonalInformation2', accessPersonalInformation2);
    formData.append('OperationStatusId', state.operationStatusId);
    formData.append('PensionTypeRootId', 'D7096B15-60E2-44E3-898B-BF1F016EE7E0');
    formData.append('PensionTypeId', 'D7096B15-60E2-44E3-898B-BF1F016EE7E0');
    {
      terminationReason && formData.append('TerminationReason', terminationReason);
    }
    {
      state.otherTerminationReason &&
        formData.append('OtherTerminationReason', state.otherTerminationReason);
    }
    formData.append('IsAgreeToStopRequest', state.stopOtherSteatments.toString());
    formData.append('StatementStatus', '1');
    formData.append('StatementType', '1');
    formData.append('Beneficiary.Id', '00000000-0000-0000-0000-000000000000');
    formData.append('Beneficiary.IsCivilServant', radio.toString());
    state.documents.map(
      (document: any, j: any) => (
        formData.append(`Documents[${j}].Name`, document.Name),
        formData.append(`Documents[${j}].DocumentTypeId`, document.DocumentTypeId),
        document.FormFile &&
          formData.append(`Documents[${j}].FormFile`, document.FormFile)
      )
    );

    dispatch(UpdateMinerStatement(formData));
  };

  const handleAgree = () => {
    if (iGotAcquaintedChecked == false) {
      message.error(
        "გთხოვთ დააფიქსიროთ თქვენი თანხმობა 'გავეცანი და პასუხისმგებელი ვარ'-ის მონიშვნით."
      );
    } else {
      setAccept(false);
    }
  };

  const cancelClick = () => {
    navigate(LANDING_PAGE);
  };

  const handleChangeSelect = (id: any, name: string) => {
    if (id !== '137909e6-4155-4d6a-b762-623bd119491c') {
      setTerminationReason('');
    }
    setstate({ ...state, [name]: id });
  };

  const handleChangeTerminationReason = (id: any, name: string) => {
    setTerminationReason(id);
  };

  const numberChange = (e: any) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  const setPersonDocs = (localDoc: any) => {
    if (person.docTypeId == 2 && localDoc.length != 0) {
      let newDoc = localDoc;
      newDoc = localDoc.concat(documentListForDashboard);
      if (newDoc.length != 0) {   
        setDocumentDropDown(newDoc);
      } else setDocumentDropDown([]);
    } else {
      if (localDoc.length != 0) {     
        setDocumentDropDown(localDoc);
      } else setDocumentDropDown([]);
    }
  };

  const operationStatuses = [
    {
      id: '41ab3791-a327-4117-bd8a-499a4b20d552',
      name: 'დამენიშნოს',
    },
    {
      id: '137909e6-4155-4d6a-b762-623bd119491c',
      name: 'შემიწყდეს',
    },
    {
      id: '9404c89f-140f-4d5c-b01a-b3335dba241b',
      name: 'განმიახლდეს',
    },
  ];

  const employmentStatus = [
    {
      id: '1',
      name: 'მიმდინარე',
    },
    {
      id: '2',
      name: 'შეწყვეტილი',
    },
  ];

  let getDefaultFileList = () => {  
    let editDoc = globalMinerStatement.MinerStatement.documents.map(
      (file: any, i: any) => {
        return {       
          name: file.name,
          uid: i,
          status: 'done',
          Name: file.name,
          DocumentTypeId: file.documentTypeId,
        };
      }
    );
    setstate({ ...state, documents: editDoc });
  };

  return (
    <>
      <div  className="addMinerForm">
        {accept ? (
          <div className="registerBlock" id="bechdva">
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              xxl={24}
              className="colForRules"
            >
              <div className="rulesTextPension">
                <div>
                  <div className="rulesTitle">წესები და პირობები</div>
                  <div className="rulesTitle2">პასუხისმგებელი ვარ:</div>
                  <div className="rulesStyles">
                    {' '}
                    _ განცხადებაში ასახული ინფორმაციის და თანდართული დოკუმენტების
                    სისწორეზე: _ ვაცნობო კომპეტენტურ ორგანოს იმ გარემოების დადგომის
                    შესახებ, რომელსაც თან სდევს სახელმწიფო გასაცემელის შეწყვეტა, ამ
                    გარემოების წარმოშობიდან არა უგვიანეს 15 დღისა: _ზედმეტად მიღებული
                    თანხის დაბრუნებაზე
                  </div>

                  <div className="rulesTitle2">
                    {' '}
                    პერსონალური მონაცემების დამუშავება
                  </div>
                  <div className="rulesStyles">
                    {' '}
                    ჩემი განცხადების განსახილველად სსიპ-სოციალური მომსახურების
                    სააგენტოს მიერ დამუშავებულ იქნეს ჩემი პერსონალური მონაცემები
                    (საჭიროების შემთხვევაში განსაკუთრებული კატეგორიის მონაცემები).
                    მათ შორის დადარებულ იქნეს ჩემს განცხადებაში (თანდართულ
                    დოკუმენტ(ებ)ში) არსებული მონაცემები სხვა კომპეტენტურ
                    ადმინისტრაციული ორგანო(ებ)ის მიერ დამუშავებულ პერსონალურ
                    მონაცემებთან ან/და ჩემი განცხადების განსახილველად საჭირო
                    მონაცემები გამოთხოვილი იქნეს სხვა კომპეტენტური ადმინისტრაციული
                    ორგანო(ებ)იდან.{' '}
                  </div>

                  <div className="rulesTitle2">
                    {' '}
                    საბანკო დაწესებულებიდან მონაცემების გამოთხოვა
                  </div>
                  <div className="rulesStyles">
                    {' '}
                    სსიპ-სოციალური მომსახურების სააგენტომ, სახელმწიფო გასაცემლების
                    გამცემი საბანკო დაწესებულებიდან მიიღოს საჭირო ინფორმაცია ჩემს
                    საბანკო ანგარიშზე ჩარიცხული სახელმწიფო გასაცემლების მოძრაობის
                    თაობაზე და ზედმეტად ჩარიცხული თანხების დაბრუნებაზე.
                  </div>

                  <div className="rulesTitle2">
                    {' '}
                    პერსონალური მონაცემების გადაცემა
                  </div>
                  <div className="rulesStyles">
                    {' '}
                    სსიპ-სოციალური მომსახურების სააგენტოში დაცული ჩემი პერსონალური
                    მონაცემები (მათ შორის განსაკუთრებული კატეგორიის მონაცემები)
                    გადაცემულ იქნას, ან უზრუნველყოფილ იქნას მათზე წვდომა სხვა
                    ადმინისტრაციული ორგანოებისათვის ან კერძო სამართლის იურიდიული
                    პირისთვის, "პერსონალურ მონაცემთა დაცვის შესახებ" საქართველოს
                    კანონით დადგენილი მოთხოვნების დაცვით, რაც უკავშირდება ჩემთვის
                    მატერიალური ან/და არამატერიალური სახის დახმარების, ან ბენეფიტის,
                    ან გასაცემლის, ან რაიმე სახის სარგებლობის მიღებას.
                  </div>

                  <Row>
                    <Col>
                      <Checkbox
                        className="checkBoxText"
                        onChange={handleCheckChange1}
                      >
                        პასუხისმგებელი ვარ
                      </Checkbox>
                      <br />
                      <Checkbox
                        className="checkBoxText"
                        onChange={handleCheckChange2}
                      >
                        პერსონალური მონაცემების დამუშავება{' '}
                      </Checkbox>
                      <br />
                      <Checkbox
                        className="checkBoxText"
                        onChange={handleCheckChange3}
                      >
                        საბანკო დაწესებულებიდან მონაცემების გამოთხოვა
                      </Checkbox>
                      <br />
                      <Checkbox
                        className="checkBoxText2"
                        onChange={handleCheckChange4}
                      >
                        პერსონალური მონაცემების გადაცემა{' '}
                      </Checkbox>
                    </Col>
                  </Row>
                </div>

                <Row gutter={20}>
                  <Col>
                    {' '}
                    <Button className="rulesBtnBack" onClick={cancelClick}>                 
                      უკან დაბრუნება{' '}
                    </Button>
                  </Col>
                  {iGotAcquaintedChecked === true &&
                    agencyAdmissionChecked === true &&
                    bankDetailsChecked === true && (
                      <Col>
                        <Button className="rulesBtn" onClick={handleAgree}>
                          თანხმობა{' '}
                        </Button>
                      </Col>
                    )}
                </Row>
              </div>
            </Col>
          </div>
        ) : (
          <>
            <div className="myBreadcrumb">
              <Breadcrumb separator=">">
                <Breadcrumb.Item href="/landingPage">
                  სახელმწიფო გასაცემელი
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                  სოციალური დახმარება (მეშახტე)
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            {state.operationStatusId === '41ab3791-a327-4117-bd8a-499a4b20d552' && (
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                xxl={24}
                className="colForBranchesTop"
              >
                <BranchesAndDebtorMiner />
              </Col>
            )}
            {state.operationStatusId === '137909e6-4155-4d6a-b762-623bd119491c' && (
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                xxl={24}
                className="colForBranchesTop"
              >
                <BranchesAndDebtor2 />
              </Col>
            )}
            <Row>
              <Col xs={24} sm={20} md={20} lg={20} xl={24} xxl={14}>
                <Card  style={{pointerEvents: viewRegime ? 'none' : 'unset'}} className="steatmentCard">
                  <div className="orderTitle">
                    სოციალური დახმარება (მეშახტე) განაცხადის რეგისტრაცია
                  </div>
                  <Row>
                    <Col
                      className="orderColPerson"
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={24}
                    >
                      {' '}
                      მე {person.firstName} {person.lastName} ({person.privateNumber}
                      ), თანახმა ვარ &nbsp;{' '}
                      {person.hasStatements == false &&
                      person.payoutsList.length == 0 ? (
                        <>დამენიშნოს &nbsp;</>
                      ) : (
                        <>
                          <Select
                            value={state.operationStatusId}                         
                            style={{
                              borderRadius: 20,
                              fontFamily: 'FiraGO',
                              maxWidth: '254px',
                              width: '100%',
                            }}
                            placeholder="გთხოვთ შეავსოთ"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                              (option!.children as unknown as string).includes(input)
                            }
                            filterSort={(optionA, optionB) =>
                              (optionA!.children as unknown as string)
                                .toLowerCase()
                                .localeCompare(
                                  (
                                    optionB!.children as unknown as string
                                  ).toLowerCase()
                                )
                            }
                            onChange={e =>
                              handleChangeSelect(e, 'operationStatusId')
                            }
                          >
                            {operationStatuses?.map(item => (
                              <Option key={item.id} value={item.id}>
                                {item.name}
                              </Option>
                            ))}
                          </Select>
                        </>
                      )}{' '}
                      სოციალური დახმარება (მეშახტის) პენსია,
                      {state.operationStatusId ===
                        '9404C89F-140F-4D5C-B01A-B3335DBA241B' && (
                        <> გთხოვთ, განიხილოთ ჩემი განაცხადი.</>
                      )}
                      {state.operationStatusId ===
                        '137909e6-4155-4d6a-b762-623bd119491c' && (
                        <>
                          {' '}
                          შეჩერების მიზეზი &nbsp;
                          <Select                       
                            style={{ borderRadius: 20, marginBottom: '89px' }}
                            placeholder="გთხოვთ შეავსოთ"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                              (option!.children as unknown as string).includes(input)
                            }
                            filterSort={(optionA, optionB) =>
                              (optionA!.children as unknown as string)
                                .toLowerCase()
                                .localeCompare(
                                  (
                                    optionB!.children as unknown as string
                                  ).toLowerCase()
                                )
                            }
                            onChange={e =>
                              handleChangeTerminationReason(e, 'terminationReason')
                            }
                          >
                            {listTerminationReason &&
                              listTerminationReason?.map((item: any) => {
                                return (
                                  <Option key={item.id} value={item.id}>
                                    {item.name}
                                  </Option>
                                );
                              })}
                          </Select>
                        </>
                      )}
                      {terminationReason === 3 &&
                        state.operationStatusId ==
                          '137909e6-4155-4d6a-b762-623bd119491c' && (
                          <>
                            <div className="commentDiv">კომენტარი</div>
                            <Input
                              className="otherTerminationReason"
                              name="otherTerminationReason"
                              onChange={e => changeState(e)}
                            />
                          </>
                        )}
                      {state.operationStatusId ===
                        '41ab3791-a327-4117-bd8a-499a4b20d552' && (
                        <>
                          <div
                            style={{
                              marginBottom: '34px',
                              marginTop: '52px',
                              fontSize: '16px',
                            }}
                          >
                            <div className="docInfo">
                              <div className="docInfoText">
                                მიუთითეთ ცნობაში არსებული ინფორმაცია
                              </div>
                            </div>
                            <Row gutter={50}>
                              <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                                <Row>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <div className="regionTitle">დამსაქმებელი*</div>
                                  </Col>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Input
                                      name="employer"
                                      className="organisationInput"
                                      onChange={e => changeState(e)}
                                      value={state.employer}
                                    />
                                  </Col>
                                </Row>
                              </Col>
                              <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                                <Row>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <div className="regionTitle">პროფესია*</div>
                                  </Col>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Select
                                      value={state?.minerProfessionId}
                                      showSearch
                                      style={{
                                        borderRadius: 20,
                                        maxWidth: '400px',
                                        width: '100%',
                                      }}
                                      placeholder="გთხოვთ შეავსოთ"
                                      optionFilterProp="children"
                                      filterOption={(input, option) =>
                                        (
                                          option!.children as unknown as string
                                        ).includes(input)
                                      }
                                      filterSort={(optionA, optionB) =>
                                        (optionA!.children as unknown as string)
                                          .toLowerCase()
                                          .localeCompare(
                                            (
                                              optionB!.children as unknown as string
                                            ).toLowerCase()
                                          )
                                      }
                                      onChange={e =>
                                        handleChangeSelect(e, 'minerProfessionId')
                                      }
                                    >
                                      {listMinerProffesions &&
                                        listMinerProffesions?.map((item: any) => {                              
                                          return (
                                            <Option key={item.id} value={item.id}>
                                              {item.name}
                                            </Option>
                                          );
                                        })}
                                    </Select>{' '}
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row gutter={50}>
                              <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                                <Row>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <div className="regionTitle">
                                      სამუშაო ადგილი*
                                    </div>
                                  </Col>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Input
                                      value={state?.workplace}
                                      name="workplace"
                                      className="organisationInput"
                                      onChange={e => changeState(e)}
                                    />
                                  </Col>
                                </Row>
                              </Col>
                              <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                                <Row>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <div className="regionTitle">
                                      შრომითი ურთიერთობის სტატუსი *
                                    </div>
                                  </Col>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Select
                                      // showSearch
                                      value={state.employmentStatus}
                                      style={{
                                        borderRadius: 20,
                                        maxWidth: '400px',
                                        width: '100%',
                                      }}
                                      placeholder="გთხოვთ შეავსოთ"
                                      optionFilterProp="children"
                                      filterOption={(input, option) =>
                                        (
                                          option!.children as unknown as string
                                        ).includes(input)
                                      }
                                      filterSort={(optionA, optionB) =>
                                        (optionA!.children as unknown as string)
                                          .toLowerCase()
                                          .localeCompare(
                                            (
                                              optionB!.children as unknown as string
                                            ).toLowerCase()
                                          )
                                      }
                                      onChange={e =>
                                        handleChangeSelect(e, 'employmentStatus')
                                      }
                                    >
                                      {employmentStatus &&
                                        employmentStatus?.map((item: any) => {                                 
                                          return (
                                            <Option key={item.id} value={item.id}>
                                              {item.name}
                                            </Option>
                                          );
                                        })}
                                    </Select>{' '}
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                          <Row gutter={[50, 50]}>
                            <Col xs={24} sm={10} md={10} lg={5} xl={5} xxl={5}>
                              <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <div className="regionSecundTitle">
                                    ცნობის ნომერი*
                                  </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={20}>
                                  <Input
                                    value={state.certificateNumber}
                                    name="certificateNumber"
                                    className="organisationInput"
                                    onChange={e => changeState(e)}
                                  />
                                </Col>
                              </Row>
                            </Col>
                            <Col xs={24} sm={10} md={10} lg={5} xl={5} xxl={5}>
                              <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <div className="regionSecundTitle">
                                    ცნობის თარიღი *
                                  </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <DatePicker
                                    value={
                                      state.certificateDate != ''
                                        ? dayjs(state.certificateDate)
                                        : undefined
                                    }
                                    onChange={inputdate1Change}
                                    className="organisationInput"
                                    locale={es}
                                    format="DD/MM/YYYY"
                                  />
                                </Col>
                              </Row>
                            </Col>
                            <Col xs={24} sm={10} md={10} lg={5} xl={5} xxl={5}>
                              <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <div className="regionSecundTitle">
                                    დაწყების თარიღი{' '}
                                  </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <DatePicker
                                    value={
                                      state.workStartDate != ''
                                        ? dayjs(state.workStartDate)
                                        : undefined
                                    }                               
                                    className="organisationInput"
                                    locale={es}
                                    format="DD/MM/YYYY"
                                    onChange={workStartDateChange}
                                  />
                                </Col>
                              </Row>
                            </Col>
                            <Col xs={24} sm={10} md={10} lg={5} xl={5} xxl={5}>
                              {state.employmentStatus == '2' && (
                                <Row>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <div className="regionSecundTitle">
                                      დასრულების თარიღი *
                                    </div>
                                  </Col>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <DatePicker                                     
                                      className="organisationInput"
                                      locale={es}
                                      format="DD/MM/YYYY"
                                      onChange={terminationDateChange}
                                    />
                                  </Col>
                                </Row>
                              )}
                            </Col>
                          </Row>
                          <br />                        
                          <br />
                          <br />
                                            <Row>
                            <Col xs={24} sm={10} md={10} lg={24} xl={24} xxl={5}>
                              <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <div
                                    className="regionSecundTitle"
                                                                >
                                    მეშახტის სტაჟი
                                  </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <InputNumber
                                    name="workExperience"
                                    className="organisationInput"
                                    size="large"
                                    min={1}
                                    max={100000}                                 
                                    value={state.workExperience}
                                    onChange={e => changeInt(e)}
                                  />
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                                                  <br />
                          <br />
                          <br />                     
                          <div className="forRegionTitle">
                            {' '}
                            გთხოვთ ჩემი განაცხადის განხილვა მოხდეს
                          </div>
                          <Row>
                            <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                              <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <div
                                    className="regionTitle"                               
                                  >
                                    რეგიონი
                                  </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Select                                  
                                    value={state?.regionValue}
                                    className="classForWidth"                              
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                      (
                                        option!.children as unknown as string
                                      ).includes(input)
                                    }
                                    filterSort={(optionA, optionB) =>
                                      (optionA!.children as unknown as string)
                                        .toLowerCase()
                                        .localeCompare(
                                          (
                                            optionB!.children as unknown as string
                                          ).toLowerCase()
                                        )
                                    }
                                    onChange={e =>
                                      handleChangeSelect(e, 'regionValue')
                                    }
                                  >
                                    {regions &&
                                      regions?.map((item: any) => {
                                        if (
                                          item?.regionalServiceCenterId ==
                                          '00000000-0000-0000-0000-000000000000'
                                        )
                                          return (
                                            <Option key={item.id} value={item.id}>
                                              {item.name}
                                            </Option>
                                          );
                                      })}
                                  </Select>
                                </Col>
                              </Row>
                            </Col>
                            <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                              <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <div
                                    className="regionTitle"                              
                                  >
                                    რაიონული განყოფილება
                                  </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                  <Select
                                    value={state?.territorialUnitId}                                   
                                    className="classForWidth"
                                    style={{
                                      width: '360px',
                                    }}
                                    placeholder="გთხოვთ შეავსოთ"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                      (
                                        option!.children as unknown as string
                                      ).includes(input)
                                    }
                                    filterSort={(optionA, optionB) =>
                                      (optionA!.children as unknown as string)
                                        .toLowerCase()
                                        .localeCompare(
                                          (
                                            optionB!.children as unknown as string
                                          ).toLowerCase()
                                        )
                                    }
                                    onChange={e =>
                                      handleChangeSelect(e, 'territorialUnitId')
                                    }
                                  >
                                    {regions &&
                                      regions?.map((item: any) => {
                                        if (
                                          item.regionalServiceCenterId ==
                                          state.regionValue
                                        )
                                          return (
                                            <Option key={item.id} value={item.id}>
                                              {item.name}
                                            </Option>
                                          );
                                      })}
                                  </Select>{' '}
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </>
                      )}
                      <br /> <br />
                    </Col>
                    <br />
                    <br />
                  </Row>
                  {state.operationStatusId ===
                    '41ab3791-a327-4117-bd8a-499a4b20d552' && (
                    <Row>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="orderCol">
                          ვახორციელებ საჯარო საქმიანობას
                        </div>
                        <Radio.Group onChange={changeRadioButton} value={radio}>
                          <Radio value={true} className="orderCol">
                            დიახ
                          </Radio>
                          <Radio value={false} className="orderCol">
                            არა
                          </Radio>
                        </Radio.Group>
                      </Col>{' '}
                      <br />
                      {CurrentPensionTypeId !=
                        '00000000-0000-0000-0000-000000000000' && (
                        <div className="borderDiv">
                          <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <ExclamationCircleOutlined
                                style={{
                                  color: '#FB1165',
                                  fontSize: '32px',
                                  position: 'absolute',
                                  marginTop: '-58px',
                                  borderRadius: '20px',
                                  backgroundColor: '#f6f8fa',
                                  width: '100px',
                                  justifyContent: 'center',
                                }}
                              />
                              <div className="textDiv">
                                გთხოვთ გაითვალისწინოთ: <br />
                                -თუ უკვე ბრძანდებით რომელიმე სახელმწიფო გასაცემლის
                                მიმღები, რომელიც გამორიცხავს მოთხოვნილი გასაცემლის
                                მიღებას, აუცილებელია შეიწყვიტოთ უკვე არსებული
                                გასაცემელი. <br />
                                -თუ თქვენ უკვე გაქვთ დარეგისტრირებული განცხადება
                                ისეთი გასაცემლის მოთხოვნით, რომელიც გამორიცხავს
                                მიმდინარე გასაცემლის მოთხოვნას, წინა განცხადება
                                ჩაითვლება გაუქმებულად.
                                <br />
                                -თუ თანახმა ბრძანდებით, მაშინ გთხოვთ დააფიქსირეთ
                                თანხმობა{' '}
                              </div>{' '}
                            </Col>
                          </Row>
                          <br />
                          <Row>
                            <Col>
                              <Checkbox className="checkBoxText" onChange={onChange}>
                                თანახმა ვარ შევიწყვიტო
                              </Checkbox>
                            </Col>
                          </Row>
                        </div>
                      )}
                    </Row>
                  )}

                  <Row></Row>
                </Card>
                <Row>
                  <Row>
                        <Col>
                          {iGotAcquaintedChecked === true &&
                            agencyAdmissionChecked === true &&
                            bankDetailsChecked === true &&
                            accept === false &&
                            state.operationStatusId ===
                            '41ab3791-a327-4117-bd8a-499a4b20d552' && (
                              <Card
                              >
                                <div className='forUpload'>
                                  {' '}
                                  {existingDocuments?.map((item: any) => (
                                    <p className="documentsList" key={item?.id}>
                                      {item?.name}
                                    </p>
                                  ))}

                                  {differenceDocuments?.map((item: any) => (
                                    <p className="documentsList" key={item?.id}>
                                      {item?.name}
                                    </p>
                                  ))}
                                  <div
                                    className={
                                      iGotAcquaintedChecked === true &&
                                        agencyAdmissionChecked === true &&
                                        bankDetailsChecked === true &&
                                        accept === false &&
                                        state?.operationStatusId ===
                                        '41ab3791-a327-4117-bd8a-499a4b20d552'
                                        ? 'uploadCard'
                                        : 'hiddenClass'
                                    }
                                  >
                                    {iGotAcquaintedChecked === true &&
                                      agencyAdmissionChecked === true &&
                                      bankDetailsChecked === true &&
                                      accept === false &&
                                      state?.operationStatusId ===
                                      '41ab3791-a327-4117-bd8a-499a4b20d552' &&
                                      documentDropDown?.map((item: any) => (
                                        <Row style={{pointerEvents:'unset'}}>
                                          <Col span={24} className='colColor'>
                                            <Upload
                                              beforeUpload={(file, fileList) =>
                                                handleAddFile(
                                                  file,
                                                  fileList,
                                                  item.id
                                                )
                                              }
                                              fileList={state.documents}
                                              onRemove={uploadRemove}
                                              disabled={viewRegime}
                                            >
                                              <div className="uploadBtnDiv">
                                                <div className="uploadText">
                                                  {' '}
                                                  <UploadOutlined className="forUploadIcon" />
                                                  ატვირთე ფაილი
                                                </div>
                                              </div>
                                            </Upload>
                                            <br />{' '}
                                          </Col>
                                        </Row>
                                      ))}
                                  </div>
                                </div>
                              </Card>
                            )}{' '}
                        </Col>
                      </Row>
                  {state.operationStatusId !==
                    '41ab3791-a327-4117-bd8a-499a4b20d552' && (
                    <Row>
                      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        {' '}
                        <Button onClick={sendRequest} className="send-button1">
                          გადაგზავნა &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;{' '}
                          <img src={Vector7} alt="" />
                        </Button>
                      </Col>
                    </Row>
                  )}
                </Row>
              </Col>
              {state.operationStatusId ===
                '41ab3791-a327-4117-bd8a-499a4b20d552' && (
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={6}
                  xxl={6}
                  className="colForBranches"
                >
                  <BranchesAndDebtorMiner />
                </Col>
              )}
              {state.operationStatusId ===
                '137909e6-4155-4d6a-b762-623bd119491c' && (
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={6}
                  xxl={6}
                  className="colForBranches"
                >
                  <BranchesAndDebtor2 />
                </Col>
              )}
            </Row>
          </>
        )}
        {state.operationStatusId === '41ab3791-a327-4117-bd8a-499a4b20d552' &&
          accept == false && (
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                <Button onClick={sendRequest} className="send-button2">
                  განაცხადის გადაგზავნა &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={Vector7} alt="" />
                </Button>
              </Col>
            </Row>
          )}
      </div>
    </>
  );
};
