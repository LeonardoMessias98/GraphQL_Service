import "reflect-metadata";
import path from "path";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { UserResolver } from "./src/resolvers/UserResolver";
import { AuthResolver } from "./src/resolvers/AuthResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [AuthResolver, UserResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.sql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`🚀  Server ready at ${url}`);
}

main();
