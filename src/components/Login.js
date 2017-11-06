import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
// import PropTypes from 'prop-types'

class Login extends Component{
	constructor () {
	    super()
	    this.state = {
	      email: '',
	      password: '',
	      isLoggedIn: false
	    }
	}

	// static propTypes = {
	// 	// name: PropTypes.string.isRequired,
	// 	// options: PropTypes.array
	// }

	// static defaultProps = {
 //    	// options: []
	// }

	componentWillMount() {
		if(localStorage.getItem('token')){
			this.setState({
				isLoggedIn: true
			});
		}
	}

	handleEmailChange(event){
		this.setState({
	      email: event.target.value
	    });
	}

	handlePwdChange(event){
		this.setState({
	      password: event.target.value
	    });
	}

	handleSubmit(){
		this._login();
	}

	handleReset(){
		this.setState({
			email: '',
	      	password: ''
		});
	}

	_login(){
		axios({
			method:'post',
			url:'https://pwcfrontendtest.azurewebsites.net/login',
			responseType:'json',
			data: {username: this.state.email,psd: this.state.password}
		}).then(res => {
			console.log("response", res.data);
			if(res.data.status === "success"){
				localStorage.setItem('token', res.data.token);

				this.setState({
					isLoggedIn: true
				});
			}
			else{
				alert(res.data.status);
			}
		}).catch(function (error) {
			console.log(error);
		});
	}

	render(){
		return(
			<div className="blocky">
				<div className="container">
					<div className="row box box-warp">
						<div className="login-left padding-right-15">
							<div className="reg-login-info">
								<h2>Login to Access Amazing Benefits <span className="color">!!!</span></h2>
								<img src={require("../img/back1.jpg")} alt="" className="img-responsive img-thumbnail" />
								<p>Duis leo risus, vehicula luctus nunc. Quiue rhoncus, a sodales enim arcu quis turpis. Duis leo risus, condimentum ut posuere ac, vehicula luctus nunc. Quisque rhoncus, a sodales enim arcu quis turpis.</p>
							</div>
						</div>

						<div className="login-right padding-horizontal-15">
							<div className="register-login">
								<div className="cool-block">
									<div className="cool-block-bor">                    
										<h3>Login</h3>
										
											<div className="form-group box">
												<label htmlFor="inputEmail1" className="control-label">Email</label>
												<div className="col-lg-10">
													<input value={this.state.email} className="form-control" id="inputEmail1" placeholder="Email" onChange={this.handleEmailChange.bind(this)} />
												</div>
											</div>
											<div className="form-group box">
												<label htmlFor="inputPassword1" className="col-lg-2 control-label">Password</label>
												<div className="col-lg-10">
													<input type="password" value={this.state.password} className="form-control" id="inputPassword1" placeholder="Password" onChange={this.handlePwdChange.bind(this)} />
												</div>
											</div>
											<div className="form-group box">
												<label className="control-label"></label>
												<div className="checkbox">
													<label>
														<input type="checkbox" /> Remember me
													</label>
												</div>
											</div>
											<div className="form-group box">
												<label className="control-label"></label>
												<div className="">
													<button onClick={this.handleSubmit.bind(this)} className="btn btn-info">Sign in</button>
													<button onClick={this.handleReset.bind(this)} className="btn btn-default">Reset</button>
												</div>
											</div>
										
									</div>
								</div>   
							</div>
						</div>

					</div>
					<div className="sep-bor"></div>
				</div>

				{
					this.state.isLoggedIn? <Redirect to="/" /> : null
				}
			</div>
		)
	}
}

export default Login