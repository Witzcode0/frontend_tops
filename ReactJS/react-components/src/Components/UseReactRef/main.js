import React, { useRef, useEffect } from 'react';

/*
useRef is a hook in React that returns a mutable ref object, which can persist values between renders without triggering a re-render when updated. It is commonly used to directly access and interact with DOM elements or to store mutable values across renders.

React Refs (ref attributes) are a way to reference DOM elements or class component instances directly within your React components. They provide an escape hatch for directly accessing and manipulating DOM elements or React component instances when needed, without involving the typical data flow via props and state.
*/

function MainUseReactRef() {
  const inputRef = useRef(null);
  const textAreaRef = useRef(null);
  const clickCountRef = useRef(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.border = '1px solid orange';
    clickCountRef.current += 1;
    console.log(`Button clicked ${clickCountRef.current} times`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>useRef and useEffect Example</h2>
      
      <div>
        <input ref={inputRef} type="text" placeholder="Focus & style on click" />
        <button onClick={handleClick}>Focus & Style Input</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <textarea ref={textAreaRef} placeholder="This is a textarea" rows="4" cols="50" />
        <button onClick={() => textAreaRef.current.focus()}>Focus Textarea</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p>Check the console to see how many times the focus button was clicked!</p>
      </div>
    </div>
  );
}

export default MainUseReactRef;