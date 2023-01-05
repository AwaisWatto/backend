const express = require('express');
const app = express();

const user = require('./Controllers/UserController')
const student =require('./Controllers/StudentController')

const responseService = require('./Services/responseService');
//const routes = require("../api/routes");



const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

var router = require("express").Router();

var bodyParser = require('body-parser');  

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1/TEST_DATABASE')
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Database Connectivity Error", error);
    process.exit(1);
  });

app.use("/", router);




router.post('/createUser',async (request,response) => {
  console.log("req-from-postman", request.body)
 const res =  await user.createUser(request.body)
  console.log("RESPONSE-to-postman", res)
 const data= responseService.responseMethod(res, 'create user')
  console.log("DATA", data)

response.send(data)
});


router.post('/createStudent',async (request,response) => {
  console.log("req-from-postman", request.body)
 const res =  await student.createStudent(request.body)
  console.log("RESPONSE-to-postman", res)
 const data= responseService.responseMethod(res, 'create Student')
  console.log("DATA", data)

response.send(success)
});




router.get('/User',async (request,response) => {
  console.log("req", request.body)
 const res =  await user.getUser(request.body)
  console.log("RESPONSE", res)

 const data= responseService.responseMethod(res, 'update User')
  console.log("DATA", res)

response.send(data)
});




router.put('/updateUser',async (request,response) => {
  console.log("req", request.body)
 const res =  await user.updateUser(request.body)
  console.log("RESPONSE", res)

 const data= responseService.responseMethod(res, 'update User')
  console.log("DATA", res)

response.send(data)
});



router.delete('/deleteStudent',async (request,response) => {
  console.log("req", request.body)
 const res =  await student.deleteStudent(request.body)
  console.log("RESPONSE", res)

 const data= responseService.responseMethod(res, 'delete Student')
  console.log("DATA", data)

response.send(data)
});





// router.delete('/deleteStudent',(request,response) => {
//   console.log("req", request.body)
//   student.deleteStudent(request.body)
//   response.send("SUCCESS")
// });






// router.post('/profile', upload.single('avatar'), function (req, res, next) {

//   console.log("request", req.file)
// });









//app.use(app)
app.listen(8080, ()=>{
  console.log("Listening to port 8080")
})