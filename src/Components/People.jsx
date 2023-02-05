import React from 'react'

const People = ({ data }) => {
    return (
        <div>
            <h1>Nombre: {data.name}</h1>
            <h2>Altura: {data.height}</h2>
            <h2>Masa: {data.mass}</h2>
            <h2>Genero: {data.gender}</h2>
        </div>
    )
}

export default People

// people->
// name
// height
// mass
// gender