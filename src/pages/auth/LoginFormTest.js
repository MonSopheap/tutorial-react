import React from 'react';
import { FaFacebookF, FaGoogle, FaInstagram, FaRegEnvelope } from 'react-icons/fa';
import { FiUnlock } from 'react-icons/fi';

function LoginFormTest() {

    return (
        <>
            <div className='w-full h-full' >
                <div className='flex flex-col items-center justify-center w-full h-full px-20 text-center'>
                    <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                        {/* Signin Section */}
                        <div className='w-3/5 p-5'>
                            {/* <div className='text-left font-bold'>
                                <span className='text-cyan-500'>What Is Clean </span>Code?
                            </div> */}
                            <div className='py-10'>
                                <h2 className="text-3xl font-bold text-cyan-500 mb-2">Sign in to account</h2>
                                <div className='border-2 w-10 text-cyan-500 inline-block mb-2'></div>
                                <div className='flex justify-center my-2'>
                                    <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                        <FaFacebookF className='text-sm' />
                                    </a>
                                    <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                        <FaGoogle className='text-sm' />
                                    </a>
                                    <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                        <FaInstagram className='text-md' />
                                    </a>
                                </div>
                                <p className='text-gray-400 my-3'>or use your Email account</p>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-gray-100 w-72 p-1 flex items-center mb-2'>
                                        <FaRegEnvelope className='text-gray-400 m-2' />
                                        <input type="email" name="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                                    </div>
                                    <div className='bg-gray-100 w-72 p-1 flex items-center mb-3'>
                                        <FiUnlock className='text-gray-400 m-2' />
                                        <input type="password" name="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                                    </div>
                                    <div className='flex justify-between w-72 mb-5'>
                                        <label className='flex items-center text-xs hover:cursor-pon'>
                                            <input type="checkbox" name="remember" className='mr-1 ' />Remember me
                                        </label>
                                        <a href='#' className='text-sm'>Forgot password?</a>
                                    </div>
                                    <a href='#'
                                        className='border-2 border-cyan-500 text-cyan-500 rounded-full px-12 py-2 mt-1 inline-block font-semibold hover:bg-cyan-500 hover:text-white'>
                                        Sign In
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Sign Up section */}
                        <div className='w-2/5 bg-cyan-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
                            <h2 className='text-3xl font-bold animate-bounce'>Hello Friend!</h2>
                            <div className='border-2 w-10 border-white inline-block animate-pulse'></div>
                            <p className='mb-2'>Secure your data with us, login with trust. Fill up personal information and start journey with us.</p>
                            <a href='#'
                                className='border-2 border-white rounded-full px-12 py-2 mt-1 inline-block font-semibold hover:bg-white hover:text-cyan-500'>
                                Sign Up
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default LoginFormTest;
