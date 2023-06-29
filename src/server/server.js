import axios from 'axios';

export const getContacts = async () => {
  const resp = await axios.get(
    'https://649c4ff3048075719237f0b5.mockapi.io/contacts'
  );
  return resp.data;
};
export const addContact = async obj => {
  const resp = await axios.post(
    'https://649c4ff3048075719237f0b5.mockapi.io/contacts',
    obj
  );
  return resp.data;
};
export const delContact = async id => {
  const resp = await axios.delete(
    `https://649c4ff3048075719237f0b5.mockapi.io/contacts/${id}`
  );
  return resp.data;
};
