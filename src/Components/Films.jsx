import React from 'react'

const Films = ({data}) => {
    return (
        <div>
            <h1>Titulo: {data.title}</h1>
            <h2>Director: {data.director}</h2>
            <h2>Productor: {data.producer}</h2>
            <h2>Fecha de Lanzamiento: {data.release_date}</h2>
        </div>
    )
}

export default Films