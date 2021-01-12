import React, { Component } from 'react'
class Footer extends Component {
    render() { 
        return (  
            <> 
        <div className=" bg-dark text-white">
        <div className="container">
		  <div className="row">
			<div className="col-md-4 footer-box ">
            <p id="contact"><b>OUR MOTO</b></p>
			  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			  </p>
			  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
			<div className="col-md-4 footer-box">
            <p id="contact"><b>OUR LINKS</b></p>
                <p>bnj
                </p>
                <p>bnj
                </p>
			</div>
			<div className="col-md-4 footer-box">
			  <p id="contact"><b>OUR ADDRESS</b></p>
			  <p><i className="fa fa-map-marker"></i> Indian Institute of Technology Ropar, 140001, Rupnagar, Punjab, India</p>
			  <p><i className="fa fa-phone"></i> 0188 124 2105</p>
			  <p><i className="fa fa-envelope-o"></i> verma.preetesh21@gmail.com</p>
			</div>
			<div className="col-md-6 ">
			  <p className="copyright">Copyright © 2020. All rights reserved | Designed by </p>
			</div>
		  </div>
		  </div>
		</div>
        </>
        );
    }
}
export default Footer
