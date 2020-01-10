import React, { Component } from 'react'

const ArtistsCollection = ({artistList, selectArtist}) => {
  return (
    <div className= 'container' id='artistCollection container'>
      <h4>My Artists</h4>
      <br/>
      <div className='d-flex justify-content-around'>
        {artistList.map((artist) => {
          return (
            <div className='card artist-card' >
              <img className='card-img-top' src={artist.image_url} id={artist.id} onClick={(e) => selectArtist(e.target.id, e.target.displayName)}/>
            </div>
          )
        })}
      </div>

    </div>
  )
}
export default ArtistsCollection
