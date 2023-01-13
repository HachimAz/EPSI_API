//  nanoid generate id for us
import { nanoid } from "nanoid";
//inmport contact to avoid contact with the data file
import { contacts } from "./data.js";

// To get all contact
function getContacts() {
  return contacts;
}

//get contact by id
function getContact(id) {
  return contacts.find((contact) => contact.id === id);
}

// Push the newContact to my contacts Array

function newContact(nom, tele) {
  const id = nanoid();
  const newContact = { id, nom, tele };
  contacts.push(newContact);
  return newContact;
}

export { getContacts, getContact, newContact };
