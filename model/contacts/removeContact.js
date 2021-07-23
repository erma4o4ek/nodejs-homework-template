const contacts = require("../../model/contacts.json");

const removeContact = (req, res)=> {
  const{contactId} = req.params;
  const index = contacts.findIndex(item => item._contactId === contactId);
  if(index === -1) {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    });
    return;
  }
  contacts.splice(index, 1);
  res.status(200).json({
      status: "success",
      code: "200",
      message: "No Content"
  });
}

module.exports = removeContact;