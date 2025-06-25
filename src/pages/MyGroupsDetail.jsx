import React from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../components/Navbar.JSX';

const MyGroupsDetail = () => {
    const { _id } = useParams()
    const groupsData = useLoaderData()
    const singleGroup = groupsData.find(detail => detail._id == _id);

    const { GroupName, startDate, description, userEmail,hobby, meeting, members, ImageURL, userName } = singleGroup;
    

    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-10 w-1/2  mx-auto'>
                {<div className="card bg-sky-200 w-[720px] shadow-sm">
                    <figure>
                        <img className='w-[500px] h-[350px] pt-10 rounded-2xl'
                            src={ImageURL}
                            alt="cycling club" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title ml-20">
                            {GroupName}
                            <div className="badge badge-secondary"><span className='text-black font-semibold'>Starting : </span>{startDate}
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
                        {/* <div className='flex justify-around mb-5'>
                              <button className='bg-green-500 hover:bg-white hover:text-green-500 hover:font-semibold text-md text-white px-4 p-1 rounded-xl '>Update</button>
                                        <button className='bg-red-500 hover:bg-red-700 text-md text-white px-4 p-1 rounded-xl'>Delete</button>
                                    </div> */}
                    </div>
                }
            </div>

        </div>
    );
};

export default MyGroupsDetail;