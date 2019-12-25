import React from 'react'

export const Button = ({ text, onClick }) => {
  return (
    <button
      className="button-arrived"
      onClick={ onClick }
    >
      {text ? text : "Прибыл"}
    </button>
  )
}

export default Button