import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class AuthResolver {
  private token: String = "123";

  @Query(() => String)
  setToken(@Arg("token") token: String): void {
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}
