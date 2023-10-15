import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from '../../config/FirebaseConfig';

function ResetPassword() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        sendPasswordResetEmail(firebaseAuth, email)
            .then(() => {
                alert("We're sending you this email because you requested a password reset.")
                setLoading(false)
                navigate("/auth/login")
            })
            .catch(error => {
                setLoading(false)
                alert(error.message)
            })
    }

    return (
        <>
            <div className="antialiased w-full h-full flex flex-col justify-center items-center">
                <div className="max-w-2xl m-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
                    <h1 className="text-2xl font-semibold">Reset password</h1>
                    <p className="text-slate-500 text-md">Fill up the form to reset the password</p>

                    <form onSubmit={handleSubmit} className="my-10">
                        <div className="flex flex-col space-y-4">
                            <label htmlFor="email">
                                <p className="text-sm font-semibold text-slate-700 pb-2">Email address</p>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required={true} className="text-sm w-full py-2 border border-slate-200 rounded-md px-3 focus:outline-none focus:border-blue-500 hover:shadow" placeholder="Enter email address" />
                            </label>

                            <button type='submit' className="w-full py-2 font-sm text-white bg-indigo-600 hover:bg-indigo-500 rounded-md border-indigo-500 hover:shadow inline-flex items-center justify-center">

                                {
                                    !loading ? <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                        </svg>
                                        <span className='ml-1 text-sm'>Reset password</span></> : <><svg role="status" className="inline w-4 h-4 mr-2 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg><label className='text-sm'>Loading...</label></>
                                }
                            </button>
                            <p className="text-left text-sm">Not registered yet? <a href="#" className="text-indigo-600 font-sm inline-flex items-center"><span onClick={() => navigate("/auth/register")}>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg></span></a></p>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ResetPassword