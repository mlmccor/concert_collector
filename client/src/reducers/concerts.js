export default (state = {artistConcerts: [], myConcerts: []}, action ) => {
  switch(action.type) {
    case 'RETRIEVING_ARTIST_CONCERTS':
      return state
    case 'ADD_ARTIST_CONCERTS':
      return {...state, artistConcerts: action.payload}
    default:
      return state
  }
}
