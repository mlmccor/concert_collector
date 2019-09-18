import React from 'react'


const Success = ({removeAlert, message}) => {
  return (
    <div class="alert alert-success alert-dismissible" role="alert">
      {message}
  <button type="button" class="close" onClick={removeAlert}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  )
}
export default Success
