import React from 'react'

const ProductCard = ({productList}) => {

  
    console.log(productList)
    return (
        <>
        {productList && 
            productList.map((item) => (
                <div>
                    <img src={item.img}/>
                    {item.choice && <div>초이스</div>}
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                    {item.new && <div>뉴우</div>}
                </div>
            ))
            
        }
        </>
    )
}

export default ProductCard