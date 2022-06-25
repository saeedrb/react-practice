import React, {useReducer} from 'react'
const reducer = (state, action) => {
    switch(action.type) {
        case "INCREAMENT": 
            return {count: state.count+1, showText: state.showText}
        case "toggleShowText": 
            return {count: state.count, showText: !state.showText}
        default: 
            return state;
    }
}
const ReducerTutorial = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true}); 
  return (
    <div>
        <h1>{state.count}</h1>
        <button
        onClick={() => {
            dispatch({type: "INCREAMENT"})
            dispatch({type: "toggleShowText"})
        }}>Click Here !</button>
        {state.showText && <p>this is a text</p>}
    </div>
  )
}

export default ReducerTutorial