const express = require("express");
const router = express.Router();
const api = require("../../model/contacts");

router.get("/", api.listContacts);

router.get("/:contactId", api.getContactById);

router.post("/", api.addContact);

router.delete("/:contactId", api.removeContact);

router.patch("/:contactId", api.updateContact);

module.exports = router;