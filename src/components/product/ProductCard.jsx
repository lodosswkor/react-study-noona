import React from 'react'
import { useNavigate } from 'react-router'


const ProductCard = ({product}) => {
    const navigate = useNavigate(); 
    return (
        <>
            {/* {product && (<div>
                        <img src={product?.img}/>
                        {product?.choice && <div>초이스</div>}
                        <div>{product?.title}</div>
                        <div>{product?.price}</div>
                        {product?.new && <div>뉴우</div>}
                    </div>
            )};   */}
            <div className={'product-card'} onClick={() => { navigate(`/products/${product.id}`)}}>
                <img src={product?.img} style={{'maxWidth':'100%'}}/>
                <div style={{'color':'blue'}}>{product?.choice ? 'concious choice' : ''}</div>
                <div>{product?.title}</div>
                <div>{product?.price}</div>
                <div style={{'color':'red'}}>{product?.new ? '신제품' : ''}</div>
            </div>
        </>
    )
}

export default ProductCard