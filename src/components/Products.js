import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Product from '../components/Product'


class Products extends Component {
	static propTypes = {
		products: PropTypes.array,
		onAddToCart: PropTypes.func.isRequired
	}
	static defaultProps = {
    	products: []
	}

	handleAddToCart(product){
		if(this.props.onAddToCart){
			this.props.onAddToCart(product);
		}
	}
  	render() {
	    return (
	      	<div className="shop-items blocky">
				<div className="container">
					<div className="box box-warp">
						{
							this.props.products.map((p, i) => {
								return(<Product key={i} name={p.name} price={p.price} url={p.imgurl} description={p.description} onAddToCart={this.handleAddToCart.bind(this)} />);
							})
						}
					</div>
				</div>
			</div>
	    );
  	}
}

export default Products;
