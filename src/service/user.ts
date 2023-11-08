import { UserDTO } from '../types/UserDTO';
import CallApi from './api';
import { APIID } from '../constants'

export const login = (data: any) =>
  CallApi({
    url: `${APIID}/api/Account/confirmSignIn`,
    method: 'post',
    data: {
      userName: data.userName,
      smsCode: data.smsCode
    }
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
      birthDate: data.birthday,
      email: data.email,
      activeAddress: data.activeAddress,
      password: data.password,
      confirmedPassword: data.confirmedPassword,
      phoneNumber: data.phoneNumber,
      channel: '1',
      accessPersonalInformation: true
    },
  });

export function getCities(data: any) {
  throw new Error('Function not implemented.');
}


