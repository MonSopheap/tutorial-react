import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from "../../config/FirebaseConfig";
import { UserAuth } from "../../contexts/AuthContextFirebase";

function MyAppBar() {
    const navigate = useNavigate()
    const { user } = UserAuth();

    const userSignOut = () => {
        signOut(firebaseAuth)
            .then(() => {
                console.log("sign out successful");
                localStorage.clear();
                navigate('auth/login')
            })
            .catch((error) => console.log(error));
    };


    return (
        <>
            {/* Use Tailwind CSS classes to style the AppBar */}
            {/* flex items-center justify-between px-4 py-3 bg-sky-950 */}
            <div className="my-appbar ">
                <div className="navbar-left px-2">
                    {/* Use a button element for the menu icon */}
                    <div className="hidden md:flex items-center space-x-2">
                        {/* Use anchor elements for the links */}
                        <a href="#" onClick={() => navigate('/')} className="text-white hover:bg-sky-900 px-3 py-2 rounded">
                            Home
                        </a>
                        <a href="#" onClick={() => navigate('/about')} className="text-white hover:bg-sky-900 px-3 py-2 rounded">
                            About
                        </a>
                        <a href="#" onClick={() => navigate('/contact')} className="text-white hover:bg-sky-900 px-3 py-2 rounded">
                            Contact
                        </a>

                        <a href="#" onClick={() => navigate('/abc')} className="text-white hover:bg-sky-900 px-3 py-2 rounded">
                            Other
                        </a>
                        <a href="#" onClick={() => navigate('/abc')} className="text-white hover:bg-sky-900 px-3 py-2 rounded">
                            About us
                        </a>
                        <a href="#" onClick={() => navigate('/documents')} className="text-white hover:bg-sky-900 px-3 py-2 rounded">
                            Docs
                        </a>
                    </div>
                </div>
                <div className="navbar-right px-2">
                    {/* Use a div element for the right side links */}
                    <div className="hidden md:flex items-center space-x-2">
                        {/* Use anchor elements for the links */}
                        <a href="#" onClick={() => navigate('/pos')} className="text-white hover:bg-sky-900 px-3 py-2 rounded">
                            POS
                        </a>
                        {

                            !user ? <a href="#" onClick={() => navigate('auth/login')} className="text-white hover:bg-sky-900 px-3 py-2 rounded">
                                Log In
                            </a> : <a href="#" onClick={userSignOut} className="text-white hover:bg-sky-900 px-3 py-2 rounded">
                                Sing Out
                            </a>
                        }
                    </div>
                </div>
            </div>
            {/* Use a transition element for the menu */}

        </>
    );
}
export default MyAppBar;