import React, { useState } from 'react';
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;



export default function Explore() {

    const [location, setLocation] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [maps, setMaps] = useState('')
    const [error, setError] = useState(null);
  
    async function getLocation() {
      try {
        const API=`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`
        const response = await axios.get(API);
        console.log(response);
        const locationObj = response.data[0];
        setLocation(locationObj);
      } catch (error) {
        setError(error.message);
        alert('Error: ' + error.message);
      }
    }
  
    function updateQuery(event) {
      setSearchQuery(event.target.value)
    }

    function showMaps() {
      try {
      const mapsURL = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=12`
      setMaps(mapsURL)
      } catch (err) {
        setError(error.message)
        console.log('error')
        alert('Error: ' + error.message);
      }
    }
  
    return (
   <>
    <input onChange={updateQuery} />
    <button onClick={getLocation}>Explore</button>
    <h2>The city is: {location.display_name}</h2>
    <h3>Latitude: {location.lat}</h3>
    <h3>Longitude: {location.lon}</h3>
    <button onClick={showMaps}>Show Map</button>
    <img src={maps} alt="" />
   </>
    )
  }