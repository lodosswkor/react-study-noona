import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown, DropdownButton, Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router'
import newIcon from '../assets/new-xxl.png'

const ProductDetail = () => {

  const {id} = useParams(); 

  const [product, setProduct] = useState({});

  const getProductDetail = async () => {
    let url = `${import.meta.env.VITE_API_URL}/products/${id}`;
    let response = await fetch(url); 
    let data = await response.json(); 
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, [])

  const BuildSizeComboBox = ({size}) => {
    return (
      <>
         <Form.Select aria-label="사이즈 선택" size="lg">
            <option>사이즈 선택</option>
            { size?.map((item) => <option value={item}>{item}</option>)}
          </Form.Select>
      </>
    );
  }

  return (
    <Container>
      <Row>
        <Col className={'product-img'} md={6}>
          <img src={product?.img} style={{'maxWidth':'100%'}}/>
        </Col>
        <Col md={6}>
          <Row md={12}><h1>{product?.title} {product?.new ? <img src={newIcon} width={30} style={{'marginTop':'-10px'}}/> : ''}</h1></Row>
          <Row md={12} className={'product-price'}>₩ {product?.price}</Row>
          <Row md={12} className="product-badge">Conscious choice</Row>
          <Row md={12} style={{'marginBottom':'15px'}}>
            <BuildSizeComboBox size={product?.size}/>
          </Row>
          <Row md={12}>
            <Button size="lg" variant="dark">추가</Button>
          </Row>
        </Col>

      </Row>
    </Container>
  )
}

export default ProductDetail