const { find, cat } = require("shelljs");
const { writeFileSync } = require("fs");

let schema = "";
find("src/schema/**/*.graphql").forEach((f) => schema += cat(f) + "\n");
schema += "scalar Upload\n";

writeFileSync("./schema.graphql", schema);
