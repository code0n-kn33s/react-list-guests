import React from 'react'
import FaBeer from './assets/beer.png'

const Head = ({ title, value, changeCount, toggled, toggleGuestsView }) => {
  let listSubGuests = 'Список жертв'

  return (
    <div className="guests-header">
      <div className="guests-header-title">
        <h1 className="guests-header-title-text">{ title }</h1>
        <div className="guests-header-subtitle">{listSubGuests}</div>
      </div>
      <div>
        {
          toggled && 
          <input
            className="guests-header-beer-num"
            type="number"
            onChange={changeCount}
            value={ value }
          />
        }
        <button onClick={toggleGuestsView} className="guests-header-beer">
          <img src={FaBeer} alt="FaBeer" className="guests-header-beer-img"/>
        </button>
      </div>
    </div>
  )
}

export default Head