export default (state = {currentArtist: {}, myArtists: [], artistConcerts: [], searchResults: [], searching: false}, action) => {
  switch(action.type) {
    case 'LOADING_ARTIST':
      return state
    case 'ADD_ARTIST':
      return {...state, currentArtist: action.payload, myArtists: [...state.myArtists, action.payload], searchResults: [], searching: false}
    case 'RETRIEVING_ARTIST_CONCERTS':
      return {...state, searching: false}
    case 'ADD_ARTIST_CONCERTS':
      return {...state, artistConcerts: action.payload}
    case 'RETRIEVE_ARTISTS':
      return {...state, myArtists: action.payload}
    case 'DISPLAY_SEARCH_RESULTS':
      return {...state, searchResults: action.payload, searching: true}
    case 'FINDING_ARTIST':
      return state
    case 'SELECT_ARTIST':
      return {...state, currentArtist: action.payload, myArtists: [...state.myArtists, action.payload], searchResults: [], searching: false}
    case 'SELECT_MY_ARTIST':
      return {...state, currentArtist: action.payload}
    case 'REMOVE_ARTIST':
      return {...state, currentArtist: {}, myArtists: [...state.myArtists.filter(artist => artist.id !== action.payload.id)]}
    case 'NO_ARTIST_CONCERTS':
      return {...state, artistConcerts: []}
    default:
      return state
  }
}
