import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandignPage = () => {
    const navigate=useNavigate();
    function redirectToParent(){
    navigate('/dineinoptions');

    }
  return (
    <>
      <div className='landing_container'>
        <div className='landing_page'>
            <h1>Welcome to Dinein!</h1>
            <p>Discover, Share and fill your appetite along with love and laughter</p>
            <button className='landing_btn' onClick={(redirectToParent)}>Eatery World</button>
        </div>
      </div>
    </>
  )
}

export default LandignPage
