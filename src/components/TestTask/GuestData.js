import React from 'react'
import ButtonArrived from './ButtonArrived'

const GuestData = ({ guest, index, update, arrived } ) => {
  return (
    <li className="guest-item" onClick={update(guest)}>
      <div className="guest-info" >
        <div>Гость: {guest.name.first + ' ' + guest.name.last}</div>
        <div>Работает в компании: {guest.company}</div>
        <hr/>
        <div>Его контакты:</div>
        <div>Тел: {guest.phone}</div>
        <div>Адрес: {guest.address}</div>
        <div>Прибыл: "{guest.isActive.toString()}"</div>
      </div>
      <ButtonArrived arrived = { arrived } guest = { guest } />
    </li>
  )
}


export default GuestData;