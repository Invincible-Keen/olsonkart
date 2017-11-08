import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ShoppingItem extends Component {
	static propTypes = {
		product: PropTypes.array.isRequired,
		key: PropTypes.number.isRequired,
		onDeleteShoppingItem: PropTypes.func,
		onAddQuantity: PropTypes.func,
		onMinusQuantity: PropTypes.func
	}

	static defaultProps = {
    	// options: []
	}

	handleDeleteItem(){
		if(this.props.onDeleteShoppingItem){
			this.props.onDeleteShoppingItem(this.props.product.name);
		}
	}

	handleAddQuantity(){
		if(this.props.onAddQuantity){
			this.props.onAddQuantity(this.props.product.name);
		}
	}

	handleMinusQuantity(){
		if(this.props.onMinusQuantity){
			this.props.onMinusQuantity(this.props.product.name);
		}
	}

  	render() {
	    return (
	      	<tr key={this.props.key}>
				<td className="product-name"><a>{this.props.product.name}</a></td>
				<td onClick={this.handleAddQuantity.bind(this)} className="product-operation"><a>+</a></td>
				<td className="product-quantity">{this.props.product.quantity}</td>
				<td onClick={this.handleMinusQuantity.bind(this)} className="product-operation"><a>{this.props.product.quantity > 1 && "-"}</a></td>
				<td>￥{this.props.product.price}</td>
				<td onClick={this.handleDeleteItem.bind(this)}><a>Delete</a></td>
			</tr>
	    );
  	}
}

export default ShoppingItem;
