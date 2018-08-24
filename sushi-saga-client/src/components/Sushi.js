import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { eatSushi } from '../actions.js'

const Sushi = (props) => {
	return (
		<div className="sushi">
			<div className="plate" 
					 onClick={()=> props.eatSushi(props.sushi)}>
				{ 
					props.taken ?
						null
					:
						<img src={props.sushi.img_url} width="100%" />
				}
			</div>
			<h4 className="sushi-details">
				{props.sushi.name} - ${props.sushi.price}
			</h4>
		</div>
	)
}

function mapDispatchToProps(dispatch){
	return {
		eatSushi: (sushi) => { dispatch({type: "EAT_SUSHI", payload: sushi})}
	}
}

export default connect(null, mapDispatchToProps)(Sushi)