import React from 'react';
import { IoAddCircleOutline } from "react-icons/io5";
import Style from '../../stylesheet/appStyle.module.css';

function ItemCard(props) {
    return (
        <>
            {
                props.item.id === -100 ? <div className='contain-item-box'>
                    <div onClick={props.handleClick} className='item-box rounded-md bg-sky-100 hover:bg-sky-200'>
                        <div className='content-item'>
                            <div className='m-auto'>
                                <span className={Style.error}></span>
                                <span className={Style.sucess}></span>
                            </div>
                        </div>

                        <div className='box-overlay'>
                            <div className='icon-add-item'><IoAddCircleOutline /></div>
                        </div>
                    </div>
                </div> : <div className='contain-item-box'>
                    <div className='item-box rounded-md bg-sky-100 hover:bg-sky-200'>
                        <div className='content-item'>
                            <div className='m-auto'>
                                <span className={Style.error}>{props.index}.</span>
                                <span className={Style.sucess}>{props.item.label}</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );

}

export default ItemCard;