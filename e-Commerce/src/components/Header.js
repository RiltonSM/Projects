import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render(){
        console.log(this.props);
        return(
            <Navbar bg="primary" variant="dark" expand="lg"  style={{marginBottom: 10}}>
                <Link to="/"><Navbar.Brand>{this.props.info.brand}</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" style={{textDecoration: 'none'}}><Nav.Link as="li">{this.props.info.link[1]}</Nav.Link></Link>
                        <Link to="/" style={{textDecoration: 'none'}}><Nav.Link as="span">{this.props.info.link[2]}</Nav.Link></Link>
                        
                        <NavDropdown title={this.props.info.dropdown.titulo} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">{this.props.info.dropdown[1]}</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">{this.props.info.dropdown[2]}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">{this.props.info.dropdown[3]}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Link to="/cart" style={{textDecoration: 'none'}}>
                            <Nav.Link as="span" style={{textDecoration: 'none'}}>
                                <div style={{display: 'flex'}}>
                                    <i style={{color: 'white'}} className="fas fa-shopping-cart"></i>
                                    <div style={styles.cart}>{this.props.number}</div>
                                </div>
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const styles = { 
    cart: {
        width: 18, 
        height: 18, 
        position: 'relative', 
        bottom: 10, 
        right: 8, 
        borderWidth: 2, 
        borderStyle: 'solid', 
        borderRadius: 9, 
        borderColor: 'red', 
        backgroundColor: 'red', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        color: 'white',
        opacity: 1.0
   },
    number: {
        opacity: 1.0
    }
}

export default Header;