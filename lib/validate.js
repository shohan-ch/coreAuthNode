exports.validate = (data) => {
  let msg = [];
  let emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  for (const prop in data) {
    switch (true) {
      case data[prop] === "":
        msg.push(`${prop} should not be empty!`);
        break;
      case prop === "email" && emailRegx.test(data[prop]) === false:
        msg.push(`Invalid ${prop} address!`);
        break;
      case prop === "password" && data["password"] !== data["confirm_password"]:
        msg.push(`Password doesn't match!`);
        break;
      default:
        break;
    }
  }
  return msg.length ? JSON.stringify(msg) : "";
};

// exports.validate = (field) => {
//   const key = Object.keys(field);
//   switch (field[key[0]]) {
//     case "required":
//       return key[0] + " should not be empty";
//     default:
//       break;
//   }
// };
