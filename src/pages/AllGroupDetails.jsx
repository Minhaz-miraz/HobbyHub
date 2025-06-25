import React, { useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../components/Navbar.JSX';
import Footer from '../components/Footer';

const AllGroupDetails = () => {
    



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

    // Update immediately
    updateDateTime();
    
    // Update every second
    const interval = setInterval(updateDateTime, 1000);
    
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  

    const { _id } = useParams()
        const groupsData = useLoaderData()
        const singleGroup = groupsData.find(detail => detail._id == _id);
    
        const { GroupName, startDate, description, userEmail,hobby, meeting, members, ImageURL, userName } = singleGroup;
        
    
        return (
            <div>
                <Navbar></Navbar>
                
                <div className='mt-10 w-1/2  mx-auto mb-20'>
                    {<div className="card bg-sky-200 w-[350px] relative right-20 lg:right-0 md:right-0 lg:w-[720px] shadow-sm">
                        <figure>
                            <img className='lg:w-[500px] h-[350px] w-[300px] pt-10 rounded-2xl'
                                src={ImageURL}
                                alt="cycling club" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title ml-20 relative right-12 lg:right-0">
                                {GroupName}
                                <div className=" badge badge-secondary p-5"><span className='text-black font-semibold'>Starting : </span>{startDate}
                                </div>
                            </h2>
                            <div className='p-5 border-r-2 border-l-2 rounded-2xl'>
                                <p className=' text-lg font-md'>{description}</p>
                            <p className='text-lg font-medium'>Meeting Location: <span className='text-lg font-semibold text-red-500'>{meeting}</span></p>
                            <p>Admin: {userName}</p>
                            <p>Admin Contact: {userEmail}</p>
                            <p>Category : {hobby}</p>
                            <p>members : {members}</p>
                            
                            </div>
                           
                            </div>
                            <div className=' ml-[280px]'>{ dateTime >= startDate? <h1 className='bg-red-500 p-5 mb-5 mr-44 relative right-8 rounded-xl'>Deadline has been passed!keep your eye for next event</h1>:<button className="bg-indigo-500 w-40 mb-10 hover:bg-white hover:text-indigo-800 hover:font-semibold text-xl text-black px-4 p-1 rounded-xl relative right-40 md:right-0 lg:right-0">Join</button>}</div>
                                
                            
                        </div>
                    }
                </div>
                <Footer></Footer>
    
            </div>
        );
};

export default AllGroupDetails;