import React from 'react'

import ArtistResult from './ArtistResult'

const SearchResults = ({results, selectArtist}) => {

  const generateResults = () => {
    return results.map((result) => <ArtistResult artist={result} selectArtist={selectArtist} />)
  }
  return (
    <div>
      {generateResults()}
    </div>
  )
}
export default SearchResults
