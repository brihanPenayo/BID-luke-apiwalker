import React from 'react'
import Error from './Error'
import Success from './Success'

const Results = ({ data, error }) => {
    return (
        <div>
            {error ? <Error /> : <Success data={data} />}
        </div>
    )
}

export default Results