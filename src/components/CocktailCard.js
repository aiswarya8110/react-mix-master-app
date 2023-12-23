import React from 'react';
import Wrapper from '../wrappers/CocktailCard';
import { Link } from 'react-router-dom';
const CocktailCard = ({ drink })=>{
    const { image, name, glass, alcoholic, id } = drink;
    return (
        <Wrapper>
            <article>
                <div className="image-container">
                    <img src={image} alt="img" />
                </div>
                <div className="footer">
                    <h4>{name}</h4>
                    <h5>{glass}</h5>
                    <p>{alcoholic}</p>
                    <Link className="btn" to={`/cocktail/${id}`}>Details</Link>
                </div>
            </article>
        </Wrapper>
    )
}

export default CocktailCard;