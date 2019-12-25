import React from 'react'
import { Button } from '../Helpers'

const GuestData = ({ guest, update, arrived } ) => {
  return (
    <li className="guest-item" onClick={update(guest)}>
      <div className="guest-photo" >
        <img src={"https://randomuser.me/api/portraits/men/" + guest.index + ".jpg"} alt="guest"/>
      </div>
      <div className="guest-info" >
        <div>Гость: {guest.name.first + ' ' + guest.name.last}</div>
        <div>Работает в компании: {guest.company}</div>
        <hr/>
        <div>Его контакты:</div>
        <div>Тел: {guest.phone}</div>
        <div>Адрес: {guest.address}</div>
        <Button onClick={arrived(guest)} />
      </div>
    </li>
  )
}


export default GuestData;