import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';
import './home.css';
import Logo from "./home.png";
import {Link} from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <React.Fragment> 
                <Navber />
                <div className="home main-container m-4">
                    <h1 className="text-center">Hospital Management System</h1>
                    <div className="row">
                        <div className="col-md-6"style={{width:"100%"}}>
                            <img alt=""  className ="try"src={Logo} />
                        </div>
                        <div className="col-md-6">  
                            <h4 style={{alignText:"right"}}>Lifescape Hospital brings to the table a class of its own, making the healthcare group a major player in keeping Eastern India ahead of the curve. The Group treats more than 3.5 lakh people every </h4>
                            
                            {(localStorage.getItem("admin")===''&& localStorage.getItem("id")==='' )?
                            <Link to={{
                  pathname: `/user/add`}}><button className="btn btn-warning">Sign Up</button></Link>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Home
