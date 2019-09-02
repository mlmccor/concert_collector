export default (state = {concerts: [], currentArtist: {}}, action) => {
  switch(action.type) {
    case 'LOADING_ARTIST':
      return state

    case 'ADD_ARTIST':
      return {...state, currentArtist: action.payload}

    default:
      return state
  }
}
