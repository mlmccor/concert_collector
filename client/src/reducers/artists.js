export default (state = {currentArtist: {}, myArtists: [], artistConcerts: []}, action) => {
  switch(action.type) {
    case 'LOADING_ARTIST':
      return state
    case 'ADD_ARTIST':
      return {...state, currentArtist: action.payload, myArtists: [...state.myArtists, action.payload]}
    case 'RETRIEVING_ARTIST_CONCERTS':
      return state
    case 'ADD_ARTIST_CONCERTS':
      return {...state, artistConcerts: action.payload}

    case 'RETRIEVE_ARTISTS':
      return {...state, myArtists: action.payload}
    case 'FINDING_ARTIST':
      return state
    case 'SELECT_ARTIST':
      return {...state, currentArtist: action.payload}
    case 'REMOVE_ARTIST':
      return {...state, currentArtist: {}, myArtists: [...state.myArtists.filter(artist => artist.id !== action.payload.id)]}


    default:
      return state
  }
}
