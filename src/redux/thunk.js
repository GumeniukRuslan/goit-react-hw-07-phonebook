import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'server/server';

export const getNewsThunk = createAsyncThunk('contacts/get', async () => {
  return await getContacts();
});
