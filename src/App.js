import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './feature/counter';

const App = () => {

  const {value} = useSelector((state) => (state.counter));
  const dispatch = useDispatch();
  const [ip,setIp] = useState(0);

  // console.log("count",value);

  function handleInc(){
    dispatch(increment())
  }

  function handleDec(){
    dispatch(decrement())
  }

  function handleReset(){
    dispatch(reset())
  }

  function handleAmt(){
    dispatch(incrementByAmount(ip))
  }

  return (
    <div>
      <button
      onClick={handleInc}
      >
        +
      </button>
      <p>
        Count : {value}
      </p>
      <button
      onClick={handleDec}
      >
        -
      </button>
      <br />
      <button
      onClick={handleReset}
      >
        Reset
      </button>
      <br />
      <input type="number" name="" id=""
      value={ip}
      onChange={(e)=>{
        const num = Number(e.target.value);
        setIp(num);
      }} />
      <br />
      <button
      onClick={handleAmt}
      >
        Inc By Amount
      </button>
    </div>
  )
}

export default App