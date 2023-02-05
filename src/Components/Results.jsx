import React from 'react'
import Error from './Error'
import Success from './Success'

const Results = ({ data, error, submited, options }) => {
    return (
        <div>
            {error ? <Error /> : <Success submited={submited} data={data} options={options} />}
        </div>
    )
}

export default Results