import React, { useRef } from 'react'

const RefTutorial = () => {
    const inputRef = useRef(null);
    const onClick = () => {
        inputRef.current.value = "";
        
    }
  return (
    <div>
        <h1>Pedro</h1>
        <input ref={inputRef} type="text" placeholder="Ex...." />
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default RefTutorial