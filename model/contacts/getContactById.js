const contacts = require("../../model/contacts.json");

const getContactById = (req, res) => {
  const { contactId } = req.params.contactId;
  const selectContact = contacts.find(item => item._contactId===contactId);
  if (!selectContact) {
    res.status(404).json({
      status:"error",
      code: 404,
      message: "Contact with this contact(id) not found"
    });
    return;
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result:selectContact
    }
  });
}

module.exports = getContactById;