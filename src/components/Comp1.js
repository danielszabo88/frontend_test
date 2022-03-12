import React, { useState }  from 'react'

const Comp1 = (props) => {
  const [hi, setHi] = useState('hello')

  const btnClicked = () => {
      console.log(hi);
      (hi==='hello') ? setHi('bye') : setHi('hello')
  }

  return (
    <div>
        <div>Comp1 is here {props.yo}, {hi}</div>
        <button onClick={btnClicked}>ok bye</button>
    </div>
  )
}

export default Comp1