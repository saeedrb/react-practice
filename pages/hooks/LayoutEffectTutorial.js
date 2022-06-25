import React, {useLayoutEffect, useEffect, useRef} from 'react'

const LayoutEffectTutorial = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);
    useEffect(() => {
        inputRef.current.value = "Hello"
    }, []);
    return (
        <div>
        <input ref={inputRef} value="pedro" style= {{width: 400, height: 50}} />
    </div>
  )
}

export default LayoutEffectTutorial