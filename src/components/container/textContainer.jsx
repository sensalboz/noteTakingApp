import React, { useState, useEffect } from 'react'

const Text = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const maker = localStorage.getItem('data');
    setData(JSON.parse(maker))
    console.log(data)
  }, [])


  // console.log(data)
  return (
    <div>
      <h2>maker</h2>
    </div>
  )
}



export default Text;