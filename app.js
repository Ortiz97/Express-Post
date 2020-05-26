const express = require('express');
const bodyParser = require('body-parser');
//const router = express.Router();
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//response.sendfile("index.html");
app.get('/', (request, response) => {
    //response.send("Hello World");
    response.sendfile("index.html");

});

//Get the post
app.post("/login", (request, response) => {
    var user_name = request.body.user;
    var password = request.body.password;
    console.log(`Username ${user_name} password ${password}`); 
    response.send("yes");
});

app.listen(port, () => {
  console.log(`Started on PORT ${port}`);
});
