//const express = require("express");
import express from "express";
import * as controller from "./controllers/contactController.js";
const app = express();
import { contacts } from "./data.js";

//La route
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Modifer la route

app.get("/api/contacts", controller.getContacts);

app.get("/api/contact/:id", controller.getContact);

//Pour l'export dans Comon JS c'est pas comeme dans ES6
export default app;
