import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as callApi from '../../service';
import { validateDTO } from '../../types/UserDTO';
import { message } from 'antd';

const initialState: any = {
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
export const ZIPcodes = createAsyncThunk(
  'ZIPcodes',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.steatment.getZipCodes();
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }

);
export const citiesByZIPCode = createAsyncThunk(
  'citiesByZIPCode',
  async (code: string, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.steatment.getCitiesByZIPCodeAPI(code);
      return response;

    } catch (err: any) {
      return rejectWithValue(err.response.data);;
    }
  }
);

export const createApplication = createAsyncThunk(
  'createApplication',
  async (data: any, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.steatment.createApplicationAPI(data);
      message.success('განცხადება წარმატებით გაიგზავნა')
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const ApplicationTypes = createAsyncThunk(
  'ApplicationTypes',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.steatment.getApplicationTypesAPI();
      console.log('responseresponseresponse', response);
      return response;

    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const RegionTypes = createAsyncThunk(
  'RegionTypes',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.steatment.getRegionTypesAPI();
      console.log('responseresponseresponse', response);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const communicationTypes = createAsyncThunk(
  'communicationTypes',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.steatment.communicationTypesAPI();
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const ReregisterTypes = createAsyncThunk(
  'ReregisterTypes',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.steatment.ReregisterTypesAPI();
      return response;

    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const ValidatePersonInfo = createAsyncThunk(
  'ValidatePersonInfo',
  async (data: validateDTO, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.steatment.ValidatePersonInfoAPI(data);
      message.success('პიროვნების მონაცემები ვალიდურია')
      return response;
    } catch (err: any) {
      message.error('პიროვნება ვერ მოიძებნა')
      return rejectWithValue(err.response.data);
    }
  }
);
export const ValidatePersonInfoFamilyMember = createAsyncThunk(
  'ValidatePersonInfoFamilyMember',
  async (data: validateDTO, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.steatment.ValidatePersonInfoAPI(data);
      message.success('პიროვნების მონაცემები ვალიდურია')
      return response;
    } catch (err: any) {
      message.error('პიროვნება ვერ მოიძებნა')
      return rejectWithValue(err.response.data);
    }
  }
);


export const DistrictByZIPCode = createAsyncThunk(
  'DistrictByZIPCode',
  async (code: string, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await callApi.steatment.DistrictByZIPCodeAPI(code);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const GovermentByZIPCode = createAsyncThunk(
  'GovermentByZIPCode',
  async (code: string, { rejectWithValue, dispatch, getState }) => { 
    try {
      const response = await callApi.steatment.GovermentByZIPCodeAPI(code);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const AddressByZIPCode = createAsyncThunk(
  'AddressByZIPCode',
  async (code: string, { rejectWithValue, dispatch, getState }) => {  
    try {
      const response = await callApi.steatment.AddressByZIPCodeAPI(code);   
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const VillagesByZIPCodeGoverment = createAsyncThunk(
  'VillagesByZIPCodeGoverment',
  async (data: { zipCode: string, name: string }, { rejectWithValue, dispatch, getState }) => { 
    try {
      const response = await callApi.steatment.VillagesByZIPCodeGovermentAPI(data);      
      return response;

    } catch (err: any) {
      return rejectWithValue(err.response.data);      
    }
  }
);




export const existanceSlice = createSlice({
  name: 'existanceSlice',
  initialState: {
    loading: false,
    finished: false,
    error: null,
    success: false,
    askingReason: null,
    city: null,
    district: null,
    goverment: null,
    village: null,
    address: null,
    listApplicationTypes: [],
    isFamilyMember: null,
    RegionTypesList: [],
    communicationTypesList: [],
    ReregisterTypesList: [],
    createApplicationSuccess: false,
    createApplicationError: null,
    regionName: null,
    ValidatePersonInfoError: null,
    validatePersonInfoSuccess: undefined,
    validatePersonInfoSuccessFamilyMember: false,
    disableBtnsGlobal: {}
  },
  reducers: {
    changeAskingReason(state, action) {
      state.askingReason = action.payload;
    },

    resetAddress(state) {
      state.city = null;
      state.district = null;
      state.goverment = null;
      state.village = null;
      state.address = null;
    },
    changeIsFamilyMember(state, action) {
      state.isFamilyMember = action.payload;
    },
    clearValidatePersonInfoSuccess(state) {
      state.validatePersonInfoSuccess = undefined;
    },
    disableBtnsGlobal(state, action) {
      state.disableBtnsGlobal = action.payload;
    },
    setSuccess(state, action) {
      state.validatePersonInfoSuccess = action.payload;
    },
    disableBtnsGlobalReset(state) {
      state.disableBtnsGlobal = {};   
      state.validatePersonInfoSuccess = undefined;
      state.validatePersonInfoSuccessFamilyMember = false
    },
  },


  extraReducers: builder => {


    builder.addCase(
      createApplication.fulfilled,
      (state, action: any) => {
        state.loading = false;
        state.finished = true;
        state.createApplicationSuccess = true;

      }
    );

    builder.addCase(createApplication.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
      state.createApplicationSuccess = false;
      state.createApplicationError = null;
    });

    builder.addCase(createApplication.rejected, (state, action: any) => {
      state.finished = true;
      state.createApplicationSuccess = false;
      state.createApplicationError = action.payload?.errors;
      state.loading = false;
    });
    builder.addCase(
      ValidatePersonInfo.fulfilled,
      (state: any, action: any) => {
        state.loading = false;
        state.finished = true;
        state.validatePersonInfoSuccess = true;
      }
    );

    builder.addCase(ValidatePersonInfo.pending, (state: any, action) => {
      state.loading = true;
      state.finished = false;
      state.validatePersonInfoSuccess = false;
      state.ValidatePersonInfoError = null;
    });

    builder.addCase(ValidatePersonInfo.rejected, (state: any, action: any) => {
      state.finished = true;
      state.validatePersonInfoSuccess = false;
      state.ValidatePersonInfoError = action.payload?.errors;
      state.loading = false;
    });
    builder.addCase(
      ValidatePersonInfoFamilyMember.fulfilled,
      (state, action: any) => {
        state.loading = false;
        state.finished = true;
        state.validatePersonInfoSuccessFamilyMember = true;
      }
    );

    builder.addCase(ValidatePersonInfoFamilyMember.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
      state.validatePersonInfoSuccessFamilyMember = false;
    });

    builder.addCase(ValidatePersonInfoFamilyMember.rejected, (state, action: any) => {
      state.finished = true;
      state.validatePersonInfoSuccessFamilyMember = false;
      state.loading = false;
    });

    builder.addCase(
      ZIPcodes.fulfilled,
      (state, action: any) => {
        state.loading = false;
        state.finished = true;
      }
    );

    builder.addCase(ZIPcodes.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
    });

    builder.addCase(ZIPcodes.rejected, (state, action: any) => {
      state.finished = true;
      state.error = action.payload?.errors;
      state.loading = false;
    });
    builder.addCase(
      ApplicationTypes.fulfilled,
      (state, action: any) => {
        state.listApplicationTypes = action.payload;
        state.loading = false;
        state.finished = true;
      }
    );

    builder.addCase(ApplicationTypes.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
    });

    builder.addCase(ApplicationTypes.rejected, (state, action: any) => {
      state.finished = true;
      state.error = action.payload?.errors;
      state.loading = false;
    });
    builder.addCase(
      RegionTypes.fulfilled,
      (state, action: any) => {
        state.RegionTypesList = action.payload;
        state.loading = false;
        state.finished = true;
      }
    );

    builder.addCase(RegionTypes.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
    });

    builder.addCase(RegionTypes.rejected, (state, action: any) => {
      state.finished = true;
      state.error = action.payload?.errors;
      state.loading = false;
    });
    builder.addCase(
      communicationTypes.fulfilled,
      (state, action: any) => {
        state.communicationTypesList = action.payload;
        state.loading = false;
        state.finished = true;
      }
    );

    builder.addCase(communicationTypes.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
    });

    builder.addCase(communicationTypes.rejected, (state, action: any) => {
      state.finished = true;
      state.error = action.payload?.errors;
      state.loading = false;
    });
    builder.addCase(
      ReregisterTypes.fulfilled,
      (state, action: any) => {
        state.ReregisterTypesList = action.payload;
        state.loading = false;
        state.finished = true;
      }
    );

    builder.addCase(ReregisterTypes.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
    });

    builder.addCase(ReregisterTypes.rejected, (state, action: any) => {
      state.finished = true;
      state.error = action.payload?.errors;
      state.loading = false;
    });

    builder.addCase(
      citiesByZIPCode.fulfilled,
      (state, action: any) => {
        state.city = action.payload;
        state.loading = false;
        state.finished = true;
      }
    );

    builder.addCase(citiesByZIPCode.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
    });

    builder.addCase(citiesByZIPCode.rejected, (state, action: any) => {
      state.finished = true;
      state.error = action.payload?.errors;
      state.loading = false;
    });

    builder.addCase(
      DistrictByZIPCode.fulfilled,
      (state, action: any) => {
        state.district = action.payload;
        state.loading = false;
        state.finished = true;
      }
    );

    builder.addCase(DistrictByZIPCode.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
    });

    builder.addCase(DistrictByZIPCode.rejected, (state, action: any) => {
      state.finished = true;
      state.error = action.payload?.errors;
      state.loading = false;
    });

    builder.addCase(
      GovermentByZIPCode.fulfilled,
      (state, action: any) => {
        state.goverment = action.payload;
        state.loading = false;
        state.finished = true;
      }
    );

    builder.addCase(GovermentByZIPCode.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
    });

    builder.addCase(GovermentByZIPCode.rejected, (state, action: any) => {
      state.finished = true;
      state.error = action.payload?.errors;
      state.loading = false;
    });


    builder.addCase(
      VillagesByZIPCodeGoverment.fulfilled,
      (state, action: any) => {
        state.village = action.payload;
        state.loading = false;
        state.finished = true;
      }
    );

    builder.addCase(VillagesByZIPCodeGoverment.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
    });

    builder.addCase(VillagesByZIPCodeGoverment.rejected, (state, action: any) => {
      state.finished = true;
      state.error = action.payload?.errors;
      state.loading = false;
    });
    builder.addCase(
      AddressByZIPCode.fulfilled,
      (state, action: any) => {
        state.address = action.payload;
        state.loading = false;
        state.finished = true;
      }
    );

    builder.addCase(AddressByZIPCode.pending, (state, action) => {
      state.loading = true;
      state.finished = false;
    });

    builder.addCase(AddressByZIPCode.rejected, (state, action: any) => {
      state.finished = true;
      state.error = action.payload?.errors;
      state.loading = false;
    });


  },
});

export const { changeAskingReason, resetAddress, changeIsFamilyMember, clearValidatePersonInfoSuccess, disableBtnsGlobal, setSuccess, disableBtnsGlobalReset } = existanceSlice.actions;


