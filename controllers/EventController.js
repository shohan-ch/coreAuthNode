const EventEmitter = require("events");

exports.nameEvent = (res) => {
  let eventEmitter = new EventEmitter();

  eventEmitter.on("writeName", () => {
    console.log("My name is shohan");
  });
  eventEmitter.on("writeName", () => {
    console.log("123 shohan");
  });
  eventEmitter.on("writeName", (name) => {
    res.end(`My name is ${name}`);
  });

  eventEmitter.emit("writeName", "Samia");
};
