import axios from "axios";

export default async function handler(req, res) {

  console.log(req.body, "chuj");
    await axios
    .get("https://62ebdbe355d2bd170e77f13e.mockapi.io/getData/1", {
        email: req.body.email,
        password: req.body.password
    })
    .then((e) => {
      res.send(e.data);
    });
}
