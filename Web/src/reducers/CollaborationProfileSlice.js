import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateNewTour, DeleteTour, GetTourDetails, GetToursList } from '../api/TourApis';
import { toast } from 'react-toastify';
import { createCollaboration, GetTourCollaborate } from '../api/CollaborationApis';


const initialState = {
  profileData: {},
  profile: [],
  unAssignedList: [],
  status: 'idle',
  screenMode: 'list',
  collaborations: {}
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const createNewCollaborationAsync = createAsyncThunk(
  'CollaborationSlice/createcollaboration',
  async (data) => {
    console.log(data)
    const response = await createCollaboration(data.formData, data.token);
    return response.data;
  }
);

export const GetTourCollaborateAsync = createAsyncThunk(
  'CollaborationSlice/gettourcollaborate',
  async (data) => {
    const response = await GetTourCollaborate(data.params, data.token);
    console.log("res:  ", response)
    return response.data;
  }
);


export const CollaborationProfileSlice = createSlice({
  name: 'CollaborationSlice',
  initialState,
  /*  reducers: {
      changeScreen: (state, action) => {
       // state.screen = action.payload
      },
  
    },*/
  extraReducers: (builder) => {
    builder
      .addCase(GetTourCollaborateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.collaborations = action.payload.list
        // state.profileData = action.payload.token;
      })
      .addCase(createNewCollaborationAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createNewCollaborationAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        toast.success(action.payload.message)
        // state.profileData = action.payload.token;
      });
  },
});

export const { changeScreen } = CollaborationProfileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getScreenMode = (state) => state.CollaborationSlice.screenMode;

export const getProfiles = (state) => state.CollaborationSlice.profile;

export const getAvailableProfiles = (state) => state.CollaborationSlice.unAssignedList;

export const getCollaboration = (state) => state.CollaborationSlice.collaborations;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};*/

export default CollaborationProfileSlice.reducer;
