import React from 'react';
import { toast } from 'react-toastify';
import { Form, useNavigation, redirect } from 'react-router-dom';
import axios from 'axios';
const newsletterURL = "https://www.course-api.com/cocktails-newsletter";

export const formAction = async({ request})=>{
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    try{
       const response = await axios.post(newsletterURL, data);

       toast.success(response.data.msg);

       return redirect("/")
    }
    catch(error){
        console.log(error);
        toast.error(error?.response?.data?.msg);

        return null;
    }
}

const NewsLetter = ()=>{
    const { state } = useNavigation();
    const isSubmitting = state === "submitting" ? true : false;
    return (
        <>
            <Form className="form" method="POST">
                <h4 style={{marginBottom: "2rem", textAlign: "center"}}>
                    Our newsletter
                </h4>
                <div className="form-row">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input 
                    type="text" 
                    className="form-input" 
                    name="name" 
                    id="name"
                    />
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="lastName">
                        Last Name
                    </label>
                    <input 
                    type="text" 
                    className="form-input" 
                    name="lastName" 
                    id="lastName"
                    />
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input 
                    type="text" 
                    className="form-input" 
                    name="email" 
                    id="email"
                    />
                </div>
                <button className="btn btn-block"
                disabled={isSubmitting}
                style={{
                    marginTop: "0.5rem"
                }}>{ isSubmitting ? 'Submitting..' : 'Submit'}</button>
            </Form>
        </>
        
    )
};

export default NewsLetter;