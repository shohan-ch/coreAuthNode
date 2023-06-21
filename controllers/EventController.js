const EventEmitter = require("events");

exports.nameEvent = (res) => {
  let eventEmitter = new EventEmitter();

  eventEmitter.on("writeName", (name) => {
    res.end(`My name is ${name}`);
  });

  eventEmitter.emit("writeName", "Samia");
};
