import axios from "axios";
require("dotenv").config();

export const fetchUsers = async () => {
  const response = await axios.get(
    `${process.env.HOST}/api/v1/user-community/users`,
    {
      headers: {
        Authorization: "Bearer " + process.env.LOGGED_USER_TOKEN,
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
        Authorization: "Bearer " + process.env.LOGGED_USER_TOKEN,
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  );

  return response.data.data;
};
