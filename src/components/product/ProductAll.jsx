import React from 'react'
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = ({productList}) => {
  
  return (
    <div>
        <Container>
            <Row>
                {productList && productList.map((product) => (
                     <Col lg={3}><ProductCard product={product} /></Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll