

import { Select, Button, Radio, Col, Row, Card } from 'antd';
import {
  CheckOutlined
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { getListPensionTypes } from '../../../redux/slices/steatmentSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { territorialUnit } from '../../../constants'
import type { RadioChangeEvent } from 'antd';
import './HouseholdSubsidy.css';
import moment from 'moment';

export const HouseholdSubsidy = () => {
  const dispatch = useAppDispatch();
  const listPensionTypes = useAppSelector(state => state.statment.listPensionTypes);
  const listPensionTypeSuccess = useAppSelector(state => state.statment.listPensionTypeSuccess);
  const person = useAppSelector(state => state.statment.personInfo);
  const [arr1, setArr1] = useState<any>([])
  const [IssuableTypeArry1, setIssuableTypeArry1] = useState<any>([])
  const [IssuableTypeCategorArry1, setIssuableTypeCategorArry1] = useState<any>([])
  const [SubcategoryOfIssuanceArry1, setSubcategoryOfIssuanceArry1] = useState<any>([])
  const [IssuableValue, setIssuableValue] = useState<any>([])
  const [firstActive, setFirstActive] = useState<any>('')
  const [secundActive, setSecundActive] = useState<any>(false)
  const [documentsForMy, setdocumentsForMy] = useState<any>([])
  const [existingDocuments, setExistingDocuments] = useState<any>([])
  const [differenceDocuments, setdifferenceDocuments] = useState<any>([])
  const [documentDropDown, setDocumentDropDown] = useState<any>([])
  const [documentsForMyActive, setdocumentsForMyActive] = useState<any>('')


  const documentListForDashboard = [
    {
      id: "a650f3a5-50bb-4acf-913b-ef93b871c734",
      name: "საინფორმაციო ბარათი, გაცემული სახელმწიფო სერვისების განვითარების სააგენტოს მიერ, რომლითაც დასტურდება თქვენი საქართველოს ტერიტორიაზე ბოლო 10 წლის განმავლობაში კანონიერად ცხოვრება;"
    },
    {
      id: "cb8fddb4-282d-42cb-83d3-e9c1dcc69264",
      name: "ცნობა იმის შესახებ, რომ არ იღებთ პენსიას მეორე ქვეყნიდან, რომლის მოქალაქედაც ითვლებით"
    }
  ];

  const [state, setState] = useState<{
    operationStatusId: string; regionValue: string; territorialUnitId: string;
    isEmployeed: string, phoneNumber: string; smsCode: string; IssuableType: any; allDoc: any;
    IssuableTypeValue: any; pensionTypeRootId: any; Issuable: any; IssuableValue: any; IssuableTypeCategor: string;
    SubcategoryOfIssuance: any; IssuableList: any; SubcategoryOfIssuanceValue: any;
    forTable: any; IssuableForSend: any; IssuableTypeCategorValue: any

  }>({
    operationStatusId: '',
    regionValue: '',
    territorialUnitId: '',
    isEmployeed: "false",
    phoneNumber: '',
    smsCode: '',
    IssuableType: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    allDoc: [],
    IssuableTypeValue: [],
    pensionTypeRootId: "",
    Issuable: '',
    IssuableValue: [],
    IssuableTypeCategor: "",
    SubcategoryOfIssuance: '',
    IssuableList: [],
    SubcategoryOfIssuanceValue: [],
    IssuableForSend: "",
    forTable: "",
    IssuableTypeCategorValue: []
  });

  const [radio, setRadio] = useState<boolean>(false);
  const changeRadioButton = (e: RadioChangeEvent) => {
    // console.log('radio checked', e.target.value);
    setRadio(e.target.value)
  };

  let formData = new FormData();
  formData.append("Beneficiary.Id", "00000000-0000-0000-0000-000000000000");
  formData.append(
    "Beneficiary.RelationshipTypeId",
    "00000000-0000-0000-0000-000000000000"
  );
  formData.append("Beneficiary.GenderId", "1");
  formData.append(
    "Beneficiary.CitizenshipId",
    "00000000-0000-0000-0000-000000000001"
  );
  formData.append("Beneficiary.IsGeorgianCitizen", "true");
  formData.append("Beneficiary.HasDualCitizenship", "false");
  formData.append("Beneficiary.IsWithoutCitizenship", "false");
  formData.append("Beneficiary.IsLivingAbroad", "false");
  formData.append("Beneficiary.IsCivilServant", "false");
  formData.append("Beneficiary.PrisonerStatus", "false");
  formData.append("Comment", '');
  formData.append("IsSent", 'false');
  formData.append("HasLAStatus", "false");
  formData.append("IGotAcquaintedChecked", "true");
  formData.append("AgencyAdmissionChecked", "true");
  formData.append(
    "AccessPersonalInformation2",
    "true"
  );

  formData.append("BankDetailsChecked", "true");

  formData.append("Beneficiary.EmployerCompanies", "");
  formData.append("Representative.Comment", "statement.representativeComment");
  formData.append(
    "Representative.PrivateNumber",
    ''
  );
  formData.append("Representative.LastName", '');
  formData.append(
    "Representative.TelephoneNumber",
    ''
  );
  formData.append("TerritorialUnitId", state?.territorialUnitId);
  formData.append("PensionTypeId", "5A5BB5D8-EF44-43ED-40CC-08D8EA07976F");
  formData.append("PensionTypeRootId", "5A5BB5D8-EF44-43ED-40CC-08D8EA07976F");
  formData.append("OperationStatusId", state.operationStatusId);
  formData.append("RequestNote", '');

  formData.append("IsCivilServant", radio.toString());
  useEffect(() => {
    dispatch(getListPensionTypes(1));

  }, []);

  const arr2 = [
    {
      id: "60fae6b2-6b9d-4551-b7e7-8ce3a86065e6",
      name: "9 აპრილს დაღუპულის გარდაცვალების მოწმობა",
      operationStatusId: "41ab3791-a327-4117-bd8a-499a4b20d552",
    }

  ]


  const getDifference = (array1: any, array2: any) => {
    return array1.filter((object1: any) => {
      return !array2.some((object2: any) => {
        return object1.id === object2.id;
      });
    });
  }


  const getSome = (array1: any, array2: any) => {
    return array1.filter((object1: any) => {
      return array2.some((object2: any) => {
        return object1.id === object2.id;
      });
    });
  }


  useEffect(() => {
    const differenceDocumentsValue = [
      ...getDifference(documentDropDown, arr2),

    ];

    const existingDocuments = [
      ...getSome(documentDropDown, arr2),
    ];

    setExistingDocuments(existingDocuments)
    setdifferenceDocuments(differenceDocumentsValue)

  }, [documentsForMyActive]);


  useEffect(() => {
    let IssuableTypeArry =
      listPensionTypes !== null
        ? listPensionTypes.map((item: any) => {
          return {
            value: item.id,
            label: item.name,
            PensionTypeId: item.pensionTypeId,
            DocumentTypesJson: item.documentTypes,
          };
        }).filter((item) => item.PensionTypeId == state.IssuableType)
        : [];
    setIssuableTypeArry1(IssuableTypeArry)

  }, [listPensionTypeSuccess]);

  useEffect(() => {
    let IssuableTypeCategorArry =
      listPensionTypes !== null
        ? listPensionTypes.map((item: any) => {
          return {
            value: item.id,
            label: item.name,
            PensionTypeId: item.pensionTypeId,
            DocumentTypesJson: item.documentTypes,
          };
        }).filter(
          (item) => item.PensionTypeId == state.IssuableTypeCategor
        )
        : [];
    setIssuableTypeCategorArry1(IssuableTypeCategorArry)
  }, [firstActive]);

  useEffect(() => {
    let SubcategoryOfIssuanceArry =
      listPensionTypes !== null
        ? listPensionTypes.map((item: any) => {
          return {
            value: item.id,
            label: item.name,
            PensionTypeId: item.pensionTypeId,
            DocumentTypesJson: item.documentTypes,

          };
        }).filter(
          (item) => item.PensionTypeId == state.SubcategoryOfIssuance
        )
        : [];
    setSubcategoryOfIssuanceArry1(SubcategoryOfIssuanceArry)
  }, [firstActive]);

  const setPersonDocs = (localDoc: any) => {
    if (person.docTypeId == 39) {
      let newDoc = localDoc
      newDoc = newDoc.concat(documentListForDashboard)
      setDocumentDropDown(newDoc)
    }
    else {
      setDocumentDropDown(localDoc)
    }
  }

  const sendRequest = () => {
    console.log(listPensionTypes, "listPensionTypes")
  }

  const handleChangeSelect = (id: any, name: string) => {
    setState({ ...state, [name]: id })
  };


  const handleChangeIssuableDropdown = (name: any, value: any, event: any) => {


    if (name === "IssuableType") {
      setState({
        ...state,
        forTable: event.children, IssuableForSend: event.value, IssuableTypeCategor: event.value, SubcategoryOfIssuance: null,
        IssuableTypeValue: [{ value: event.value, label: event.children }], IssuableTypeCategorValue: []
      });


      setFirstActive(event.value);
      console.log('1', firstActive);
      console.log("all", IssuableTypeCategorArry1)
    }

    setdifferenceDocuments([])
    setExistingDocuments([])

    if (name === "IssuableTypeCategor") {
      let localDoc
      listPensionTypes &&
        listPensionTypes.map((item: any) => {
          if (item.id == event.value)
            localDoc = (item.documentTypes)
        });

      setState({
        ...state, forTable: event.children, IssuableForSend: event.value, SubcategoryOfIssuance: event.value, IssuableTypeCategorValue: [
          {
            value: event.value,
            label: event.children,
          },
        ],
        SubcategoryOfIssuanceValue: []
      });
      setFirstActive(event.value);



      console.log(documentsForMy, 'documentsForMy')
      setPersonDocs(localDoc)
      setdocumentsForMyActive(event.value)

    }
    if (name == "SubcategoryOfIssuance") {
      setState({
        ...state,
        forTable: event.children,
      });
      setState({
        ...state,
        IssuableForSend: event.value,
      });
      setState({
        ...state,
        SubcategoryOfIssuanceValue: [
          { value: event.value, label: event.children, },
        ],
      });
      if (event?.DocumentTypesJson) {
        setState({ ...state, allDoc: [JSON.parse(event?.DocumentTypesJson)] });
      } else {
        setState({ ...state, allDoc: [] });
      }
    }
  };

  const operationStatuses = [
    {
      id: "41ab3791-a327-4117-bd8a-499a4b20d552",
      name: "დანიშვნა",
    },
    {
      id: "137909e6-4155-4d6a-b762-623bd119491c",
      name: "შეწყვეტა",
    },
    {
      id: "9404C89F-140F-4D5C-B01A-B3335DBA241B",
      name: "აღდგენა",
    },
  ];

  const { Option } = Select;

  return (
    <>
      <Card style={{ width: "100%", borderRadius: "20px", }}>
        <Row>
          <Col span={1}></Col>
          <Col span={11}>ახალი განცხადება:{person.privateNumber}, {person.firstName}  {person.lastName}</Col>
          <Col span={11}>გაგზავნის თარიღი და დრო {moment().format("yyyy-MM-DD")}</Col>
          <Col span={1}></Col>
        </Row>
        <Row>
          <Col span={1}></Col>
          <Col span={11}>განცხადების ნომერი:</Col>
          <Col span={11}> განცხადების მიღების ტიპი: შეივსო ელექტრონულად</Col>
          <Col span={1}></Col>
        </Row>
        <Row>
          <Col span={1}></Col>
          <Col span={11}>გასაცემელი: სახელმჭიფო კომპენსაცია</Col>      
        </Row>
      </Card>
      <Row>
        <Col span={3}>
          <div
          >მოთხოვნის ტიპი(*)</div>
        </Col>
        <Col span={2}></Col>
        <Col span={5}>
          <div>ახორციელებს საჯარო საქმიანობას</div>
        </Col>
      </Row>
      <Row>
        <Col span={3}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="გთხოვთ შეავსოთ"
            optionFilterProp="children"
            filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA!.children as unknown as string)
                .toLowerCase()
                .localeCompare((optionB!.children as unknown as string).toLowerCase())
            }
            onChange={e => handleChangeSelect(e, 'operationStatusId')}
          >
            {operationStatuses?.map(item => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={5}>
          <Radio.Group onChange={changeRadioButton} value={radio}>
            <Radio value={true}>დიახ</Radio>
            <Radio value={false}>არა</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <div
          >მიუთითეთ სად გსურთ რომ თქვენი განცხადება განიხილონ</div>
        </Col>
      </Row>
      <Row>
        <Col span={3}>
          <div
          >რეგიონი(*)</div>
        </Col>
        <Col span={2}></Col>
        <Col span={5}>
          <div>რაიონული განყოფილება(*)</div>
        </Col>
      </Row>
      <Row>
        <Col span={3}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="გთხოვთ შეავსოთ"
            optionFilterProp="children"
            filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA!.children as unknown as string)
                .toLowerCase()
                .localeCompare((optionB!.children as unknown as string).toLowerCase())
            }
            onChange={e => handleChangeSelect(e, 'regionValue')}
          >
            {territorialUnit && territorialUnit?.map(item => {
              if (item.regionalServiceCenterId == "00000000-0000-0000-0000-000000000000"
              ) return (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              )
            }
            )}
          </Select>
        </Col>
        <Col span={2}></Col>
        <br />
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="გთხოვთ შეავსოთ"
          optionFilterProp="children"
          filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare((optionB!.children as unknown as string).toLowerCase())
          }
          onChange={e => handleChangeSelect(e, 'territorialUnitId')}
        >
          {territorialUnit && territorialUnit?.map(item => {
            if (item.regionalServiceCenterId == state.regionValue
            ) return (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            )
          })}
        </Select>
      </Row>
      <br />
      <br />
      <Row>
        <Col span={2}></Col>
        <Col span={2}>
          <Button onClick={sendRequest}><CheckOutlined /> გადაგზავნა</Button>
        </Col>
      </Row>
      <br />
      <Col span={3}>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="გთხოვთ შეავსოთ"
          optionFilterProp="children"
          filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare((optionB!.children as unknown as string).toLowerCase())
          }
          onChange={(value, event) => handleChangeIssuableDropdown("IssuableType", value, event)}
        >
          {IssuableTypeArry1?.map((item: any) => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
      </Col>
      <br />
      <Col span={3}>
        <Select
          value={state.IssuableTypeCategorValue}
          showSearch
          style={{ width: 200 }}
          placeholder="გთხოვთ შეავსოთ"
          optionFilterProp="children"
          filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare((optionB!.children as unknown as string).toLowerCase())
          }
          onChange={(value, event,) => handleChangeIssuableDropdown('IssuableTypeCategor', value, event)}
        >
          {IssuableTypeCategorArry1.map((item: any) => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
      </Col>
      <br />
      <Col span={3}>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="გთხოვთ შეავსოთ"
          optionFilterProp="children"
          filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare((optionB!.children as unknown as string).toLowerCase())
          }
        >
          {documentDropDown.map((item: any) => (
            <Option key={item.id} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Col>
      <br />
      {person?.docTypeId === 39 && (
        <Card style={{ width: "100%", borderRadius: "20px", color: 'red', borderColor: '#c6d2ef' }}>
          <p style={{ color: 'green', }}> ატვირთული დოკუმენტები:</p>
          {existingDocuments.map((item: any) => (
            <p style={{ color: 'green', }} key={item.id}  >
              <CheckOutlined /> {item.name}
            </p>
          ))}
          <br />
          <p> ასატვირთი დოკუმენტები:</p>
          {differenceDocuments.map((item: any) => (
            <p key={item.id}  >
              {item.name}
            </p>
          ))}
        </Card>
      )
      }
    </>
  );
};
