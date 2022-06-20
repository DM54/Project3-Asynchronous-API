/* Global Variables */
let getData = ()=>{};
let postData = () =>{};
let feelingsid;
// Personal API Key for OpenWeatherMap API
const apiKey = '14d242caefcc16d1d730d8cb6fec4d96&units=imperial';
let zipcodeinput;
const baseURL ='https://api.openweathermap.org/data/2.5/weather?zip=';
const appid = '&appid=';
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
  zipcodeinput = document.querySelector('#zip').value;
  feelingsid = document.querySelector('#feelings').value;

  getData(baseURL,zipcodeinput,appid,apiKey)
 .then((data) =>{
  postData('/all', {zip: data, feelingsid: feelingsid});
  })
};


document.getElementById('generate').addEventListener('click', ()=>{perfromaction()});


// Part 2 for GET Route Client Side
 getData = async (baseURL, zipcodeinput, appid, apiKey) =>{
  const request = await fetch(baseURL+zipcodeinput+appid+apiKey);
  try{
    const alldata = await request.json();
    console.log(alldata);
    //return alldata;
  }
  catch(error){
    console.log('error', error);
  }

};


//POST Route Client Side
postData = async (url='', data={})=>{
  const res = await fetch(url,
    {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
    );

  try{
    const newData = await res.json();
    console.log(newData);
    return newData;
  }
  catch(error){
    console.log('error', error);
  }
};



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
