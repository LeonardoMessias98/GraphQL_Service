import axios from "axios";
import { AuthResolver } from "../resolvers/AuthResolver";
require("dotenv").config();

const authResolver = new AuthResolver();
const token = authResolver.getToken();

export const fetchUsers = async () => {
  const response = await axios.get(
    `${process.env.HOST}/api/v1/user-community/users`,
    {
      headers: {
        Authorization: "Bearer " + (token || process.env.LOGGED_USER_TOKEN),
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  );

  return response.data.data;
};

export const fetchSingleUser = async (username: string) => {
  const response = await axios.get(
    `${process.env.HOST}/api/v1/user-profile/${username}`,
    {
      headers: {
        Authorization: "Bearer " + (token || process.env.LOGGED_USER_TOKEN),
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  );

  return response.data.data;
};
