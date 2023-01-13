//const express = require("express");
import express from "express";
import * as controller from "./controllers/contactController.js";
import bodyParser from "body-parser";
import { contacts } from "./data.js";

//initialize app()
const app = express();

app.use(bodyParser.json());

//La route
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Modifer la route

app.get("/api/contacts", controller.getContacts);

app.get("/api/contact/:id", controller.getContact);

app.post("/api/newContact", controller.newContact);

//Pour l'export dans Comon JS c'est pas comeme dans ES6
export default app;
