import React, { Component } from 'react'


const DeleteArtist = ({id, deleteArtist}) => <button className="btn btn-danger" onClick={(e) => deleteArtist(id)}>Remove from My Artist</button>

export default DeleteArtist
