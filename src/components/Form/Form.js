import React from 'react';

const Form = (props) => {
    return (
        <>
            <form onSubmit={(e) => {
                props.fetchData(`https://www.anapioficeandfire.com/api?query=${props.query}`)
                e.preventDefault();
            }}>
                <input 
                    type="text"
                    value={props.query}
                    onChange={(e) => props.setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </>
    )
};
export default Form;
