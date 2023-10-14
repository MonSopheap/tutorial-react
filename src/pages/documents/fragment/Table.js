import React from 'react'
import Columns from './Column'

function MyTable() {
    return (
        <>
            <div className='text-center'>
                <table className='m-auto'>
                    <tbody>
                        <tr>
                            <Columns />
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MyTable
