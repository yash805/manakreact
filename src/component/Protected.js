import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (prop) => {
    const {Component} = prop;
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login1')
        if(!login){
            navigate('/login')
        }else{
            console.log("hii")
        }
    })
  return (
    <div>
      <Component />
    </div>
  )
}

export default Protected
