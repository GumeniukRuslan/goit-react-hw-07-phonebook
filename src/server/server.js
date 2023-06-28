// https://649c4ff3048075719237f0b5.mockapi.io/contacts

import axios from 'axios';

export const getContacts = async () => {
  return await axios.get(
    'https://649c4ff3048075719237f0b5.mockapi.io/contacts'
  );
};
