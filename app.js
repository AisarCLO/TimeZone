//All packages
const dayjs = require('dayjs');
const express = require('express');
const ejs= require('ejs');
const app = express();
const port = 5500;
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

//for TimeZone
dayjs.extend(utc)
dayjs.extend(timezone)
//For TimeZone
let TimeZone = dayjs.tz.guess();
//For current Date
let CurrentDate = dayjs().format('dddd/D MMMM/YYYY') 
//For Current Time

let CurrentTime = dayjs().format('HH:mm:ss');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index',{TimeZone,CurrentTime,CurrentDate});
})



app.listen(port, () => {
    console.log(`The App is listening at PORT ${port}`);
});
