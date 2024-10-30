import React from 'react';
import CocktailCard from './CocktailCard';
import Wrapper from '../wrappers/CocktailList';

const CocktailList = ({ drinks })=>{
    // console.log(drinks);
    if(!drinks){
        return <h2 style={{textAlign: 'center'}}>No cocktails found...</h2>
    }

    const formattedDrinks = drinks?.map((item)=>{
        const {idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } = item;

        return {id:idDrink, name:strDrink, alcoholic:strAlcoholic, image:strDrinkThumb, glass: strGlass}
    })
    return (
        <Wrapper>
            {formattedDrinks?.map((drink)=>(
                <CocktailCard drink={drink} key={drink.id} />
            ))}
        </Wrapper>
    )
}

export default CocktailList;