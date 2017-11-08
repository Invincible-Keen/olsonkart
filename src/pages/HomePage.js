import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import ShoppingCart from '../components/ShoppingCart'
import Products from '../components/Products'


const Hero = () => (
	<div className="hero">
		<div className="container">
			<div className="">
				<h3>It<span className="color">{"'"}</span>s Lorem ipsum <span className="color">dolor</span> sit amet consectetur</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique est sit amet diam interdum semper. Vestibulum condimentum ante urna, vel interdum odio accumsan id.</p>
			</div>
			<div className="sep-bor"></div>
		</div>
	</div>
);

class HomePage extends Component {

	constructor () {
		super()
		this.state = {
			showModal: false,
			products: [],
			cart: new Map(),
			totalPrice: 0,
			prodInCart: []
		}
	}

	handleShowHideModal(){
		this.setState({
	      showModal: !this.state.showModal
	    });
	}

	handleAddToCart(product){
		if(this.state.cart.has(product.name)){
			let p = this.state.cart.get(product.name);
			p.quantity++;
			p.price += product.price;


			let currentCart = this.state.cart;
			currentCart.set(product.name, p);
			this.setState({
				cart: currentCart
			});
			
		}
		else{
			let currentCart = this.state.cart;
			currentCart.set(product.name, {quantity: 1, price: product.price});
			this.setState({
				cart: currentCart
			});
		}


		this._calculateTotalPrice();
	}

	handleDeleteShoppingItem(prodName){
		if(this.state.cart.has(prodName)){
			let cart = this.state.cart;
			cart.delete(prodName);

			this.setState({
				cart: cart
			});
			
		}

		this._calculateTotalPrice();
	}

	handleAddQuantity(prodName){
		if(this.state.cart.has(prodName)){
			let p = this.state.cart.get(prodName);
			p.price += p.price/p.quantity;
			p.quantity++;

			let currentCart = this.state.cart;
			currentCart.set(prodName, p);
			this.setState({
				cart: currentCart
			});
			
		}

		this._calculateTotalPrice();
	}

	handleMinusQuantity(prodName){
		if(this.state.cart.has(prodName)){
			let p = this.state.cart.get(prodName);
			if(p.quantity > 1){
				p.price -= p.price/p.quantity;
				p.quantity--;			

				let currentCart = this.state.cart;
				currentCart.set(prodName, p);
				this.setState({
					cart: currentCart
				});
			}
		}

		this._calculateTotalPrice();
	}

	componentWillMount() {
		// console.log("componentWillMount");
		this.setState({
			prodQuantity: this.props.prodQuantity
		});

		this._getProducts();
	}

	_getProducts(){
		if(localStorage.getItem('token')){
			axios({
			method:'get',
			url:'https://pwcfrontendtest.azurewebsites.net/getlist',
			responseType:'json',
			headers: {'RequestVerificationToken': localStorage.getItem('token')}
			}).then(res => {
				//console.log("response", res.data.res);
				this.setState({
			      products: res.data.res
			    });
			});
		}
	}

	_calculateTotalPrice(){
		let sum = 0;
		let products = [];
		this.state.cart.forEach((prod, name)=>{
			sum += prod.price;
			products.push({
				name: name,
				price: prod.price,
				quantity: prod.quantity
			});
		});
		console.log("Total: " + sum.toString());

		this.setState({
			totalPrice: sum,
			prodInCart: products
		});
	}

	render() {
		return (
			<div>
				<Header onShowHideModal={this.handleShowHideModal.bind(this)} prodQuantity={this.state.cart.size} totalPrice={this.state.totalPrice} />
				<Carousel />
				<Hero />
				<Products products={this.state.products}  onAddToCart={this.handleAddToCart.bind(this)}/>
				<Footer />
				<ShoppingCart 
					products={this.state.prodInCart} 
					totalPrice={this.state.totalPrice} 
					showModal={this.state.showModal} 
					onShowHideModal={this.handleShowHideModal.bind(this)}
					onDeleteShoppingItem = {this.handleDeleteShoppingItem.bind(this)}
					onAddQuantity = {this.handleAddQuantity.bind(this)}
					onMinusQuantity = {this.handleMinusQuantity.bind(this)}
				/>
			</div>
			);
		}
	}

export default HomePage;
