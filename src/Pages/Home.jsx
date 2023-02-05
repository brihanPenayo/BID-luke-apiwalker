import { useState } from 'react';
import './App.css'
import Form from '../Components/Form'
import axios from 'axios';
import Results from '../Components/Results';

function Home() {
  const [opcion, setOpcion] = useState("");
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [num, setNum] = useState(1);
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://swapi.dev/api/${opcion}/${num}`)
      .then((res) => {
        setError(false)
        setData(res.data)
        console.log(res.data)
        setSubmit(true)
      }).catch(() => {
        setError(true)
        setSubmit(false)
      })
  }

  const handleChange = (e) => {
    if (e.target.name == "option") {
      setOpcion(e.target.value)
      setSubmit(false)
    }
    else if (e.target.name == "id") {
      setNum(e.target.value)
    }

  }

  return (
    <>
      <Form onChange={handleChange} onSubmit={handleSubmit} id={num} />
      <Results data={data} error={error} options={opcion} submited={submit} />
    </>
  )
}

export default Home
