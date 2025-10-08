import React,{useState,useEffect} from "react";
const WeatherApp=()=>{
   const [weather,setWeather]=useState(null);
   const [place,setPlace]=useState('');
   const [loading,setLoading]=useState(true)
   const [error,setError]=useState('');
   const API_KEY="SECRET_KEY";

   useEffect(()=>{
     if(!place.trim()) return;
     const delay=setTimeout(()=>{
     const fetchWeather=async()=>{

           try{
             const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}&units=metric`)
              const details=await res.json();
              setPlace('');
              setWeather(details);
           }catch(error){
             setError("No Weather Data Found");
             setWeather(null);
           }finally{
             setLoading(false);
           }
      }
      fetchWeather();
     },800);
     return ()=>clearTimeout(delay);
   },[place]);
  
  return (
    <div className="weather-container" >
    <input type="text" value={place} placeholder="Enter the place" onChange={(e)=>setPlace(e.target.value)}/>
    {loading?(<p>...Loading</p>)
     :error?(<p className="error-message">{error}</p>)
     :weather&&weather.main?
     ( <div className="weather-data"> 
        <h2>Weather in {weather.name}</h2>  
        <p>Temperature:{weather.main.temp}°c</p>
        <p>Condition:{weather.weather[0].main}</p>
        <p>Humidity:{weather.main.humidity}%</p>
      </div >
     ):(<p>Start typing a city to get weather data</p>)
    }
    </div>
  )
}

export default WeatherApp;
