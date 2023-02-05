import React from 'react'
import Error from './Error'
import Success from './Success'

const Results = ({ data, error, options }) => {
    return (
        <div>
            {error ? <Error /> : <Success data={data} options={options} />}
        </div>
    )
}

export default Results