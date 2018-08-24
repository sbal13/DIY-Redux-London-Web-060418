const defaultState = {
		sushis: [],
		eaten: [],
		cost: 0,
		budget: 100,
		display: 0,
	}

export default function(state=defaultState, action){
	console.log(action.payload)

	switch(action.type){
		case "EAT_SUSHI":
			return {...state, eaten: [...state.eaten, action.payload]}
		default: 
			return state
	}
}