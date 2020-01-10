import React from 'react'

const SearchResults = ({results}) => {

  const generateResults = () => {
    return results.map((result) => <h4>{result.displayName}</h4>)
  }
  return (
    <div>
      {generateResults()}
    </div>
  )
}
export default SearchResults
