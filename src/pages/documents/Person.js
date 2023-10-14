import React from 'react';

function Person({ person }) {
    console.log(person)
    return (
        <>
            <div>
                <h1>I am {person.name}. I am {person.age} years old.<br /></h1>
            </div>
        </>
    );
}

export default Person;