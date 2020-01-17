export default (state = {success: false, failure: false, message: ''}, action) => {
  switch(action.type) {
    case 'ADD_SUCCESS':
      return {...state, success: true, message: 'Concert Added to My Concerts!'}
    case 'REMOVE_ALERT':
      return {...state, success: false, failure: false}
    case 'REMOVE_SUCCESS':
      return {...state, success: true, message: 'Concert Removed from My Concerts!'}
    case 'NO_ARTIST':
      return {...state, failure: true, message:'No matching artist or group was found with that name. Check your spelling and try again!'}
    case 'NO_CONCERTS':
      return {...state, failure: true, message: 'There are no concerts scheduled for this artist. Be sure to check back again later!'}
    default:
      return state
  }
}
