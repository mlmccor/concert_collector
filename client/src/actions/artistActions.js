export function searchArtist(data) {
  let url = `https://rest.bandsintown.com/artists/`+ data + `?app_id=ecd2c12560633b6ddf83a6d2a823ebc7`
  return (dispatch) => {
    dispatch({type:'LOADING_ARTISTS'});
    return fetch(url).then(artist => artist.json())
      .then(artist => {
        let token = document.querySelector('meta[name="csrf-token"]').content;
        return fetch('/api/v1/artists', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-Token': token
          },
          redirect: "error",
          body: JSON.stringify(artist)
        })
          .then(resp => {
            return resp.json()
          })
          .then(artData => {
            return dispatch({type: 'ADD_ARTIST', payload: artData});
          });
      })
  }
}

export function fetchMyArtists() {
  return (dispatch) => {
    dispatch({type:'LOADING_ARTISTS'});
    let token = document.querySelector('meta[name="csrf-token"]').content
    return fetch('/api/v1/artists', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error"
    }).then(resp => resp.json()).then(artists => {
      return dispatch({type:'RETRIEVE_ARTISTS', payload: artists})
    })
  }
}

export function selectArtist(id) {
  return (dispatch) => {
    dispatch({type: 'FINDING_ARTIST'});
    let token = document.querySelector('meta[name="csrf-token"]').content
    let url = '/api/v1/artists/' + id
    return fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error"
    })
    .then(resp => {
      return resp.json()
    })
    .then(artist => {
      return dispatch({type:'SELECT_ARTIST', payload: artist})
    })
  }
}
