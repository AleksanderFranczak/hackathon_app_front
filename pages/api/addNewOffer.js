import axios from "axios";

export default async function handler(req, res) {
  const {} = await axios
    .post("http://sampledeploy.herokuapp.com/add-item", {
      name: "test",
      description: "test",
      user_id: 12,
      status: true,
    })
    .then((e) => {
      console.log(e);
      res.send(e.data);
    });
}
