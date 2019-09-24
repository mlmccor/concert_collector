

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

export function getArtistConcerts(artistName) {
  return (dispatch => {
    dispatch({type: 'RETRIEVING_ARTIST_CONCERTS'});
    let newArtistName = artistName.replace(/\W/g, '');
    let token = document.querySelector('meta[name="csrf-token"]').content;
    return fetch('/api/v1/fetch_concerts', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error",
      body: JSON.stringify({query: newArtistName})
    }).then(response => response.json())
      .then(concerts => {
        dispatch({type: 'ADD_ARTIST_CONCERTS', payload: concerts})
      })
  })
}

export function addConcert(concert) {
  return (dispatch => {
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
      dispatch({type: 'ADD_SUCCESS'})
      return dispatch({type: 'ADD_CONCERT', payload: concert})
    })
  })
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

export function deleteArtist(id) {
  return (dispatch) => {
    let token = document.querySelector('meta[name="csrf-token"]').content
    let url = '/api/v1/artists/' + id
    return fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error"
    })
    .then(resp => resp.json()).then(artist => {
      return dispatch({type:'REMOVE_ARTIST', payload: artist})
    })
  }
}
