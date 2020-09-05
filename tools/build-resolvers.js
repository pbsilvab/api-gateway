const fs    = require("fs");
const path  = require("path");

var imports = "";
var exports = `
export const resolvers = {
`;

fs.readdirSync(path.join(__dirname, "..", "src", "resolvers"))
.forEach((folder) => {
  exports += `  ${folder}: {\n`;

  fs.readdirSync(path.join(__dirname, "..", "src", "resolvers", folder))
  .map(file => file.replace(/\.(.*)/, ""))
  .forEach((resolver) => {
    const found = (/export const (\w+)/gm).exec(fs.readFileSync(path.join(__dirname, "..", "src", "resolvers", folder, `${resolver}.ts`)).toString());
    const exported = found ? found[1] : resolver;

    imports += `import { ${exported} as ${folder}_${resolver} } from "./resolvers/${folder}/${resolver}";\n`
    exports += `    ${resolver}: ${folder}_${resolver},\n`;
  });

  exports += `  },\n`;
});

exports += "};\n";

fs.writeFileSync(path.join(__dirname, "..", "src", "resolvers.ts"), imports + exports);
