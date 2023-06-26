const fs = require("fs");

// Create
fs.writeFile(
  "./employees.json",
  "{name: 'Employee 1 Name', salary: 2000}",
  "utf8",
  (err) => {
    err && console.log(err);
  }
);

// Read
fs.readFile("./employees.json", "utf8", (err, data) => {
  err ? console.log(err) : console.log(data);
});

// Update
fs.appendFile(
  "./employees.json",
  "\n{name: 'Employee 2 Name', salary: 4200}",
  "utf8",
  (err) => {
    err && console.log(err);
  }
);

// Delete file
fs.unlink("./employees.json", (err) => {
  err && console.log(err);
});
