import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetToursList } from '../api/TourApis';
import { toast } from 'react-toastify';


const initialState = {
  profileData: {},
  profile: [],
  unAssignedList: [],
  status: 'idle',
  screenMode: 'list',
  tours: []
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const GetToursListAsync = createAsyncThunk(
  'transaction/gettour',
  async (data) => {
    const response = await GetToursList(data.formData, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);


export const TourProfileSlice = createSlice({
  name: 'childProfile',
  initialState,
  /*  reducers: {
      changeScreen: (state, action) => {
       // state.screen = action.payload
      },
  
    },*/
  extraReducers: (builder) => {
    builder
      .addCase(GetToursListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.profile = action.payload.list
        // state.profileData = action.payload.token;
      })
  },
});

export const { changeScreen } = TourProfileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getScreenMode = (state) => state.childProfile.screenMode;

export const getProfiles = (state) => state.childProfile.profile;

export const getAvailableProfiles = (state) => state.childProfile.unAssignedList;

export const getTours = (state) => state.childProfile.tours;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};*/

export default TourProfileSlice.reducer;