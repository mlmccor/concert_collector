




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
      dispatch({type: 'REMOVE_SUCCESS'})
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

export function removeAlert() {
  return (dispatch) => dispatch({type: 'REMOVE_ALERT'})
}
