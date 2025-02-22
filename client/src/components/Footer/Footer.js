import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.state = {value2: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);

		this.handleChange2 = this.handleChange2.bind(this);
		this.handleClick2 = this.handleClick2.bind(this);
	  }
	
	  handleChange(event) {
		this.setState({value: event.target.value});
	  }
	  handleClick(e){
		e.preventDefault();
		let path=`/doctor/find/${this.state.value}`;
		console.log(path)
		this.props.history.push(path);
	  }

	  handleChange2(event) {
		this.setState({value2: event.target.value});
	  }
	  handleClick2(e){
		e.preventDefault();
		let path=`/patient/${this.state.value2}`;
		console.log(path)
		this.props.history.push(path);
	  }

    render() { 
        return (  
            <> 
			<footer  class="page-footer mt-auto">
        <div className=" bg-dark text-white">
        <div className="container" style={{textAlign:"left"}}>
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
			<p>Link</p>
			<input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" style={{width:"50%"}} name="keyword" placeholder="keyword" />
				<button className="btn btn-primary mt-1" onClick={this.handleClick}>Search</button>

				{(localStorage.getItem("admin")==='f'&& localStorage.getItem("id")!=='' )?
				<>
				<p>Link</p>
				<Link to={{
                  pathname: `/patient/${localStorage.getItem("id")}`}}><button className="btn btn-danger m-1" >Ur Profile </button></Link>
				</>
				:
				<p>Links</p>
				}
			</div>
			<div className="col-md-4 footer-box">
			  <p id="contact"><b>OUR ADDRESS</b></p>
			  <p><i className="fa fa-map-marker"></i> Indian Institute of Technology Ropar, 140001, Rupnagar, Punjab, India</p>
			  <p><i className="fa fa-phone"></i> 0188 124 2105</p>
			  <p><i className="fa fa-envelope-o"></i> verma.preetesh21@gmail.com</p>
			</div>
			<div className="col-md-6 ">
			  <p className="copyright">Copyright © 2020. All rights reserved | Created for <i class="fa fa-plus-square" aria-hidden="true"></i></p>
			</div>
		  </div>
		  </div>
		</div>
		</footer>
        </>
        );
    }
}
export default withRouter(Footer)
