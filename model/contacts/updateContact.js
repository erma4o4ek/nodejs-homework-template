const contacts = require("../../model/contacts.json");

const updateContact = (req, res) => {
  const {contactId} = req.params;
  const index = contacts.findIndex(item => item._contactId === contactId);
  if(index === -1) {
    res.status(404).jso({
      status: "error",
      code: 404,
      message: "Not found"
    });
    return;
  } 
  contacts[index] = {...req.body, _contactId: contactId};
  res.json({
    status:"success",
    code: 200,
    data: {
      result: contacts[index]
    }
  })
}

module.exports = updateContact;