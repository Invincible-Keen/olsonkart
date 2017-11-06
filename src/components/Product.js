import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Product extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		url: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		onAddToCart: PropTypes.func.isRequired
	}

	static defaultProps = {
    	// options: []
	}

	handleAddToCart(){
		if(this.props.onAddToCart){
			this.props.onAddToCart({
				name: this.props.name,
				price: this.props.price
			});
		}
	}
  	render() {
	    return (
	      	<div className="item product-item">
				<div className="item-image">
					<a><img src={this.props.url} alt={this.props.name} /></a>
				</div>
				<div className="item-details">
					<h5><a>{this.props.name}</a></h5>
					<p>{this.props.description}</p>
					<hr />
					<div className="item-price pull-left">{"￥" + this.props.price.toString() + ".00"}</div>
					<div className="pull-right"><a className="btn btn-danger" onClick={this.handleAddToCart.bind(this)}>Add to Cart</a></div>
				</div>
			</div>
	    );
  	}
}

export default Product;
