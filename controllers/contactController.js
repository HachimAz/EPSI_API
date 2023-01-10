import { contacts } from "../data.js";

function getContacts(req, res) {
  res.status(200).json(contacts);
}

function getContact(req, res) {
  const id = req.params.id;
  const contact = contacts.find((user) => user.id === id);
  res.status(200).json(contact);
}

function newContact(req, res) {
  const data = {
    id: req.body.id,
    nom: req.body.nom,
    tele: req.body.tele,
  };

  res.status(200).json(data);
}

export { getContacts, getContact, newContact };
