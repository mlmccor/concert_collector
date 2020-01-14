import React, { Component } from 'react'


const AddButton = ({addConcert, concert, artistId}) => <button className='btn btn-info' onClick={(e) => addConcert(concert, artistId)}>Add</button>

export default AddButton
