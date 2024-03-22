import React from 'react';
import '../Css/Navbar.css'
import { Navbar, Nav, Form, Container, Image, } from 'react-bootstrap';
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { SlBag } from "react-icons/sl";
function CustomNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" >
        <Container className='contain'>
          <Navbar.Brand href="#home" className='mr-4 mb-2 photo1'><Image src='https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg' height={20} /></Navbar.Brand>
          <Navbar.Brand href="#home" className='mr-4 mb-2 photo2'><Image src='https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg' height={20} /></Navbar.Brand>
          <Navbar.Toggle className='me-auto togg' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-4">
              <Nav.Link href="/Men" className='text-dark'>Men</Nav.Link>
              <Nav.Link href="/Women" className='text-dark'>Women</Nav.Link>
              <Nav.Link href="#link" className='text-dark'>Mobile Cover</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className='d-flex align-items-center form-box'>
            <IoIosSearch className='search-btn' />
            <input type='text' placeholder='Search by product, category or collection' className=' Search-box' />
            <div className='icons'>
              <Nav.Link className='icons2' href='#login'>Login</Nav.Link>
            </div>
            <CiHeart className='icon2' />
            <SlBag className='icon3' />
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
