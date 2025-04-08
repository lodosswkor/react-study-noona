import React from 'react'

const ProductCard = ({item}) => {

    console.log(item);
    const {id, img, title, price, choice, size} = item; 
  
    return (
        <div>
            <ing src={img}/>
            <div>초이스</div>
            <div>{title}</div>
            <div>{price}</div>
        </div>
    )
}

export default ProductCard