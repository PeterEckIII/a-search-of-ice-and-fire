import React from 'react'

const Results = (props) => {
    return (
        <div>
            <ul>
                { props.data.map(result => {
                    return (
                        <li id={result.ObjectID}>
                            { result }
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}

export default Results;