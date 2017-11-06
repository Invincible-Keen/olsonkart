import React, { Component } from 'react';
import DropdownMenu from './DropdownMenu'
import PropTypes from 'prop-types'

class Header extends Component{
	static propTypes = {
		prodQuantity: PropTypes.number,
		totalPrice: PropTypes.number,
		onShowHideModal: PropTypes.func
	}

	static defaultProps = {
    	prodQuantity: 0,
    	totalPrice: 0
	}

	constructor () {
	    super()
	    this.state = {
	      isLoggedIn: false
	    }
	}

	componentWillMount() {
		if(localStorage.getItem('token')){
			this.setState({
				isLoggedIn: true
			});
		}
	}

	handleCartClick(){
		if(this.props.onShowHideModal){
			this.props.onShowHideModal();
		}
	}

	handleLogout(){
		localStorage.clear();
	}

	render(){
		return(
			<div className="header">
				<div className="container">
					<div>
					  <div className="logo">
						 <h1><a href="/">OlsonKart</a></h1>
					  </div>
				    </div>
					<div className="menu">
						<div className="navi">
							<div id="ddtopmenubar" className="mattblackmenu">
								<ul>
									<DropdownMenu name="Home" options={['Revolution Slider', 'Bootstrap Slider']} link="/" />
									<DropdownMenu name="Account" options={['My Account', 'View Cart', 'Checkout', 'Wish List', 'Order History', 'Edit Profile', 'Confirmation']} />
									<DropdownMenu name="Pages" options={['404', 'FAQ', 'Blog', 'Careers', 'Coming Soon', 'Support', 'About']}  />
									<DropdownMenu name="Computers" options={['Desktop', 'Laptop', 'NetBook', 'All-In-One PC', 'Alienware']} />
									<DropdownMenu name="Contact" />
								</ul>
							</div>
						</div>
						<div className="navis">
							<select>
								<option value="">Menu</option>
								<option value="#">Home</option>
								<option value="index.html">Revolution Slider</option>
								<option value="index-alt.html">Bootstrap Slider</option>
								<option value="#">Account</option>
								<option value="account.html">My Account</option>
								<option value="viewcart.html">View Cart</option>
								<option value="checkout.html">Checkout</option>
								<option value="wishlist.html">Wish List</option>
								<option value="orderhistory.html">Order History</option>
								<option value="editprofile.html">Edit Profile</option>
								<option value="confirmation.html">Confirmation</option>
								<option value="#">Pages</option>
								<option value="404.html">404</option>
								<option value="faq.html">FAQ</option>
								<option value="blog.html">Blog</option>
								<option value="careers.html">Careers</option>
								<option value="comingsoon.html">Coming Soon</option>
								<option value="support.html">Support</option>
								<option value="aboutus.html">About</option>
								<option value="#">Computers</option>
								<option value="items.html">Desktop</option>
								<option value="items.html">Laptop</option>
								<option value="items.html">NetBook</option>
								<option value="items.html">All-In-One PC</option>
								<option value="items.html">Alienware</option>
								<option value="contactus.html">Contact</option>
							</select>
						</div>                   
					</div>
					<div className="">
						<div className="kart-links">
							<a onClick={this.handleLogout.bind(this)} href="/Login">{this.state.isLoggedIn? 'Logout': 'Login'} </a> 
							<a>Signup</a>
							<a onClick={this.handleCartClick.bind(this)}><i className="fa fa-shopping-cart"></i> {this.props.prodQuantity} Items - ￥{this.props.totalPrice}</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header