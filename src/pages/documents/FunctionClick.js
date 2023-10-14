import React from 'react';



function FunctionClick() {

    function onClickHandler() {
        console.log("Button Clicked")
    }

    // Call like this event will click when initial page
    // onClickHandler() , It works on funtion Component

    return (
        <>
            <button onClick={onClickHandler}>Click</button>
        </>
    );
}

export default FunctionClick;