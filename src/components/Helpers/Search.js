import React from 'react'

export const Search = ({ onChange }) => {
  return (
    <input
      type="text"
      className="guest-search"
      onChange={onChange}
      placeholder="Введите имя гостя для поиска"
    />
  )
}