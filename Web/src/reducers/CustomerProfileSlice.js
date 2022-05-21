import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateNewTour, DeleteTour, GetTourDetails, GetToursList } from '../api/TourApis';
import { toast } from 'react-toastify';
import { CreateCustomers, GetCustomersList, updateBookingStatus } from '../api/CustomerApis';


const initialState = {
  profileData: {},
  profile: [],
  unAssignedList: [],
  status: 'idle',
  screenMode: 'list',
  customers: {}
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const GetCustomersListAsync = createAsyncThunk(
  'CustomerSlice/getcustomer',
  async (data) => {
    const response = await GetCustomersList(data.params, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);

export const createNewCustomerAsync = createAsyncThunk(
  'CustomerSlice/createcustomer',
  async (data) => {
    console.log(data)
    const response = await CreateCustomers(data.formData, data.token);
    return response.data;
  }
);

export const updateBookingStatusAsync = createAsyncThunk(
  'CustomerSlice/updatebookingstatus',
  async (data) => {
    const response = await updateBookingStatus(data.params, data.token);
    return response.data;
  }
);

export const CustomerProfileSlice = createSlice({
  name: 'CustomerSlice',
  initialState,
  /*  reducers: {
      changeScreen: (state, action) => {
       // state.screen = action.payload
      },
  
    },*/
  extraReducers: (builder) => {
    builder
      .addCase(GetCustomersListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.customers = action.payload.list
        // state.profileData = action.payload.token;
      })
      .addCase(createNewCustomerAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createNewCustomerAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      })
      .addCase(updateBookingStatusAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateBookingStatusAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.profileData= action.payload
        // state.profileData = action.payload.token;
      });
  },
});

export const { changeScreen } = CustomerProfileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getScreenMode = (state) => state.CustomerSlice.screenMode;

export const getProfiles = (state) => state.CustomerSlice.profile;

export const getAvailableProfiles = (state) => state.CustomerSlice.unAssignedList;

export const getCustomer = (state) => state.CustomerSlice.customers;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};*/

export default CustomerProfileSlice.reducer;
