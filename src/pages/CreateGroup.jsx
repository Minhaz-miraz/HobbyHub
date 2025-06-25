import React, { use } from 'react';
import { NavLink, useLocation, useNavigate, useNavigation } from 'react-router';
import Navbar from '../components/Navbar.JSX';
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';

const CreateGroup = () => {
  const {user} = use(AuthContext)
  const { state } = useNavigation();
    const navigate = useNavigate(); // Changed variable name to lowercase
    const location = useLocation()

  const handleCreation =(e)=>{
    e.preventDefault()
    const form = e.target;
    const formData = new FormData (form);
    const groupData = Object.fromEntries(formData.entries())
    // sending server to create data in db

    fetch('https://hobby-hub-server-rouge.vercel.app/groups', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({...groupData, createdBy: user.email})
})
.then(res=>res.json())
.then(data=>{
  if(data.
acknowledged==true){
  
Swal.fire({
        icon: "success",
        title:
          '<p class="font-bold">Successfully Group has been Created</p>',
      })
      form.reset();
 

}
else{
  Swal.fire({
          icon: "error",
          title:
            '<p class="font-bold">Group creation failed! </p>',
        })
}
 navigate(location.state || "/mygroups/");
form.reset()
  }
  

);

  }
  return (
    <div>
      <Fade cascade>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto my-20 min-h-screen flex items-center justify-center ">
        <div className="bg-gradient-to-br from-blue-100 to-pink-100bg-opacity-40 backdrop-blur-md shadow-lg p-8 rounded-3xl w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Create  your Group
          </h2>



          <form onSubmit={handleCreation}>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Group Name</label>
              <input
                name='GroupName'
                type="text"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"required
              />
            </div>
            {/* hobby category */}
            <label className="block text-sm font-medium text-gray-700">Hobby Category</label>
            <input type="text" className="input" name='hobby' placeholder="Which browser do you use" required list="browsers" />
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
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required
              />
            </div>

            {/*meeting loc */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Meeting Location</label>
              <input
                name='meeting'
                type="text"

                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required
              />
            </div>
            {/* Max Members */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Max Members</label>
              <input
                name='members'
                type="number"

                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required
              />
            </div>
            {/* start date */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input type="datetime-local" name='startDate'  className="input mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            {/* Image URL */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                name='ImageURL'
                type="text"
                placeholder="your photo URL"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"required
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
              Create

            </button>

          </form>

          {/* Register Link */}
          <p className="text-center mt-6 text-sm text-gray-700">
            Already have an account? <NavLink to="/login" className="text-purple-600 hover:underline">Login!</NavLink>
          </p>
        </div>
      </div>
      </Fade>
      <Footer></Footer>

    </div>
  );
};

export default CreateGroup;