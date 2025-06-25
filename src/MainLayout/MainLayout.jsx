import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.JSX';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Review from '../components/Review';
import How_it_Works from '../components/How_it_Works';
import TypewriterEffect from '../components/TypewriterEffect';
import { NavLink, useLoaderData } from 'react-router';
import { Fade } from 'react-awesome-reveal';

const MainLayout = () => {
    const allGroups = useLoaderData();
    // const sixGroups = allGroups.slice(1, 7);

    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours() % 12 || 12).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');

            setDateTime(`${year}-${month}-${day}T${hours}:${minutes}`);
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);


    const ongoingGroups = allGroups.filter(each => {
        const { _id, GroupName, startDate, ImageURL } = each;
        const formattedStartDate = new Date(startDate);
        const formattedNow = new Date(dateTime);
        if (formattedNow <= formattedStartDate) {
            return each
        }

    })
    const sixGroups = ongoingGroups.slice(1,7)
    



    return (
        <>
        <Fade cascade className='sticky'>
            <div><Navbar /></div>
            <div className='w-11/12 mx-auto'>
                <div className='mt-10 mb-10'><Slider /></div>
                <div id='featured' className='my-10 w-11/12 mx-auto'><TypewriterEffect /></div>
                <Fade direction='left' damping={2}>
                    <div className='text-center mt-10 text-3xl lg:text-5xl md:4xl font-semibold font-stretch-semi-expanded'>Featured Group</div>


                    <div className='w-11/12 mt-10 md:my-20 lg:my-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
                        {
                            sixGroups.map(single => {
        const { _id, GroupName, startDate, ImageURL, userName } = single;

                                
                                    return (
                                        <div key={_id} className="card bg-indigo-300 mx-auto lg:w-[350px] w-[300px] h-[500px] ml-5 my-3 px-5 shadow-sm hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 p-4 hover:bg-gradient-to-r from-pink-300 to-red-300 rounded-4xl">
                                            <figure>
                                                <img className='w-fit h-[350px]' src={ImageURL} alt="cycling club" />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    {GroupName}
                                                    <div className="badge badge-secondary p-5 lg:mr-3">{startDate}</div>
                                                </h2>
                                                <div className="card-actions justify-end">
                                                    <div className="badge badge-outline text-white font-semibold text-md p-4 relative lg:-left-10 bg-green-600 ml-0">
                                                        Group Created by {userName}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-around mb-5'>
                                                <NavLink to={`/all-groups/${_id}`} className='bg-black hover:bg-white hover:text-black text-md text-white px-4 p-1 rounded-xl'>
                                                    View Details
                                                </NavLink>
                                            </div>
                                        </div>
                                    );
                                
                            })
                        }
                    </div>
                </Fade>
                <div className='text-center'>
                    <NavLink className='bg-indigo-400 font-semibold hover:bg-indigo-700 hover:text-white p-4 rounded-2xl' onClick={() => window.scrollTo({ top: 200, left: 0, behavior: 'smooth' })} to='/all-groups'>
                        See All Group
                    </NavLink>
                </div>
                <div className='my-10'><Review /></div>
                <How_it_Works />
            </div>
            </Fade>
            <Footer />
        </>
    );
};

export default MainLayout;
