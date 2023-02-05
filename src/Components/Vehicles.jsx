import React from 'react'

const Vehicles = ({ data }) => {
    return (
        <div>
            <h1>Nombre: {data.name}</h1>
            <h2>Modelo: {data.model}</h2>
            <h2>Creador: {data.manufacturer}</h2>
            <h2>Pasajeros: {data.passengers}</h2>
        </div>
    )
}

export default Vehicles

// vehicles->
// name
// model
// manufacturer
// passengers