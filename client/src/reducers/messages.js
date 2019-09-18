export default (state = {success: false, failure: false, message: ''}, action) => {
  switch(action.type) {
    case 'ADD_SUCCESS':
      return {...state, success: true, message: 'Concert Added to My Concerts!'}
    case 'REMOVE_ALERT':
      return {...state, success: false}
    case 'REMOVE_SUCCESS':
      return {...state, success: true, message: 'Concert Removed from My Concerts!'}

    default:
      return state
  }
}
