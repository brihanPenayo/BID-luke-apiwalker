import React from 'react'

const Success = ({ data }) => {
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.height}</p>
        </div>
    )
}

export default Success