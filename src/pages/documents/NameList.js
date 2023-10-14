import React from 'react';
import Person from './Person';

function ArrayList() {

    const persons = [
        { id: 1, name: "Mr A", age: 15 },
        { id: 2, name: "Mr B", age: 21 },
        { id: 3, name: "Mr C", age: 17 },
        { id: 4, name: "Mr D", age: 19 },
    ];
    // const personList = persons.map(x => <Person key={x.id} person={x} />);


    const names = ['Brave', 'Dara', 'Dam'];
    const personList = names.map((name, index) => <h1 key={index}>{index}-{name}</h1>);

    return (
        <>
            <div className='text-center'>{personList}</div>
        </>
    );
}

export default ArrayList;