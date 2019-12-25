import React from 'react'

const SearchGuests = ({ filterAction }) => {
  return (
    <input
      type="text"
      className="guest-search"
      onChange={filterAction}
      placeholder="Введите имя гостя для поиска"/>

  )
}

export default SearchGuests