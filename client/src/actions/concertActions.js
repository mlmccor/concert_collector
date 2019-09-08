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


export function getMyConcerts() {
  return (dispatch) => {
    dispatch({type: 'RETREIVING_MY_CONCERTS'});
    let token = document.querySelector('meta[name="csrf-token"]').content;
    return fetch('/api/v1/concerts', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error"
    }).then(response => response.json()).then(concerts => {
      return dispatch({type: 'DISPLAY_MY_CONCERTS', payload: concerts})
    })
  }
}

export function removeConcert(id) {
  let url = '/api/v1/concerts/' + id
  return (dispatch) => {
    let token = document.querySelector('meta[name="csrf-token"]').content;
    return fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error"
    }).then(response => response.json()).then(concert => {
      return dispatch({type: 'DELETE_CONCERT', payload: concert})
    })
  }
}

export function showConcert(id) {
  return (dispatch) => {
    let token = document.querySelector('meta[name="csrf-token"]').content;
    let url = '/api/v1/concerts/' + id
    return fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error"
    }).then(response => response.json()).then(concert => {
      return dispatch({type: 'SHOW_CONCERT', payload: concert})
    })

  }
}
