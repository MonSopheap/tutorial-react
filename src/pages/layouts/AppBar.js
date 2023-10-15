import { signOut } from "firebase/auth";
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { firebaseAuth } from "../../config/FirebaseConfig";
import { UserAuth } from "../../contexts/AuthContextFirebase";

function MyAppBar() {
    const { pathname } = useLocation();
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

    const menuList = [
        {
            name: "Dashboard",
            route: '/',
        },
        {
            name: "About",
            route: '/about',
        },
        {
            name: "Contact",
            route: '/contact',
        },
        {
            name: "Documents",
            route: '/documents',
        }
    ];

    return (
        <>
            <div className="my-appbar ">
                <div className="navbar-left px-2">
                    <div className="hidden md:flex items-center space-x-1">
                        {
                            menuList.map((menu) => {
                                return (
                                    <>
                                        <a key={menu} href="#" onClick={() => navigate(`${menu.route}`)} className={`${(pathname === menu.route) ? "bg-sky-900" : ""} text-white hover:bg-sky-900 px-3 py-2 rounded focus:bg-sky-900`} >
                                            {menu.name}
                                        </a>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="navbar-right px-2">
                    <div className="hidden md:flex items-center space-x-2">
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


        </>
    );
}
export default React.memo(MyAppBar);



