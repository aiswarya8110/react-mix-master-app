import React from 'react';
import Wrapper from '../wrappers/SearchForm';
import { Form } from 'react-router-dom';

const SearchForm = ()=>{
    return (
        <Wrapper>
            <Form className="form">
                <input type="search" className="form-input" name="search"/>
                <button className="btn" type="submit">search</button>
            </Form>
        </Wrapper>
    )
};

export default SearchForm;