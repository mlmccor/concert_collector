export default (state = {currentArtist: {}, artists: []}, action) => {
  switch(action.type) {
    case 'LOADING_ARTIST':
      return state

    case 'ADD_ARTIST':
      return {...state, currentArtist: action.payload, artists: [...state.artists, action.payload]}

    case 'RETRIEVE_ARTISTS':
      return {...state, artists: action.payload}

    default:
      return state
  }
}
