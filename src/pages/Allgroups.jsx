import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Fade } from 'react-awesome-reveal';

const Allgroups = () => {
    const allGroups = useLoaderData()


    return (
        <>
        <Fade cascade>
        <Navbar></Navbar>
        <Fade direction='left'>
        <div id='allGroups' className='text-center mt-10'><h1 className='font-bold text-5xl text-indigo-500 font-stretch-semi-expanded mt-5 b border-2-amber-300 rounded-2xl'><span className='font-bold text-4xl text-black'>Groups Created by</span> Active Society</h1></div></Fade>
        <Fade cascade>
        <div className='p-5 lg:w-11/12 mt-10 md:my-20 lg:my-32 mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:p-10 lg:gap-7 '>
            {
                allGroups.map(single => {
                    const { _id, GroupName, startDate, ImageURL, userName } = single;
                    return (<div>
                            <div key={_id} className="card bg-indigo-300 w-300px my-5 lg:w-[400px] lg:h-[500px]  ml-5 my-3px-5 shadow-sm hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 p-4  hover:bg-gradient-to-r from-pink-300 to-red-300 rounded-4xl ">
                                <figure>
                                    <img className='w-[350px] h-[350px]'
                                        src={ImageURL}
                                        alt="cycling club" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {GroupName}
                                        <div className="badge badge-secondary">{startDate}</div>
                                    </h2>

                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline  text-white  font-semibold text-md p-4 relative -left-32 bg-green-600 ml-0">Group Created by {userName}</div>
                                    </div>

                                </div>
                                <div className='flex justify-around mb-5'>
                                    <NavLink to={`/all-groups/${_id}`} className='bg-black  hover:bg-white hover:text-black
                                         text-md text-white px-4 p-1 rounded-xl'>View Details</NavLink>
                                    
                                    
                                </div>
                            </div>
                       </div> )
                })
            }
        </div>
        </Fade>
        </Fade>
        <Footer></Footer>
        </>
    );
};

export default Allgroups;