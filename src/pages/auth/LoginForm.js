import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { FacebookAuthProvider } from "firebase/auth";
import { PropsX } from '../../config/PropsX';
import { UserAuth } from '../../contexts/AuthContextFirebase';

import logo from './../../assets/images/person.png';

function LoginForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [userFb, setUserFb] = useState(null)

    const { signIn, user, signInWithFacebook, signInWithGoogle } = UserAuth();


    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true)
        await signIn(email, password)
            .then((userCredential) => {
                setError('')
                setLoading(false)
                localStorage.clear();
                localStorage.setItem(PropsX.Token, userCredential.user.accessToken);
                localStorage.setItem(PropsX.CurrentUser, userCredential.user);
                // console.log(userCredential);
                navigate("/documents")
            })
            .catch((error) => {
                setError("Error (auth/invalid-login-credentials)")
                setLoading(false)
                console.log(error.FirebaseError);
            });
    };

    const handleFacebookLogin = () => {
        signInWithFacebook().then((result) => {
            // The signed-in user info.
            const user = result.user;
            setUserFb(user)

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            console.log(result)
            console.log(credential)

            // IdP data available using getAdditionalUserInfo(result)
            // ...
        })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log(error)
                // ...
            });
    }

    const handleLoginWithGoogle = () => {
        signInWithGoogle().then(() => {
            alert("Success")
        })
            .catch(error => {
                alert(error.message)
            })
    }

    useEffect(() => {
        if (user) {
            navigate("/documents")
        }
    }, [user, userFb]);

    return (
        <>
            <form onSubmit={handleSignIn}>
                <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                    <div className="xl:w-1/4 md:w-1/3 max-w-sm">
                        <img
                            src={logo}
                            alt="Sample image" />
                    </div>
                    <div className="xl:w-1/4 md:w-1/3 max-w-sm">
                        <div className="text-center md:text-left mb-5">
                            <h1 className="mr-1 font-bold text-2xl font-sans">Welcome back</h1>
                            <p className='font-sans'>Please enter your credentials to sign in.</p>

                        </div>

                        <div className='mb-2'>
                            <label className='text-sm font-semibold'>Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} required={true} className="text-sm w-full px-4 py-2 border border-gray-300 rounded focus:outline-none" type="email" placeholder="Email Address" />
                        </div>
                        <div>
                            <label className='text-sm font-semibold'>Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} required={true} className="text-sm w-full px-4 py-2 border border-gray-300 rounded focus:outline-none" type="password" placeholder="Password" />
                            <div className="mt-4 flex justify-between font-semibold text-sm">
                                <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                                    <input className="mr-1" type="checkbox" />
                                    <span>Remember Me</span>
                                </label>
                                <a onClick={() => navigate("/auth/reset-password")} className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <button disabled={loading} type="submit" className="w-full mt-4  bg-indigo-500 hover:bg-indigo-700 px-5 py-3 text-white uppercase rounded text-xs tracking-wider disabled:opacity-75 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
                                {!loading ? "Sign in" : <>
                                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-2 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                    </svg>
                                    Loading...</>}
                            </button>
                        </div>
                        <div className="mt-3 font-semibold text-sm text-slate-500 text-center md:text-left">
                            Don't have an account?
                            <a onClick={() => navigate("/auth/register")} className=" hover:underline hover:underline-offset-4" href="#" >
                                <label className='text-blue-600 text-semibold ml-1 hover:cursor-pointer'>Register</label>
                            </a>
                        </div>
                        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                            <p className="text-center text-sm text-gray-500 font-semibold mx-4 mb-0">OR</p>
                        </div>

                        <a href="#" onClick={handleLoginWithGoogle} className='hover:text-blue-500 font-semibold text-sm '>
                            <button type="button"
                                className="w-full text-center py-3 my-2 border flex space-x-2 items-center justify-center border-slate-200 rounded-md text-slate-500 hover:border-slate-300 hover:text-slate-800 hover:shadow transition duration-150">
                                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="..." />
                                <span className="dark:text-gray-300">
                                    Login with Google
                                </span>
                            </button>
                        </a>
                        <a href="#" className='hover:text-blue-500 font-semibold text-sm ' onClick={handleFacebookLogin}>
                            <button type="button"
                                className="w-full text-center py-3 my-2 border flex space-x-2 items-center justify-center border-slate-200 rounded-md text-slate-500 hover:border-slate-300 hover:text-slate-800 hover:shadow transition duration-150">
                                <img src="https://i.pinimg.com/originals/ce/d6/6e/ced66ecfc53814d71f8774789b55cc76.png" className="w-5 h-5" alt="..." />
                                <span className="dark:text-gray-300">
                                    Login with Facebook
                                </span>
                            </button>
                        </a>


                        {
                            error && <div className="flex items-center w-full max-w-xs p-4 mt-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                                    </svg>
                                    <span className="sr-only">Error icon</span>
                                </div>
                                <div className="ml-3 text-sm font-normal">{error}</div>
                                <button type="button" onClick={() => setError("")} className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                        }

                    </div>
                </section>
            </form>

        </>
    )
}

export default LoginForm