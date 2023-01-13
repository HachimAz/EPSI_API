//import { contacts } from "../data.js";
import * as service from "../service.js";

function getContacts(req, res) {
  const contacts = service.getContacts();
  res.status(200).json(contacts);
}

function getContact(req, res) {
  const id = req.params.id;

  // normal without using service
  // const contact = contacts.find((user) => user.id === id);

  const contact = service.getContact(id);
  res.status(200).json(contact);
}

function newContact(req, res) {
  // const data = {
  const nom = req.body.nom;
  const tele = req.body.tele;
  // };

  const newContact = service.newContact(nom, tele);

  res.status(201).json(newContact);
}

export { getContacts, getContact, newContact };
