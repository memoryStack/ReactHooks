/**
 * for the below code logs would be
 *  1. '@@@@@@ count', 0
 * and useState calls doesn't re-renders the component
 */

import React, { Fragment, useState } from 'react';

const INITIAL_COUNT = 0;
 
const App = () => {
  const [count, setCount] = useState(INITIAL_COUNT);
  console.log('@@@@@@ count', count)
  return (
    <Fragment>
      <p>
        Current count is: {count}
      </p>
      <button onClick={() => setCount(INITIAL_COUNT)}>Click me</button>
    </Fragment>
  );
};

export default App;



/**
 * for the below use of useState logs would be
 *  1. '@@@@@@ count', 0
 *  2. '@@@@@@ count', 5
 *  3. '@@@@@@ count', 5
 * 3 logs and after this useState won't re-render the component
 */
import React, { Fragment, useState } from 'react';

const INITIAL_COUNT = 0;
 
const App = () => {
  const [count, setCount] = useState(INITIAL_COUNT);
  console.log('@@@@@@ count', count)
  return (
    <Fragment>
      <p>
        Current count is: {count}
      </p>
      <button onClick={() => setCount(5)}>Click me</button>
    </Fragment>
  );
};

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
  
  In the example above my thought was also that the effect would run infinitely because i used to think that if we don't pass any dependency array then useEffect would run after 
  every render. But this is wrong. what happens is that useEffect hook synchronizes rather than being run after every re-render. It looks at the props and state available in
  render scope and may skip when nothing changes in the scope. In this case, it skips running the effect after the second fetch is completed because both message
  and setMessage are the same between renders. 
  Dependencies array is a way to tell useEffect hook that our effect only depends on props provided in this array. Do not worry about anything else available in the component scope.
  So, don't think of useEffect hook as componentDidUpdate and componentDidMount merged together but think of it as a function which will run after renders if there is a change in the 
  state and prop variables in the scope. Either it will look for all the variables in the scope or the items passed in the dependency array.

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

// useMemo
/**
 * Use useMemo hook when wanting to memoize output returned from an "expensive compute" function. This compute function may perform heavy calculations on each function call.
 * it's like DP memoisation. only diff is that next input must be same as previous one becoz it will hold the value from previous call only. if the next value changes then
 * it will again compute the new value for new argument by calling the passed callback function and cache that.
 * CHETAVNI: It is a known fact with memoization hooks that React invalidates cache for useMemo or useCallback too often.
 *            Sometimes it can happen even when dependencies have not changed or when a change in prop or state was detected.
 * 
 */

// useRef
/**
 * use useRef hook to get the ref of a DOM node. Later, you can use this ref for certain actions related to that node. For example, scrolling to an element position.
 * useRef provides the ref object with the "current" property set to the reference of node in DOM. (see the example above).
 * We can also use "useRef" to persist simple values also which doesn't change between renders by just not passing the initial returned ref object to any node.
 * By doing so we can update the value of the ref.current on any action and it will not create extra re-rendering which useState does.
 */

// useLayoutEffect
/**
 * 1. useLayoutEffect is an alternative to useEffect for layout updates.
 * 2. A classic usage for this hook is to truncate long content if the length of the text is too long.
 *    useLayoutEffect "synchronously re-renders" UI before the browser can paint.
 *    Because useLayoutEffect can apply updates before the browser paint happens, you will not see any flicker or shrinking of long text which is visible on render
 *    However, it means that it will take longer for the first view to appear in the browser because behind the scenes the paint has been blocked
 *    until the useLayoutEffect callback has finished its work.
 *    if we do the same thing with "useEffect" then first UI will apeear a little faster but the below button will load a little later and screen will flicker.
 * TODO: Learn full extent of this hook. can it stop flickering in the input fields also while the user is inputing some text at the run time.
 *        And is there a way to know that painting has started running ??
 */