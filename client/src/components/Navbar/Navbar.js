import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import classnames from 'classnames'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Auth from '../Auth/Auth';

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
      console.log(Auth.getadmin(),Auth.getid(),localStorage.getItem("admin"),localStorage.getItem("id"),'h')
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
                    <Nav.Link className="text-white" href="/doctor">Our Doctors</Nav.Link>
                    {(localStorage.getItem("admin")==='t')?
                    <NavDropdown className="text-white" title="Records" id="basic-nav-dropdown" className="mr-5">
                      <Nav.Link  href="/patient">Patients</Nav.Link>
                      <Nav.Link  href="/history">Appointments</Nav.Link>
                      <Nav.Link  href="/patient">History</Nav.Link>
                    </NavDropdown>
                      :
                      <Nav.Link ></Nav.Link>
                    }
                    {(localStorage.getItem("admin")==='f'&& localStorage.getItem("id")!=='' )?
                    <NavDropdown className="text-white" title="Patient-Records" id="basic-nav-dropdown" className="mr-5">
                      <Nav.Link  href="/patient/${localStorage.getItem('id')}">Patients</Nav.Link>
                      <Nav.Link  href="/history/patient/${localStorage.getItem('id')}">Appointments</Nav.Link>
                      <Nav.Link  href="/patient/patient/${localStorage.getItem('id')}">History</Nav.Link>
                    </NavDropdown>
                      :
                      <Nav.Link ></Nav.Link>
                    }


                   {(localStorage.getItem("admin")===''&&localStorage.getItem("id")==='')?
                    <NavDropdown className="text-white" title="Login" id="basic-nav-dropdown" className="mr-5">
                        <NavDropdown.Item href="/user">User Login</NavDropdown.Item>
                        <NavDropdown.Item href="/admin">Admin Login</NavDropdown.Item>
                    </NavDropdown>
                        :
                      <Nav.Link className="text-white" href="/logout">Logout</Nav.Link>
                    
                   }
                    </Nav>
                    
                </Navbar.Collapse>
                </Navbar>  
            </div>
        )
    }
}

export default Navber
