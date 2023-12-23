import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import ErrorWrapper from '../wrappers/Error';
const Error = ()=>{
    const error = useRouteError();
    console.log(error);
    if(error.status === 404){
        return (
            <ErrorWrapper>
                <div>
                    <img src="https://react-vite-projects-17-cocktails.netlify.app/assets/not-found-076062c6.svg" alt="image" />
                    <h3>Ohh!</h3>
                    <p>We can't seem to find page you are looking for</p>
                    <Link to="/" className="link">Back Home</Link>
                </div>
            </ErrorWrapper>
        )
    }
}

export default Error;