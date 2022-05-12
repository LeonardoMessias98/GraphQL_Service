import { Arg, Query, Resolver } from "type-graphql";
import { fetchUsers, fetchSingleUser } from "../data/fetchUsers";
import { User } from "../models/User";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users() {
    const users = await fetchUsers();

    return users;
  }

  @Query(() => User)
  async singleUser(@Arg("username") username: string) {
    const user = await fetchSingleUser(username);

    return user;
  }
}
