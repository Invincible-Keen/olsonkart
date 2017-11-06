import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ShoppingCart extends Component {
	static propTypes = {
		products: PropTypes.array,
		totalPrice: PropTypes.number,
		showModal: PropTypes.bool,
		onShowHideModal: PropTypes.func
	}

	static defaultProps = {
    	products: []
	}

	constructor () {
	    super()
	    this.state = {
	      showModal: true
	    }
	}

	handleClose(){
		if(this.props.onShowHideModal){
			this.props.onShowHideModal();
		}
	}

	handleModalClick(event){
		if(event.target.id && event.target.id === "shoppingcart" && this.props.onShowHideModal){
			this.props.onShowHideModal();
		}
	}

	render() {
    	return (
      		<div className="modal" id="shoppingcart" onClick={this.handleModalClick.bind(this)} style={{'display': this.props.showModal? 'block' : 'none'}}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header box box-space-between">
							<h4 className="modal-title">Shopping Cart</h4>
							<button type="button" className="close" onClick={this.handleClose.bind(this)}>×</button>
						</div>
						<div className="modal-body">
							<table className="table table-striped">
								<thead>
									<tr>
										<th>Name</th>
										<th>Quantity</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									{
										this.props.products.map((p, i) => {
											return(
												<tr key={i}>
													<td><a>{p.name}</a></td>
													<td>{p.quantity}</td>
													<td>${p.price}</td>
												</tr>
											);
										})
									}
								</tbody>
								<tfoot>
									<tr>
										<th></th>
										<th>Total</th>
										<th>￥{this.props.totalPrice.toString()}</th>
									</tr>
								</tfoot>
							</table>

						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Continue Shopping</button>
							<button type="button" className="btn btn-info">Checkout</button>
						</div>
					</div>
				</div>
			</div>
    	);
  	}
}

export default ShoppingCart;
