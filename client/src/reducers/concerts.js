export default (state = {artistConcerts: [], myConcerts: [], concertData: {}, success: false}, action ) => {
  switch(action.type) {
    case 'RETRIEVING_ARTIST_CONCERTS':
      return state
    case 'ADD_ARTIST_CONCERTS':
      return {...state, artistConcerts: action.payload}
    case 'ADD_CONCERT':
      return {...state, myConcerts: [...state.myConcerts, action.payload]}
    case 'RETREIVING_MY_CONCERTS':
      return state
    case 'DISPLAY_MY_CONCERTS':
      return {...state, myConcerts: action.payload}
    case 'DELETE_CONCERT':
      return {...state, myConcerts: state.myConcerts.filter(concert => {
        return concert.id !== action.payload.id
      })}
    case 'SHOW_CONCERT':
      return {...state, concertData: action.payload}
    case 'ADD_SUCCESS':
      return {...state, success: true}
    case 'REMOVE_ALERT':
      return {...state, success: false}
    default:
      return state
  }
}
