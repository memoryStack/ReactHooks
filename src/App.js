import React, { useReducer } from 'react'

const INITIAL_STATE = { count: 0 }

const reducer = (state, action) => {
  const { type } = action || {}
  if (!type) throw new Error('Action type must be defined')
  switch(type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
        throw new Error('Did you misspell an action type?')
  }
}

const App = () => {
  console.log('@@@@@@@@ render')
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <div className="App">
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  )
}

export default App;

// useState
/**
 * 
 * The useState hook is an alternative to using this.state or this.setState in class components.
 * The useState hook returns the current value of the state and a function to update the state.
 * in the first render it will initialize the state variable by the passeed argument. and in later renders it will ignore the
 * argument.
 * 
 */

// useEffect
/**
* useEffect function will run each time the state count or message is changed. if we want it to run only
* in the first render then pass [] array as the depedency array. (because this array ever changed. so obviously it will run for only one time)
* Think of the useEffect hook as a partial replacement for React lifecycle events.
* With the useEffect hook, it is possible to replicate behavior for componentDidMount, componentDidUpdate and componentWillUnmount methods.
  Scenarios for the usage of useEffect :-
    1. Add an event listener for a button
    2. Fetch data from API when component mounts
    3. Perform an action when state or props change
    4. Clean up event listeners when the component unmounts
  In short, the above-mentioned lifecycle methods can be replaced with the useEffect hook.
  NOTE: The passed fuction as argument will run after every render but this depends upon the value of the dependecy array argument.
        useEffect hook checks this dependency array to compare the previous and current value for those dependencies
        and then it runs the callback function but only if one of the dependencies has changed.
  
  NOTE: The JS logic inside useEffect callback function can be moved within the function passed to the useEffect hook. We will explore the benefits of doing so.
        TODO: document what are the disadvatages of not doing so with examples.

*/

// useContext
/**
 * useContext accepts a "React Context object" as the only input. Wherever a React Context API is being used,
 * "useContext" will be used to retrieve the value of a given context. this extracted value is determined by 
 * the nearest Context Provider. If the value of Context Provider changes, useContext hook will trigger a re-render in the calling component.
 * NOTE: If a parent component uses memoization to skip renders, the useContext hook will still cause a re-render in a component where 
 *        it was called in case context value changes.
 *        Proof -> Here in Header.js file we have used memo fuction and this Header.js is a parent component of Logo.js component but still when 
 *                  context values chages in App.js then Logo.js re-renders because of useContext hook.
 *        
 * 
 * 
 */

// useReducer
/**
 * useReducer hook is an alternative to useState. It offers more control on the next state value based on a given action.
 * If you are familiar with Redux Reducers, useReducer hook provides similar functionality out of the box in React.
 * When to use "useReducer" :-
 *    1. The shape of state object is complex. Maintain multiple items within the same state object.
 *    2. Access previous state value to update the next state. (can be done by useState also)
 *    3. Apply special logic on certain actions to calculate the next state. (just like redux reducers)
 *    TODO: learn when to use "useReducer" over "useState" even when we just need access to previous state value.
 * calling component will re-render if the state is changed.
 */   

// useCallback
/**
 * Use the useCallback hook when wanting to memoize the "callback function". This callback may perform several actions when invoked.
 * It will accept a dependecy array and the callback functio will bre created again if values in the dependency array changes.
 * When do we use it :- 
 *    Use memoization hooks only when there are benefits in terms of rendering performance. (basically callback function is memoized do children component prop won't change)
 *    For example, when rendering large lists, a memoized result may speed up the actual rendering performance.
 *    NOTE: For simple cases, it is not required to use memoization because the overhead may not offset the performance improvement.
 *          Per component some simple arrow functions are ok.
 * 
 */