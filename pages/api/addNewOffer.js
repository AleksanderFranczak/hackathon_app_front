import axios from "axios";

export default async function handler(req, res) {
  const { name, description } = req.body;
  await axios
    .post("http://sampledeploy.herokuapp.com/add-item", {
      name: name,
      description: description,
      user_id: 12,
      status: true,
      supplier_id: null,
      customer_id: null,
      category_id: null,
    })
    .then((e) => {
      console.log(e);
      res.send(e.data);
    });
}
