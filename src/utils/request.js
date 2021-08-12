import axios from "axios";
const httpRequest = axios.create({
  baseURL: "http://124.71.57.28:8090/api",
  timeout: 30000,
  params: {
    api_access_key: "kingofthekill",
  },
});

export { httpRequest as axios };
