import React from 'react'

const Starships = ({ data }) => {
    return (
        <div>
            <h1>Nombre: {data.name}</h1>
            <h2>Modelo: {data.model}</h2>
            <h2>Creador: {data.manufacturer}</h2>
            <h2>Consumibles: {data.consumables}</h2>
        </div>
    )
}

export default Starships

// starships->
// name
// model
// manufacturer
// consumables