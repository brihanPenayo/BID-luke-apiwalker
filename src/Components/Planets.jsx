import React from 'react'

const Planets = ({ data }) => {
    return (
        <div>
            <h1>Nombre: {data.name}</h1>
            <h2>Diametro: {data.diameter}</h2>
            <h2>Clima: {data.climate}</h2>
            <h2>Poblacion: {data.population}</h2>
        </div>
    )
}

export default Planets