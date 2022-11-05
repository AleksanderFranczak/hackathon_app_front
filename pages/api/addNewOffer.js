import axios from "axios";

export default async function handler(req, res) {
  await axios
    .get("https://62ebdbe355d2bd170e77f13e.mockapi.io/getData/1")
    .then((e) => {
      res.send(e.data);
    });
}
