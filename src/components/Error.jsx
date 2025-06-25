import React from 'react';
import Footer from './Footer';
import { NavLink } from 'react-router';
import Navbar from './Navbar';

const Error = () => {
    return (
        <div className='space-y-24'>
            <Navbar></Navbar>
            <div className='text-center'>
                <h1 className='text-5xl font-bold'>Page Not Found!!</h1>
                 <NavLink to="/" className="btn btn-primary my-10">Back to Home</NavLink>
            </div>
           <img className=' mt-10 rounded-2xl ml-40 relative left-[250px] bottom-24' src="https://i.postimg.cc/GhdDC0XN/404-error-page.jpg" alt="" /> 
           <Footer></Footer>

        </div>
    );
};

export default Error;