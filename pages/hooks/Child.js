import React, { useEffect } from 'react'

const Child = ({returnComment}) => {
    useEffect(() => {
        console.log("function was called");
        
    }, [returnComment])
  return (
     <div>{returnComment("pedro")}</div>
  )
}

export default Child