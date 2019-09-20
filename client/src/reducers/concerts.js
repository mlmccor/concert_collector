export default (state = {myConcerts: [], concertData: {}}, action ) => {
  switch(action.type) {

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
    default:
      return state
  }
}
