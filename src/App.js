import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App

/**
 * 
 * The useState hook is an alternative to using this.state or this.setState in class components.
 * The useState hook returns the current value of the state and a function to update the state.
 * in the first render it will initialize the state variable by the passeed argument. and in later renders it will ignore the
 * argument.
 * 
 */