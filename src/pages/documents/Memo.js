import React, { useMemo, useState } from 'react';



const Memo = () => {

    const [add, setAdd] = useState(0);
    const [mins, setMins] = useState(100);

    const multiplication = useMemo(
        function multiplay() {
            console.log("*****");
            return add * 10;
        }, [add]
    );


    return (
        <>
            <div className='text-center mt-2'>
                <h1 className='font-bold'>We are learning use Memo Hooks</h1>
                <h2 className='font-bold text-green'>{multiplication}</h2><span className='text-lime-500'>{add}</span> , <span className='text-red'>{mins}</span>
                <br />
                <br />
                <button onClick={() => setAdd(add + 1)} className="px-4 py-1 mr-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">AADD</button>
                <button onClick={() => setMins(mins - 1)} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">SUB</button>

            </div>
        </>
    );

}

export default Memo;