import React, { useEffect, useState } from "react";

const AboutUsPage = () => {
    // Use state hooks to store the current date and time
    const [date, setDate] = useState(new Date());
    // Use state hooks to store the toggle state for AM/PM format
    const [isAMPM, setIsAMPM] = useState(true);

    // Use effect hook to update the date and time every second
    useEffect(() => {
        // Create a timer that calls setDate every second
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        // Return a cleanup function that clears the timer
        return () => {
            clearInterval(timer);
        };
    }, []);

    // Format the date and time using the built-in methods
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const dayOfMonth = date.toLocaleDateString("en-US", { day: "numeric" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    // Use the isAMPM state to decide whether to show AM/PM format or not
    const time = date.toLocaleTimeString("en-US", { hour12: isAMPM });

    // Define a handler function for the button click event
    const handleToggle = () => {
        // Toggle the isAMPM state
        setIsAMPM(!isAMPM);
    };


    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-full bg-gray-900 text-white font-mono text-4xl">
                <div className="mb-8">{day}, {month} {dayOfMonth}, {year}</div>
                <div className="border-4 border-white p-4">{time}</div>
                {/* Add a button element that calls the handleToggle function on click */}
                <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleToggle}>
                    {/* Show the opposite format of the current state as the button text */}
                    {isAMPM ? "24-hour format" : "AM/PM format"}
                </button>
            </div>
        </>
    );
}

export default AboutUsPage;