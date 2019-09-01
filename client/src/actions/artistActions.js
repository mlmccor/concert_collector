export function fetchArtist() {
  return (dispatch) => {
    dispatch({type:'LOADING_ARTISTS'});
    return fetch('')
  }
}
