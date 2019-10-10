import React, { Component } from 'react'

const ArtistsCollection = ({artistList, selectArtist}) => {
  return (
    <div className= 'container border border-dark rounded-pill' id='artistCollection container'>
      <h4>My Artists</h4>
      {artistList.map((artist) => {
        return (
          <img src={artist.image_url} id={artist.id} onClick={(e) => selectArtist(e.target.id)}/>
        )
      })}

    </div>
  )
}
export default ArtistsCollection
