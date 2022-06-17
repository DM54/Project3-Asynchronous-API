/* Global Variables */
let getData = ()=>{};
// Personal API Key for OpenWeatherMap API
const apiKey = '14d242caefcc16d1d730d8cb6fec4d96&units=imperial';
const baseURL ='https://api.openweathermap.org/data/2.5/forecast?lat=39.31&lon=-74.5&appid=';
/**
 * getweatherData function is making a GET request to the OpenWeatherMap API.
 * Using the baseURL and apikey we should get data from OpenWeatherMap.
 *
 */
const getweatherData = async (baseURL, apikey) =>{
  const res = await fetch(baseURL + apikey);
  try{
    const data = await res.json();
    console.log(data);
    //return data;
  }catch(error){
    console.log("error", error);
  }

};
//getweatherData(baseURL, apiKey);

const perfromaction = () =>{
  const zipid = document.getElementById('zip').nodeValue;
  const feelingsid = document.getElementById('feelings').nodeValue;

  getData(baseURL,apiKey)
  .then(() =>{
    postData('/', {zipid: zipid, feelingsid: feelingsid});
  });
};


document.getElementById('generate').addEventListener('click', ()=>{perfromaction()});


// Part 2 for GET Route Client Side
 getData = async (baseURL, apiKey) =>{
  const request = await fetch(baseURL+apiKey);
  try{
    const alldata = await request.json();
    console.log(alldata);
    return alldata;
  }
  catch(error){
    console.log('error', error);
  }

};
//getData(baseURL, apiKey);

//POST Route Client Side
const postData = async (url='', data={})=>{
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });

  try{
    const newData = await response.json();
    return newData;
  }
  catch(error){
    console.log('error', error);
  }
};

//postData('/all', {date: data.date, temp: data.temp, content: data.content});




// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
