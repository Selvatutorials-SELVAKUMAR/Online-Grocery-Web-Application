import React from 'react'
import './Checkout.css'
import ad1 from './Images/ad1.jpg'
import Subtotal from './Subtotal'
function Checkout() {
    return (
        <div className = 'checkout'>
            <div className = 'checkout__left'>
                <img className = 'checkout__ad' src = {ad1} alt = ''/>
                <div>
                    <h1 className = 'checkout__title'>
                        Your shopping Basket
                    </h1>
                </div>
            </div>
            <div className = 'checkout__right'>
                <Subtotal />    
           </div>
        </div>
    )
}

export default Checkout