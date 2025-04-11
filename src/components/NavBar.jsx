import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const menuList = [{
  "id":1, 
  "name": "여성",
  "route": ""
},{
  "id":2, 
 "name": "Divided",
 "route": ""
},{
  "id":3, 
 "name": "남성",
 "route": ""
},{
  "id":4, 
 "name": "신생아/유아",
 "route": ""
},{
  "id":5, 
 "name": "아동",
 "route": ""
},{
  "id":6, 
 "name": "H&M Home",
 "route": ""
},{
  "id":7, 
 "name": "Sale",
 "route": ""
},{
  "id":8, 
 "name": "지속가능성",
 "route": ""
}]; 

const NavBar = ({auth, setAuth}) => {
  // const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const goToLogin = () => {
    if(!auth) {
      navigate('/login');
    } else {
      setAuth(false);
    }
  };

  const fnSearchProduct = (e) => {
    e.preventDefault();
    let searchText = e.target.searchText.value.trim();
    if(searchText === '') {
      alert("검색어를 입력해 주세요.");
      return;
     } 
     navigate(`/products?q=${searchText}`);
  } 

  return (
    <Navbar expand="lg" className="bg-white" style={{'marginBottom':'25px'}}> 
      <Container>
        <Navbar.Brand href="/">
          <img src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png' width={100} alt="H&M Logo"/>
        </Navbar.Brand>
        
        <div className="d-flex align-items-center">
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        </div>

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              H&M Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-lg-none mb-3" onSubmit={fnSearchProduct}>
              <Form.Group className="d-flex">
                <Form.Control
                  type="text"
                  name="searchText"
                  placeholder="검색어를 입력해 주세요."
                  className="me-2"
                />
                <Button type="submit" variant="outline-secondary">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </Form.Group>
            </Form>
            <Nav className="justify-content-center flex-grow-1 pe-3 menu-list">
              {menuList.map((item) => (
                <Nav.Link key={item.id} href={item.route} className={'menu'}>{item.name}</Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <Navbar.Collapse id="navbarScroll" className="d-none d-lg-block">
          <div className="d-flex align-items-center">
            <Form className="d-flex me-3" onSubmit={fnSearchProduct}>
              <Form.Group className="d-flex">
                <Form.Control
                  type="text"
                  name="searchText"
                  placeholder="검색어를 입력해 주세요."
                  className="me-2"
                />
                <Button type="submit" variant="outline-secondary">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </Form.Group>
            </Form>
            <div 
              className="me-2"
              onClick={goToLogin}
              style={{'cursor':'pointer'}}
            >
              <FontAwesomeIcon icon={faUser} />
              <span className="ms-1">
                {auth ? '로그아웃' : '로그인'}
              </span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar