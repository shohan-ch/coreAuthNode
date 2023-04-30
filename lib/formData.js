exports.formData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let chunkData = [];
      req.on("data", (data) => {
        chunkData.push(data);
      });
      req.on("end", () => {
        let Data = chunkData.toString();
        let formData = JSON.parse(Data);
        resolve(formData);
        // console.log(formData);
      });
    } catch (error) {
      reject(error);
    }
  });
};
