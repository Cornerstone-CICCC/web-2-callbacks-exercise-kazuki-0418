const fs = require("fs");


function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

const files = ["firstname.txt", "lastname.txt", "age.txt", "hobbies.txt"];

(async function (files) {
  try {
    const firstName = await readFile(files[0]);
    const lastName = await readFile(files[1]);
    const age = await readFile(files[2]);
    const hobbies = await readFile(files[3]);
    const hobbiesArr = await JSON.parse(hobbies)
    
    console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbiesArr.join(" and ")}`);
  } catch (err) {
    console.log(err);
  }
})(files);