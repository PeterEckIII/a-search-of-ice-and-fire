import React from 'react'

const Results = (props) => {
    return (
        <div>
            { props.data[ 0 ].map(result => <div>{ result }</div>) }
        </div>
    )
}

export default Results;
