import React from 'react';

const Form = ({ query, setQuery, fetchData }) => {
    return (
        <>
            <form onSubmit={ (e) => {
                // TODO: This might be where the error is. The endpoint doesn't return a result
                e.preventDefault();
                fetchData(`https://www.anapioficeandfire.com/api/characters`);
            } }>
                <input
                    type="text"
                    value={ query }
                    onChange={ (e) => setQuery(e.target.value) }
                />
                <button type="submit">Search</button>
            </form>
        </>
    )
};
export default Form;
