import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
    //setSearchText(searchText);
  } 

  return (
    <>
      <form onSubmit={(e) => {fnSearchProduct(e)}}>
        <div className={'navi-top'}>
            <div className={'search'}>
                <div className={'search-bar'}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" name="searchText" placeholder={'검색어를 입력해 주세요.'}/>
                </div>
            </div>
            <div className={'login-button'} onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} /> &nbsp;
                <div>{auth ? '로그아웃' : '로그인'}</div>
            </div>
        </div>
        <div className={'nav-section'} d>
            {/* <a href={'/'}><img src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png' width={100}/></a> */}
            <img src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png' width={100} onClick={() => navigate("/")} style={{'cursor':'pointer'}}/>
        </div>

        <Navbar key={'lg'} expand={'lg'} className="mb-3">
          <Container fluid className={'menu-area'}> 
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  H&M Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  {menuList.map((item) => <Nav.Link href="#action1">{item.name}</Nav.Link>)} 
                </Nav>
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        {/* <div className={'menu-area flex items-center'}>
              <ul className={'menu-list'}>
                  {menuList.map((item) => {
                      return <li key={item.id}>{item.name}</li> 
                  })} 
              </ul>
        </div> */}
      </form>
    </>
  )
}

export default NavBar