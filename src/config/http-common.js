import axios from "axios";

export default axios.create({
  baseURL: ProcessingInstruction.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: "token",
  },
});
