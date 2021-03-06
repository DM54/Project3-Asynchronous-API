// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

const listening = () =>{
  console.log('server is running');
  console.log(`running on localhost: ${port}`);
};

app.listen(port, listening);

//GET Route Server Side, returning the endpoint data, and created a new route called /all
app.get('/all', getcallback);

function getcallback(request, response){
  console.log(projectData);
  response.send(projectData);
};

//POST Route Server Side
app.post('/all', function(request, response){
  const data = request.body;
  const holddata = [];
  projectData ={
    temp: data.temperature,
    feel: data.feelings,
    date: data.date
  };
 // console.log(data);
  holddata.push(projectData);
  console.log(holddata);
});
