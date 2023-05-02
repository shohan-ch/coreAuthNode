exports.validate = (data) => {
  // console.log(data);
  let msg = [];
  for (const prop in data) {
    // console.log(data[prop]);
    switch (data[prop]) {
      case "":
        msg.push(`${prop} should not be empty!`);
        // return `${prop} should not be empty!`;
        // console.log(`${prop} should not be empty!`);
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
