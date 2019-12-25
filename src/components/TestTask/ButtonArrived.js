import React from 'react'

const ButtonArrived = ( {arrived, guest} ) => {
  return (
    <button
      className="button-arrived"
      onClick={ arrived(guest) }
      style={{ padding: '5px 10px', width: '140px' }}
    >
      Прибыл
    </button>
  )
}

export default ButtonArrived