import React, { Component } from 'react'

import Head from './Head'
import GuestList from './GuestList'
import ActiveGuest from './ActiveGuest'
import SearchGuests from './SearchGuests'

import ApiGuests from './assets/guests.json'
import './assets/style.css'

const isFindFn = (objPart, value) => {
  let isFindx = false

  if (typeof (objPart) === 'object') {

    for (let key in objPart) {
      isFindx = isFindFn(objPart[key], value)
    }
  }

  if (typeof (objPart) === 'string') {
    if (objPart.toLowerCase().indexOf(value) !== -1) {
      isFindx = true
    }
  }

  if (typeof (objPart) === 'number') {
    if (objPart.toString().indexOf(value) !== -1) {
      isFindx = true
    }
  }
  return isFindx
}

class TestTask extends Component {
  state = {
    data: ApiGuests,
    viewGuest: ApiGuests[0],
    open: false,
    value: 5
  }

  filterGuests = (e) => {
    const val = e.target.value.toLowerCase()

    let result = ApiGuests.filter(item => {
      let isFind = false

      for (let key in item) {
        if (isFindFn(item[key], val)) {
          isFind = true
        }
      }
      return isFind
    })

    this.setState({
      data: result
    })
  }

  loadGuests = (guests) => {
    this.setState({ data: guests })
  }

  updateData = (config) => {
    this.setState(config)
  }

  changeCount = (e) => {
    let { value } = e.target

    this.setState({
      value: value
    })
  }

  selectUser = (guest) => (e) => {
    this.setState({
      viewGuest: guest
    })
  }

  clearGuests = () => {
    this.setState({ data: [] })
  }

  isArrived = (guest) => (e) => {
    e.stopPropagation()
    let newArray = this.state.data.map(item => {
      if (item._id === guest._id) {
        item.isActive = !item.isActive
      }
      return item
    })

    this.setState({ data: newArray })
  }

  toggleGuestsView = () => {
    this.setState({
      open: !this.state.open
    })
  }

  isShowDescription = (display) => (e) => {
    display = true
  }

  render() {
    const { value, viewGuest, data, open } = this.state
    const { filterGuests, selectUser, isArrived, isShowDescription, toggleGuestsView, changeCount } = this

    let arr = data.slice(0, value)

    return (
      <div className="content-wrapper">
        <Head
          title='Список гостей'
          value={value}
          toggled={open}
          changeCount={changeCount}
          toggleGuestsView={toggleGuestsView}
        />
        <div className={`list-wrapper ${ !open ? 'closed' : '' }`}>
          <SearchGuests filterAction={filterGuests} />
          <div className="list-content">
            {
              viewGuest !== null && (
                <ActiveGuest
                  data={viewGuest}
                />
              )
            }
            <GuestList
              data={arr}
              update={selectUser}
              arrived={isArrived}
              showDescription={isShowDescription}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TestTask