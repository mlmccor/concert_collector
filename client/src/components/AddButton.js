import React, { Component } from 'react'


const AddButton = ({addConcert, concert}) => <button onClick={(e) => addConcert(concert)}>Add</button>

export default AddButton
