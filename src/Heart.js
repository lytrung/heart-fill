import React, {Component} from 'react'

class  Heart extends Component {

	constructor(props){
		super(props)
		this.state={
			full:this.props.full
		}
	}

	handleClick = ()=>{
		this.setState({full:!this.state.full})
	}

  	render(){

	  	var {full} = this.state

	    return (
			<div className={full ? 'box full' : 'box'} onClick={this.handleClick}>
				<svg>
				<defs>
					<clipPath id="svgPath">
					<path d="M49.991,19.205c0,0-5.69-15.07-21.8-15.07C13.538,4.134,0,12.755,0,34.216c0,17.561,13.643,28.679,26.752,38.016   c17.331,12.352,14.922,23.633,14.922,23.633S100,67.755,100,34.216c0-21.461-13.574-30.082-28.222-30.082   C55.672,4.134,49.991,19.205,49.991,19.205z"/>
					</clipPath>
				</defs>
				<g>
					<path fill="none" stroke="salmon" stroke-width="5"  d="M49.991,19.205c0,0-5.69-15.07-21.8-15.07C13.538,4.134,0,12.755,0,34.216c0,17.561,13.643,28.679,26.752,38.016   c17.331,12.352,14.922,23.633,14.922,23.633S100,67.755,100,34.216c0-21.461-13.574-30.082-28.222-30.082   C55.672,4.134,49.991,19.205,49.991,19.205z"/>
				</g>
				</svg>
				<div className="fill"></div>
		  	</div>
	    )
  	}
}

export default Heart;
