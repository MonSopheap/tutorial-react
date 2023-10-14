import React, { useState } from 'react';
import './Pos.scss';
import ItemCard from './ItemCard';


function POSPage() {
    const [itemList, addItem] = useState([{ id: -100, label: 'Add', value: '100' }]);

    const handleClick = () => {
        const arr = [{ id: 1, label: 'Abc', value: '200' }];

        addItem(current => [...current, ...arr]);
    }


    return (
        <>
            <div className='container-pos'>
                <div className='left-mainboard'>
                    {/* CONTENT */}
                    <div className="grid grid-cols-7 gap-2 p-2 auto-rows-max">
                        {
                            itemList.map((item, index) => {
                                return (
                                    <ItemCard handleClick={handleClick} item={item} index={index} key={index} />
                                );
                            })
                        }
                    </div>
                    {/* END CONTENT */}
                </div>
                <div className='right-mainboard'>
                    {/* CONTENT */}

                    {/* END CONTENT */}
                </div>
            </div>
        </>
    );
}

export default POSPage;