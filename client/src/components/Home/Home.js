import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';
import './home.css';
import Logo from "./home.png";
import Image from 'react-bootstrap/Image'
export class Home extends Component {
    render() {
        return (
            <React.Fragment> 
                <Navber />
                <div className="home main-container m-4">
                    <h1 className="text-center">Hospital Management System</h1>
                    <div className="row">
                        <div className="col-md-6"style={{width:"100%"}}>
                            <img  class ="try"src={Logo} />
                        </div>
                        <div className="col-md-6">  
                            <h4 style={{alignText:"right"}}>Lifescape Hospital brings to the table a class of its own, making the healthcare group a major player in keeping Eastern India ahead of the curve. The Group treats more than 3.5 lakh people every </h4>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Home
