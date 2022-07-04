import Link from 'next/link';
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';


const NavbarComp = () => {
    return (

        <Navbar bg='light' expand='lg'>
            <Container>
                <Link href='/' passHref>
                    <Navbar.Brand>Firebase Auth</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id= 'basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link href='/signup' passHref>
                            <Nav.Link>Signup</Nav.Link>
                        </Link>
                        <Link href='/login' passHref>
                            <Nav.Link>Login</Nav.Link>
                        </Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavbarComp;