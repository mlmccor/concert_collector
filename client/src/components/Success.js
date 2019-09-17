import React from 'react'


const Success = ({removeAlert}) => {
  return (
    <div class="alert alert-success alert-dismissible" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" onClick={removeAlert}>
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  )
}
export default Success
