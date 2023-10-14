import React from 'react'
import DataFetchingA from './DataFetchingA'
import DataFetchingB from './DataFetchingB'


// useState vs useReducer
// *useState
// - Type: Number, String, Boolean
// - Number of state transactions: One or Two
// - Related state transitions: No
// - Business logic: No business logic
// - Local

// *useReducer
// - Type: object or Array
// - Number of state transactions: Too many
// - Related state transitions: Yes 
// - Business logic: Complex business logic
// - Global
// *** is the better choice

function FetchingDataWithUseReducer() {
    return (
        <>
            {/* <DataFetchingA /> */}
            <DataFetchingB />
        </>
    )
}

export default FetchingDataWithUseReducer