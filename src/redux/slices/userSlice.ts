import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as callApi from '../../service';
import { UserResponse } from '../../types/User';
import { message } from 'antd';
const initialState: UserResponse = {
  user: {
    id: '',
    loginName: '',
    password: '',
    personalID: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    telephone: '',
    address: '',
    isSuperAdmin: false,
    twoDimensionalAuth: false,
    passwordExpirationDate: '',
    LabUser: false,
  },
  attributes: null,
};

export const loginUser = createAsyncThunk(
  'loginUser',
  async (data: any, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.users.login(data);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updatePhoneNumber = createAsyncThunk(
  'updatePhoneNumber',
  async (data: any, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.users.updatePhoneNumberApi(data);
      return response;
    } catch (err: any) {
      message.info(err.response.data.errors.messages[0]);
    }
  }
);

export const confirmPasswordRecovery = createAsyncThunk(
  'confirmPasswordRecovery',
  async (data: any, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.users.confirmPasswordRecoveryApi(data);
      message.success('პაროლი წარმატებით შეიცვალა')
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const confirmSignUp = createAsyncThunk(
  'confirmSignUp',
  async (data: any, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.users.confirmSignUpApi(data);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const passwordRecovery = createAsyncThunk(
  'passwordRecovery',
  async (data: any, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.users.PasswordRecoveryApi(data);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const sendSms = createAsyncThunk(
  'sendSms',
  async (data: any, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.users.sendSmsApi(data);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const sendSmsReg = createAsyncThunk(
  'sendSmsReg',

  async (data: any, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.users.sendSmsReg(data);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const sendSmsForMobileUpdate = createAsyncThunk(
  'sendSmsForMobileUpdate',
  async (data: any, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.users.sendSmsApiForMobileUpdate(data);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);

    }
  }
);

export const userSlice = createSlice({
  name: 'foreignSync',
  initialState: {
    userData: initialState,
    loading: false,
    finished: false,
    error: null,
    success: false,
    personInfo: {},
    registrError: null,
    registrSuccess: false,
    smsLoginSuccess: false,
    smsLoginError: null,
    sendSmsRegSuccess: false,
    sendSmsRegError: null,
    passwordSmsSuccess: false,
    passwordSmsError: null,
    passwordRecoverySuccess: false,
    passwordRecoveryError: null,
    smsForMobileUpdateSuccess: false,
    smsForMobileUpdateError: null,
    updatePhoneNumberSuccess: false,
    updatePhoneNumberError: null,
    userSuccess: false,
  },
  reducers: {
    fillUserData(state, action) {
      state.userData = action.payload;
    },

    setUserType(state, action) {
      state.userData.user.LabUser = action.payload;
    },

    resetOasswordRecoverySuccess(state) {
      state.passwordRecoverySuccess = false;
    },

    passwordSmsSuccessFalse(state) {
      console.log("shemovida")
      state.passwordSmsSuccess = false;
    },

    passwordRecoverySuccessFalse(state) {
      state.passwordRecoverySuccess = false;
    },

    updatePhoneNumberSuccessFalse(state) {
      state.updatePhoneNumberSuccess = false;
    },
    smsForMobileUpdateSuccessFalse(state) {
      state.smsForMobileUpdateSuccess = false
    }

  },

  extraReducers: builder => {
    builder.addCase(
      updatePhoneNumber.fulfilled,
      (state, action: any) => {
        state.loading = false;
        state.finished = true;
        state.updatePhoneNumberSuccess = true;
      }
    );

    builder.addCase(updatePhoneNumber.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
      state.updatePhoneNumberSuccess = false;
      state.updatePhoneNumberError = null;
    });

    builder.addCase(updatePhoneNumber.rejected, (state, action: any) => {
      state.finished = true;
      state.updatePhoneNumberSuccess = false;
      state.updatePhoneNumberError = action.payload?.errors;
      state.loading = false;
    });

    builder.addCase(
      sendSmsForMobileUpdate.fulfilled,
      (state, action: any) => {
        state.loading = false;
        state.finished = true;
        state.smsForMobileUpdateSuccess = true;
      }
    );

    builder.addCase(sendSmsForMobileUpdate.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
      state.smsForMobileUpdateSuccess = false;
      state.smsForMobileUpdateError = null;
    });

    builder.addCase(sendSmsForMobileUpdate.rejected, (state, action: any) => {
      state.finished = true;
      state.smsForMobileUpdateSuccess = false;
      state.smsForMobileUpdateError = action.payload?.errors;
      state.loading = false;
    });


    builder.addCase(
      confirmPasswordRecovery.fulfilled,
      (state, action: any) => {
        state.loading = false;
        state.finished = true;
        state.passwordRecoverySuccess = true;
      }
    );

    builder.addCase(confirmPasswordRecovery.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
      state.passwordRecoverySuccess = false;
      state.passwordRecoveryError = null;
    });

    builder.addCase(confirmPasswordRecovery.rejected, (state, action: any) => {
      state.finished = true;
      state.passwordRecoverySuccess = false;
      state.passwordRecoveryError = action.payload?.errors;
      state.loading = false;
    });

    builder.addCase(
      passwordRecovery.fulfilled,
      (state, action: any) => {
        state.loading = false;
        state.finished = true;
        state.passwordSmsSuccess = true;
      }
    );

    builder.addCase(passwordRecovery.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
      state.passwordSmsSuccess = false;
      state.passwordSmsError = null;
    });

    builder.addCase(passwordRecovery.rejected, (state, action: any) => {
      state.finished = true;
      state.passwordSmsSuccess = false;
      state.passwordSmsError = action.payload?.errors;
      state.loading = false;
    });

    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<UserResponse>) => {
        state.userData = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
        state.loading = false;
        state.finished = true;
        state.userSuccess = true;
        state.smsLoginSuccess = false;
      }
    );

    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
      state.userSuccess = false;
      state.error = null;
    });

    builder.addCase(loginUser.rejected, (state, action: any) => {
      state.finished = true;
      state.userSuccess = false;
      state.error = action.payload?.errors;
      state.loading = false;
    });

    builder.addCase(
      sendSmsReg.fulfilled,
      (state, action: any) => {
        state.loading = false;
        state.finished = true;
        state.sendSmsRegSuccess = true;
      }
    );

    builder.addCase(sendSmsReg.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
      state.sendSmsRegSuccess = false;
      state.sendSmsRegError = null;
    });

    builder.addCase(sendSmsReg.rejected, (state, action: any) => {
      state.finished = true;
      state.sendSmsRegSuccess = false;
      state.sendSmsRegError = action.payload?.errors;
      state.loading = false;
    });

    builder.addCase(
      sendSms.fulfilled,
      (state, action: any) => {
        localStorage.setItem('user', JSON.stringify(action.payload));
        state.loading = false;
        state.finished = true;
        state.smsLoginSuccess = true;
      }
    );

    builder.addCase(sendSms.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
      state.smsLoginSuccess = false;
      state.smsLoginError = null;
    });

    builder.addCase(sendSms.rejected, (state, action: any) => {
      state.finished = true;
      state.smsLoginSuccess = false;
      state.smsLoginError = action.payload?.errors;
      state.loading = false;
    });

    builder.addCase(
      confirmSignUp.fulfilled,
      (state, action: any) => {
        state.loading = false;
        state.finished = true;
        state.registrSuccess = true;
      }
    );

    builder.addCase(confirmSignUp.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
      state.registrSuccess = false;
      state.registrError = null;
    });

    builder.addCase(confirmSignUp.rejected, (state, action: any) => {
      state.finished = true;
      state.registrSuccess = false;
      state.registrError = action.payload?.errors;
      state.loading = false;
    });
  },
});

export const { fillUserData, setUserType, resetOasswordRecoverySuccess, passwordSmsSuccessFalse,
  passwordRecoverySuccessFalse, updatePhoneNumberSuccessFalse, smsForMobileUpdateSuccessFalse } = userSlice.actions;


