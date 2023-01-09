//const express = require("express");
import express from "express";
const app = express();
const contacts = [
  {
    nom: "HACH",
    tele: "06066006",
  },
  {
    nom: "AZZ",
    tele: "333333",
  },
];

//La route
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Modifer la route

app.get("/api/contacts", function (req, res) {
  res.status(200).json(contacts);
});

app.get("/api/contacts/:id", function (req, res) {
  const id = req.params.id;
  res.status(200).json({ id });
});

//Pour l'export dans Comon JS c'est pas comeme dans ES6
export default app;
