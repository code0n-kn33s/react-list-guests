import React from 'react'
import GuestData from './GuestData'

const GuestList = ({ data, update, arrived, showDescription }) => {
  let guests = data.map( guest => {

    if (!guest.isActive){
      return (
        <GuestData
          key={guest.index}
          guest={guest}
          index={guest.index}
          update={update}
          arrived={arrived}
          description={showDescription}
        />
      )
    } else {
      return null
    }
  });

  return (
    <ul className="guest-list">
      {guests}
    </ul>
  )
}

export default GuestList