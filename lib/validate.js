exports.validate = (field) => {
  const key = Object.keys(field);
  //   console.log(field.name);
  switch (field.name) {
    case "required":
      return key[0] + " should not be empty";
    default:
      break;
  }
};
