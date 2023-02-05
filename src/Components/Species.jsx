import React from 'react'

const Species = ({ data }) => {
    return (
        <div>
            <h1>Nombre: {data.name}</h1>
            <h2>Clasificacion: {data.classification}</h2>
            <h2>Designacion: {data.designation}</h2>
            <h2>Lenguaje: {data.language}</h2>
        </div>
    )
}

export default Species

// species->
// name
// classification
// designation
// language