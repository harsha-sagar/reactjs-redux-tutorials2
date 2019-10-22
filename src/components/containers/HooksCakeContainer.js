import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { buyCake } from '../../redux/cake/cakeActions'

function HooksCakeContainer() {
	const numberOfCakes = useSelector(state => state.numberOfCakes)
	// useSelector is similar to mapStateToProps in stateful class component

	const dispatch = useDispatch();

	const buyingCake = () => {
    dispatch(buyCake());
  }

	return (
		<div>
			<h2>Number of cakes - { numberOfCakes }</h2>
			<button onClick= { buyingCake }>Buy cake</button>
		</div>
	)
}

export default HooksCakeContainer
