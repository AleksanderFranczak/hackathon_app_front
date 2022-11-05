import axios from "axios";

export default async function handler(req, res) {

  const {email,password} = req.body;
  var bodyFormData = new FormData();
  console.log(email);
  bodyFormData.append('email', email);
  bodyFormData.append('password', password);
  console.log(bodyFormData);

  await axios({
    method: "post",
    url: "http://sampledeploy.herokuapp.com/login",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
    // await axios
    // .post("http://sampledeploy.herokuapp.com/login", {
    //     // email: req.body.email,
    //     // password: req.body.password,
    //     data: bodyFormData
    // })
    // .then((e) => {
    //   res.send(e.data);
    // });
}
