import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    return;
  }
  contacts.pop();
  await writeContacts(contacts);

  // if (contacts.length > 0) {
  //   contacts.pop();
  //   await writeContacts(contacts);
  // } else {
  //   return new Error('Error');
  // }
};

removeLastContact();
