import {
  Select,
  Button,
  Radio,
  Col,
  Row,
  Card,
  Checkbox,
  message,
  Upload,
  Breadcrumb,
  Steps,
  theme,
  Input,
  Tooltip,
} from 'antd';
import {
  BookOutlined,
  SendOutlined,
  UpOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import {
  getListPensionTypes,
  changeState,
  GetMedicalInstitutions,
  createSocialStatement,
  clearCreateSocialStatementSuccess,
  generateSocialStatementPdf,
  clearGenerateSocialStatementPdfSuccess,
} from '../../../redux/slices/steatmentSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import type { RadioChangeEvent } from 'antd';
import './StateCompensation1.css';
import { LANDING_PAGE } from '../../../router/paths';
import { useNavigate, Link } from 'react-router-dom';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { UploadInformation } from '../../UploadInformation/UploadInformation';
import Vector7 from '../../../assets/images/Vector7.svg';
import { UploadInformation2 } from '../../UploadInformation/UploadInformation2';
import { UploadInformation3 } from '../../UploadInformation/UploadInformation3';
import { UploadInformation4 } from '../../UploadInformation/UploadInformation4';
import { UploadInformation5 } from '../../UploadInformation/UploadInformation5';
import { BranchesAndDebtor } from '../../branches&Debtor/BranchesAndDebtor';
import { UploadInformation6 } from '../../UploadInformation/UploadInformation6';
import { UploadInformation7 } from '../../UploadInformation/UploadInformation7';
import { UploadInformation8 } from '../../UploadInformation/UploadInformation8';
import { UploadInformation9 } from '../../UploadInformation/UploadInformation9';
import { UploadInformation10 } from '../../UploadInformation/UploadInformation10';
import { UploadInformation11 } from '../../UploadInformation/UploadInformation11';


export const StateCompensation = () => {
  const dispatch = useAppDispatch();
  const listPensionTypes = useAppSelector(state => state.statment.listPensionTypes);

  const listTerminationReason = useAppSelector(
    state => state.statment.listTerminationReason
  );
  const listPensionTypeSuccess = useAppSelector(
    state => state.statment.listPensionTypeSuccess
  );
  const createSocialStatementError = useAppSelector(
    state => state.statment.createSocialStatementError
  );

  const listMedicalInstitutions = useAppSelector(
    state => state.statment.listMedicalInstitutions
  );
  const listMedicalInstitutionsSuccess = useAppSelector(
    state => state.statment.listMedicalInstitutionsSuccess
  );

  const medicalnstitution = useAppSelector(
    state => state.statment.medicalnstitution
  );
  const globalDeathSertificateRelationType = useAppSelector(
    state => state.statment.globalDeathSertificateRelationType
  );
  const SseActExtractSeries = useAppSelector(
    state => state.statment.SseActExtractSeries
  );
  let es = 0;
  const globalStatment = useAppSelector(state => state.statment);

  const SseInspectionAct = useAppSelector(state => state.statment.SseInspectionAct);
  const loading = useAppSelector(state => state.statment.loading);
  const addPensionStatementSuccess = useAppSelector(
    state => state.statment.addPensionStatementSuccess
  );

  const createSocialStatementSuccess = useAppSelector(
    state => state.statment.createSocialStatementSuccess
  );
  const pdf = useAppSelector(
    state => state.statment.pdf
  );
  const generateSocialStatementPdfSuccess = useAppSelector(
    state => state.statment.generateSocialStatementPdfSuccess
  );


  const pirveli = useAppSelector(state => state.statment.pirveli);
  const person = useAppSelector(state => state.statment.personInfo);
  const [arr1, setArr1] = useState<any>([]);
  const [IssuableTypeArry1, setIssuableTypeArry1] = useState<any>([]);
  const [IssuableTypeCategorArry1, setIssuableTypeCategorArry1] = useState<any>([]);
  const [dropDown3Array, setDropDown3Array] = useState<any>([]);
  const [SubcategoryOfIssuanceArry1, setSubcategoryOfIssuanceArry1] = useState<any>([]);
  const [firstdoctindex, setFirstdoctindex] = useState<any>(0);
  const [IssuableValue, setIssuableValue] = useState<any>([]);
  const [dropDown1Active, setDropDown1Active] = useState<any>('');
  const [dropDown2Active, setDropDown2Active] = useState<any>(false);
  const [documentsForMy, setdocumentsForMy] = useState<any>([]);
  const [existingDocuments, setExistingDocuments] = useState<any>([]);
  const [differenceDocuments, setdifferenceDocuments] = useState<any>([]);
  const [documentDropDown, setDocumentDropDown] = useState<any>([]);
  const [documentsForMyActive, setdocumentsForMyActive] = useState<any>('');
  const [uploadInfoNumber, setuploadInfoNumber] = useState<any>('');
  const [documentDropDownCopy, setDocumentDropDownCopy] = useState<any>([]);
  const [openSecondStep, setOpenSecondStep] = useState<any>(0);
  const regions = useAppSelector(state => state.statment.regions);
  const [accept, setAccept] = useState<any>(true);
  const [iGotAcquaintedChecked, setIGotAcquaintedChecked] = useState<any>(false);
  const [agencyAdmissionChecked, setAgencyAdmissionChecked] = useState<any>(false);
  const [bankDetailsChecked, setBankDetailsChecked] = useState<any>(false);
  const [radio, setRadio] = useState<boolean>(false);
  const [pensionTypeIdForSend, setPensionTypeIdForSend] = useState<any>('00000000-0000-0000-0000-000000000000');
  const [docUploadSucces, setDocUploadSucces] = useState<any>(false);
  let navigate = useNavigate();
  const [accessPersonalInformation2, setAccessPersonalInformation2] = useState<any>(false);
  const handleAgree = () => {
    if (iGotAcquaintedChecked == false) {
      message.error(
        "გთხოვთ დააფიქსიროთ თქვენი თანხმობა 'გავეცანი და პასუხისმგებელი ვარ'-ის მონიშვნით."
      );
    } else {
      setAccept(false);
    }
  };
  const childForNot = [
    {
      id: 'aa3eac03-8983-427d-b073-d77d458705e0',
    },
    {
      id: '38880fbf-3b5a-4fd0-b95b-63f0be19fdd9',
    },
  ];

  const parentForNot = [
    {
      id: 'aa3eac03-8983-427d-b073-d77d458705e0',
    },
    {
      id: 'e5b0dcc3-1645-4d46-a842-871df47ffdd8',
    },
  ];

  const wifeHusbendForNot = [
    {
      id: '38880fbf-3b5a-4fd0-b95b-63f0be19fdd9',
    },
    {
      id: 'e5b0dcc3-1645-4d46-a842-871df47ffdd8',
    },
  ];

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

  const [state, setState] = useState<{
    operationStatusId: string;
    regionValue: string;
    territorialUnitId: string;
    isEmployeed: string;
    phoneNumber: string;
    smsCode: string;
    IssuableType: any;
    allDoc: any;
    IssuableTypeValue: any;
    pensionTypeRootId: any;
    Issuable: any;
    IssuableValue: any;
    IssuableTypeCategor: string;
    SubcategoryOfIssuance: any;
    IssuableList: any;
    SubcategoryOfIssuanceValue: any;
    forTable: any;
    IssuableForSend: any;
    IssuableTypeCategorValue: any;
    dropDown1: any;
    dropDown2: any;
    dropDown3: any;
    dropDown3Value: any;
    documents: any;
    documentName: any;
    documentTypeId: any;
    document: any;
    otherTerminationReason: any;
    regionName: string;
    territorialUnitName: string;
  }>({
    operationStatusId: 'გთხოვთ შეავსოთ',
    regionValue: 'გთხოვთ შეავსოთ',
    territorialUnitId: '00000000-0000-0000-0000-000000000000',
    isEmployeed: 'false',
    phoneNumber: '',
    smsCode: '',
    IssuableType: '07e9955f-ce79-4b22-b637-97c1e19612e7',
    allDoc: [],
    IssuableTypeValue: [],
    pensionTypeRootId: '',
    Issuable: '',
    IssuableValue: [],
    IssuableTypeCategor: '',
    SubcategoryOfIssuance: '',
    IssuableList: [],
    SubcategoryOfIssuanceValue: [],
    IssuableForSend: '',
    forTable: '',
    IssuableTypeCategorValue: [],
    dropDown1: '',
    dropDown2: '',
    dropDown3: '',
    dropDown3Value: [],
    documents: [],
    documentName: '',
    documentTypeId: '',
    document: null,
    otherTerminationReason: '',
    regionName: '',
    territorialUnitName: '',
  });

  let generatePensionPdfObj = {
    beneficiaryId: person.beneficiaryId,
    isCivilServant: radio,
    regionName: state.regionName,
    townName: state.territorialUnitName,
    accessPersonalInformation: true,
    operationStatusId: state.operationStatusId,
    pensionTypeId: '07e9955f-ce79-4b22-b637-97c1e19612e7',
    documentsId: existingDocuments?.map((d: any) => d.id)
  }
  const generatePdf = () => {
    dispatch(generateSocialStatementPdf(generatePensionPdfObj));
  };

  if (generateSocialStatementPdfSuccess) {
    const url = URL.createObjectURL(
      new Blob([pdf], { type: 'application/pdf' })
    );
    window.open(url, '_blank');
    dispatch(clearGenerateSocialStatementPdfSuccess())
  }

  useEffect(() => {
    documentDropDownCopy.map((item: any) => {
      if (
        item.name ==
        'შესაბამისი სამედიცინო დაწესებულების მიერ გაცემული სამედიცინო-სოციალური ექსპერტიზის შემოწმების აქტის ამონაწერი'
      ) {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (
        item.name ==
        'შესაბამისი სამედიცინო დაწესებულების მიერ გაცემული სამედიცინო-სოციალური ექსპერტიზის შემოწმების აქტის ამონაწერი, რომელშიც მითითებული იქნება შესაძლებლობის შეზღუდვის მიზეზობრივი კავშირი ომთან'
      ) {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (item.name == 'მარჩენალის გარდაცვალების მოწმობა') {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (item.name == 'გარდაცვლილი პირის დაბადების მოწმობა (მშობლის შემთხვევაში)') {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (
        item.name == 'გარდაცვლილი პირის ქორწინების მოწმობა (მეუღლის შემთხვევაში)'
      ) {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (item.name == 'დაბადების მოწმობა (შვილის შემთხვევაში)') {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (
        item.name ==
        'სასამართლოს გადაწყვეტილება პოლიტიკური რეპრესიების მსხვერპლად აღიარების შესახებ'
      ) {
        setOpenSecondStep(openSecondStep + 1);
      }
    });
  }, [documentDropDownCopy]);

  useEffect(() => {
    documentDropDown.map((item: any) => {
      if (
        item.name ==
        'შესაბამისი სამედიცინო დაწესებულების მიერ გაცემული სამედიცინო-სოციალური ექსპერტიზის შემოწმების აქტის ამონაწერი'
      ) {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (
        item.name ==
        'შესაბამისი სამედიცინო დაწესებულების მიერ გაცემული სამედიცინო-სოციალური ექსპერტიზის შემოწმების აქტის ამონაწერი, რომელშიც მითითებული იქნება შესაძლებლობის შეზღუდვის მიზეზობრივი კავშირი ომთან'
      ) {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (item.name == 'მარჩენალის გარდაცვალების მოწმობა') {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (
        item.name ==
        'სასამართლოს გადაწყვეტილება პოლიტიკური რეპრესიების მსხვერპლად აღიარების შესახებ'
      ) {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (
        item.name ==
        'მარჩენალის გარდაცვალების მოწმობა (დედის მონაცემები)'
      ) {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (
        item.name ==
        'მარჩენალის გარდაცვალების მოწმობა (მამის მონაცემები)'
      ) {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (
        item.name ==
        'მარჩენალგარდაცვლილი ბავშვის დაბადების მოწმობა'
      ) {
        setOpenSecondStep(openSecondStep + 1);
      }
      if (
        item.name ==
        'ვეტერანის სტატუსის დამადასტურებელი დოკუმენტი'
      ) {
        setOpenSecondStep(openSecondStep + 1);
      }


    });
  }, [documentDropDown]);

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const changeRadioButton = (e: RadioChangeEvent) => {
    setRadio(e.target.value);
  };
  const [terminationReason, setTerminationReason] = useState<any>('');

  const next = () => {
    if (openSecondStep != 0) {
      setCurrent(current + 1);
    } else {
      setCurrent(current + 2);
    }
  };

  const prev = () => {
    if (openSecondStep != 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(current - 2);
    }
  };

  const changelocalState = (e: any) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const scrollUp = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  useEffect(() => {
    if (globalDeathSertificateRelationType == '1') {
      const CopydocumentDropDown = Array.from(documentDropDown);
      const differenceDocumentsValue = [
        ...getDifferenceById(CopydocumentDropDown, childForNot),
      ];
      setExistingDocuments(existingDocuments);
      setdifferenceDocuments(differenceDocumentsValue);
      setDocumentDropDownCopy(differenceDocumentsValue);
    }

    if (globalDeathSertificateRelationType == '2') {
      const CopydocumentDropDown = Array.from(documentDropDown);
      const differenceDocumentsValue = [
        ...getDifferenceById(CopydocumentDropDown, parentForNot),
      ];
      setExistingDocuments(existingDocuments);
      setdifferenceDocuments(differenceDocumentsValue);
      setDocumentDropDownCopy(differenceDocumentsValue);
    }

    if (globalDeathSertificateRelationType == '3') {
      const CopydocumentDropDown = Array.from(documentDropDown);
      const differenceDocumentsValue = [
        ...getDifferenceById(CopydocumentDropDown, wifeHusbendForNot),
      ];
      setExistingDocuments(existingDocuments);
      setdifferenceDocuments(differenceDocumentsValue);
      setDocumentDropDownCopy(differenceDocumentsValue);
    }
  }, [globalDeathSertificateRelationType]);

  useEffect(() => {
  }, [SseActExtractSeries]);

  useEffect(() => {
    dispatch(GetMedicalInstitutions('s'));
  }, []);

  useEffect(() => {
    if (createSocialStatementError !== null) {
      Object.entries(createSocialStatementError || {}).forEach(([key, value]) => {
        message.error(`${value}`);
      });
    }
  }, [createSocialStatementError]);

  let formData = new FormData();
  const createForm = () => {
    formData.append('TerritorialUnitId', state?.territorialUnitId);
    formData.append('IGotAcquaintedChecked', iGotAcquaintedChecked);
    formData.append('AgencyAdmissionChecked', agencyAdmissionChecked);
    formData.append('BankDetailsChecked', bankDetailsChecked);
    formData.append('AccessPersonalInformation2', accessPersonalInformation2);
    formData.append('OperationStatusId', state.operationStatusId);
    formData.append('PensionTypeRootId', '07e9955f-ce79-4b22-b637-97c1e19612e7');
    formData.append('PensionTypeId', pensionTypeIdForSend);
    terminationReason && formData.append('TerminationReason', terminationReason);
    formData.append('StatementStatus', '1');
    globalStatment.globalRepressedRelationType && formData.append('RelationType', 'globalStatment.globalRepressedRelationType');
    globalStatment.hasFamilyMember && formData.append('StatementStatus', '1');
    formData.append('StatementType', '1');
    formData.append('Beneficiary.Id', '00000000-0000-0000-0000-000000000000');
    formData.append('Beneficiary.IsCivilServant', radio.toString());
    state.otherTerminationReason != '' && formData.append('OtherTerminationReason', state.otherTerminationReason);
    let docIndex1 = 0
    let docIndex2 = 0
    let docIndex3 = 0
    let docIndex4 = 0
    let docIndex5 = 0
    let docIndex6 = 0
    let docIndex7 = 0
    let docIndex8 = 0
    let docIndex9 = 0
    let docIndex10 = 0
    state.documents.map(
      (document: any, b: any) => {
        if (document.Name == '0fb51b5c-a68d-4b37-a676-f17c61af88c4') {
          if (docIndex1 > 0) {
            document.Name == '0fb51b5c-a68d-4b37-a676-f17c61af88c4' &&
              formData.append(`ExtractOfTheActDto.Documents[${docIndex1}].Name`, document.Name)
            document.Name == '0fb51b5c-a68d-4b37-a676-f17c61af88c4' &&
              formData.append(
                `ExtractOfTheActDto.Documents[${docIndex1}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.Name == '0fb51b5c-a68d-4b37-a676-f17c61af88c4' &&
              formData.append(
                `ExtractOfTheActDto.Documents[${docIndex1}].FormFile`,
                document.FormFile
              )
            docIndex1++
          }
          else {
            globalStatment.globalExtractOfTheActDtoMedicalInstitutionId &&
              formData.append(
                `ExtractOfTheActDto.medicalInstitutionId`,
                globalStatment.globalExtractOfTheActDtoMedicalInstitutionId
              )
            globalStatment.globalExtractOfTheActDtoActExtractSeries &&
              formData.append(
                `ExtractOfTheActDto.actExtractSeries`,
                globalStatment.globalExtractOfTheActDtoActExtractSeries
              )
            globalStatment.globalExtractOfTheActDtoMedicalCheck &&
              formData.append(
                `ExtractOfTheActDto.medicalCheck`,
                globalStatment.globalExtractOfTheActDtoMedicalCheck
              )
            globalStatment.globalExtractOfTheActDtoCheckDate &&
              formData.append(
                `ExtractOfTheActDto.checkDate`,
                globalStatment.globalExtractOfTheActDtoCheckDate
              )
            globalStatment.globalExtractOfTheActDtoLoStatus &&
              formData.append(
                `ExtractOfTheActDto.loStatus`,
                globalStatment.globalExtractOfTheActDtoLoStatus
              )
            globalStatment.globalExtractOfTheActDtoLoStatusDate &&
              formData.append(
                `ExtractOfTheActDto.loStatusDate`,
                globalStatment.globalExtractOfTheActDtoLoStatusDate
              )

            globalStatment.globalExtractOfTheActDtoLoStatusLimitDate &&
              formData.append(
                `ExtractOfTheActDto.LoStatusLimitDate`,
                globalStatment.globalExtractOfTheActDtoLoStatusLimitDate
              )
            document.Name == '0fb51b5c-a68d-4b37-a676-f17c61af88c4' &&
              globalStatment.globalExtractOfTheActDtoDateOfNextCheck &&
              formData.append(
                `ExtractOfTheActDto.dateOfNextCheck`,
                globalStatment.globalExtractOfTheActDtoDateOfNextCheck
              )
            globalStatment.globalExtractOfTheActDtoLimitationPossibilityReason &&
              formData.append(
                `ExtractOfTheActDto.limitationPossibilityReason`,
                globalStatment.globalExtractOfTheActDtoLimitationPossibilityReason
              )
            globalStatment.globalExtractOfTheActDtoActExtractNumber &&
              formData.append(
                `ExtractOfTheActDto.actExtractNumber`,
                globalStatment.globalExtractOfTheActDtoActExtractNumber
              )
            globalStatment.globalExtractOfTheActDtoMedicalInstitutionHead &&
              formData.append(
                `ExtractOfTheActDto.medicalInstitutionHead`,
                globalStatment.globalExtractOfTheActDtoMedicalInstitutionHead
              )
            globalStatment.globalExtractOfTheActDtoDoctor &&
              formData.append(
                `ExtractOfTheActDto.doctor`,
                globalStatment.globalExtractOfTheActDtoDoctor
              )
            document.Name &&
              formData.append(`ExtractOfTheActDto.Documents[${docIndex1}].Name`, document.Name)
            document.DocumentTypeId &&
              formData.append(
                `ExtractOfTheActDto.Documents[${docIndex1}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `ExtractOfTheActDto.Documents[${docIndex1}].FormFile`,
                document.FormFile
              )
            docIndex1++
          }
        }

        if (document.Name == 'dec40c70-f76a-4f8c-b061-830fdd99ed55') {
          if (docIndex2 > 0) {
            document.Name &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.Documents[${docIndex2}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.Documents[${docIndex2}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.Documents[${docIndex2}].FormFile`,
                document.FormFile
              )
            docIndex2++
          }
          else {
            globalStatment.secondGlobalMedicalInstitutionId &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.medicalInstitutionId`,
                globalStatment.secondGlobalMedicalInstitutionId
              )
            globalStatment.secondGlobalActExtractSeries &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.actExtractSeries`,
                globalStatment.secondGlobalActExtractSeries
              )
            globalStatment.secondGlobalMedicalCheck &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.medicalCheck`,
                globalStatment.secondGlobalMedicalCheck
              )
            globalStatment.secondGlobalCheckDate &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.checkDate`,
                globalStatment.secondGlobalCheckDate
              )
            globalStatment.secondGlobalLoStatus &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.loStatus`,
                globalStatment.secondGlobalLoStatus
              )
            globalStatment.secondGlobalLoStatusDate &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.loStatusDate`,
                globalStatment.secondGlobalLoStatusDate
              )
            document.Name == 'dec40c70-f76a-4f8c-b061-830fdd99ed55' &&
              globalStatment.secondGlobalDateOfNextCheck &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.dateOfNextCheck`,
                globalStatment.secondGlobalDateOfNextCheck
              )
            globalStatment.secondGlobalLimitationPossibilityReason &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.limitationPossibilityReason`,
                globalStatment.secondGlobalLimitationPossibilityReason
              )
            globalStatment.secondGlobalActExtractNumber &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.actExtractNumber`,
                globalStatment.secondGlobalActExtractNumber
              )
            globalStatment.secondGlobalMedicalInstitutionHead &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.medicalInstitutionHead`,
                globalStatment.secondGlobalMedicalInstitutionHead
              )
            globalStatment.secondGlobalLoStatusLimitDate &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.LoStatusLimitDate`,
                globalStatment.secondGlobalLoStatusLimitDate
              )
            globalStatment.secondGlobalDoctor &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.doctor`,
                globalStatment.secondGlobalDoctor
              )
            document.Name &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.Documents[${docIndex2}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.Documents[${docIndex2}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `ExtractOfTheActRelatedToWarDto.Documents[${docIndex2}].FormFile`,
                document.FormFile
              )
            docIndex2++
          }
        }

        //


        if (document.Name == '9218000c-9cbe-48e4-84eb-15308cc919e8') {
          // 9218000c-9cbe-48e4-84eb-15308cc919e8 --> მარჩენალის გარდაცვალების მოწმობა
          if (docIndex3 > 0) {
            document.Name &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.Documents[${docIndex3}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.Documents[${docIndex3}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.Documents[${docIndex3}].FormFile`,
                document.FormFile
              )
            docIndex3++
          }
          else {
            globalStatment.globalDeathSertificatePrivateNumber &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.PrivateNumber`,
                globalStatment.globalDeathSertificatePrivateNumber
              )
            globalStatment.globalDeathSertificateFirstName &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.FirstName`,
                globalStatment.globalDeathSertificateFirstName
              )
            globalStatment.globalDeathSertificateLastName &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.LastName`,
                globalStatment.globalDeathSertificateLastName
              )
            globalStatment.globalDeathSertificateDeathDate &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.DeathDate`,
                globalStatment.globalDeathSertificateDeathDate
              )
            globalStatment.globalDeathSertificateDeathSertificateNumber &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.DeathSertificateNumber`,
                globalStatment.globalDeathSertificateDeathSertificateNumber
              )
            globalStatment.globalDeathSertificateRelationType &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.RelationType`,
                globalStatment.globalDeathSertificateRelationType
              )
            document.Name &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.Documents[${docIndex3}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.Documents[${docIndex3}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.Documents[${docIndex3}].FormFile`,
                document.FormFile
              )
            docIndex3++
          }
        }




        // e04f1d2d-428a-4650-9491-8fdde4b3e547 -->მარჩენალის გარდაცვალების მოწმობა (დედის მონაცემები)"
        if (document.Name == 'e04f1d2d-428a-4650-9491-8fdde4b3e547') {

          if (docIndex3 > 0) {
            document.Name &&
              formData.append(
                `CertificateOfDeathMotherDto.Documents[${docIndex3}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `CertificateOfDeathMotherDto.Documents[${docIndex3}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `CertificateOfDeathMotherDto.Documents[${docIndex3}].FormFile`,
                document.FormFile
              )
            docIndex3++
          }
          else {
            globalStatment.globalCertificateOfDeathMotherDtoPrivateNumber &&
              formData.append(
                `CertificateOfDeathMotherDto.PrivateNumber`,
                globalStatment.globalCertificateOfDeathMotherDtoPrivateNumber
              )
            globalStatment.globalCertificateOfDeathMotherDtoFirstName &&
              formData.append(
                `CertificateOfDeathMotherDto.FirstName`,
                globalStatment.globalCertificateOfDeathMotherDtoFirstName
              )
            globalStatment.globalCertificateOfDeathMotherDtoLastName &&
              formData.append(
                `CertificateOfDeathMotherDto.LastName`,
                globalStatment.globalCertificateOfDeathMotherDtoLastName
              )
            globalStatment.globalCertificateOfDeathMotherDtoDeathDate &&
              formData.append(
                `CertificateOfDeathMotherDto.DeathDate`,
                globalStatment.globalCertificateOfDeathMotherDtoDeathDate
              )
            globalStatment.globalCertificateOfDeathMotherDtoDeathSertificateNumber &&
              formData.append(
                `CertificateOfDeathMotherDto.DeathSertificateNumber`,
                globalStatment.globalCertificateOfDeathMotherDtoDeathSertificateNumber
              )
            globalStatment.globalCertificateOfDeathMotherDtoRelationType &&
              formData.append(
                `CertificateOfDeathMotherDto.RelationType`,
                globalStatment.globalCertificateOfDeathMotherDtoRelationType
              )
            document.Name &&
              formData.append(
                `CertificateOfDeathMotherDto.Documents[${docIndex3}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `CertificateOfDeathMotherDto.Documents[${docIndex3}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `CertificateOfDeathMotherDto.Documents[${docIndex3}].FormFile`,
                document.FormFile
              )
            docIndex3++
          }
        }

        //


        // e0947d11-3e2e-4772-8238-965831fb74cc -->მარჩენალის გარდაცვალების მოწმობა (მამის მონაცემები)"


        if (document.Name == 'e0947d11-3e2e-4772-8238-965831fb74cc') {

          if (docIndex3 > 0) {
            document.Name &&
              formData.append(
                `CertificateOfDeathFatherDto.Documents[${docIndex3}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `CertificateOfDeathFatherDto.Documents[${docIndex3}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `CertificateOfDeathFatherDto.Documents[${docIndex3}].FormFile`,
                document.FormFile
              )
            docIndex3++
          }
          else {
            globalStatment.globalCertificateOfDeathFatherDtoPrivateNumber &&
              formData.append(
                `CertificateOfDeathFatherDto.PrivateNumber`,
                globalStatment.globalCertificateOfDeathFatherDtoPrivateNumber
              )
            globalStatment.globalCertificateOfDeathFatherDtoFirstName &&
              formData.append(
                `CertificateOfDeathFatherDto.FirstName`,
                globalStatment.globalCertificateOfDeathFatherDtoFirstName
              )
            globalStatment.globalCertificateOfDeathFatherDtoLastName &&
              formData.append(
                `CertificateOfDeathFatherDto.LastName`,
                globalStatment.globalCertificateOfDeathFatherDtoLastName
              )
            globalStatment.globalCertificateOfDeathFatherDtoDeathDate &&
              formData.append(
                `CertificateOfDeathFatherDto.DeathDate`,
                globalStatment.globalCertificateOfDeathFatherDtoDeathDate
              )
            globalStatment.globalCertificateOfDeathFatherDtoDeathSertificateNumber &&
              formData.append(
                `CertificateOfDeathFatherDto.DeathSertificateNumber`,
                globalStatment.globalCertificateOfDeathFatherDtoDeathSertificateNumber
              )
            globalStatment.globalCertificateOfDeathFatherDtoRelationType &&
              formData.append(
                `CertificateOfDeathFatherDto.RelationType`,
                globalStatment.globalCertificateOfDeathFatherDtoRelationType
              )
            document.Name &&
              formData.append(
                `CertificateOfDeathFatherDto.Documents[${docIndex3}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `CertificateOfDeathFatherDto.Documents[${docIndex3}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `CertificateOfDeathFatherDto.Documents[${docIndex3}].FormFile`,
                document.FormFile
              )
            docIndex3++
          }
        }

        //
        // 85d187b9-930b-4e18-8875-857fcde12f88  --> მარჩენალგარდაცვლილი ბავშვის დაბადების მოწმობა
        if (document.Name == '85d187b9-930b-4e18-8875-857fcde12f88') {
          if (docIndex6 > 0) {
            document.Name &&
              formData.append(
                `ChildBirthCertificate.Documents[${docIndex6}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `ChildBirthCertificate.Documents[${docIndex6}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `ChildBirthCertificate.Documents[${docIndex6}].FormFile`,
                document.FormFile
              )
            docIndex6++
          }
          else {
            globalStatment.globalChildBirthCertificateNumber &&
              formData.append(
                `ChildBirthCertificate.birthCertificateNumber`,
                globalStatment.childBirthCertificateNumber
              )
            globalStatment.childParentRelationType &&
              formData.append(
                `ChildBirthCertificate.parentRelationType`,
                globalStatment.globalChildBirthCertificateParentRelationType
              )
            globalStatment.globalChildBirthCertificatePrivateNumber &&
              formData.append(
                `ChildBirthCertificate.privateNumber`,
                globalStatment.globalChildBirthCertificatePrivateNumber
              )
            globalStatment.globalChildBirthCertificateFirstName &&
              formData.append(
                `ChildBirthCertificate.firstName`,
                globalStatment.globalChildBirthCertificateFirstName
              )
            globalStatment.globalChildBirthCertificateLastName &&
              formData.append(
                `ChildBirthCertificate.lastName`,
                globalStatment.globalChildBirthCertificateLastName
              )
            document.Name &&
              formData.append(
                `ChildBirthCertificate.Documents[${docIndex6}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `ChildBirthCertificate.Documents[${docIndex6}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `ChildBirthCertificate.Documents[${docIndex6}].FormFile`,
                document.FormFile
              )
            docIndex6++
          }
        }







        //


        if (document.Name == 'aa3eac03-8983-427d-b073-d77d458705e0') {
          if (docIndex4 > 0) {
            document.Name &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.marriageCertificate.Documents[${docIndex4}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.marriageCertificate.Documents[${docIndex4}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.marriageCertificate.Documents[${docIndex4}].FormFile`,
                document.FormFile
              )
            docIndex4++
          }
          else {
            //9218000c-9cbe-48e4-84eb-15308cc919e8  გარდაცვლილი პირის ქორწინების მოწმობა (მეუღლის შემთხვევაში)
            globalStatment.spouseMarriageCertificateNumber &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.marriageCertificate.marriageCertificateNumber`,
                globalStatment.spouseMarriageCertificateNumber
              )
            globalStatment.spouseSpouseRelationType &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.marriageCertificate.spouseRelationType`,
                globalStatment.spouseSpouseRelationType
              )
            globalStatment.spousePrivateNumber &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.marriageCertificate.privateNumber`,
                globalStatment.spousePrivateNumber
              )
            globalStatment.spouseFirstName &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.marriageCertificate.firstName`,
                globalStatment.spouseFirstName
              )
            globalStatment.spouseLastName &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.marriageCertificate.lastName`,
                globalStatment.spouseLastName
              )
            document.Name &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.marriageCertificate.Documents[${docIndex4}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.marriageCertificate.Documents[${docIndex4}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.marriageCertificate.Documents[${docIndex4}].FormFile`,
                document.FormFile
              )
            docIndex4++
          }
        }
        if (document.Name == '38880fbf-3b5a-4fd0-b95b-63f0be19fdd9') {
          // გარდაცვლილი პირის დაბადების მოწმობა (მშობლის შემთხვევაში) --> 38880fbf-3b5a-4fd0-b95b-63f0be19fdd9
          if (docIndex5 > 0) {
            document.Name &&
              formData.append(
                `extractOfTheActDto.deadChildBirthCertificate.Documents[${docIndex5}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.deadChildBirthCertificate.Documents[${docIndex5}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.deadChildBirthCertificate.Documents[${docIndex5}].FormFile`,
                document.FormFile
              )
            docIndex5++
          }
          else {

            globalStatment.parentMarriageCertificateNumber &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.deadChildBirthCertificate.birthCertificateNumber`,
                globalStatment.parentMarriageCertificateNumber
              )
            globalStatment.parentSpouseRelationType &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.deadChildBirthCertificate.parentRelationType`,
                globalStatment.parentSpouseRelationType
              )
            globalStatment.parentPrivateNumber &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.deadChildBirthCertificate.privateNumber`,
                globalStatment.parentPrivateNumber
              )
            globalStatment.parentFirstName &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.deadChildBirthCertificate.firstName`,
                globalStatment.parentFirstName
              )
            globalStatment.parentLastName &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.deadChildBirthCertificate.lastName`,
                globalStatment.parentLastName
              )
            document.Name &&
              formData.append(
                `deadChildBirthCertificate.Documents[${docIndex5}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.deadChildBirthCertificate.Documents[${docIndex5}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.deadChildBirthCertificate.Documents[${docIndex5}].FormFile`,
                document.FormFile
              )
            docIndex5++
            //
          }
        }
        //
        if (document.Name == 'e5b0dcc3-1645-4d46-a842-871df47ffdd8') {

          if (docIndex6 > 0) {
            document.Name &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.childBirthCertificate.Documents[${docIndex6}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.childBirthCertificate.Documents[${docIndex6}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.childBirthCertificate.Documents[${docIndex6}].FormFile`,
                document.FormFile
              )
            docIndex6++
          }
          else {
            // e5b0dcc3-1645-4d46-a842-871df47ffdd8  --> დაბადების მოწმობა (შვილის შემთხვევაში)
            globalStatment.childBirthCertificateNumber &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.childBirthCertificate.birthCertificateNumber`,
                globalStatment.childBirthCertificateNumber
              )
            globalStatment.childParentRelationType &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.childBirthCertificate.parentRelationType`,
                globalStatment.childParentRelationType
              )
            globalStatment.childPrivateNumber &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.childBirthCertificate.privateNumber`,
                globalStatment.childPrivateNumber
              )
            globalStatment.childFirstName &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.childBirthCertificate.firstName`,
                globalStatment.childFirstName
              )
            globalStatment.childLastName &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.childBirthCertificate.lastName`,
                globalStatment.childLastName
              )
            document.Name &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.childBirthCertificate.Documents[${docIndex6}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.childBirthCertificate.Documents[${docIndex6}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `deathSertificateOfBreadwinnerDto.childBirthCertificate.Documents[${docIndex6}].FormFile`,
                document.FormFile
              )
            docIndex6++
          }
        }
        if (document.Name == '04473956-cb2e-4dce-aba3-7d85e43cb3b3') {

          // 04473956-cb2e-4dce-aba3-7d85e43cb3b3 --> სასამართლოს გადაწყვეტილება პოლიტიკური რეპრესიების მსხვერპლად აღიარების შესახებ

          if (docIndex7 > 0) {
            document.Name &&
              formData.append(
                `victimOfPoliticalRepressionActDto.Documents[${docIndex7}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `victimOfPoliticalRepressionActDto.Documents[${docIndex7}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `victimOfPoliticalRepressionActDto.Documents[${docIndex7}].FormFile`,
                document.FormFile
              )
            docIndex7++
          }
          else {

            globalStatment.globalvictimOfPoliticalRepressedPrivateNumber &&
              formData.append(
                `victimOfPoliticalRepressionActDto.repressedPrivateNumber`,
                globalStatment.globalvictimOfPoliticalRepressedPrivateNumber
              )
            globalStatment.globalvictimOfPoliticalFirstName &&
              formData.append(
                `victimOfPoliticalRepressionActDto.firstName`,
                globalStatment.globalvictimOfPoliticalFirstName
              )
            globalStatment.globalvictimOfPoliticalLastName &&
              formData.append(
                `victimOfPoliticalRepressionActDto.lastName`,
                globalStatment.globalvictimOfPoliticalLastName
              )
            globalStatment.globalvictimOfPoliticalCourtDecisionNumber &&
              formData.append(
                `victimOfPoliticalRepressionActDto.CourtDecisionNumber`,
                globalStatment.globalvictimOfPoliticalCourtDecisionNumber
              )
            document.Name &&
              formData.append(
                `victimOfPoliticalRepressionActDto.Documents[${docIndex7}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `victimOfPoliticalRepressionActDto.Documents[${docIndex7}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `victimOfPoliticalRepressionActDto.Documents[${docIndex7}].FormFile`,
                document.FormFile
              )
            docIndex7++
            //
          }
        }
        if (document.Name == 'dc7652d2-1d1b-4d14-b974-bff706e138cc') {

          //dc7652d2-1d1b-4d14-b974-bff706e138cc --> ვეტერანის სტატუსის დამადასტურებელი დოკუმენტი
          if (docIndex8 > 0) {
            document.Name &&
              formData.append(
                `veteranStatusCertificateDto.Documents[${docIndex8}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `veteranStatusCertificateDto.Documents[${docIndex8}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `veteranStatusCertificateDto.Documents[${docIndex8}].FormFile`,
                document.FormFile
              )
            docIndex8++
          }
          else {
            globalStatment.globalVeteranStatusVeteranStatusGrantDate &&
              formData.append(
                `veteranStatusCertificateDto.veteranStatusGrantDate`,
                globalStatment.globalVeteranStatusVeteranStatusGrantDate
              )
            globalStatment.globalVeteranStatusVeteranCategoryId &&
              formData.append(
                `veteranStatusCertificateDto.veteranCategoryId`,
                globalStatment.globalVeteranStatusVeteranCategoryId
              )
            globalStatment.globalVeteranStatusCode1
              && globalStatment.globalVeteranStatusCode2
              && globalStatment.globalVeteranStatusCode3
              && formData.append(
                `veteranStatusCertificateDto.code`,
                globalStatment.globalVeteranStatusCode1 +
                globalStatment.globalVeteranStatusCode2 +
                globalStatment.globalVeteranStatusCode3
              )
            globalStatment.globalVeteranStatusFirstName &&
              formData.append(
                `veteranStatusCertificateDto.firstName`,
                globalStatment.globalVeteranStatusFirstName
              )
            globalStatment.globalVeteranStatusLastName &&
              formData.append(
                `veteranStatusCertificateDto.lastName`,
                globalStatment.globalVeteranStatusLastName
              )
            document.Name &&
              formData.append(
                `veteranStatusCertificateDto.Documents[${docIndex8}].Name`,
                document.Name
              )
            document.DocumentTypeId &&
              formData.append(
                `veteranStatusCertificateDto.Documents[${docIndex8}].DocumentTypeId`,
                document.DocumentTypeId
              )
            document.FormFile &&
              formData.append(
                `veteranStatusCertificateDto.Documents[${docIndex8}].FormFile`,
                document.FormFile
              )
            docIndex8++
            // <--

          }
        }


        if (document.Name != 'dc7652d2-1d1b-4d14-b974-bff706e138cc' &&
          document.Name != '0fb51b5c-a68d-4b37-a676-f17c61af88c4' &&
          document.Name != 'dec40c70-f76a-4f8c-b061-830fdd99ed55' &&
          document.Name != '9218000c-9cbe-48e4-84eb-15308cc919e8' &&
          document.Name != 'e04f1d2d-428a-4650-9491-8fdde4b3e547' &&
          document.Name != 'e0947d11-3e2e-4772-8238-965831fb74cc' &&
          document.Name != '85d187b9-930b-4e18-8875-857fcde12f88' &&
          document.Name != 'aa3eac03-8983-427d-b073-d77d458705e0' &&
          document.Name != '38880fbf-3b5a-4fd0-b95b-63f0be19fdd9' &&
          document.Name != 'e5b0dcc3-1645-4d46-a842-871df47ffdd8' &&
          document.Name != '04473956-cb2e-4dce-aba3-7d85e43cb3b3' &&
          document.Name != 'dc7652d2-1d1b-4d14-b974-bff706e138cc') {
          formData.append(`Documents[${docIndex9}].Name`, document.Name)
          formData.append(`Documents[${docIndex9}].DocumentTypeId`, document.DocumentTypeId)
          formData.append(`Documents[${docIndex9}].FormFile`, document.FormFile)
          docIndex9++
        }
      }
    )
  }

  useEffect(() => {
    dispatch(getListPensionTypes(1));
  }, []);

  const getDifferenceById = (array1: any, array2: any) => {
    return array1.filter((object1: any) => {
      return !array2.some((object2: any) => {
        return object1.id === object2.id;
      });
    });
  };

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

  const handleChangeTerminationReason = (id: any, name: string) => {
    setTerminationReason(id);
  };

  useEffect(() => {
    const differenceDocumentsValue = [
      ...getDifference(documentDropDown, state.documents),
    ];
    const existingDocuments = [...getSome(documentDropDown, state.documents)];

    setExistingDocuments(existingDocuments);
    setdifferenceDocuments(differenceDocumentsValue);
  }, [documentsForMyActive]);

  useEffect(() => {
    const differenceDocumentsValue = [
      ...getDifference(documentDropDown, state.documents),
    ];
    const existingDocuments = [...getSome(documentDropDown, state.documents)];
    setExistingDocuments(existingDocuments);
    setdifferenceDocuments(differenceDocumentsValue);
    setDocUploadSucces(false);
  }, [docUploadSucces]);

  useEffect(() => {
    let IssuableTypeArry =
      listPensionTypes !== null
        ? listPensionTypes
          .map((item: any) => {
            return {
              value: item.id,
              label: item.name,
              PensionTypeId: item.pensionTypeId,
              DocumentTypesJson: item.documentTypes,
            };
          })
          .filter(item => item.PensionTypeId == state.IssuableType)
        : [];
    setIssuableTypeArry1(IssuableTypeArry);
  }, [listPensionTypeSuccess]);

  useEffect(() => {
    let IssuableTypeCategorArry =
      listPensionTypes !== null
        ? listPensionTypes
          .map((item: any) => {
            return {
              value: item.id,
              label: item.name,
              PensionTypeId: item.pensionTypeId,
              DocumentTypesJson: item.documentTypes,
            };
          })
          .filter(item => item.PensionTypeId == state.IssuableTypeCategor)
        : [];
    setIssuableTypeCategorArry1(IssuableTypeCategorArry);
  }, [dropDown1Active]);

  useEffect(() => {
    let newDropDown3Array =
      listPensionTypes !== null
        ? listPensionTypes
          .map((item: any) => {
            return {
              value: item.id,
              label: item.name,
              PensionTypeId: item.pensionTypeId,
              DocumentTypesJson: item.documentTypes,
            };
          })
          .filter(item => item.PensionTypeId == state.SubcategoryOfIssuance)
        : [];
    setDropDown3Array(newDropDown3Array);

  }, [dropDown2Active]);
  const setPersonDocs = (localDoc: any) => {
    if (person.docTypeId == 39 && localDoc.length != 0) {
      let newDoc = localDoc;
      newDoc = newDoc.concat(documentListForDashboard);
      if (newDoc.length != 0) {
        setDocumentDropDown(newDoc);
      } else setDocumentDropDown([]);
    } else {
      if (localDoc.length != 0) {
        setDocumentDropDown(localDoc);
      } else setDocumentDropDown([]);
    }
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

  useEffect(() => {
    if (createSocialStatementSuccess == true) {
      message.success(`განცხადება წარმატებით გაიგზავნა`);
      localStorage.setItem('selectedKeys', '/landingpage');
      navigate('/landingpage');
      dispatch(clearCreateSocialStatementSuccess())
    }
  }, [createSocialStatementSuccess]);

  const cancelClick = () => {
    navigate(LANDING_PAGE);
  };

  const sendRequest = () => {
    createForm()
    dispatch(createSocialStatement(formData));
    formData = new FormData()

  };

  const handleChangeSelect = (id: any, name: string) => {
    setState({ ...state, [name]: id });
  };

  const handleChangeSelect1 = (e: any, d: any) => {
    if (e.value !== '137909e6-4155-4d6a-b762-623bd119491c') {
      setTerminationReason('');
    }
    setState({ ...state, regionValue: d.value, regionName: d.children });
  };
  const handleChangeSelect2 = (e: any, d: any) => {
    if (e.value !== '137909e6-4155-4d6a-b762-623bd119491c') {
      setTerminationReason('');
    }
    setState({ ...state, territorialUnitId: d.value, territorialUnitName: d.children });
  };

  const handleAddFile = async (file: any, fileList: any, Id: any) => {
    var docs = state.documents;

    docs.push({
      Uid: file.uid,
      Name: Id,
      DocumentTypeId: Id,
      FormFile: file,
    });

    setState({
      ...state,
      documentName: '',
      documentTypeId: '',
      document: null,
      documents: docs,
    });
    setDocUploadSucces(true);
  };

  const uploadRemove = (file: any) => {
    let elementPos = state?.documents
      .map(function (x: any) {
        return x.Uid;
      })
      .indexOf(file.uid);
    const newFileList = state.documents.slice();
    newFileList.splice(elementPos, 1);
    setState({
      ...state,
      documents: newFileList,
    });
    setDocUploadSucces(true);
  };

  const handleChangeIssuableDropdown = (name: any, value: any, event: any) => {
    if (name === 'dropdown1') {
      setState({
        ...state,
        forTable: event.children,
        IssuableForSend: event.value,
        IssuableTypeCategor: event.value,
        SubcategoryOfIssuance: null,
        IssuableTypeValue: [{ value: event.value, label: event.children }],
        IssuableTypeCategorValue: [],
        dropDown3Value: [],
        dropDown3: '',
      });
      setDropDown1Active(event.value);
      setPersonDocs([]);
      let k = { name: 'globalDeathSertificateRelationType', value: '' };
      dispatch(changeState(k));
    }
    setdifferenceDocuments([]);
    setExistingDocuments([]);
    if (name === 'dropdown2') {
      let localDoc;
      listPensionTypes &&
        listPensionTypes.map((item: any) => {
          if (item.id == event.value) localDoc = item.documentTypes;
        });
      setState({
        ...state,
        forTable: event.children,
        IssuableForSend: event.value,
        SubcategoryOfIssuance: event.value,
        dropDown3Value: [],
        dropDown3: '',
        dropDown2: event.value,
        IssuableTypeCategorValue: [
          {
            value: event.value,
            label: event.children,
          },
        ],
        SubcategoryOfIssuanceValue: [],
      });
      setPensionTypeIdForSend(event.value);
      setDropDown2Active(event.value);
      setdocumentsForMyActive(event.value);
      setPersonDocs(localDoc);
      let k = { name: 'globalDeathSertificateRelationType', value: '' };
      dispatch(changeState(k));
    }

    if (name === 'dropdown3') {
      let localDoc;
      listPensionTypes &&
        listPensionTypes.map((item: any) => {
          if (item.id == event.value) localDoc = item.documentTypes;
        });
      setState({
        ...state,
        forTable: event.children,
        IssuableForSend: event.value,
        SubcategoryOfIssuance: event.value,
        dropDown3: event.value,
        dropDown3Value: [
          {
            value: event.value,
            label: event.children,
          },
        ],
        SubcategoryOfIssuanceValue: [],
      });
      setPersonDocs(localDoc);
      setdocumentsForMyActive(event.value);
      setPensionTypeIdForSend(event.value);
      let k = { name: 'globalDeathSertificateRelationType', value: '' };

      dispatch(changeState(k));
    }

    if (name === 'dropdown4') {
      let localDoc;
      listPensionTypes &&
        listPensionTypes.map((item: any) => {
          if (item.id == event.value) localDoc = item.documentTypes;
        });
      setState({
        ...state,
        forTable: event.children,
        IssuableForSend: event.value,
        SubcategoryOfIssuance: event.value,
        dropDown3Value: [
          {
            value: event.value,
            label: event.children,
          },
        ],
        SubcategoryOfIssuanceValue: [],
      });
      setDropDown2Active(event.value);
      setPersonDocs(localDoc);
      setdocumentsForMyActive(event.value);
      setPensionTypeIdForSend(event.value);
      let k = { name: 'globalDeathSertificateRelationType', value: '' };

      dispatch(changeState(k));
    }

    if (name == 'SubcategoryOfIssuance') {
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
        SubcategoryOfIssuanceValue: [{ value: event.value, label: event.children }],
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
      id: '41ab3791-a327-4117-bd8a-499a4b20d552',
      name: 'დამენიშნოს',
    },
    {
      id: '137909e6-4155-4d6a-b762-623bd119491c',
      name: 'შემიწყდეს',
    },
    {
      id: '9404c89f-140f-4d5c-b01a-b3335dba241b',
      name: 'აღდგენა',
    },
  ];

  const dummyRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  const { Option } = Select;

  const steps = [
    {
      className: 'stepMain',
      title: '1',
      content: (
        <div className="mainStep">
          <div className='secondStep'>

            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={18}>
                <Card className="steatmentCard">
                  <div className="orderTitle">სოციალური პაკეტის რეგისტრაცია</div>

                  <Row>
                    <Col
                      className="orderCol"
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={24}
                      xxl={24}
                    >
                      <div className="personText">
                        {' '}
                        მე {person.firstName} {person.lastName} ({person.privateNumber}
                        ), თანახმა ვარ &nbsp;
                        <Select
                          className='compensationFirst'
                          value={state.operationStatusId}
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
                          onChange={e => handleChangeSelect(e, 'operationStatusId')}
                        >
                          {operationStatuses?.map(item => (
                            <Option key={item.id} value={item.id}>
                              {item.name}
                            </Option>
                          ))}
                        </Select>
                        &nbsp; სოციალური პაკეტი
                      </div>
                    </Col>



                    <Col
                      className="orderCol"
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={24}
                      xxl={24}
                    >
                      <div>
                        <Select
                          className='compensationSelects'
                          value={state.IssuableTypeCategor}
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
                          onChange={(value, event) =>
                            handleChangeIssuableDropdown('dropdown1', value, event)
                          }
                        >
                          {IssuableTypeArry1?.map((item: any) => (
                            <Option key={item.value} value={item.value}>
                              {item.label}
                            </Option>
                          ))}
                        </Select>
                      </div>
                    </Col>

                  </Row>
                  <Row>
                    {state.IssuableTypeValue.length != 0 &&
                      listPensionTypes.some((item: any) => {
                        return item.pensionTypeId == state.IssuableTypeCategor;
                      }) && (
                        <Col
                          className="orderCol"
                          xs={24}
                          sm={24}
                          md={12}
                          lg={24}
                          xl={24}
                          xxl={24}
                        >
                          <Select
                            value={state.IssuableTypeCategorValue}
                            className='compensationSelects'
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
                            onChange={(value, event) =>
                              handleChangeIssuableDropdown('dropdown2', value, event)
                            }
                          >
                            {IssuableTypeCategorArry1.map((item: any) => (
                              <Option key={item.value} value={item.value}>
                                {item.label}
                              </Option>
                            ))}
                          </Select>
                        </Col>
                      )}
                    {state.IssuableTypeCategorValue.length != 0 &&
                      listPensionTypes.some((item: any) => {
                        return item?.pensionTypeId == state.dropDown2;
                      }) && (
                        <Col
                          className="orderCol"
                          xs={24}
                          sm={24}
                          md={24}
                          lg={24}
                          xl={24}
                          xxl={24}
                        >
                          <Select
                            value={state.dropDown3Value}
                            className='compensationSelects'
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
                            onChange={(value, event) =>
                              handleChangeIssuableDropdown('dropdown3', value, event)
                            }
                          >
                            {dropDown3Array.map((item: any) => (
                              <Option key={item.value} value={item.value}>
                                {item.label}
                              </Option>
                            ))}
                          </Select>
                        </Col>
                      )}

                    <Col xl={24}>
                      {' '}
                      <div className="orderRegion">
                        გთხოვთ, ჩემი განაცხადის განხილვა მოხდეს
                      </div>{' '}
                    </Col>

                    <Row gutter={100}>
                      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className="regionTitle">რეგიონი</div>
                        <Select
                          className='compensationRegionSelects'
                          value={state?.regionValue}
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

                      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className="regionTitle">რაიონული განყოფილება</div>
                        <Select
                          value={state?.territorialUnitId == '00000000-0000-0000-0000-000000000000' ? (null) : (state?.territorialUnitId)}
                          className='compensationRegionSelects'
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
                          onChange={(e, d) =>
                            handleChangeSelect2(e, d)
                          }

                        >
                          {regions &&
                            regions?.map((item: any) => {
                              if (item.regionalServiceCenterId == state.regionValue)
                                return (
                                  <Option key={item.id} value={item.id}>
                                    {item.name}
                                  </Option>
                                );
                            })}
                        </Select>
                      </Col>
                    </Row>
                  </Row>
                  <Row>
                    {dropDown1Active != '325d056e-25d1-4d34-a191-3994fecabacb' && (
                      <>
                        <Col xs={24} sm={24} md={12} lg={24} xl={24}>
                          <div className="orderCol mt20">
                            ახორციელებთ საჯარო საქმიანობას?
                          </div>
                          <Radio.Group onChange={changeRadioButton} value={radio}>
                            <Radio value={true} className="orderCol2">
                              დიახ
                            </Radio>
                            <Radio value={false} className="orderCol2">
                              არა
                            </Radio>
                          </Radio.Group>
                        </Col>{' '}
                      </>
                    )}
                    <div className="borderDiv">
                      <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                          <div className="textDiv ">
                            <UpOutlined className='iconArrow' />
                            გთხოვთ გაითვალისწინოთ: <br />
                            -თუ უკვე ბრძანდებით რომელიმე სახელმწიფო გასაცემლის მიმღები, რომელიც გამორიცხავს მოთხოვნილი გასაცემლის მიღებას,
                            აუცილებელია შეიწყვიტოთ უკვე არსებული გასაცემელი. <br />
                            -თუ თქვენ უკვე გაქვთ დარეგისტრირებული განცხადება ისეთი გასაცემლის მოთხოვნით, რომელიც გამორიცხავს მიმდინარე გასაცემლის
                            მოთხოვნას, წინა განცხადება ჩაითვლება გაუქმებულად. <br />
                            თუ თანახმა ბრძანდებით, მაშინ გთხოვთ დააფიქსირეთ თანხმობა{' '}
                          </div>{' '}
                          <br />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Checkbox
                            className="checkBoxText"
                          // onChange={onChange}
                          >
                            <div className="checkBoxText">
                              {' '}
                              თანახმა ვარ შევიწყვიტო არსებული გასაცემელი{' '}
                            </div>
                          </Checkbox>
                        </Col>
                      </Row>
                    </div>
                  </Row>
                  <br />
                  <Row>
                    <div className='stepBtnsWrapper'>
                      <Button className='stepNext' type="primary" onClick={() => next()} onMouseUp={scrollUp}>
                        შემდეგი
                      </Button>
                    </div>
                  </Row>
                </Card>
              </Col>

              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={8}
                xxl={6}
                className="colForBranchesTop, mgt-14"
              >
                <BranchesAndDebtor />
              </Col>
            </Row>
          </div>
        </div>
      ),
    },
    {
      className: 'stepMain step2',
      title: '2',
      content: (
        <div className="mainStep">
          <div className='secondStep'>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={19} xxl={18}>
                <Card
                  className={
                    documentDropDown != false &&
                      state.operationStatusId === '41ab3791-a327-4117-bd8a-499a4b20d552'
                      ? 'uploadCard'
                      : 'hiddenClass'
                  }
                >
                  <div className="orderTitle">სოციალური პაკეტის რეგისტრაცია</div>
                  {documentDropDownCopy.length != 0 ? (
                    <>
                      {documentDropDownCopy.map((item: any) => (
                        <Row>
                          <Col span={24} className='colMb40'>
                            {item.name ==
                              'შესაბამისი სამედიცინო დაწესებულების მიერ გაცემული სამედიცინო-სოციალური ექსპერტიზის შემოწმების აქტის ამონაწერი' && (
                                <UploadInformation uploadinfoNumber={1} />
                              )}
                            {item.name ==
                              'შესაბამისი სამედიცინო დაწესებულების მიერ გაცემული სამედიცინო-სოციალური ექსპერტიზის შემოწმების აქტის ამონაწერი, რომელშიც მითითებული იქნება შესაძლებლობის შეზღუდვის მიზეზობრივი კავშირი ომთან' && (
                                <UploadInformation7 uploadinfoNumber={2} />
                              )}
                            {item.name == 'მარჩენალის გარდაცვალების მოწმობა' && (
                              <UploadInformation2 uploadinfoNumber={2} />
                            )}
                            {item.name ==
                              'გარდაცვლილი პირის დაბადების მოწმობა (მშობლის შემთხვევაში)' && (
                                <UploadInformation3 uploadinfoNumber={2} />
                              )}
                            {item.name ==
                              'გარდაცვლილი პირის ქორწინების მოწმობა (მეუღლის შემთხვევაში)' && (
                                <UploadInformation4 uploadinfoNumber={2} />
                              )}
                            {item.name ==
                              'დაბადების მოწმობა (შვილის შემთხვევაში)' && (
                                <UploadInformation5 uploadinfoNumber={2} />
                              )}
                            {item.name ==
                              'მარჩენალგარდაცვლილი ბავშვის დაბადების მოწმობა' && (
                                <UploadInformation6 uploadinfoNumber={2} />
                              )}
                            {item.name ==
                              'ვეტერანის სტატუსის დამადასტურებელი დოკუმენტი' && (
                                <UploadInformation8 uploadinfoNumber={2} />
                              )}
                            {item.name ==
                              'სასამართლოს გადაწყვეტილება პოლიტიკური რეპრესიების მსხვერპლად აღიარების შესახებ' && (
                                <UploadInformation9 uploadinfoNumber={2} />
                              )}
                            {item.name ==
                              'მარჩენალის გარდაცვალების მოწმობა (დედის მონაცემები)' && (
                                <UploadInformation10 uploadinfoNumber={2} />
                              )}
                            {item.name ==
                              'მარჩენალის გარდაცვალების მოწმობა (მამის მონაცემები)' && (
                                <UploadInformation11 uploadinfoNumber={2} />
                              )}
                          </Col>
                        </Row>
                      ))}
                    </>
                  ) : (
                    <>
                      {documentDropDown.map((item: any) => (
                        <Row>
                          <Col span={24} className='colMb40'>
                            {item.name ==
                              'შესაბამისი სამედიცინო დაწესებულების მიერ გაცემული სამედიცინო-სოციალური ექსპერტიზის შემოწმების აქტის ამონაწერი' && (
                                <UploadInformation uploadinfoNumber={1} />
                              )}
                            {item.name ==
                              'შესაბამისი სამედიცინო დაწესებულების მიერ გაცემული სამედიცინო-სოციალური ექსპერტიზის შემოწმების აქტის ამონაწერი, რომელშიც მითითებული იქნება შესაძლებლობის შეზღუდვის მიზეზობრივი კავშირი ომთან' && (
                                <UploadInformation7 uploadinfoNumber={2} />
                              )}
                            {item.name == 'მარჩენალის გარდაცვალების მოწმობა' && (
                              <UploadInformation2 uploadinfoNumber={2} />
                            )}
                            {item.name ==
                              'ვეტერანის სტატუსის დამადასტურებელი დოკუმენტი' && (
                                <UploadInformation8 uploadinfoNumber={2} />
                              )}
                            {item.name ==
                              'სასამართლოს გადაწყვეტილება პოლიტიკური რეპრესიების მსხვერპლად აღიარების შესახებ' && (
                                <UploadInformation9 uploadinfoNumber={2} />
                              )}
                            {item.name ==
                              'მარჩენალის გარდაცვალების მოწმობა (დედის მონაცემები)' && (
                                <UploadInformation10 uploadinfoNumber={2} />
                              )}
                            {item.name ==
                              'მარჩენალის გარდაცვალების მოწმობა (მამის მონაცემები)' && (
                                <UploadInformation11 uploadinfoNumber={2} />
                              )}
                            {item.name ==
                              'მარჩენალგარდაცვლილი ბავშვის დაბადების მოწმობა' && (
                                <UploadInformation6 uploadinfoNumber={2} />
                              )}
                          </Col>
                        </Row>
                      ))}
                    </>
                  )}
                  <br />

                  <div className='stepBtnsWrapperSecond'>
                    <Button className='stepBack' onClick={() => prev()}>
                      უკან დაბრუნება
                    </Button>
                    <Button className='stepNext' type="primary" onClick={() => next()} onMouseUp={scrollUp}>
                      შემდეგი
                    </Button>
                  </div>

                </Card>
              </Col>

              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                xxl={6}
                className="colForBranchesTop, mgt-14"

              >
                <BranchesAndDebtor />
              </Col>
            </Row>

          </div>
        </div>
      ),
    },
    {
      className: 'stepMain step3',
      title: '3',
      content: (
        <div className="mainStep">
          <div className='secondStep'>

            <Row>
              <Col xs={24} sm={24} md={24} lg={16} xl={18}>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={24}>
                    <Card
                      className={
                        documentDropDown != false &&
                          state.operationStatusId ===
                          '41ab3791-a327-4117-bd8a-499a4b20d552'
                          ? 'uploadCard uploadCardWrapper'
                          : 'hiddenClass'
                      }
                    >
                      {documentDropDownCopy.length != 0 ? (
                        <>
                          {documentDropDownCopy.map((item: any) => (
                            <Row>
                              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Row>
                                  <Col span={24}>
                                    <div className="textParag"> {item.name}</div>
                                  </Col>
                                  <Col span={24}>
                                    <Row justify="center">
                                      <Upload
                                        customRequest={dummyRequest}
                                        beforeUpload={(file, fileList) =>
                                          handleAddFile(file, fileList, item.id)
                                        }
                                        onRemove={uploadRemove}
                                      >
                                        <div className="uploadBtnDiv">
                                          <UploadOutlined className="forUploadIcon" />
                                          <div className="uploadText">
                                            {' '}
                                            ატვირთე ფაილი
                                          </div>
                                        </div>
                                      </Upload>
                                    </Row>
                                    <br />{' '}
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          ))}
                        </>
                      ) : (
                        <div className='documentsDirectWrapper'>
                          {documentDropDown.map((item: any) => (
                            <div className='newUploadCard'>
                              <Tooltip title={item.name}>
                                <div className="textParag"> {item.name}</div>
                              </Tooltip>
                              <Upload
                                customRequest={dummyRequest}
                                beforeUpload={(file, fileList) =>
                                  handleAddFile(file, fileList, item.id)
                                }
                                onRemove={uploadRemove}
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
                            </div>
                          ))}
                        </div>
                      )}
                      <div className='stepBtnsWrapperSecond'>
                        <Button className='stepBack' onClick={() => prev()}>
                          უკან დაბრუნება
                        </Button>

                        <Button onClick={sendRequest} className="send-button">
                          გადაგზავნა &nbsp;&nbsp;&nbsp;{' '}
                          <SendOutlined className='sendButtonIcon' />
                        </Button>
                        <Col xs={24} sm={24} md={12} lg={12} xl={24} className='mt14'>
                          <Button onClick={generatePdf} className="stepBack">
                            განაცხადის გენერაცია
                            <img src={Vector7} alt="" />
                          </Button>
                        </Col>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={6}

                className="colForBranchesTop, mgt-14"
              >
                <BranchesAndDebtor />
              </Col>
            </Row>
          </div>
        </div>
      ),
    },
  ];
  const items = steps.map(item => ({ key: item.title, title: item.title, className: item.className }));

  const contentStyle: React.CSSProperties = {
  };

  return (
    <>
      <div className="stateForm">
        {/* <br /> */}
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
                <Breadcrumb.Item href="">
                  სოციალური პაკეტის რეგისტრაცია
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            {(state.operationStatusId == 'გთხოვთ შეავსოთ' || state.operationStatusId == '9404c89f-140f-4d5c-b01a-b3335dba241b') && (<>
              <div className="mydiv">

                <div className="mainStep">
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={18}>
                      <Card className="steatmentCard">
                        <div className="orderTitle">სოციალური პაკეტის რეგისტრაცია</div>

                        <Row>
                          <Col
                            className="orderCol"
                            xs={24}
                            sm={24}
                            md={24}
                            lg={24}
                            xl={24}
                            xxl={24}
                          >
                            <div className="personText">
                              {' '}
                              მე {person.firstName} {person.lastName} ({person.privateNumber}
                              ), თანახმა ვარ &nbsp;
                              <Select
                                className='compensationFirst'
                                value={state.operationStatusId}
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
                                onChange={e => handleChangeSelect(e, 'operationStatusId')}
                              >
                                {operationStatuses?.map(item => (
                                  <Option key={item.id} value={item.id}>
                                    {item.name}
                                  </Option>
                                ))}
                              </Select>
                              &nbsp; სოციალური პაკეტი
                            </div>
                          </Col>
                        </Row>
                        <Button onClick={sendRequest} className="send-button">
                          გადაგზავნა &nbsp;&nbsp;&nbsp;{' '}
                          <SendOutlined className='sendButtonIcon' />
                        </Button>
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
                    </Col></Row>

                  <br />
                </div>
              </div></>)}
            {(state.operationStatusId == '137909e6-4155-4d6a-b762-623bd119491c') && (<>
              <div className="mydiv">

                <div className="mainStep">
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={18}>
                      <Card className="steatmentCard">
                        <div className="orderTitle">სოციალური პაკეტის რეგისტრაცია</div>
                        <Row>
                          <Col
                            className="orderCol"
                            xs={24}
                            sm={24}
                            md={24}
                            lg={24}
                            xl={24}
                            xxl={24}
                          >
                            <div className="personText">
                              {' '}
                              მე {person.firstName} {person.lastName} ({person.privateNumber}
                              ), თანახმა ვარ &nbsp;
                              <Select
                                className='compensationFirst'
                                value={state.operationStatusId}
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
                                onChange={e => handleChangeSelect(e, 'operationStatusId')}
                              >
                                {operationStatuses?.map(item => (
                                  <Option key={item.id} value={item.id}>
                                    {item.name}
                                  </Option>
                                ))}
                              </Select>
                              &nbsp; სოციალური პაკეტი
                            </div>
                            <div className='personText'>შეჩერების მიზეზი &nbsp;
                              <Select
                                style={{ borderRadius: 20, marginBottom: '89px', minWidth: '150px' }}
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
                            </div>
                          </Col>
                        </Row>
                        {terminationReason === 3 &&
                          state.operationStatusId ==
                          '137909e6-4155-4d6a-b762-623bd119491c' && (
                            <>
                              <div className="commentDiv">კომენტარი</div>
                              <Input
                                className="otherTerminationReason"
                                name="otherTerminationReason"
                                onChange={e => changelocalState(e)}
                              />
                            </>
                          )}
                        <Button onClick={sendRequest} className="send-button">
                          გადაგზავნა &nbsp;&nbsp;&nbsp;{' '}
                          <SendOutlined className='sendButtonIcon' />
                        </Button>
                      </Card>
                    </Col></Row></div>
                <br />

              </div>

            </>)}

            {
              state.operationStatusId === '41ab3791-a327-4117-bd8a-499a4b20d552' &&
              (
                <div className="mydiv">
                  <Steps current={current} items={items} />
                  <div style={contentStyle}>{steps[current].content}</div>
                </div>
              )
            }
          </>
        )}
        <br />
      </div>
    </>
  );
};
