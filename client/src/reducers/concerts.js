export default (state = {artistConcerts: [], myConcerts: []}, action ) => {
  switch(action.type) {
    case 'RETRIEVING_ARTIST_CONCERTS':
      return state
    case 'ADD_ARTIST_CONCERTS':
      return {...state, artistConcerts: action.payload}
    case 'ADD_CONCERT':
      return {...state, myConcerts: [...state.myConcerts, action.payload]}
    default:
      return state
  }
}
