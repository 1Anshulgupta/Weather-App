let input=document.querySelector("input");
let button=document.querySelector("button");
let place=document.querySelector(".place");
let temp=document.querySelector(".temp");
let humidity=document.querySelector("#humidity");
let wind=document.querySelector("#Wind");
let weather=document.querySelector("#weather");
let image=document.querySelector("img");
let error=document.querySelector("#error");

// for default
async function one(str1){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${str1}&appid=fc505b60f7d725737333e5cc270cc9cb&units=metric`;
    let response=await fetch(url);
    let data=await response.json();
    place.innerText=str1;
    temp.innerText=Math.round(data.main.temp) + "°C";
    humidity.innerText=data.main.humidity + "%";
    wind.innerText=data.wind.speed + " kph";
    weather.innerText=data.weather[0].main;

    // icon setting
    if(data.weather[0].main==="Rain"){
      image.style.backgroundImage="url('rain-removebg-preview.png')";//capetown
    }
    else if(data.weather[0].main==="Mist"){
        image.style.backgroundImage="url('mist-removebg-preview.png')";//mumbai
    } 
    else if(data.weather[0].main==="Clouds"){
        image.style.backgroundImage="url('clouds-removebg-preview.png')";//aligarh
    }
    else if(data.weather[0].main==="Haze"){
        image.style.backgroundImage="url('haze-removebg-preview.png')";//delhi
    }
    else if(data.weather[0].main==="Clear"){
        image.style.backgroundImage="url('clear.png')";//england
    }
    else if(data.weather[0].main==="Snow"){
        image.style.backgroundImage="url('snow-removebg-preview.png')";
    }
}
one(input.value);


// While i search for any location
button.addEventListener("click",()=>{
// place.innerText=input.value;           //isse bhi ho rha tha 
function capitalizeFirstLetter(str) {     //ye function ka sahara sirf isliye liya humne first word ko capital krne ke liye   
    return str.charAt(0).toUpperCase() + str.slice(1);
}
let name=capitalizeFirstLetter(input.value);
place.innerText=name;


//fetching info from api and write in their locations
 async function two(str2){
    try{
     let url=`https://api.openweathermap.org/data/2.5/weather?q=${str2}&appid=fc505b60f7d725737333e5cc270cc9cb&units=metric`;
     let response=await fetch(url);
    let data=await response.json();
    // console.log(data);
    temp.innerText=Math.round(data.main.temp) + "°C";
    humidity.innerText=data.main.humidity + "%";
    wind.innerText=data.wind.speed + " kph";
    weather.innerText=data.weather[0].main;
    place.style.color="white";
    error.style.visibility="hidden";

    // icon setting
    if(data.weather[0].main==="Rain"){
      image.style.backgroundImage="url('rain-removebg-preview.png')";//capetown
    }
    else if(data.weather[0].main==="Mist"){
        image.style.backgroundImage="url('mist-removebg-preview.png')";//mumbai
    } 
    else if(data.weather[0].main==="Clouds"){
        image.style.backgroundImage="url('clouds-removebg-preview.png')";//aligarh
    }
    else if(data.weather[0].main==="Haze"){
        image.style.backgroundImage="url('haze-removebg-preview.png')";//delhi
    }
    else if(data.weather[0].main==="Clear"){
        image.style.backgroundImage="url('clear.png')";//england
    }
    else if(data.weather[0].main==="Snow"){
        image.style.backgroundImage="url('snow-removebg-preview.png')";
    }
 }
 catch{
    place.innerText="City not found...";
    place.style.color="red";
    error.innerText="Enter correct city name. "
    error.style.color="red";
    error.style.marginLeft="2.2rem";
    error.style.visibility="visible";
    temp.innerText="";
    humidity.innerText="";
    wind.innerText="";
    weather.innerText="";
    image.style.backgroundImage="url('error.png')";
 }
}
 two(input.value);
})





