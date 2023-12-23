import React from 'react';
import Header from '../components/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const HomeLayout = ()=>{
    const { state } = useNavigation();
    return (
        <>
            <ToastContainer position='top-center'  autoClose={2000}/>
            <Header />
            <section className="page">
                {state === "loading" ? <div className="loading" /> : <Outlet />}
            </section>
            {/* Outlet renders the matched child route element or
            renders the nested route element whose path is matched with the URL
            */}
        </>
    )
}

export default HomeLayout;