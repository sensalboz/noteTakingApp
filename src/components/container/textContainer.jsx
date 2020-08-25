import React from 'react'

const Text = () => {

  const getStorage = async () => {
    const data = await localStorage.getItem('data');
    console.log(data)
  }

  getStorage();



  return (
    <div>
      <h2>maker</h2>
    </div>
  )
}



export default Text;