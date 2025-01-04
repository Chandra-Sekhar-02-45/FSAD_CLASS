
import './App.css'

function App() {

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
        <div className="content">
          <div className='text1'>Worlds best platform for searching your jobs</div>
          <div className='text2'>Get your job now</div>
          <div className='text3'>NOW AVAILABLE</div>
        </div>
        <div className="footer">
            <h2>Follow Us</h2>
            <div className='social'>
                  <img className="social" src="ICONS/linkedin.png" alt="" />
                  <img className="social" src="ICONS/facebook.png" alt="" />
                  <img className="social" src="ICONS/twitter.png" alt="" />
            </div>
            <div className='placeholder'>
              <input type="text" className='searchText' placeholder='Search by skill' />
            </div>
      
        </div>
      </div>
    </>
  )
}

export default App
