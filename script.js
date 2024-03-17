let data;
let hour;
let day=0;
function result(place="hyderabad"){
api_key="%209340924dae844c06b78132058242702";
url=`http://api.weatherapi.com/v1/forecast.json?key=9340924dae844c06b78132058242702&q=${place}&days=8&aqi=no&alerts=no`;
fetch(url) 
.then(result=>result.json()) 
 .then(info=>{
 data=info; 
 console.log(data);
 now();
 //future_temp_photo(val,id);
 }); 
}
function loaction(){
 place=document.getElementById("search").value;
 result(place);
}
let temp=document.getElementsByName('temp');
temp.forEach(radio => {
 radio.addEventListener("change", (event) => {
 let val = event.target.value;
 let id = event.target.id;
 future_time(val, id);
 //future_temp_photo(val,id);
 });
});
let date=document.getElementsByName('day');
date.forEach(radios => {
 radios.addEventListener("change", (event) => {
 let val = event.target.value;
 val=parseInt(val)+1;
 future_day(val);
 });
});
function now(){
 var r=document.getElementById("day");
 r.checked=true;
 document.getElementById("val").innerText=data.current.temp_c+"\u00B0";
 document.getElementById("text").innerText=data.current.condition.text;
 document.getElementById("feelslike_c").innerText="Feels like "+data.current.feelslike_c;
 image=document.getElementById("img");
 image.src=data.current.condition.icon;

 document.getElementById("name").innerText=data.location.name;
 document.getElementById("localtime").innerText=data.location.localtime;

 document.getElementById("wind_kph").innerText="Wind Speed : "+data.current.wind_kph+" kmph";
 document.getElementById("wind_degree").innerText="Wind Degree : "+data.current.wind_degree+" deg";
 wind_direction={
 "S":"South",
 "N":"North",
 "E":"East",
 "W":"West",
 "SW":"South West",
 "SE":"South East",
 "NE":"North East",
 "NW":"North West",
 "SSE":"South South-East",
 "SSW":"South South-West",
 "NNW":"North North-West",
 "NNE":"North North-East",
 "ESE":"East South East",
 "WNW":"West North West",
 "WSW":"West South West",
 "ENE":"East North East"
 }
 document.getElementById("wind_dir").innerText="Wind Direction : "+wind_direction[data.current.wind_dir];

 document.getElementById("vis_km").innerText= "Visibility : "+data.current.vis_km+" km";

 document.getElementById("uv").innerText= "UV Index : "+data.current.uv;

 document.getElementById("pressure_mb").innerText= "Pressure : "+Math.ceil(0.75006*data.current.pressure_mb)+" mmHg";

 document.getElementById("humidity").innerText="Humidity : "+data.current.humidity+"%";

 document.getElementById("precip_mm").innerText="Precipitation : "+data.current.precip_mm+"%";
 hour=data.location.localtime;
 hour=hour.split(" ")[1];
 hour=hour.split(":")[0];
 for(let i=1;i<25;i++){
 hour=parseInt(hour)+i;
 if(hour==24){
 hour=0;
 day=day+1;
 document.querySelector(`label[for=inc${i}]`).innerText = hour;
 }
 else if(hour>24){ 
 hour=hour%24;
 day=day+1;
 document.querySelector(`label[for=inc${i}]`).innerText = hour;
 } 
 else{
 document.querySelector(`label[for=inc${i}]`).innerText = hour;
 }
 console.log(day,hour);
 hour=hour-i;

 }
 document.getElementById("sunrise").innerText=data.forecast.forecastday[0].astro.sunrise;
 document.getElementById("sunset").innerText=data.forecast.forecastday[0].astro.sunset;
 document.getElementById("moonrise").innerText=data.forecast.forecastday[0].astro.moonrise;
 document.getElementById("moonset").innerText=data.forecast.forecastday[0].astro.moonset;
 for(let i=1;i<4;i++){
 document.querySelector(`label[for=incc${i}]`).innerText = data.forecast.forecastday[i].date;
 }

}
function future_day(val){
 day=val;
 hour=data.location.localtime;
 hour=hour.split(" ")[1];
 hour=hour.split(":")[0];
 
 document.getElementById("val").innerText=data.forecast.forecastday[day].hour[hour].temp_c+"\u00B0";
 document.getElementById("text").innerText=data.forecast.forecastday[day].hour[hour].condition.text;
 document.getElementById("feelslike_c").innerText="Feels like "+data.forecast.forecastday[day].hour[hour].feelslike_c;
 image=document.getElementById("img");
 image.src=data.forecast.forecastday[day].hour[hour].condition.icon;

 document.getElementById("name").innerText=data.location.name;
 document.getElementById("localtime").innerText=data.forecast.forecastday[day].hour[hour].time;

 document.getElementById("wind_kph").innerText="Wind Speed : "+data.forecast.forecastday[day].hour[hour].wind_kph+" kmph";
 document.getElementById("wind_degree").innerText="Wind Degree : "+data.forecast.forecastday[day].hour[hour].wind_degree+" deg";
 wind_direction={
 "S":"South",
 "N":"North",
 "E":"East",
 "W":"West",
 "SW":"South West",
 "SE":"South East",
 "NE":"North East",
 "NW":"North West",
 "SSE":"South South-East",
 "SSW":"South South-West",
 "NNW":"North North-West",
 "NNE":"North North-East",
 "ESE":"East South East",
 "WNW":"West North West",
 "WSW":"West South West",
 "ENE":"East North East"
 }
 document.getElementById("wind_dir").innerText="Wind Direction : "+wind_direction[data.forecast.forecastday[day].hour[hour].wind_dir];

 document.getElementById("vis_km").innerText= "Visibility : "+data.forecast.forecastday[day].hour[hour].vis_km+" km";

 document.getElementById("uv").innerText= "UV Index : "+data.forecast.forecastday[day].hour[hour].uv;

 document.getElementById("pressure_mb").innerText= "Pressure : "+Math.ceil(0.75006*data.forecast.forecastday[day].hour[hour].pressure_mb)+" mmHg";

 document.getElementById("humidity").innerText="Humidity : "+data.forecast.forecastday[day].hour[hour].humidity+"%";

 document.getElementById("precip_mm").innerText="Precipitation : "+data.forecast.forecastday[day].hour[hour].precip_mm+"%";
 document.getElementById("sunrise").innerText=data.forecast.forecastday[day].astro.sunrise;
 document.getElementById("sunset").innerText=data.forecast.forecastday[day].astro.sunset;
 document.getElementById("moonrise").innerText=data.forecast.forecastday[day].astro.moonrise;
 document.getElementById("moonset").innerText=data.forecast.forecastday[day].astro.moonset;
 hour=data.location.localtime;
 hour=hour.split(" ")[1];
 hour=hour.split(":")[0];
 for(let i=1;i<25;i++){
 hour=parseInt(hour)+i;
 if(hour==24){
 hour=0;
 day=day+1;
 document.querySelector(`label[for=inc${i}]`).innerText = hour;
 }
 else if(hour>24){ 
 hour=hour%24;
 day=day+1;
 document.querySelector(`label[for=inc${i}]`).innerText = hour;
 } 
 else{
 document.querySelector(`label[for=inc${i}]`).innerText = hour;
 }
 console.log(day,hour);
 hour=hour-i;
 }
}
 function future_time(val){
 let dayy=day;
 hour=data.location.localtime;
 hour=hour.split(" ")[1];
 hour=hour.split(":")[0];
 let time_hour=parseInt(hour)+1+parseInt(val);
 if(time_hour==24){
 time_hour=0;
 dayy=day;
 }
 else if(time_hour>24){
 time_hour=time_hour%24;
 dayy=day;
 }
 else{
 dayy=day-1;
 }
 future_hour(time_hour,dayy);
 }
 function future_hour(hour,day){
 document.getElementById("val").innerText=data.forecast.forecastday[day].hour[hour].temp_c+"\u00B0";
 document.getElementById("text").innerText=data.forecast.forecastday[day].hour[hour].condition.text;
 document.getElementById("feelslike_c").innerText="Feels like "+data.forecast.forecastday[day].hour[hour].feelslike_c;
 image=document.getElementById("img");
 image.src=data.forecast.forecastday[day].hour[hour].condition.icon;

 document.getElementById("name").innerText=data.location.name;
 document.getElementById("localtime").innerText=data.forecast.forecastday[day].hour[hour].time;

 document.getElementById("wind_kph").innerText="Wind Speed : "+data.forecast.forecastday[day].hour[hour].wind_kph+" kmph";
 document.getElementById("wind_degree").innerText="Wind Degree : "+data.forecast.forecastday[day].hour[hour].wind_degree+" deg";
 wind_direction={
 "S":"South",
 "N":"North",
 "E":"East",
 "W":"West",
 "SW":"South West",
 "SE":"South East",
 "NE":"North East",
 "NW":"North West",
 "SSE":"South South-East",
 "SSW":"South South-West",
 "NNW":"North North-West",
 "NNE":"North North-East",
 "ESE":"East South East",
 "WNW":"West North West",
 "WSW":"West South West",
 "ENE":"East North East"
 }
 document.getElementById("wind_dir").innerText="Wind Direction : "+wind_direction[data.forecast.forecastday[day].hour[hour].wind_dir];

 document.getElementById("vis_km").innerText= "Visibility : "+data.forecast.forecastday[day].hour[hour].vis_km+" km";

 document.getElementById("uv").innerText= "UV Index : "+data.forecast.forecastday[day].hour[hour].uv;

 document.getElementById("pressure_mb").innerText= "Pressure : "+Math.ceil(0.75006*data.forecast.forecastday[day].hour[hour].pressure_mb)+" mmHg";

 document.getElementById("humidity").innerText="Humidity : "+data.forecast.forecastday[day].hour[hour].humidity+"%";

 document.getElementById("precip_mm").innerText="Precipitation : "+data.forecast.forecastday[day].hour[hour].precip_mm+"%";
 }


 var breakpoint = {
 // Small screen / phone
 sm: 576,
 // Medium screen / tablet
 md: 768,
 // Large screen / desktop
 lg: 992,
 // Extra large screen / wide desktop
 xl: 1200
 };
 
 // slick slider
 $('.slick').slick({
 draggable: true,
 infinite: false,
 dots: false,
 arrows: false,
 speed: 1000,
 mobileFirst: true,
 slidesToShow: 4,
 slidesToScroll: 4,
 responsive: [{
 breakpoint: breakpoint.sm,
 settings: {
 slidesToShow: 4,
 slidesToScroll: 4,
 arrows: true
 }
 },
 {
 breakpoint: breakpoint.md,
 settings: {
 slidesToShow: 4,
 slidesToScroll: 4,
 arrows: true
 }
 },
 {
 breakpoint: breakpoint.lg,
 settings: {
 slidesToShow: 4,
 slidesToScroll: 4,
 arrows: true
 }
 },
 {
 breakpoint: breakpoint.xl,
 settings: {
 slidesToShow: 4,
 slidesToScroll: 4,
 arrows: true
 }
 }
 ]
 });