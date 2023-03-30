import React, { useState } from 'react';

function App() {
    let[state,setState]=useState(0)

  return (
    <div>
        <button onClick={()=>setState(++state)}>click here</button>
        <h1>{state}</h1>
    </div>
  )
}

export default App