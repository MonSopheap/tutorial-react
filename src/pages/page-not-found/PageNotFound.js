import React from "react";
import { useNavigate } from "react-router-dom";

import image_404 from "../../assets/images/404.webp"


const PageNotFound = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/documents")
    };

    return (
        <div className="h-full w-full flex">
            <div className="flex flex-col items-center justify-center m-auto rounded-md dark:border">
                <img alt="..." src={image_404} width="300px" />
                <h1 className="font-semibold text-xl mt-2">404. That’s an error.</h1>
                <p>
                    The requested URL was not found on this server. That’s all we know.
                </p>
                <button
                    onClick={() => handleClick()}
                    className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm mt-3 mb-1">
                    Back to home
                </button>
            </div>
        </div>
    );
}

export default PageNotFound;