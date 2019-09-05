import React, { Component } from 'react'


const DeleteButton = ({deleteConcert, concertId}) => <button onClick={(e) => deleteConcert(concertId)}>X</button>

export default DeleteButton
