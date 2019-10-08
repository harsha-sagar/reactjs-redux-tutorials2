import React from 'react'

import { connect } from 'react-redux'
/*
  step #1: connect is helpful to make a component:
  - subscribing to changes in redux-store
  - dispatching an action
*/

import { buyCake } from '../../redux/cake/cakeActions'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - { props.numberOfCakes }</h2>
      <button onClick= { props.buyCake } >Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes
  }
}
/* 
  step #2: subscribing to a scope of redux-store state that component is interested in
  - Availing the necessary state to the component via props
*/

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    }
  }
}
/* 
  step #2: information pertaining to an action that could be dispatched by a component
  - Availing the component to dispatch an action via props
*/

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
/* 
  step #3: connecting the component to redux-store:
  - lists the necessary state of information that component is interested in.
  - registered for to dispatch an action
*/

// a component 'connect'ed to redux-store is said to be container.
