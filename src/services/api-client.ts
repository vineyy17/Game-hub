import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "57164ee54905437684f06a748cf413b8",
  },
});
