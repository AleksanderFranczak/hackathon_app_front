import axios from "axios";

export default async function handler(req, res) {
  console.log("getting offers");
  await axios
    .post("https://sampledeploy.herokuapp.com/get-item?key=id")
    .then((e) => {
      console.log(e);
      res.send(e.data);
    });
}
