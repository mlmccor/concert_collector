import React from 'react'


const ArtistResult = ({artist, selectArtist}) => {
  return(
    <div>
    <h4>{artist.displayName}</h4><button onClick={(e) => selectArtist(artist.id, artist.displayName)}>Select Artist</button>
    </div>
  )
}
export default ArtistResult
