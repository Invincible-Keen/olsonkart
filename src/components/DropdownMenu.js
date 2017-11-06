import React, { Component } from 'react';
import PropTypes from 'prop-types'

class DropdownMenu extends Component{
	static propTypes = {
		name: PropTypes.string.isRequired,
		options: PropTypes.array,
		link: PropTypes.string
	}

	static defaultProps = {
    	options: [],
    	link: "#"
	}

	handleMouseOver(event){
		// console.log();
		// <ul style={{visibility: 'hidden'}}>
		// 			{
		// 				this.props.options.map((option, i) => {
		// 					return(<li key={i}>{option}</li>);
		// 				})
		// 			}
		// 		</ul>
	}

	render(){
		return(
			<li onMouseOver={this.handleMouseOver.bind(this)}>
				<a href={this.props.link}>
					{this.props.name}
					{this.props.options.length > 0 && <img alt="" src={require("../img/arrow-down.gif")} className="downarrowpointer"/>}
				</a>
			</li>
		)
	}
}

export default DropdownMenu