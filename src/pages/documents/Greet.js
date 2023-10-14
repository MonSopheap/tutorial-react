import React from 'react';

const Greet = (props) => {
    console.log(props)

    // Cannot assign to read only property 'name' of object '#<Object>'
    // props.name = 'abc';

    return (
        <>
            <div className='text-center'>
                <h1>Welcome: {props.name} {props.heroName}</h1>

                {props.children}
            </div>
        </>
    );
}

export default Greet;