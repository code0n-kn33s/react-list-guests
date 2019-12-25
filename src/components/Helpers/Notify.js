import React from 'react'

export const Notify = ({ text, type }) => {
  // types error, success, warning
  return (
    <div className={`notify ${type}`}>
      { text ? text : ''}
    </div>
  )
}

export default Notify