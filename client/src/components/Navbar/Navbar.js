import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import classnames from 'classnames'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export class Navber extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
      }
    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };
    render() {
        return (
            <div>
              <Navbar className={classnames("navbar", {
                    "navbar--hidden": !this.state.visible
                  })} bg="dark" text="white" var expand="lg">
                <Navbar.Brand style={{color:"white"}}>Lifescape Hospital Ltd</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link className="text-white" href="/">Home</Nav.Link>
                    <Nav.Link className="text-white" href="/about">About</Nav.Link>
                    <Nav.Link className="text-white" href="/hospital">Hospital</Nav.Link>
                    <NavDropdown title="Login" id="basic-nav-dropdown" className="mr-5">
                        <NavDropdown.Item href="/patient/login">Patient Login</NavDropdown.Item>
                        <NavDropdown.Item href="/doctors/login">Doctor Login</NavDropdown.Item>
                        <NavDropdown.Item href="/employee/login">Employee Login</NavDropdown.Item>
                        <NavDropdown.Item href="/administrator/login">Admin Login</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
                </Navbar>  
            </div>
        )
    }
}

export default Navber
