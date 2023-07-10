const server = require("./src/server");

const { Character, Film } = require("./src/database");

// Film.list().then((res) => console.log(res));
// Character.list().then((res) => console.log(res));
// Character.get(1).then((res) => console.log(res));

// Character.insert({
//   _id: "201",
//   name: "Juan Perez",
//   birth_year: "1991",

// }).then((res) => console.log(res));

server.listen(8004, () => {
  console.log("Database service on port 8004");
});
