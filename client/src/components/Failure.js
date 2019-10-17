import React from 'react'


const Failure = ({removeAlert, message}) => {
  return (
    <div class="alert alert-danger alert-dismissible" role="alert">
      {message}
  <button type="button" class="close" onClick={removeAlert}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  )
}
export default Failure
