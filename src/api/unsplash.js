import axios from "axios";

export default axios.create({
  headers: {
    Authorization: `${process.env.REACT_APP_UNSPLASH_KEY}`,
  },
  baseURL: "https://api.unsplash.com",
});
