import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContactsThunk, delContactsThunk, getContactsThunk } from './thunk';

const contsctsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const thunkArr = [addContactsThunk, delContactsThunk, getContactsThunk];
const handleMatches = type => thunkArr.map(thunk => thunk[type]);

const handelPending = state => {
  state.isLoading = true;
};
const handelRejected = state => {
  state.isLoading = false;
  state.error = 'error';
};
const handelFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contsctsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(delContactsThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(el => el.id !== action.payload.id);
      })
      .addMatcher(isAnyOf(...handleMatches('pending')), handelPending)
      .addMatcher(isAnyOf(...handleMatches('rejected')), handelRejected)
      .addMatcher(isAnyOf(...handleMatches('fulfilled')), handelFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
