export function fetchArtist(data) {
  let url = `https://rest.bandsintown.com/artists/`+ data + `?app_id=ecd2c12560633b6ddf83a6d2a823ebc7`
  let token = document.querySelector('meta[name="csrf-token"]').content;
  return (dispatch) => {
    dispatch({type:'LOADING_ARTISTS'});
    return fetch(url).then(artist => artist.json())
      .then(artist => {
        console.log(artist)
      })
    // return fetch('/api/v1/artist', {
    //   method: 'GET',
    //   headers: {
    //     "Content-Type": "application/json",
    //     'X-Requested-With': 'XMLHttpRequest',
    //     'X-CSRF-Token': token
    //   },
    //   redirect: "error"
    // })
    // .then(resp => {
    //   resp.json()
    // })
    // .then(artist => {
    //   dispatch({type: 'SET_ARTIST', artist: artist})
    // })
  }
}
