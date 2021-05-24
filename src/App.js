import React, { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!message && count > 5) {
      setMessage('Wow... you are on a click spree!')
    }
  }, [count, message])

  const resetPressed = () => {
    setCount(0)
    setMessage('')
  }

  return (
    <div className="App">
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={resetPressed}>Reset</button>
      {message}
    </div>
  )
}

export default App

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