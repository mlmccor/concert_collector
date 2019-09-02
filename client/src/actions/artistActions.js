export function fetchArtist(data) {
  let url = `https://rest.bandsintown.com/artists/`+ data + `?app_id=ecd2c12560633b6ddf83a6d2a823ebc7`
  return (dispatch) => {
    dispatch({type:'LOADING_ARTISTS'});
    return fetch(url).then(artist => artist.json())
      .then(artist => {
        console.log(artist)
        let token = document.querySelector('meta[name="csrf-token"]').content;
        return fetch('/api/v1/artists', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-Token': token
          },
          redirect: "error",
          body: artist
        })
          .then(resp => {
            resp.json()
          })
          .then(artData => {
            return dispatch({type: 'ADD_ARTIST', payload: artData});
          });
      })

  }
}
