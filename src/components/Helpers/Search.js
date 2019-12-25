import React from 'react'

export const Search = ({ onChange, placeholder }) => {
  return (
    <input
      type="text"
      className="guest-search"
      onChange={onChange}
      placeholder={placeholder ? placeholder : "Введите имя гостя для поиска"}
    />
  )
}