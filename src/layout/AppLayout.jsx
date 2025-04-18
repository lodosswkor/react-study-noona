import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const AppLayout = () => {
  return (
    <>
        <Navbar expand="lg" variant="dark">
            <Container fluid style={{ padding: '0 20px' }}>
                <Navbar.Brand href="/"><img src={logo} width={100}alt="netflix" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/movies" className="nav-link">Movies</Link>
                    </Nav>
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 search-input"
                        aria-label="Search"
                    />
                    <Button variant="outline-danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
    </>
  )
}

export default AppLayout