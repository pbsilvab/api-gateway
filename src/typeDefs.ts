import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { gql } from "apollo-server-core";

export const typeDefs = gql(readFileSync(join(__dirname, "..", "schema.graphql"))
  .toString()
  .replace("scalar Upload", "")
);
