import React from 'react'

const Form = ({ onChange, id, onSubmit }) => {

    return (
        <form onSubmit={onSubmit}>
            <select name='option' onChange={onChange}>
                <option value="">Selecciona una Opcion</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="films">Films</option>
                <option value="species">Species</option>
                <option value="vehicles">Vehicles</option>
                <option value="starships">Starships</option>
            </select>
            <input type="number" name="id" value={id} onChange={onChange} />
            <button type='submit'>Search</button>
        </form>
    )
}

export default Form