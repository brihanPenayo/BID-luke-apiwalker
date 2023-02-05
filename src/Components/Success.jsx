import React from 'react'
import Films from './Films'
import People from './People'
import Planets from './Planets'
import Species from './Species'
import Starships from './Starships'
import Vehicles from './Vehicles'

const Success = ({ data, options, submited }) => {
    return (
        <>{submited ? 
            <div>
                {options == "people" && <People data={data} />}
                {options == "planets" && <Planets data={data} />}
                {options == "starships" && <Starships data={data} />}
                {options == "films" && <Films data={data} />}
                {options == "species" && <Species data={data} />}
                {options == "vehicles" && <Vehicles data={data} />}
            </div> : <></>
        }
        </>
    )
}

export default Success