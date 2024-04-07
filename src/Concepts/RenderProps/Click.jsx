import React, { useState } from 'react'

const Click = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <button onClick={()=> setCount(count+1)}>Click: {count}</button>
    </div>
  )
}

export default Click