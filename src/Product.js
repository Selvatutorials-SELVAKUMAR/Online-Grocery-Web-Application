import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
function Product({ id , title , image , price , rating}) {
    const Rating = new Array(rating)
    const star = Array(rating).fill().map((_,i) => {
        return <StarIcon className = 'star__Icon'/>
    })
    return (
        <div className = 'product'>
            <div className = 'product__info'>
                <p>{title}</p>
                <p className = 'product__price'>
                    <strong>{price}</strong>
                </p>
                <div className = 'product__rating'>
                  {star}
                </div>
            </div>  
            <img src = {image} />
                    <button>Add to Basket</button>
        </div>
    )
}

export default Product
