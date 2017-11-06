import React, { Component } from 'react';

class Carousel extends Component {
	constructor () {
		super()
		this.state = {
			activeItem: 0
		}
	}

	handleCarouselPrev(){
		this.setState({
	      activeItem: this.state.activeItem === 0? 2 : (this.state.activeItem - 1) % 3
	    });
	}

	handleCarouselNext(){
		this.setState({
	      activeItem: (this.state.activeItem + 1) % 3
	    });
	}

	handleIndicatorClick(event){
		this.setState({
	      activeItem: parseInt(event.target.getAttribute('data-slide-to'), 10)
	    });
	}

	render() {
    	return (
      		<div id="carousel-example-generic" className="carousel slide">

				<div className="carousel-inner">

					<div className="item" style={{'display': this.state.activeItem === 0? 'block' : 'none'}}>
						<img src={require("../img/back1.jpg")} alt="" className="img-responsive" />
						<div className="carousel-caption">
							<h2 className="animated fadeInLeftBig">Lorem ipsum dolor sit amet</h2>
							<p className="animated fadeInRightBig">Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. Donec tristique est sit amet diam interdum semper. </p>
							<a className="animated fadeInLeftBig btn btn-info btn-lg">Buy Now - $199</a>
						</div>
					</div>
					
					<div className="item" style={{'display': this.state.activeItem === 1? 'block' : 'none'}}>
						<img src={require("../img/back2.jpg")} alt="" className="img-responsive" />
						<div className="carousel-caption">
							<h2 className="animated fadeInLeftBig">Mauris semper tincidunt suscipit</h2>
							<p className="animated fadeInRightBig">Donec tristique est sit amet diam interdum semper. Vestibulum <strong>condimentum ante urna</strong>, vel interdum odio accumsan id.</p>
							<a className="animated fadeInLeftBig btn btn-info btn-lg">Buy Now - $299</a>
						</div>
					</div>

					<div className="item" style={{'display': this.state.activeItem === 2? 'block' : 'none'}}>
						<img src={require("../img/back3.jpg")} alt="" className="img-responsive" />
						<div className="carousel-caption">
							<h2 className="animated fadeInLeftBig">Phasellus et nisi tincidunt</h2>
							<p className="animated fadeInRightBig">Lorem <strong>ipsum dolor sit amet</strong>, consectetur adipiscing elit. Vestibulum condimentum ante urna, vel interdum odio accumsan id.</p>
							<a className="btn btn-info btn-lg">Buy Now - $479</a>
						</div>
					</div>          
				</div>


				<a className="carousel-control" onClick={this.handleCarouselPrev.bind(this)}>
					<span className="icon-prev"></span>
				</a>
				<a className="carousel-control right" onClick={this.handleCarouselNext.bind(this)}>
					<span className="icon-next"></span>
				</a>


				<ol className="carousel-indicators">
					<li data-slide-to="0" onClick={this.handleIndicatorClick.bind(this)} className={this.state.activeItem === 0? "active" : ""}></li>
					<li data-slide-to="1" onClick={this.handleIndicatorClick.bind(this)} className={this.state.activeItem === 1? "active" : ""}></li>
					<li data-slide-to="2" onClick={this.handleIndicatorClick.bind(this)} className={this.state.activeItem === 2? "active" : ""}></li>
				</ol>
			</div>
    	);
  	}
}

export default Carousel;
