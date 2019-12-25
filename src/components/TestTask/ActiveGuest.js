import React from 'react'

const ActiveGuest = ({ data }) => {
  return (
    <div className="guest-card" style={{ padding: '20px', border: '1px solid'}}>
      <div className="card-item" style={{ textAlign: 'center' }}>
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