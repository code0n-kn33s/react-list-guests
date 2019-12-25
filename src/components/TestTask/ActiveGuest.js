import React from 'react'

const ActiveGuest = ({ data }) => {
  return (
    <div className="guest-card">
      <div className="card-item">
        <img src={"https://randomuser.me/api/portraits/men/" + data.index + ".jpg"} alt=""/>
      </div>
      <div className="card-item">
        <b>Name: </b>
        { data.name.first + ' ' + data.name.last}
      </div>
      <div className="card-item">
        <b>Age: </b>
        <span>{data.age}</span>
      </div>
      <div className="card-item">
        <b>Phone: </b>
        <span>{ data.phone }</span>
      </div>
      <div className="card-item">
        <b>Address: </b>
        <span>{ data.address }</span>
      </div>
      <div className="card-item">
        <b>Email: </b>
        <span>{ data.email }</span>
      </div>
      <div className="card-item">
        <b>Company: </b>
        <span>{ data.company }</span>
      </div>
      <div className="card-item">
        <b>About: </b>
        <span>{ data.about }</span>
      </div>
    </div>
  )
}

export default ActiveGuest