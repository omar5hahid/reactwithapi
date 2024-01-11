import React,{useState, useEffect} from 'react' 
import axios from 'axios'

export default function Games() {
    const [data, setData] = useState(null)

    const fetchJoke=()=>{
        axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
        .then(response => setData(response.data.joke))
        .catch(error => console.log(error))
    }
    console.log(data)
  return (
    <div>
        <h1>Joke</h1>
        <p>{data}</p>
        <button onClick={fetchJoke}>fetchJoke</button>
    </div>
  )
}
