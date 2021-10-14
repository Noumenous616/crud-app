import React from 'react'
import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';

export const Heading = () => {
    return (
        <div>
            <Navbar color='dark' dark>
                <Container>
                    <NavbarBrand href='/'> CRUD App</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Link className='btn btn-primary' to='/add'> Add Some</Link>
                        </NavItem>
                    </Nav>
                </Container>

            </Navbar>
        </div>
    )
}