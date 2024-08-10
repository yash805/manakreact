import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const User = () => {
    const params = useParams()
    const {name} = params;
    const location = useLocation();
    console.log(location)
  return (
    <div>
      <h1>this is {name} page</h1>
      <p>Pathname: {location.pathname}</p>
    </div>
  )
}

export default User
