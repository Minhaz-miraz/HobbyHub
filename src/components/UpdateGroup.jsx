import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLoaderData, useNavigate, useNavigation, useParams } from 'react-router';
import '../App.css'
import Navbar from './Navbar.JSX';
import Swal from 'sweetalert2';
import Loading from './Loading';


const UpdateGroup = () => {
    const { user } = use(AuthContext);
    const { id } = useParams()
     const{state}= useNavigation()
     const Navigate = useNavigate()

    const GroupData = useLoaderData();
    const particularData = GroupData.find(single => {

        if (single._id == id) {
            return single
        }
    })
    const {_id, GroupName, startDate, description, userEmail, hobby, meeting, members, ImageURL, userName } = particularData;

    const handleUpdate = (e) => {
        e.preventDefault();
        // collect updated data
         const form = e.target;
    const formData = new FormData (form);
    const updatedData = Object.fromEntries(formData.entries())
    // send to server
    fetch(`https://hobby-hub-server-rouge.vercel.app/groups/${_id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
    .then(res =>res.json())
    .then( async data => {
        if(data.acknowledged == true){
           await Swal.fire({
        icon: "success",
        title:
          '<p class="font-bold">Successfully Group has been Created</p>',
      })
        }
    },
     state=="loading"? <Loading/> : Navigate(`${location.state? location.state: "/mygroups/"}`)   
    )
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto  min-h-screen flex items-center justify-center ">
                <div className="bg-gradient-to-br from-blue-100 to-pink-100bg-opacity-40 backdrop-blur-md shadow-lg p-8 rounded-3xl w-full max-w-md">

                    <form onSubmit={handleUpdate}>

                        {/* Name */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Group Name</label>
                            <input
                                name='GroupName'
                                type="text"
                                defaultValue={GroupName}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required
                            />
                        </div>
                        {/* hobby category */}
                        <label className="block text-sm font-medium text-gray-700">Hobby Category</label>
                        <input type="text" className="input" name='hobby' placeholder="Which browser do you use" defaultValue={hobby} required list="browsers" />
                        <datalist id="browsers">
                            <option value="Drawing & Painting"></option>
                            <option value="Cycling"></option>
                            <option value="Running"></option>
                            <option value="Fishing"></option>
                            <option value="Video Gaming"></option>
                        </datalist>
                        {/* description */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name='description'
                                type="textArea"
                                defaultValue={description}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required
                            />
                        </div>

                        {/*meeting loc */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Meeting Location</label>
                            <input
                                name='meeting'
                                type="text"
                                defaultValue={meeting}

                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required
                            />
                        </div>
                        {/* Max Members */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Max Members</label>
                            <input
                                name='members'
                                type="number"
                                defaultValue={members}

                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required
                            />
                        </div>
                        {/* start date */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Start Date</label>
                            <input type="datetime-local" name='startDate' className="input mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" defaultValue={startDate}
                                required />
                        </div>
                        {/* Image URL */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Image URL</label>
                            <input
                                name='ImageURL'
                                type="text"
                                defaultValue={ImageURL}

                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">User Name</label>
                            <input
                                name='userName'
                                type="text"
                                value={user.displayName}
                                readOnly


                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        {/* user email */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">User Email</label>
                            <input
                                name='userEmail'
                                type="email"
                                value={user.email}
                                readOnly

                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>



                        {/* create button */}
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg
             hover:bg-green-700 transition duration-200 ">
                        Update

                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateGroup;