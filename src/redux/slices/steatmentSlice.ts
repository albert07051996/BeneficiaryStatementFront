import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as callApi from '../../service';
import { PensionUser, UserResponse, RegionResponse } from '../../types/User';
import { UserDTO } from '../../types/UserDTO';
import { message } from 'antd';


const regionsState: RegionResponse = {
    id: "",
    name: ""
}

const pensionUserState: PensionUser = {
    beneficiaryId: "",
    activeAddress: "",
    address: "",
    birthDate: "",
    citizenshipId: "",
    city: "",
    comment: "",
    country: "",
    deathDate: "",
    deathMarkDate: "",
    deathRegistrationDate: "",
    deathStatus: "",
    documentNumber: "",
    email: "",
    fatherName: "",
    fatherNameEn: "",
    firstName: "",
    firstNameEn: "",
    genderId: "",
    hasDualCitizenship: "",
    id: "",
    isCivilServant: "",
    isGeorgianCitizen: "false",
    isLivingAbroad: "false",
    isVoid: "false",
    isWithoutCitizenship: "false",
    lastName: "",
    lastNameEn: "",
    payoutsList: "",
    phoneNumber: "",
    privateCardNumber: "",
    privateNumber: "",
    raion: "",
    region: "",
    relationshipTypeId: "",
    township: "",
    village: "",
    docTypeId: 0,
    hasStatements: null

};
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
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.GetPensionTypesApi();
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);
        }
    }
);
export const GetMinerProfessions = createAsyncThunk(
    'GetMinerProfessions',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.GetMinerProfessionsApi();
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);
        }
    }
);

export const GetMedicalInstitutions = createAsyncThunk(
    'GetMedicalInstitutions',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {

            const response = await callApi.steatment.GetMedicalInstitutionsAPI();
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);
        }
    }
);

export const getPensionTypes = createAsyncThunk(
    'getPensionTypes',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.GetPensionTypesApi();
            return response;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const getRegions = createAsyncThunk(
    'getRegions',
    async () => {
        try {
            const response = await callApi.steatment.getRegionsAPI();
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

export const CheckActiveOtherStateIssue = createAsyncThunk(
    'CheckActiveOtherStateIssue',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.CheckActiveOtherStateIssueAPI(data);
            return response;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const CheckActivePensionPayout = createAsyncThunk(
    'CheckActivePensionPayout',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.CheckActivePensionPayoutAPI(data);
            return response;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);






export const getTerminationReason = createAsyncThunk(
    'getTerminationReason',
    async () => {
        try {
            const response = await callApi.steatment.terminationReasonApi();
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);
        }
    }
);





export const getVeteranCategories = createAsyncThunk(
    'getVeteranCategories',
    async () => {
        try {
            const response = await callApi.steatment.getVeteranCategoriesApi();
            return response;
        } catch (err: any) {
            message.info(err.response.data.errors.messages[0]);
        }
    }
);



export const addPensionStatement = createAsyncThunk(
    'addPensionStatement',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.addPensionStatementAPI(data);
            return response;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);
export const createSocialStatement = createAsyncThunk(
    'createSocialStatement',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.createSocialStatementAPI(data);
            return response;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);
export const createSubsidyStatement = createAsyncThunk(
    'createSubsidyStatement',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.createSubsidyStatementAPI(data);
            return response;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const generatePensionPdf = createAsyncThunk(
    'generatePensionPdf',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.generatePensionPdfAPI(data);
            return response;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);
export const generateMinerStatementPdf = createAsyncThunk(
    'generateMinerStatementPdf',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.generateMinerPdfAPI(data);
            return response;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const generateSocialStatementPdf = createAsyncThunk(
    'generateSocialStatementPdf',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.generateSocialPdfAPI(data);
            return response;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);
export const generateSubsidyPdf = createAsyncThunk(
    'generateSubsidyPdf',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.generateSubsidyPdfAPI(data);
            return response;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const CreateMinerStatement = createAsyncThunk(
    'CreateMinerStatement',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.CreateMinerStatementAPI(data);
            return response;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);
export const UpdatePensionStatement = createAsyncThunk(
    'UpdatePensionStatement',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.UpdatePensionStatementAPI(data);
            return response;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const UpdateMinerStatement = createAsyncThunk(
    'UpdateMinerStatement',
    async (data: any, { rejectWithValue, dispatch, getState }) => {
        try {
            const response = await callApi.steatment.UpdateMinerStatementAPI(data);
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

const initialAnswer: any = {

}
export const steatmentSlice = createSlice({
    name: 'foreignSync',
    initialState: {
        listPensionTypes: [],
        listMinerProffesions: [],
        listMinerProffesionsSuccess: false,
        listMinerProffesionsError: null,
        updatePensionStatement: [],
        updatePensionStatementSuccess: false,
        updatePensionStatementError: null,

        UpdateMinerStatement: [],
        UpdateMinerStatementSuccess: false,
        UpdateMinerStatementError: null,

        generatePensionPdfSuccess: false,
        generatePensionPdfError: null,

        generateMinerStatementPdfSuccess: false,
        generateMinerStatementPdfError: null,

        generateSocialStatementPdfSuccess: false,
        generateSocialStatementPdfError: null,

        generateSubsidyPdfSuccess: false,
        generateSubsidyPdfError: null,

        listMedicalInstitutions: [],
        listMedicalInstitutionsSuccess: false,
        listMedicalInstitutionsError: null,
        MinerProfessionsSuccess: false,
        GetMinerProfessionsError: null,
        answerOtherStateIssue: initialAnswer,
        answerOtherStateIssueError: null,
        answerOtherStateIssueSuccess: false,

        answerActivePensionPayout: initialAnswer,
        answerActivePensionPayoutError: null,
        answerActivePensionPayoutSuccess: false,

        listPensionTypeSuccess: false,
        personInfo: pensionUserState,
        userData: initialState,
        loading: false,
        finished: false,
        error: null,
        success: false,
        addPensionStatementSuccess: false,
        addPensionStatementError: null,
        CreateMinerStatementSuccess: false,
        CreateMinerStatementError: null,
        regions: [],
        regionsError: null,
        regionsSuccess: false,
        listTerminationReason: [],
        listTerminationReasonError: null,
        listTerminationReasonSuccess: false,
        medicalnstitution: '',
        pirveli: "",
        SseActExtractSeries: '',
        SseInspectionAct: '',
        GlobalTypeOfRelative: '',

        pdf: '',

        createSocialStatementSuccess: false,
        createSocialStatementError: null,

        createSubsidyStatementSuccess: false,
        createSubsidyStatementError: null,

        //
        listVeteranCategories: [],
        listVeteranCategoriesSuccess: false,
        listVeteranCategoriesError: null,
        // 
        globalExtractOfTheActDtoMedicalInstitutionId: '',
        globalExtractOfTheActDtoActExtractSeries: '',
        globalExtractOfTheActDtoMedicalCheck: '',
        globalExtractOfTheActDtoCheckDate: '',
        globalExtractOfTheActDtoLoStatus: '',
        globalExtractOfTheActDtoLoStatusDate: '',
        globalExtractOfTheActDtoDateOfNextCheck: '',
        globalExtractOfTheActDtoLimitationPossibilityReason: '1',
        globalExtractOfTheActDtoActExtractNumber: '',
        globalExtractOfTheActDtoMedicalInstitutionHead: '',
        globalExtractOfTheActDtoDoctor: '',
        globalExtractOfTheActDtoLoStatusLimitDate: '',



        secondGlobalMedicalInstitutionId: '',
        secondGlobalActExtractSeries: '',
        secondGlobalMedicalCheck: '',
        secondGlobalCheckDate: '',
        secondGlobalLoStatus: '',
        secondGlobalLoStatusDate: '',
        secondGlobalDateOfNextCheck: '',
        secondGlobalLimitationPossibilityReason: '2',
        secondGlobalActExtractNumber: '',
        secondGlobalMedicalInstitutionHead: '',
        secondGlobalDoctor: '',


        globalDeathSertificatePrivateNumber: '',
        globalDeathSertificateFirstName: '',
        globalDeathSertificateLastName: '',
        globalDeathSertificateDeathDate: '',
        globalDeathSertificateDeathSertificateNumber: '',
        globalDeathSertificateRelationType: '',


        childBirthCertificateNumber: '',
        childParentRelationType: '',
        childPrivateNumber: '',
        childFirstName: '',
        childLastName: '',


        spouseMarriageCertificateNumber: '',
        spouseSpouseRelationType: '',
        spousePrivateNumber: '',
        spouseFirstName: '',
        spouseLastName: '',


        parentMarriageCertificateNumber: '',
        parentSpouseRelationType: '',
        parentPrivateNumber: '',
        parentFirstName: '',
        parentLastName: '',


        // veteranStatusCertificateDto
        globalVeteranStatusVeteranStatusGrantDate: '',
        globalVeteranStatusVeteranCategoryId: '',
        globalVeteranStatusCode: '',
        globalVeteranStatusFirstName: '',
        globalVeteranStatusLastName: '',
        globalFirstId: '',
        globalSecondId: '',
        globalVeteranStatusCode1: '',
        globalVeteranStatusCode2: '',
        globalVeteranStatusCode3: "",

        //victimOfPoliticalRepressionActDto
        globalvictimOfPoliticalRepressedPrivateNumber: '',
        globalvictimOfPoliticalFirstName: '',
        globalvictimOfPoliticalLastName: '',
        globalvictimOfPoliticalCourtDecisionNumber: '',



        // mother

        globalCertificateOfDeathMotherDtoPrivateNumber: '',
        globalCertificateOfDeathMotherDtoFirstName: '',
        globalCertificateOfDeathMotherDtoLastName: '',
        globalCertificateOfDeathMotherDtoDeathDate: '',
        globalCertificateOfDeathMotherDtoDeathSertificateNumber: '',
        globalCertificateOfDeathMotherDtoRelationType: '',


        // father
        globalCertificateOfDeathFatherDtoPrivateNumber: '',
        globalCertificateOfDeathFatherDtoFirstName: '',
        globalCertificateOfDeathFatherDtoLastName: '',
        globalCertificateOfDeathFatherDtoDeathDate: '',
        globalCertificateOfDeathFatherDtoDeathSertificateNumber: '',
        globalCertificateOfDeathFatherDtoRelationType: '',
        // child
        globalChildBirthCertificateNumber: '',
        globalChildBirthCertificateParentRelationType: '',
        globalChildBirthCertificatePrivateNumber: '',
        globalChildBirthCertificateFirstName: '',
        globalChildBirthCertificateLastName: '',

        secondGlobalLoStatusLimitDate: '',

        hasFamilyMember: false,
        globalRepressedRelationType: '',
    },
    reducers: {
        fillUserData(state, action) {
            passwordRecovery(action)
            state.userData = action.payload;
            console.log("es")
        },
        setUserType(state, action) {
            state.userData.user.LabUser = action.payload;
        },
        clearaddPensionStatementSuccess(state) {
            state.addPensionStatementSuccess = false;
        },
        clearupdatePensionStatementSuccess(state) {
            state.updatePensionStatementSuccess = false;
        },

        clearCreateMinerStatementSuccess(state) {
            state.CreateMinerStatementSuccess = false;
        },
        clearCreateSubsidyStatementSuccess(state) {
            state.createSubsidyStatementSuccess = false;
        },
        clearanswerActivePensionPayoutError(state) {
            state.answerActivePensionPayoutError = null;
        },
        clearCreateSocialStatementSuccess(state) {
            state.createSocialStatementSuccess = false;
        },
        clearHasFamilyMember(state) {
            state.hasFamilyMember = false;
        },
        clearGenerateMinerStatementPdfSuccess(state) {
            state.generateMinerStatementPdfSuccess = false;
        },
        clearGeneratePensionPdfSuccess(state) {
            state.generatePensionPdfSuccess = false;
        },
        clearGenerateSocialStatementPdfSuccess(state) {
            state.generateSocialStatementPdfSuccess = false;
        },
        clearGenerateSubsidyPdfSuccess(state) {
            state.generateSubsidyPdfSuccess = false;
        },




        changeState(state, action) {
            let xx = { ...state, [action.payload.name]: action.payload.value }
            state = xx
            console.log(xx, 'xx')
            return (state)
        }
    },

    extraReducers: builder => {
        builder.addCase(
            addPensionStatement.fulfilled,
            (state, action: any) => {
                state.loading = false;
                state.finished = true;
                state.addPensionStatementSuccess = true;

            }
        );

        builder.addCase(addPensionStatement.pending, (state, action) => {
            state.loading = true;
            state.finished = false;
            state.addPensionStatementSuccess = false;
            state.addPensionStatementError = null;
        });

        builder.addCase(addPensionStatement.rejected, (state, action: any) => {
            state.finished = true;
            state.addPensionStatementSuccess = false;
            state.addPensionStatementError = action.payload?.errors;
            state.loading = false;
        });
        //social steatment add -->

        builder.addCase(
            createSocialStatement.fulfilled,
            (state, action: any) => {
                state.loading = false;
                state.finished = true;
                state.createSocialStatementSuccess = true;

            }
        );

        builder.addCase(createSocialStatement.pending, (state, action) => {
            state.loading = true;
            state.finished = false;
            state.createSocialStatementSuccess = false;
            state.createSocialStatementError = null;
        });

        builder.addCase(createSocialStatement.rejected, (state, action: any) => {
            state.finished = true;
            state.createSocialStatementSuccess = false;
            state.createSocialStatementError = action.payload?.errors;
            state.loading = false;
        });

        //Subsidy

        builder.addCase(
            createSubsidyStatement.fulfilled,
            (state, action: any) => {
                state.loading = false;
                state.finished = true;
                state.createSubsidyStatementSuccess = true;
                state.globalRepressedRelationType = ''
            }
        );

        builder.addCase(createSubsidyStatement.pending, (state, action) => {
            state.loading = true;
            state.finished = false;
            state.createSubsidyStatementSuccess = false;
            state.createSubsidyStatementError = null;
            state.globalRepressedRelationType = ''
        });

        builder.addCase(createSubsidyStatement.rejected, (state, action: any) => {
            state.finished = true;
            state.createSubsidyStatementSuccess = false;
            state.createSubsidyStatementError = action.payload?.errors;
            state.loading = false;
            state.globalRepressedRelationType = ''

        });

        builder.addCase(
            CreateMinerStatement.fulfilled,
            (state, action: any) => {
                state.loading = false;
                state.finished = true;
                state.CreateMinerStatementSuccess = true;
            }
        );

        builder.addCase(CreateMinerStatement.pending, (state, action) => {
            state.loading = true;
            state.finished = false;
            state.CreateMinerStatementSuccess = false;
            state.CreateMinerStatementError = null;
        });

        builder.addCase(CreateMinerStatement.rejected, (state, action: any) => {
            state.finished = true;
            state.CreateMinerStatementSuccess = false;
            state.CreateMinerStatementError = action.payload?.errors;
            state.loading = false;
        });

        builder.addCase(
            UpdateMinerStatement.fulfilled, (state, action: any) => {
                state.loading = false;
                state.finished = true;
                state.UpdateMinerStatementSuccess = true;
            }
        );

        builder.addCase(UpdateMinerStatement.pending, (state, action) => {
            state.loading = true;
            state.finished = false;
            state.UpdateMinerStatementSuccess = false;
            state.UpdateMinerStatementError = null;
        });

        builder.addCase(UpdateMinerStatement.rejected, (state, action: any) => {
            state.finished = true;
            state.UpdateMinerStatementSuccess = false;
            state.UpdateMinerStatementError = action.payload?.errors;
            state.loading = false;
        });

        builder.addCase(
            UpdatePensionStatement.fulfilled, (state, action: any) => {
                state.loading = false;
                state.finished = true;
                state.updatePensionStatementSuccess = true;
            }
        );

        builder.addCase(UpdatePensionStatement.pending, (state, action) => {
            state.loading = true;
            state.finished = false;
            state.updatePensionStatementSuccess = false;
            state.updatePensionStatementError = null;
        });

        builder.addCase(UpdatePensionStatement.rejected, (state, action: any) => {
            state.finished = true;
            state.updatePensionStatementSuccess = false;
            state.updatePensionStatementError = action.payload?.errors;
            state.loading = false;
        });

        builder.addCase(getListPensionTypes.fulfilled, (state, action: any) => {
            let data = action.payload;
            state.listPensionTypeSuccess = true;
            state.loading = false;
            state.listPensionTypes = data;
        });

        builder.addCase(getListPensionTypes.pending, (state, action) => {
            state.finished = false;
            state.error = null;
            state.loading = true;

        });

        builder.addCase(getListPensionTypes.rejected, (state, action: any) => {
            state.finished = false;
            state.success = false;
            state.error = action.payload?.Errors.messages.toString();
            state.loading = false;

        });

        builder.addCase(generatePensionPdf.fulfilled, (state, action: any) => {
            state.generatePensionPdfSuccess = true;
            state.pdf = action.payload;
            state.loading = false;
            state.generatePensionPdfError = null;
        });

        builder.addCase(generatePensionPdf.pending, (state, action) => {
            state.generatePensionPdfError = null;
            state.loading = true;

        });

        builder.addCase(generatePensionPdf.rejected, (state, action: any) => {
            state.generatePensionPdfSuccess = false;
            state.generatePensionPdfError = action.payload?.Errors.messages.toString();
            state.loading = false;
        });

        builder.addCase(generateMinerStatementPdf.fulfilled, (state, action: any) => {
            state.generateMinerStatementPdfSuccess = true;
            state.pdf = action.payload;
            state.loading = false;
            state.generateMinerStatementPdfError = null;
        });

        builder.addCase(generateMinerStatementPdf.pending, (state, action) => {
            state.generateMinerStatementPdfError = null;
            state.loading = true;

        });

        builder.addCase(generateMinerStatementPdf.rejected, (state, action: any) => {
            state.generateMinerStatementPdfSuccess = false;
            state.generateMinerStatementPdfError = action.payload?.Errors.messages.toString();
            state.loading = false;
        });

        builder.addCase(generateSocialStatementPdf.fulfilled, (state, action: any) => {
            state.generateSocialStatementPdfSuccess = true;
            state.pdf = action.payload;
            state.loading = false;
            state.generateSocialStatementPdfError = null;
        });

        builder.addCase(generateSocialStatementPdf.pending, (state, action) => {
            state.generateSocialStatementPdfError = null;
            state.loading = true;

        });

        builder.addCase(generateSocialStatementPdf.rejected, (state, action: any) => {
            state.generateSocialStatementPdfSuccess = false;
            state.generateSocialStatementPdfError = action.payload?.Errors.messages.toString();
            state.loading = false;
        });

        builder.addCase(generateSubsidyPdf.fulfilled, (state, action: any) => {
            state.generateSocialStatementPdfSuccess = true;
            state.pdf = action.payload;
            state.loading = false;
            state.generateSocialStatementPdfError = null;
        });

        builder.addCase(generateSubsidyPdf.pending, (state, action) => {
            state.generateSocialStatementPdfError = null;
            state.loading = true;

        });

        builder.addCase(generateSubsidyPdf.rejected, (state, action: any) => {
            state.generateSocialStatementPdfSuccess = false;
            state.generateSocialStatementPdfError = action.payload?.Errors.messages.toString();
            state.loading = false;
        });

        builder.addCase(GetMinerProfessions.fulfilled, (state, action: any) => {

            let data = action.payload;
            state.listMinerProffesionsSuccess = true;
            state.loading = false;
            state.listMinerProffesions = data;
        });

        builder.addCase(GetMinerProfessions.pending, (state, action) => {
            state.finished = false;
            state.listMinerProffesionsError = null;
            state.loading = true;

        });

        builder.addCase(GetMinerProfessions.rejected, (state, action: any) => {
            state.finished = false;
            state.listMinerProffesionsSuccess = false;
            state.listMinerProffesionsError = action.payload?.Errors.messages.toString();
            state.loading = false;

        });
        builder.addCase(GetMedicalInstitutions.fulfilled, (state, action: any) => {

            let data = action.payload;
            state.listMedicalInstitutionsSuccess = true;
            state.loading = false;
            state.listMedicalInstitutions = data;
        });

        builder.addCase(GetMedicalInstitutions.pending, (state, action) => {
            state.finished = false;
            state.listMedicalInstitutionsError = null;
            state.loading = true;

        });

        builder.addCase(GetMedicalInstitutions.rejected, (state, action: any) => {
            state.finished = false;
            state.listMedicalInstitutionsSuccess = false;
            state.listMedicalInstitutionsError = action.payload?.Errors.messages.toString();
            state.loading = false;

        });

        builder.addCase(getPerson.fulfilled, (state, action: PayloadAction<PensionUser>) => {
            let data1 = action.payload;
            state.personInfo = data1;
            state.addPensionStatementSuccess = false;
            state.loading = false;


        });

        builder.addCase(getPerson.pending, (state, action) => {
            state.finished = false;
            state.error = null;
            state.loading = true;

        });

        builder.addCase(getPerson.rejected, (state, action: any) => {
            state.finished = false;
            state.success = false;
            state.error = action.payload?.Errors.messages.toString();
            state.loading = false;

        });

        builder.addCase(getTerminationReason.fulfilled, (state, action: PayloadAction<any>) => {
            let data1 = action.payload;
            state.loading = false;
            state.listTerminationReason = data1;
            state.listTerminationReasonSuccess = true;
        });

        builder.addCase(getTerminationReason.pending, (state, action) => {
            state.finished = false;
            state.listTerminationReasonError = null;
            state.loading = true;
        });

        builder.addCase(getTerminationReason.rejected, (state, action: any) => {
            state.finished = false;
            state.listTerminationReasonSuccess = false;
            state.listTerminationReasonError = action.payload?.Errors.messages.toString();
            state.loading = false;
        });

        builder.addCase(getVeteranCategories.fulfilled, (state, action: PayloadAction<any>) => {
            let data1 = action.payload;
            state.loading = false;
            state.listVeteranCategories = data1;
            state.listVeteranCategoriesSuccess = true;
        });

        builder.addCase(getVeteranCategories.pending, (state, action) => {
            state.finished = false;
            state.listVeteranCategoriesError = null;
            state.loading = true;
        });

        builder.addCase(getVeteranCategories.rejected, (state, action: any) => {
            state.finished = false;
            state.listVeteranCategoriesSuccess = false;
            state.listVeteranCategoriesError = action.payload?.Errors.messages.toString();
            state.loading = false;
        });

        builder.addCase(getRegions.fulfilled, (state, action: PayloadAction<any>) => {
            let data1 = action.payload;
            state.loading = false;
            state.regions = data1;
        });

        builder.addCase(getRegions.pending, (state, action) => {
            state.finished = false;
            state.regionsError = null;
            state.loading = true;
        });

        builder.addCase(getRegions.rejected, (state, action: any) => {
            state.finished = false;
            state.regionsSuccess = false;
            state.regionsError = action.payload?.Errors.messages.toString();
            state.loading = false;

        });
        builder.addCase(CheckActiveOtherStateIssue.fulfilled, (state, action: PayloadAction<any>) => {
            let data1 = action.payload;
            state.loading = false;
            state.answerOtherStateIssue = data1;
            state.answerOtherStateIssueSuccess = true;

        });

        builder.addCase(CheckActiveOtherStateIssue.pending, (state, action) => {
            state.finished = false;
            state.answerOtherStateIssueError = null;
            state.loading = true;
        });

        builder.addCase(CheckActiveOtherStateIssue.rejected, (state, action: any) => {
            state.answerOtherStateIssueSuccess = false;
            state.answerOtherStateIssueError = action.payload?.Errors.messages.toString();
            state.loading = false;
        });

        builder.addCase(CheckActivePensionPayout.fulfilled, (state, action: PayloadAction<any>) => {
            let data1 = action.payload;
            state.loading = false;
            state.answerActivePensionPayout = data1;
            state.answerActivePensionPayoutSuccess = true;
        });

        builder.addCase(CheckActivePensionPayout.pending, (state, action) => {
            state.finished = false;
            state.answerActivePensionPayoutError = null;
            state.loading = true;
        });

        builder.addCase(CheckActivePensionPayout.rejected, (state, action: any) => {
            state.answerActivePensionPayoutSuccess = false;
            state.answerActivePensionPayoutError = action.payload?.errors.messages;
            state.loading = false;
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
export const { clearaddPensionStatementSuccess, clearGenerateSubsidyPdfSuccess, clearGeneratePensionPdfSuccess, clearGenerateSocialStatementPdfSuccess, clearGenerateMinerStatementPdfSuccess, changeState, clearCreateMinerStatementSuccess, clearupdatePensionStatementSuccess, clearanswerActivePensionPayoutError, clearCreateSubsidyStatementSuccess, clearCreateSocialStatementSuccess, clearHasFamilyMember } = steatmentSlice.actions;
