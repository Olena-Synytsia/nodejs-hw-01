import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  return await readContacts();
};

export const allContacts = async () => {
  console.log(await getAllContacts());
};

allContacts();
