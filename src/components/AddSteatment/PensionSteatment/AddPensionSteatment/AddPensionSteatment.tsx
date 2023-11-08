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
  Space,
  Calendar,
  message,
  Breadcrumb,
  Divider, Steps
} from 'antd';
import {
  UploadOutlined,
  ExclamationCircleOutlined,
  BookOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import {
  addPensionStatement,
  clearaddPensionStatementSuccess,
  CheckActiveOtherStateIssue,
  generatePensionPdf,
  getPensionTypes,
  clearGeneratePensionPdfSuccess,
} from '../../../../redux/slices/steatmentSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import type { RadioChangeEvent, UploadProps } from 'antd';
import { LANDING_PAGE } from '../../../../router/paths';
import { useNavigate, Link } from 'react-router-dom';
import Vector7 from '../../../../assets/images/Vector7.svg';
import './AddPensionSteatment.css';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { BranchesAndDebtor } from '../../../branches&Debtor/BranchesAndDebtor';
import { BranchesAndDebtor2 } from '../../../branches&Debtor/BranchesAndDebtor2';

export const AddPensionSteatment = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const person = useAppSelector(state => state.statment.personInfo);
  const answerOtherStateIssue = useAppSelector(
    state => state.statment.answerOtherStateIssue
  );
  const addPensionStatementSuccess = useAppSelector(
    state => state.statment.addPensionStatementSuccess
  );
  const pdf = useAppSelector(
    state => state.statment.pdf
  );
  const addPensionStatementError = useAppSelector(
    state => state.statment.addPensionStatementError
  );
  const regions = useAppSelector(state => state.statment.regions);
  const listTerminationReason = useAppSelector(
    state => state.statment.listTerminationReason
  );
  const generatePensionPdfSuccess = useAppSelector(
    state => state.statment.generatePensionPdfSuccess
  );

  const [accept, setAccept] = useState<any>(true);
  const [accessPersonalInformation2, setAccessPersonalInformation2] =
    useState<any>(false);
  const [iGotAcquaintedChecked, setIGotAcquaintedChecked] = useState<any>(false);
  const [agencyAdmissionChecked, setAgencyAdmissionChecked] = useState<any>(false);
  const [bankDetailsChecked, setBankDetailsChecked] = useState<any>(false);
  const [existingDocuments, setExistingDocuments] = useState<any>([]);
  const [differenceDocuments, setdifferenceDocuments] = useState<any>([]);
  const [docUploadSucces, setDocUploadSucces] = useState<any>(false);
  const [terminationReason, setTerminationReason] = useState<any>('');
  const [CurrentPensionTypeId, setCurrentPensionTypeId] = useState<any>(
    '00000000-0000-0000-0000-000000000000'
  );

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
    regionName: string;
    territorialUnitName: string;
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
    otherTerminationReason: '',
    regionName: '',
    territorialUnitName: '',

  });

  useEffect(() => {
    console.log(regions, 'regionss');
  }, []);
  useEffect(() => {
    if (state.operationStatusId == '41ab3791-a327-4117-bd8a-499a4b20d552') {
      dispatch(CheckActiveOtherStateIssue(person));
    }
  }, [state.operationStatusId]);

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
    console.log(state.documents, 'state.documents');
    const differenceDocumentsValue = [
      ...getDifference(documentListForDashboard, state.documents),
    ];
    const existingDocuments = [
      ...getSome(documentListForDashboard, state.documents),
    ];
    setExistingDocuments(existingDocuments);
    setdifferenceDocuments(differenceDocumentsValue);
    setDocUploadSucces(false);
  }, [docUploadSucces]);

  const [radio, setRadio] = useState<boolean>(false);
  const handleAddFile = async (file: any, fileList: any, Id: any) => {
    var docs = state.documents;
    docs.push({
      Uid: file.uid,
      Name: Id,
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
    if (addPensionStatementSuccess === true) {
      message.success(`განცხადება წარმატებით გაიგზავნა`);
      dispatch(clearaddPensionStatementSuccess());
      localStorage.setItem('selectedKeys', '/landingpage');
      navigate('/landingpage');
    }
  }, [addPensionStatementSuccess]);
  useEffect(() => {
    dispatch(getPensionTypes('1'))
  }, []);

  useEffect(() => {
    if (addPensionStatementError !== null) {
      Object.entries(addPensionStatementError || {}).forEach(([key, value]) => {
        message.error(`${value}`);
      });
    }
  }, [addPensionStatementError]);

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

  let formData = new FormData();
  formData.append('CurrentPensionTypeId', CurrentPensionTypeId);
  formData.append('TerritorialUnitId', state?.territorialUnitId);
  formData.append('IGotAcquaintedChecked', iGotAcquaintedChecked);
  formData.append('AgencyAdmissionChecked', agencyAdmissionChecked);
  formData.append('BankDetailsChecked', bankDetailsChecked);
  formData.append('AccessPersonalInformation2', accessPersonalInformation2);
  formData.append('OperationStatusId', state.operationStatusId);
  formData.append('PensionTypeRootId', '5A5BB5D8-EF44-43ED-40CC-08D8EA07976F');
  formData.append('PensionTypeId', '5A5BB5D8-EF44-43ED-40CC-08D8EA07976F');
  state.operationStatusId != '137909e6-4155-4d6a-b762-623bd119491c' ? formData.append('TerminationReason', terminationReason) : console.log('shewyveta');
  state.operationStatusId != '137909e6-4155-4d6a-b762-623bd119491c' ? formData.append('OtherTerminationReason', state.otherTerminationReason) : console.log('shewyveta');
  formData.append('IsAgreeToStopRequest', state.stopOtherSteatments.toString());
  formData.append('StatementStatus', '1');
  formData.append('StatementType', '1');
  formData.append('Beneficiary.Id', '00000000-0000-0000-0000-000000000000');
  formData.append('Beneficiary.IsCivilServant', radio.toString());
  state.documents.map(
    (document: any, j: any) => (
      formData.append(`Documents[${j}].Name`, document.Name),
      formData.append(`Documents[${j}].DocumentTypeId`, document.DocumentTypeId),
      formData.append(`Documents[${j}].FormFile`, document.FormFile)
    )
  );

  const dummyRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  let generatePensionPdfObj = {
    beneficiaryId: person.beneficiaryId,
    isCivilServant: radio.toString(),
    regionName: state.regionName,
    townName: state.territorialUnitName,
    accessPersonalInformation: true,
    operationStatusId: state.operationStatusId,
    documentIds: [
      '7210d215-47f2-4b41-be42-b48ebfc87f31'
    ]
  }
  const sendRequest = () => {
    dispatch(addPensionStatement(formData));
  };
  const generatePdf = () => {
    dispatch(generatePensionPdf(generatePensionPdfObj));
  };

  if (generatePensionPdfSuccess) {
    const url = URL.createObjectURL(
      new Blob([pdf], { type: 'application/pdf' })
    );
    window.open(url, '_blank');
    dispatch(clearGeneratePensionPdfSuccess())
  }

  const donwloadFilePdf = () => {
    const url = URL.createObjectURL(
      new Blob([pdf], { type: 'application/pdf' })
    );
    window.open(url, '_blank');
  }

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
  const handleChangeSelect1 = (e: any, d: any) => {
    if (e.value !== '137909e6-4155-4d6a-b762-623bd119491c') {
      setTerminationReason('');
    }
    setstate({ ...state, regionValue: d.value, regionName: d.children });
  };
  const handleChangeSelect2 = (e: any, d: any) => {
    if (e.value !== '137909e6-4155-4d6a-b762-623bd119491c') {
      setTerminationReason('');
    }
    setstate({ ...state, territorialUnitId: d.value, territorialUnitName: d.children });
  };

  const handleChangeTerminationReason = (id: any, name: string) => {
    setTerminationReason(id);
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

  return (
    <>
      <div className="addForm">
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
              <BookOutlined className='rulesAnotherIcon' />
              <div className="rulesTextPension">
                <div>

                  <div className="rulesTitle"> წესები და პირობები</div>
                  <Steps
                    progressDot
                    current={-1}
                    direction="vertical"
                    items={[
                      {
                        title: <div className="rulesTitle2">1. პასუხისმგებელი ვარ:</div>,
                        description: <div className="rulesStyles">
                          _ განცხადებაში ასახული ინფორმაციის და თანდართული დოკუმენტების
                          სისწორეზე: _ ვაცნობო კომპეტენტურ ორგანოს იმ გარემოების დადგომის
                          შესახებ, რომელსაც თან სდევს სახელმწიფო გასაცემელის შეწყვეტა, ამ
                          გარემოების წარმოშობიდან არა უგვიანეს 15 დღისა: _ზედმეტად მიღებული
                          თანხის დაბრუნებაზე
                        </div>,
                      },
                      {
                        title: <div className="rulesTitle2">
                          <div>თანახმა ვარ:</div>
                          2. სახელმწიფო გასაცემლ(ებ)ის ადმინისტრირების მიზნით,
                        </div>,
                        description: <div className="rulesStyles">
                          ჩემი და/ან ამ განცხადებით განსაზღვრული ჩემი წარმომადგენლობის ქვეშ მყოფი პირის ნებისმიერი პერსონალური (მათ შორის განსაკუთრებული კატეგორიის) მონაცემები გამოითხოვოს/მიიღოს /შეაგროვოს/გადაამოწმოს/გამოიყენოს/შეინახოს ან სხვა სახით/ფორმით დაამუშავოს ნებისმიერი კერძო სამართლის ან იურიდიული პირიდან და/ან კომპეტენტური ადმინისტრაციული ორგანოდან, მათ შორის:
                          <br />
                          -სსიპ-სახელმწიფო სერვისების განვითარების სააგენტოდან,
                          <br />
                          -სსიპ-შემოსავლების სამსახურიდან, სახელმწიფო საქვეუწყებო დაწესებულება-სპეციალური პენიტენციურ სამსახურიდან,
                          <br />
                          -სსიპ- ვეტერანების საქმეთა სახელმწიფო სამსახურიდან.
                        </div>
                      },
                      {
                        title: <div className="rulesTitle2">
                          3. საბანკო დაწესებულებიდან ინფორმაციის გამოთხოვაზე
                        </div>,
                        description:
                          <div className="rulesStyles">
                            მიიღოს სრული ინფორმაცია ჩემ პირად საბანკო ანგარიშზე მის მიერ ჩარიცხული თანხების მოძრაობის შესახებ
                          </div>
                      },
                      {
                        title: <div className="rulesTitle2">
                          {' '}
                          4. პერსონალური მონაცემების გადაცემაზე
                        </div>,
                        description:
                          <div className="rulesStyles">
                            სსიპ-სოციალური მომსახურების სააგენტოში დაცული ჩემი პერსონალური მონაცემები (მათ შორის განსაკუთრებული კატეგორიის მონაცემები) გადაცემულ იქნას, ან უზრუნველყოფილ იქნას მათზე წვდომა სხვა ადმინისტრაციული ორგანოებისათვის ან კერძო სამართლის იურიდიული პირისთვის, "პერსონალურ მონაცემTა დაცვის შესახებ" საქართველოს კანონით დადგენილი მოთხოვნების დაცვით, რაც უკავშირდება ჩემთვის მატერიალური ან/და არამატერიალური სახის დახმარების, ან ბენეფიტის, ან გასაცემლის, ან რაიმე სახის სარგებლობის მიღებას.
                          </div>
                      },
                      {
                        title:
                          <div className="rulesStyles">
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
                      },
                    ]}
                  />
                </div>
                <Row gutter={20}>
                  <Col>
                    {' '}
                    <Button className="rulesBtnBack" onClick={cancelClick}>
                      {/* <RollbackOutlined />  */}
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
                <Breadcrumb.Item href="">საპენსიო განაცხადი</Breadcrumb.Item>
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
                <BranchesAndDebtor />
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
              <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={18}>
                <Card className="steatmentCard">
                  <div className="orderTitle">საპენსიო განაცხადის რეგისტრაცია</div>
                  <Row>
                    <Col
                      className="orderCol"
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={24}
                    >
                      მე {person.firstName} {person.lastName} ({person.privateNumber}
                      ), თანახმა ვარ &nbsp; &nbsp;
                      {person.hasStatements == false &&
                        person.payoutsList.length == 0 ? (
                        <>დამენიშნოს &nbsp;</>
                      ) : (
                        <>
                          <Select
                            className='compensationFirst'
                            style={{ borderRadius: 20, fontFamily: 'FiraGO' }}
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
                      )} &nbsp; &nbsp;
                      სახელმწიფო პენსია.
                      {state.operationStatusId ===
                        '9404C89F-140F-4D5C-B01A-B3335DBA241B' && (
                          <> გთხოვთ, განიხილოთ ჩემი განაცხადი.</>
                        )}
                      {state.operationStatusId ===
                        '137909e6-4155-4d6a-b762-623bd119491c' && (
                          <>
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
                              className='regionsHead'
                            >
                              {' '}
                              გთხოვთ, ჩემი განაცხადის განხილვა მოხდეს
                            </div>
                            <Row gutter={15}>
                              <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                                <Row>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <div className="regionTitle ">რეგიონი</div>
                                  </Col>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Select
                                      className='pensionSelect'
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
                                      onChange={(e, d) =>
                                        handleChangeSelect1(e, d)
                                      }
                                    >
                                      {regions &&
                                        regions?.map((item: any) => {
                                          if (
                                            item.regionalServiceCenterId ==
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

                              <Col xs={24} sm={10} md={10} lg={10} xl={10} xxl={10} >
                                <Row>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} >
                                    <div className="regionTitle">
                                      რაიონული განყოფილება
                                    </div>
                                  </Col>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Select
                                      showSearch
                                      className='pensionSelect'

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
                                      onChange={(e, d) =>
                                        handleChangeSelect2(e, d)
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
                          <div className="orderColCheck">
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
                              <Row>
                                <Col>
                                  <br />
                                  <Checkbox className="checkBoxText" onChange={onChange}>
                                    თანახმა ვარ შევიწყვიტო
                                  </Checkbox>
                                </Col>
                              </Row>
                            </div>
                          )}
                      </Row>
                    )}
                  <Row>
                    {
                      iGotAcquaintedChecked === true &&
                      agencyAdmissionChecked === true &&
                      bankDetailsChecked === true &&
                      accept === false &&
                      state.operationStatusId ===
                      '41ab3791-a327-4117-bd8a-499a4b20d552' &&
                      documentListForDashboard.map((item: any) => (
                        <Row className='forUploadPension'>
                          {' '}
                          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Row>
                              <Col span={24}>
                                <div className="textParag"> </div>
                              </Col>
                              <Col span={24}>
                                <Row justify="center">
                                  {differenceDocuments.map((item: any) => (
                                    <p className="documentsListTitle" key={item.id}>
                                      {item.name}
                                    </p>
                                  ))}
                                  <Upload
                                    customRequest={dummyRequest}
                                    beforeUpload={(file, fileList) =>
                                      handleAddFile(
                                        file,
                                        fileList,
                                        item.id
                                      )
                                    }
                                    onRemove={uploadRemove}
                                  >
                                    <div className="uploadBtnDiv">
                                      <UploadOutlined className="forUploadIcon" />
                                      {' '}
                                      ატვირთე ფაილი
                                    </div>
                                  </Upload>
                                </Row>
                                <br />{' '}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      ))}
                  </Row>
                  <br /><br /><br />
                  {state.operationStatusId === '41ab3791-a327-4117-bd8a-499a4b20d552' &&
                    accept == false && (
                      <Row gutter={[10, 20]}>
                        <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                          <Button onClick={sendRequest} className="send-button2">
                            განაცხადის გადაგზავნა &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={Vector7} alt="" />
                          </Button>
                        </Col>
                        <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                          <Button onClick={generatePdf} className="stepBack">
                            განაცხადის გენერაცია &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={Vector7} alt="" />
                          </Button>
                        </Col>
                      </Row>
                    )}
                  {state.operationStatusId === '137909e6-4155-4d6a-b762-623bd119491c' &&
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
                  {state.operationStatusId === '9404c89f-140f-4d5c-b01a-b3335dba241b' &&
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
                </Card>

              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={8}
                xl={8}
                xxl={6}
                className="colForBranchesTop, mgt-14"
              >
                <BranchesAndDebtor />
              </Col>
            </Row>
          </>
        )}

      </div>
    </>
  );
};
