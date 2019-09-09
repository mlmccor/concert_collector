import React, { Component } from 'react'


const AddButton = ({addConcert, concert}) => <button className='btn btn-info' onClick={(e) => addConcert(concert)}>Add</button>

export default AddButton
