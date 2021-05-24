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
* in the first render then pass [] array as the depedency array
*/