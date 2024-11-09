import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  return contacts.length;
};

export const totalContacts = async () => {
  console.log(await countContacts());
};

totalContacts();
