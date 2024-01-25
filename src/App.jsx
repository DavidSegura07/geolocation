import { useState } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;



export default function App() {
  const [location, setLocation] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  async function getLocation() {
    const API=`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`
    const response = await axios.get(API);
    console.log(response);
    const locationObj = response.data[0];
    setLocation(locationObj);
  }

  function updateQuery(event) {
    console.log(event.target.value);
    setSearchQuery(event.target.value)
  }

  return (
 <>
  <input onChange={updateQuery} />
  <button onClick={getLocation}>Explore</button>
  <h2>The city is: {location.display_name}</h2>
 </>
  )
}

