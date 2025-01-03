import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="header">
            <img className="logo" src="ICONS/logo.png" alt='' />
            <h1>JOB PORTAL</h1>
              <div className='user'>
                    <h2>
                      Sign In
                    </h2>
                  <img className="user_logo" src="ICONS/user.png" alt='' />
              </div>
        </div>
        <div className="content">Content</div>
        <div className="footer">
            <h2>Follow Us</h2>
            <div className='social'>
                  <img className="social" src="ICONS/linkedin.png" alt="" />
                  <img className="social" src="ICONS/facebook.png" alt="" />
                  <img className="social" src="ICONS/twitter.png" alt="" />
            </div>
      
        </div>
      </div>
    </>
  )
}

export default App
