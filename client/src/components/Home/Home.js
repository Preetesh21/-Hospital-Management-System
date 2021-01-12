import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';
export class Home extends Component {
    render() {
        return (
            <React.Fragment> 
                <Navber/>
                <br></br>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Home
