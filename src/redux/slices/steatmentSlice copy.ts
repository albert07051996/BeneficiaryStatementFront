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


export const getListPensionTypes = createAsyncThunk(
    'getListPensionTypes',
    async () => {
        try {
            const response = await callApi.steatment.ListPensionTypesAPI();
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);
        }
    }
);


export const getPerson = createAsyncThunk(
    'getPerson',
    async () => {
        try {
            const response = await callApi.steatment.getPersonAPI();
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);

        }
    }
);

export const addPensionStatement = createAsyncThunk(
    'addPensionStatement',
    async (data: FormData, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.addPensionStatementAPI(data);
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);
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
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);
        }
    }
);

export const confirmSignUp = createAsyncThunk(
    'confirmPasswordRecovery',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.users.confirmSignUpApi(data);
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);
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
            message.info(err.response.data.errors.messages[0]);
        }
    }
);

export const steatmentSlice = createSlice({
    name: 'foreignSync',
    initialState: {
        ListPensionTypes: [],
        personInfo: {},
        userData: initialState,
        loading: false,
        finished: false,
        error: null,
        success: false,
    },
    reducers: {
        fillUserData(state, action) {
            state.userData = action.payload;
        },
        setUserType(state, action) {
            state.userData.user.LabUser = action.payload;
        },
    },

    extraReducers: builder => {

        builder.addCase(getListPensionTypes.fulfilled, (state, action: any) => {
            let data = action.payload;
            state.ListPensionTypes = data;
        });

        builder.addCase(getListPensionTypes.pending, (state, action) => {
            state.finished = false;
            state.error = null;
        });

        builder.addCase(getListPensionTypes.rejected, (state, action: any) => {
            state.finished = false;
            state.success = false;
            state.error = action.payload?.Errors.messages.toString();
        });

        builder.addCase(getPerson.fulfilled, (state, action: any) => {
            let data1 = action.payload;
            state.personInfo = data1;
        });

        builder.addCase(getPerson.pending, (state, action) => {
            state.finished = false;
            state.error = null;
        });

        builder.addCase(getPerson.rejected, (state, action: any) => {
            state.finished = false;
            state.success = false;
            state.error = action.payload?.Errors.messages.toString();
        });
    },
});

export const sendSms = createAsyncThunk(
    'sendSms',

    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.users.sendSmsApi(data);
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);

        }
    }
);

export const sendSmsReg = createAsyncThunk(
    'sendSmsReg',

    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            console.log(data, " axali esaa")
            const response = await callApi.users.sendSmsReg(data);
            return response;
        } catch (error: any) {
            message.info(error.response.data.errors.messages[0]);
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
            message.info(err.response.data.errors.messages[0]);


        }
    }
);
