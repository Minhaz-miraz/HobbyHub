import React, { useContext, useState } from 'react';
import { NavLink, useNavigate, useNavigation, Navigate, useLocation } from 'react-router';
import Navbar from '../components/Navbar.JSX';
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';

const Login = () => {
    const { logIn, user } = useContext(AuthContext); // Changed from use() to useContext()
    const [error, setError] = useState("");
    const { state } = useNavigation();
    const navigate = useNavigate(); // Changed variable name to lowercase
    const location = useLocation(); // Added useLocation hook

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logIn(email, password)
            .then((result) => {
                const user = result.user;
                // Navigate after successful login
                navigate(location.state || "/");
            })
            .catch((error) => { 
                const errorCode = error.code;
                setError(errorCode);
            });
    };

    // Show loading state
    if (state === "loading") {
        return <Loading />;
    }

    // Redirect if user is already logged in
    if (user && user.email) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen flex items-center justify-center bg-white w-11/12 mx-auto">
                <div className="bg-gradient-to-br from-blue-100 to-pink-100 bg-opacity-40 backdrop-blur-md shadow-lg p-8 rounded-3xl w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                        Login To Your Account
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

                    {/* Email */}
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder="you@example.com"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            {error && <p className='text-red-500 text-md'>Wrong Password</p>}
                            <input
                                name='password'
                                type="password"
                                placeholder="********"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                required
                            />
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right mb-4">
                            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                        </div>

                        {/* Login Button */}
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                            Login
                        </button>
                    </form>

                    {/* Register Link */}
                    <p className="text-center mt-6 text-sm text-gray-700">
                        Don't have an account? 
                        <NavLink 
                            to="/register" 
                            onClick={() => window.scrollTo({top: 50, behavior: 'smooth'})} 
                            className="text-purple-600 hover:underline"
                        >
                            Register
                        </NavLink>
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;