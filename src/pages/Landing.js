import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axiosFetch from '../utils/axios';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useQuery } from '@tanstack/react-query';

const searchCocktailsQuery = (searchTerm)=>{
    // 5 minutes the query cache data will be valid after that it will be stale
    return {
        queryKey: ["search", searchTerm || 'all'],
        queryFn: async()=> {
           const response = await axiosFetch.get(`/search.php?s=${!searchTerm ? '' : searchTerm}`);
           return response.data.drinks
        },
        staleTime: 1000 * 60 * 5 
    }
}

export const landingLoader = (queryClient)=>{
   return (
        async({ request })=> {
        const url = new URL(request.url);
        const searchTerm = url.searchParams.get("search");
        const response = await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
        return searchTerm
}
    )
}

const Landing = ()=>{ 
    const searchTerm = useLoaderData();
    const {data:drinks} = useQuery(searchCocktailsQuery(searchTerm));
    return (
        <>
            <SearchForm />
            <CocktailList drinks={drinks} />
        </>
    )
}

export default Landing;


// search, all
// searchTerm