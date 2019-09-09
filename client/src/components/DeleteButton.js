import React, { Component } from 'react'


const DeleteButton = ({deleteConcert, concertId}) => <button className="btn btn-danger" onClick={(e) => deleteConcert(concertId)}>X</button>

export default DeleteButton
