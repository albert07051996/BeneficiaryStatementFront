import { UserDTO, validateDTO } from '../types/UserDTO';
import CallApi from './api';
import { APIID } from '../constants'

export const addPensionStatementAPI = (data: FormData) => {
    const token = localStorage.getItem('_token')
    return CallApi({     
        url: `${APIID}/api/Statement`,
        method: 'post',
        data: data,
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
}

export const createSocialStatementAPI = (data: FormData) => {
    const token = localStorage.getItem('_token')
    return CallApi({
        url: `${APIID}/api/Statement/CreateSocialStatement`,
        method: 'post',
        data: data,
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
}
export const createSubsidyStatementAPI = (data: FormData) => {
    const token = localStorage.getItem('_token')
    return CallApi({
        url: `${APIID}/api/Statement/CreateSubsidyStatement`,
        method: 'post',
        data: data,
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
}

export const CreateMinerStatementAPI = (data: FormData) => {
    const token = localStorage.getItem('_token')
    return CallApi({
        url: `${APIID}/api/Statement/CreateMinerStatement`,
        method: 'post',
        data: data,
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
}

export const ListPensionTypesAPI = () =>
    CallApi({
        url: `${APIID}/api/Statement/ListPensionTypes`,
        method: 'get',
    });

export const GetMinerProfessionsApi = () =>
    CallApi({
        url: `${APIID}/api/Statement/GetMinerProfessions`,
        method: 'get',
    });

export const GetMedicalInstitutionsAPI = () =>
    CallApi({
        url: `${APIID}/api/Statement/GetMedicalInstitutions`,
        method: 'get',
    });

export const terminationReasonApi = () =>
    CallApi({
        url: `${APIID}/api/Statement/ListTerminationReason`,
        method: 'get',
    });

export const getVeteranCategoriesApi = () =>
    CallApi({
        url: `${APIID}/api/Statement/GetVeteranCategories`,
        method: 'get',
    });

export const getZipCodes = () =>
    CallApi({
        url: `https://localhost:7124/api/Dictionary/ZIPCodes`,
        method: 'get',
    });

export const getCitiesByZIPCodeAPI = (code: string) =>
    CallApi({
        url: `https://localhost:7124/api/Dictionary/CitiesByZIPCode?zipCode=${code}`,
        method: 'get',
    });

export const getApplicationTypesAPI = () =>
    CallApi({
        url: `https://localhost:7124/api/Dictionary/ApplicationTypes`,
        method: 'get',
    });

export const getRegionTypesAPI = () =>
    CallApi({
        url: `https://localhost:7124/api/Dictionary/RegionTypes`,
        method: 'get',
    });

export const communicationTypesAPI = () =>
    CallApi({
        url: `https://localhost:7124/api/Dictionary/CommunicationTypes`,
        method: 'get',
    });

export const ValidatePersonInfoAPI = (data:validateDTO) =>
    CallApi({
        url: `https://localhost:7124/ValidatePersonInfo?PrivateNumber=${data.PrivateNumber}&FirstName=${data.FirstName}&LastName=${data.LastName}&BirthYear=${data.BirthYear}`,
        method: 'get',
    });

export const ReregisterTypesAPI = () =>
    CallApi({
        url: `https://localhost:7124/api/Dictionary/ReregisterTypes`,
        method: 'get',
    });

export const DistrictByZIPCodeAPI = (code: string) =>
    CallApi({
        url: `https://localhost:7124/api/Dictionary/DistrictByZIPCode?zipCode=${code}`,
        method: 'get',
    });

export const AddressByZIPCodeAPI = (code: string) =>
    CallApi({
        url: `https://localhost:7124/api/Dictionary/AddressByZIPCode?zipCode=${code}`,
        method: 'get',
    });

export const GovermentByZIPCodeAPI = (code: string) =>
    CallApi({
        url: `https://localhost:7124/api/Dictionary/GovermentByZIPCode?zipCode=${code}`,
        method: 'get',
    });

export const VillagesByZIPCodeGovermentAPI = (data:{zipCode:string, name:string}) =>
    CallApi({
        url: `https://localhost:7124/api/Dictionary/VillagesByZIPCodeGoverment?zipCode=${data.zipCode}&government=${data.name}`,
        method: 'get',
    });

export const GetPensionTypesApi = () =>
    CallApi({
        url: `${APIID}/api/Statement/GetPensionTypes`,
        method: 'get',
    });

export const UpdatePensionStatementAPI = (data: any) => {
    CallApi({
        url: `${APIID}/api/Statement/UpdatePensionStatement`,
        data: data,
        method: 'put',
    });
    console.log(data, 'dataofaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
}

export const UpdateMinerStatementAPI = (data: any) => {

    CallApi({
        url: `${APIID}/api/Statement/UpdateMinerStatement`,
        data: data,
        method: 'put',
    });
    console.log(data, 'dataofaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
}

export const getPersonAPI = () =>
    CallApi({    
        url: `${APIID}/api/person/getPersonInfo`,
        method: 'GET',
    });

export const CheckActiveOtherStateIssueAPI = (person: any) =>
    CallApi({      
        url: `${APIID}/api/Statement/CheckActiveOtherStateIssue/${person?.beneficiaryId}/${person?.privateNumber}/5A5BB5D8-EF44-43ED-40CC-08D8EA07976F`,
        method: 'GET',

    });
export const CheckActivePensionPayoutAPI = (person: any) =>
    CallApi({
            url: `${APIID}/api/Statement/CheckActivePensionPayout?beneficiaryId=${person.beneficiaryId}&beneficiaryPrivateNumber=${person.privateNumber}`,
        method: 'GET',

    });

export const getRegionsAPI = () =>

    CallApi({       
        url: `${APIID}/api/Statement/ListTeritorialUnits`,
        method: 'GET',
    });

export const updatePhoneNumberApi = (data: any) =>
    CallApi({
        url: `${APIID}/api/Account/confirmphoneNumberChange`,
        method: 'post',
        data: {
            password: data.password,
            phoneNumber: data.phoneNumber,
            privateNumber: data.privateNumber,
            smsCode: data.smsCode
        }
    });

export const confirmPasswordRecoveryApi = (data: any) =>
    CallApi({
        url: `${APIID}/api/Account/confirmPasswordRecovery`,
        method: 'post',
        data: {
            privateNumber: data.privateNumber,
            password: data.password,
            confirmedPassword: data.confirmedPassword,
            smsCode: data.smsCode
        }
    });

export const confirmSignUpApi = (data: any) =>
    CallApi({
        url: `${APIID}/api/Account/confirmSignUp`,
        method: 'post',
        data: {
            privateNumber: data.privateNumber,
            phoneNumber: data.phoneNumber,
            smsCode: data.smsCode
        }
    });

export const createApplicationAPI = (data: any) =>
    CallApi({
        url: `https://localhost:7124/api/Application/CreateApplication1`,
        method: 'post',
        data: data,
    });

export const generatePensionPdfAPI = (data: any) =>
    CallApi({
        url: `${APIID}/api/PdfGenerator/GeneratePensionPdf`,
        method: 'post',
        responseType: 'blob',
        data: data
    });

export const generateMinerPdfAPI = (data: any) =>
    CallApi({
        url: `${APIID}/api/PdfGenerator/GenerateMinerStatementPdf`,
        method: 'post',
        responseType: 'blob',
        data: data
    });

export const generateSocialPdfAPI = (data: any) =>
    CallApi({
        url: `${APIID}/api/PdfGenerator/GenerateSocialStatementPdf`,
        method: 'post',
        responseType: 'blob',
        data: data
    });

export const generateSubsidyPdfAPI = (data: any) =>
    CallApi({
        url: `${APIID}/api/PdfGenerator/GenerateSubsidyPdf`,
        method: 'post',
        responseType: 'blob',
        data: data
    });

export const PasswordRecoveryApi = (data: any) =>
    CallApi({
        url: `${APIID}/api/Account/passwordRecovery`,
        method: 'post',
        data: {
            birthDate: data.birthDate,
            documentNumber: '',
            firstName: data.firstName,
            lastName: data.lastName,
            privateNumber: data.privateNumber,
        }
    });

export const sendSmsApi = (data: any) =>
    CallApi({

        url: `${APIID}/api/Account/signIn`,
        method: 'post',
        data: { userName: data.userName, password: data.password },
    });

export const sendSmsApiForMobileUpdate = (data: any) =>
    CallApi({
        url: `${APIID}/api/Account/phoneNumberChange/`,
        method: 'post',
        data: {
            birthDate: data.birthDate, documentNumber: data.documentNumber,
            firstName: data.firstName, lastName: data.lastName, password: data.password,
            phoneNumber: data.phoneNumber, privateNumber: data.privateNumber
        },
    });

export const sendSmsReg = (data: any) =>
    CallApi({
        url: `${APIID}/api/Account/signUp`,
        method: 'post',
        data: {
            privateNumber: data.privateNumber,
            firstName: data.firstName,
            lastName: data.lastName,
            birthday: data.birthday,
            email: data.email,
            activeAddress: data.actualAddress,
            password: data.password,
            confirmedPassword: data.confirmedPassword,
            phoneNumber: data.phoneNumber,
            documentNumber: ''
        },
    });
