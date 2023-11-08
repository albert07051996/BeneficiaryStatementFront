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
  message,
  Breadcrumb,
} from 'antd';
import {
  UploadOutlined,
} from '@ant-design/icons';

import React, { useEffect, useState } from 'react';
import {
  UpdatePensionStatement,
  clearaddPensionStatementSuccess,
  CheckActiveOtherStateIssue,
  clearupdatePensionStatementSuccess,
} from '../../../redux/slices/steatmentSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import type { RadioChangeEvent } from 'antd';
import { LANDING_PAGE } from '../../../router/paths';
import { useNavigate, useParams } from 'react-router-dom';
import Vector7 from '../../../assets/images/Vector7.svg';
import './EditPensionSteatment.css';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { BranchesAndDebtor } from '../../branches&Debtor/BranchesAndDebtor';
import { BranchesAndDebtor2 } from '../../branches&Debtor/BranchesAndDebtor2';
import { getPensionStatementById } from '../../../redux/slices/editSteatmentSlice';

export const EditPensionSteatment = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const view = window.location.pathname.includes('view')
  const person = useAppSelector(state => state.statment.personInfo);
  const answerOtherStateIssue = useAppSelector(
    state => state.statment.answerOtherStateIssue
  );
  const addPensionStatementSuccess = useAppSelector(
    state => state.statment.addPensionStatementSuccess
  );
  const addPensionStatementError = useAppSelector(
    state => state.statment.addPensionStatementError
  );
  const PensionStatement = useAppSelector(
    state => state.editSteatment.PensionStatement
  );
  const regions = useAppSelector(state => state.statment.regions);
  const updatePensionStatement = useAppSelector(state => state.statment.updatePensionStatement);
  const updatePensionStatementSuccess = useAppSelector(state => state.statment.updatePensionStatementSuccess);
  const updatePensionStatementError = useAppSelector(state => state.statment.updatePensionStatementError);
  const listTerminationReason = useAppSelector(
    state => state.statment.listTerminationReason
  );

  const [accept, setAccept] = useState<any>(false);
  const [accessPersonalInformation2, setAccessPersonalInformation2] =
    useState<any>(false);
  const [iGotAcquaintedChecked, setIGotAcquaintedChecked] = useState<any>(true);
  const [agencyAdmissionChecked, setAgencyAdmissionChecked] = useState<any>(true);
  const [bankDetailsChecked, setBankDetailsChecked] = useState<any>(true);
  const [existingDocuments, setExistingDocuments] = useState<any>([]);
  const [differenceDocuments, setdifferenceDocuments] = useState<any>([]);
  const [docUploadSucces, setDocUploadSucces] = useState<any>(false);
  const [terminationReason, setTerminationReason] = useState<any>('');
  const [PensionStatementId, setPensionStatementId] = useState<any>('')
  let { id } = useParams();
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
    isCivilServant: boolean
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
    isCivilServant: false
  });


  console.log(state.documents, 'asdqwe')
  useEffect(() => {
    console.log(PensionStatement, 'PensionStatement21232323');
    setPensionStatementId(PensionStatement?.id);
  }, []);
  useEffect(() => {
    console.log(updatePensionStatement, 'UpdatePensionStatementsdasdasdsad');
  }, [updatePensionStatement]);

  useEffect(() => {
    console.log(updatePensionStatementSuccess, 'updatePensionStatementSuccess');
  }, [updatePensionStatementSuccess]);

  useEffect(() => {
    dispatch(getPensionStatementById(id))
  }, [id]);

  console.log(id, 'ididid')


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
    if (updatePensionStatementSuccess === true) {
      message.success(`განცხადება წარმატებით გაიგზავნა`);
      dispatch(clearupdatePensionStatementSuccess());
      localStorage.setItem('selectedKeys', '/landingpage');
      navigate('/landingpage');
    }
  }, [updatePensionStatementSuccess]);

  useEffect(() => {
    if (addPensionStatementError !== null) {
      Object.entries(addPensionStatementError || {}).forEach(([key, value]) => {
        message.error(`${value}`);
      });
    }
  }, [addPensionStatementError]);
  useEffect(() => {
    if (updatePensionStatementError !== null) {
      Object.entries(updatePensionStatementError || {}).forEach(([key, value]) => {
        message.error(`${value}`);
      });
    }
  }, [updatePensionStatementError]);

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

  let renderOrNot = Object.keys(PensionStatement).length === 0
  { id && formData.append('statementId', id); }
  formData.append('isCivilServant', radio.toString());
  state.documents?.map(
    (document: any, j: any) => (
      formData.append(`Documents[${j}].id`, document.Name),
      formData.append(`Documents[${j}].name`, document.Name),
      formData.append(`Documents[${j}].DocumentTypeId`, document.DocumentTypeId),
      formData.append(`Documents[${j}].FormFile`, document.FormFile),
      formData.append(`Documents[${j}].documentName`, document.Name)
    )
  );

  const dummyRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  const sendRequest = () => {
    dispatch(UpdatePensionStatement(formData));
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

  useEffect(() => {
    setstate({ ...state, documents: PensionStatement.documents })
  }, [PensionStatement])

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
                <Breadcrumb.Item href="">საპენსიო განაცხადი</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            {state?.operationStatusId === '41ab3791-a327-4117-bd8a-499a4b20d552' && (
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
            {state?.operationStatusId === '137909e6-4155-4d6a-b762-623bd119491c' && (
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
              <Col xs={24} sm={20} md={20} lg={20} xl={24} xxl={16}>
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
                      ), თანახმა ვარ &nbsp;
                      {person.hasStatements == false &&
                        person.payoutsList.length == 0 ? (
                        <>დამენიშნოს &nbsp;</>
                      ) : (
                        <>
                          <Select
                            disabled
                            value={PensionStatement?.operationStatus?.name}
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
                              <Option key={item?.id} value={item?.id}>
                                {item?.name}
                              </Option>
                            ))}
                          </Select>
                        </>
                      )}
                      სახელმწიფო პენსია.
                      {PensionStatement?.operationStatus?.id ===
                        '9404C89F-140F-4D5C-B01A-B3335DBA241B' && (
                          <> გთხოვთ, განიხილოთ ჩემი განაცხადი.</>
                        )}
                      {PensionStatement?.operationStatus?.id ===
                        '137909e6-4155-4d6a-b762-623bd119491c' && (
                          <>
                            {' '}
                            შეჩერების მიზეზი &nbsp;
                            <Select
                              disabled
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
                        PensionStatement.operationStatus?.id ==
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
                      {PensionStatement.operationStatus?.id ===
                        '41ab3791-a327-4117-bd8a-499a4b20d552' && (
                          <>
                            <div
                              style={{
                                marginBottom: '34px',
                                marginTop: '52px',
                                fontSize: '16px',
                              }}
                            >
                              {' '}
                              გთხოვთ, ჩემი განაცხადის განხილვა მოხდეს
                            </div>
                            <Row>
                              <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                                <Row>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <div className="regionTitle">რეგიონი</div>
                                  </Col>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Select
                                      disabled
                                      value={PensionStatement?.territorialUnitGroup.regionalServiceCenter}
                                      style={{ borderRadius: 20, width: '204px' }}
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
                                        handleChangeSelect(e, 'regionValue')
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

                              <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                                <Row>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <div className="regionTitle">
                                      რაიონული განყოფილება
                                    </div>
                                  </Col>
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Select
                                      disabled
                                      value={PensionStatement.territorialUnitGroup.name}
                                      style={{
                                        borderRadius: 20,
                                        width: '254px',
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
                  {PensionStatement.operationStatus?.id ===
                    '41ab3791-a327-4117-bd8a-499a4b20d552' && (
                      <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                          <div className="orderCol">
                            ვახორციელებ საჯარო საქმიანობას
                          </div>
                          <Radio.Group onChange={changeRadioButton} value={radio} disabled>
                            <Radio value={true} className="orderCol" >
                              დიახ
                            </Radio>
                            <Radio value={false} className="orderCol">
                              არა
                            </Radio>
                          </Radio.Group>
                        </Col>{' '}
                        <br />

                      </Row>
                    )}

                  <Row></Row>
                </Card>
                <Row>
                  <Row>
                    {
                      person?.docTypeId === 39 &&
                      iGotAcquaintedChecked === true &&
                      agencyAdmissionChecked === true &&
                      bankDetailsChecked === true &&
                      accept === false &&
                      PensionStatement.operationStatus?.id ===
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
                                    disabled
                                    fileList={state.documents}
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
                  {PensionStatement.operationStatus?.id !==
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
              {PensionStatement.operationStatus?.id === '41ab3791-a327-4117-bd8a-499a4b20d552' && (
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={6}
                  xxl={6}
                  className="colForBranches"
                >
                  <BranchesAndDebtor />
                </Col>
              )}
              {PensionStatement.operationStatus?.id === '137909e6-4155-4d6a-b762-623bd119491c' && (

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
        {PensionStatement.operationStatus?.id === '41ab3791-a327-4117-bd8a-499a4b20d552' &&
          accept == false && (
            <Row className='mt24'>
              <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                <Button onClick={sendRequest} className="send-button2" disabled={view}>
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
