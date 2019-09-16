

export function searchArtist(data) {
  return (dispatch) => {
    let newData = data.replace(/\W/g, '');
    let token = document.querySelector('meta[name="csrf-token"]').content;
    return fetch('/api/v1/artists/search', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error",
      body: JSON.stringify({query: newData})
    })
    .then(resp => resp.json()).then(artist => {
      return dispatch({type: 'ADD_ARTIST', payload: artist});
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
    .then(resp => resp.json()).then(artist => {
      return dispatch({type:'SELECT_ARTIST', payload: artist})
    })
  }
}
