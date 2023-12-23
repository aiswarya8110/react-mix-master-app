import React from 'react';
import Error from '../wrappers/Error';
import { Link, useRouteError } from 'react-router-dom';
const SinglePageError = ()=>{
    const error = useRouteError();
    console.log(error);
    return (
        <Error>
            <div>
                <h3>There was an error</h3>
                <p></p>
                <Link to="/" className="link">Back Home</Link>
            </div>
        </Error>
    )
}

export default SinglePageError;