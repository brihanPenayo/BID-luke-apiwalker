import { useState } from 'react';
import './App.css'
import Form from '../Components/Form'
import axios from 'axios';
import Results from '../Components/Results';

function Home() {
  const [opcion, setOpcion] = useState("");
  const [error, setError] = useState(false);
  const [num, setNum] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://swapi.dev/api/${opcion}/${num}`)
      .then((res) => {
        setError(false)
        setData(res.data)
        console.log(data)
      }).catch(() => {
        setError(true)
      })
  }

  const handleChange = (e) => {
    if (e.target.name == "option") {
      setOpcion(e.target.value)
      console.log(opcion)
    }
    else if (e.target.name == "id") {
      setNum(e.target.value)
    }
  }

  return (
    <>
      <Form onChange={handleChange} onSubmit={handleSubmit} id={num} />
      <Results data={data} error={error} />
    </>
  )
}

export default Home
