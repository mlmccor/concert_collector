import React from 'react'

import ArtistResult from './ArtistResult'

const SearchResults = ({results, getConcerts}) => {

  const generateResults = () => {
    return results.map((result) => <ArtistResult artist={result} getConcerts={getConcerts} />)
  }
  return (
    <div>
      {generateResults()}
    </div>
  )
}
export default SearchResults
