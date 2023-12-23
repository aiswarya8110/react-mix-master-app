import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, About, NewsLetter, Cocktail, Landing, Error, SinglePageError } from './pages/index';
import { landingLoader } from './pages/Landing';
import { singleCocktailLoader } from './pages/Cocktail';
import { formAction } from './pages/NewsLetter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Landing />,
                loader: landingLoader(queryClient), // whenever there is a change in route the loader gets called 
                errorElement: <SinglePageError />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        index: true,
                        element: <h2>Company Page</h2>
                    },
                    {
                        path: "person",
                        element: <h2>Person Page</h2>
                    },
                ],
                errorElement: <SinglePageError />
            },
            {
                path: "/cocktail/:id",
                element: <Cocktail />, 
                loader: singleCocktailLoader(queryClient),
                errorElement: <SinglePageError />
                // This Page is called when the error can be fetch error(writing some gibberish in api), network error in the loader or if no component is defined
            },
            {
                path: "/newsletter",
                element: <NewsLetter />,
                action: formAction, // action is called when a particular route element performs POST, PUT, PATCH, DELETE operations
                errorElement: <SinglePageError />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
    </QueryClientProvider>
)

// '/' is absolute to the root while no slash is relative to current path