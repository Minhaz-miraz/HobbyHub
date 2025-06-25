import React, { use } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router';
import Navbar from '../components/Navbar.JSX';
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthProvider';
import Swal from "sweetalert2";

const Register = () => {
      const { createUser, setUser,updateUser } = use(AuthContext);
      const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email,password)
    .then(result=>{
        const user = result.user;
         updateUser({displayName: name, photoURL: photo})
        .then(()=>{setUser({...user, displayName: name, photoURL: photo})})
        navigate("/")
    })
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: '<p class="font-bold">Length must be at least 6 characters!</p>',
      });
      return;
    }

    if (!/[a-z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title:
          '<p class="font-bold">Must have a Lowercase letter in the password</p>',
      });

      return;
    }
    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title:
          '<p class="font-bold">Must have an Uppercase letter in the password</p>',
      });

      return;
    }
    else{
           Swal.fire({
        icon: "success",
        title:
          '<p class="font-bold">Successfully Registered</p>',
      });
        
    }



  }
       
    
    return (
        <div>
            <Navbar></Navbar>
               <div className="w-11/12 mx-auto  min-h-screen flex items-center justify-center ">
        <div className="bg-gradient-to-br from-blue-100 to-pink-100bg-opacity-40 backdrop-blur-md shadow-lg p-8 rounded-3xl w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Create Account
          </h2>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:shadow-md bg-white">
            <img src="https://i.postimg.cc/TwZtQVPq/7123025-logo-google-g-icon.png" alt="Google" className="w-10 h-10" />
            <span className="text-gray-700">Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <form onSubmit={handleRegister}>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                name='name'
                type="text"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* photo */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Photo URL</label>
              <input
                name='photo'
                type="text"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                name='email'
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                name='password'
                type="password"
                placeholder="********"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>



            {/* Login Button */}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Register
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center mt-6 text-sm text-gray-700">
            Already have an account? <NavLink to="/login" onClick="window.scrollTo({top:50,behavior: 'smooth'})" className="text-purple-600 hover:underline">Login!</NavLink>
          </p>
        </div>
      </div>
            <Footer></Footer>
        </div>

    );
};

export default Register;