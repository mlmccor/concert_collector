import React from 'react'


const ArtistResult = ({artist, getConcerts}) => {
  return(
    <div>
    <h4>{artist.displayName}</h4><button onClick={(e) => getConcerts(artist.id)}>Select Artist</button>
    </div>
  )
}
export default ArtistResult
