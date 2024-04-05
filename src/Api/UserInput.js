import axios from "axios";
const baseURL = import.meta.env.VITE_APP_BASE_URL;
const token = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const UserInput = async searchInput => {
  try {
    let config = {
      method: "get",
      url: `${baseURL}/${searchInput}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
