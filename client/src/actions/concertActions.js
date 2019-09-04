export function getArtistConcerts(artistName) {
  let url = 'https://rest.bandsintown.com/artists/' + artistName + '/events?app_id=ecd2c12560633b6ddf83a6d2a823ebc7'
  return (dispatch => {
    dispatch({type: 'RETRIEVING_ARTIST_CONCERTS'});
    return fetch(url).then(response => response.json())
      .then(concerts => dispatch({type: 'ADD_ARTIST_CONCERTS', payload: concerts}))
  })
}
