export function getArtistConcerts(artistName) {
  let url = 'https://rest.bandsintown.com/artists/' + artistName + '/events?app_id=ecd2c12560633b6ddf83a6d2a823ebc7'
  return (dispatch => {
    dispatch({type: 'RETRIEVING_ARTIST_CONCERTS'});
    return fetch(url).then(response => response.json())
      .then(concerts => dispatch({type: 'ADD_ARTIST_CONCERTS', payload: concerts}))
  })
}

export function addConcert(concert) {
  return (dispatch => {
    console.log(concert)
    dispatch({type: 'PREPARING_ARTISTS'})
    let token = document.querySelector('meta[name="csrf-token"]').content;
    return fetch('/api/v1/concerts', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error",
      body: JSON.stringify(concert)
    }).then(response => response.json()).then(concert => {
      return dispatch({type: 'ADD_CONCERT', payload: concert})
    })
  })
}
