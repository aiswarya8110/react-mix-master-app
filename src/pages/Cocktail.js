import React from 'react';
import axiosFetch from '../utils/axios';
import { useLoaderData, Link, Navigate}  from 'react-router-dom';
import Wrapper from '../wrappers/Cocktail';

export const singleCocktailLoader = (queryClient)=> 
{
    return async({ params })=>{
        const { id } = params;
        const response = await queryClient.ensureQueryData({
            queryKey: [id],
            queryFn: async()=> axiosFetch(`/lookup.php?i=${id}`),
            staleTime: Infinity
        })
        return response?.data;
    }
}

const Cocktail = ()=>{
    const data = useLoaderData();
    if(!data?.drinks){
        return <Navigate to="/" />
    }
    const { 
        strDrink:name, 
        strCategory:category, 
        strGlass:glass, 
        strInstructions: instructions, 
        strDrinkThumb:image, 
        strAlcoholic:info 
    } = data.drinks[0];
   
    const drink = data.drinks[0];

    const ingredients = Object.keys(drink).filter((item)=> item.startsWith("strIngredient") && drink[item] !== null).map((item)=> drink[item]);
    return (
        <Wrapper>
            <header>
                <Link to="/" className="btn">Back Home</Link>
                <h3>{name}</h3>
            </header>
            <div className="drink">
                <img src={image}  alt="drink-image" className="img" />
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name</span>
                        {name}
                    </p>
                    <p>
                        <span className="drink-data">category:</span>
                        {category}
                    </p>
                    <p>
                        <span className="drink-data">info:</span>
                        {info}
                    </p>
                    <p>
                        <span className="drink-data">glass:</span>
                        {glass}
                    </p>
                    <p>
                        <span className="drink-data">ingredients:</span>
                        {ingredients.map((item, index)=> (
                        <span className="ing" key={item} >
                            {item}
                            {index < ingredients.length - 1 && ','}
                        </span>
                        ))}
                    </p>
                    <p>
                        <span className="drink-data">instructions:</span>
                        {instructions}
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Cocktail;