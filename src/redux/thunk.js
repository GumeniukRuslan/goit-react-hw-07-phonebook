import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, delContact, getContacts } from 'server/server';

export const getContactsThunk = createAsyncThunk('contacts/get', async () => {
  return await getContacts();
});

export const addContactsThunk = createAsyncThunk('contacts/add', async obj => {
  return await addContact(obj);
});

export const delContactsThunk = createAsyncThunk('contacts/del', async id => {
  console.log(id);
  return await delContact(id);
});
