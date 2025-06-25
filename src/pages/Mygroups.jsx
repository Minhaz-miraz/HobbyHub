import React, { use } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from '../components/Navbar.JSX';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';
import { Fade } from 'react-awesome-reveal';

const Mygroups = () => {
    const { user } = use(AuthContext)
    const groupsData = useLoaderData()
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://hobby-hub-server-rouge.vercel.app/groups/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"

                            })
                        }
                    })
            }
        })
          

    }


    return (<>
    <Fade>
        <Navbar></Navbar>
        <div className='text-center'>
            <h1 className='font-bold text-5xl text-indigo-500 font-stretch-semi-expanded mt-5 b border-2-amber-300 rounded-2xl'><span className='font-bold text-4xl text-black'>Your</span> Groups</h1>
        </div>
        <Fade cascade>
        <div className='my-20 w-11/12 mx-auto grid  md:grid-cols-2 md:mx-auto lg:grid-cols-3 lg:mx-auto'>
            {
                groupsData.map(groupsDat => {
                    const { _id, GroupName,
                        startDate, ImageURL, userName, createdBy } = groupsDat;
                    if (user.email == createdBy) {
                        return (
                            <div key={_id} className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 p-4  hover:bg-gradient-to-r from-pink-300 to-red-300 ">
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
                                    <NavLink to={`/mygroups/${_id}`} className='bg-black  hover:bg-white hover:text-black
                                         text-md text-white px-4 p-1 rounded-xl'>Info</NavLink>
                                    <NavLink to={`/groupUpdate/${_id}`} className='bg-green-500 hover:bg-white hover:text-green-500 hover:font-semibold text-md text-white px-4 p-1 rounded-xl '>Update</NavLink>
                                    <button className='bg-red-500 hover:bg-red-700 text-md text-white px-4 p-1 rounded-xl' onClick={() => handleDelete(_id)}>Delete</button>
                                </div>
                            </div>
                        )
                    }




                })
            }
        </div>
        </Fade>
        </Fade>
        <Footer></Footer>
    </>);
};

export default Mygroups;