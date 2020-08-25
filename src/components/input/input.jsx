import React, { useState } from 'react';


const Input = ({ onSubmit }) => {

  const [data, setData] = useState('')

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setData(e.target.value)
    onSubmit(data);
    setData('')
    // console.log(data)
  }

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input type="text" placeholder='timer' onChange={(e) => setData(e.target.value)} value={data} />
      </form>
    </div>
  )
}

export default Input