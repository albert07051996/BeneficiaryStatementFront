import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as callApi from '../../service';
import { message } from 'antd';




export const getPensionStatementById = createAsyncThunk(
    'getPensionStatementById',
    async (statementId: any, { rejectWithValue, dispatch, getState }) => {


        try {

            const response = await callApi.editSteatment.getPensionStatementByIdApi(statementId);

            return response;
        } catch (err: any) {

            message.info(err.response.data.errors.messages[0]);
        }
    }
);
export const getSubsidyPensionById = createAsyncThunk(
    'getSubsidyPensionById',
    async (statementId: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.editSteatment.getSubsidyPensionByIdAPI(statementId);
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);
        }
    }
);


export const getMinerStatementById = createAsyncThunk(
    'getMinerStatementById',
    async (statementId: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.editSteatment.getMinerStatementByIdApi(statementId);
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);
        }
    }
);










const initialPensionStatement: any = {}
const initialMinerStatementById: any = {}
const initialSubsidyPensionById: any = {}
export const editSteatmentSlice = createSlice({
    name: 'foreignSync',
    initialState: {
        PensionStatement: initialPensionStatement,
        loading: false,
        finished: false,
        error: null,
        success: false,
        MinerStatement: initialMinerStatementById,
        SubsidyPension: {},
        MinerStatementByIdSuccess: false,
        // MinerStatementById
    },
    reducers: {
        setMinerStatementFalse(state) {
            state.MinerStatementByIdSuccess = false;
        },
        // setUserType(state, action) {
        //     state.userData.user.LabUser = action.payload;
        // },
        // clearaddPensionStatementSuccess(state) {
        //     state.addPensionStatementSuccess = false;
        // }
    },

    extraReducers: builder => {
        builder.addCase(
            getPensionStatementById.fulfilled,
            (state, action: any) => {
                console.log('addPensionStatement ...action.payload', action);
                state.PensionStatement = action.payload
                state.loading = false;
                state.finished = true;
                state.success = true;

            }
        );

        builder.addCase(getPensionStatementById.pending, (state, action) => {
            state.loading = true;
            state.finished = false;
            state.success = false;
            state.error = null;
        });

        builder.addCase(getPensionStatementById.rejected, (state, action: any) => {
            //console.log('addPensionStatementError pirveli', action.payload);
            state.finished = true;
            state.success = false;
            state.error = action.payload?.errors;
            state.loading = false;
        });
        builder.addCase(
            getSubsidyPensionById.fulfilled,
            (state, action: any) => {
                console.log('addPensionStatement ...action.payload', action);
                state.SubsidyPension = action.payload
                state.loading = false;
                state.finished = true;
                state.success = true;

            }
        );

        builder.addCase(getSubsidyPensionById.pending, (state, action) => {
            state.loading = true;
            state.finished = false;
            state.success = false;
            state.error = null;
        });

        builder.addCase(getSubsidyPensionById.rejected, (state, action: any) => {
            //console.log('addPensionStatementError pirveli', action.payload);
            state.finished = true;
            state.success = false;
            state.error = action.payload?.errors;
            state.loading = false;
        });



        builder.addCase(
            getMinerStatementById.fulfilled,
            (state, action: any) => {
                state.MinerStatement = action?.payload
                state.loading = false;
                state.finished = true;
                state.MinerStatementByIdSuccess = true;

            }
        );

        builder.addCase(getMinerStatementById.pending, (state, action) => {
            state.loading = true;
            state.finished = false;
            state.MinerStatementByIdSuccess = false;
            state.error = null;
        });

        builder.addCase(getMinerStatementById.rejected, (state, action: any) => {
            state.finished = true;
            state.MinerStatementByIdSuccess = false;
            state.error = action.payload?.errors;
            state.loading = false;
        });
    },
});
export const { setMinerStatementFalse } = editSteatmentSlice.actions;
