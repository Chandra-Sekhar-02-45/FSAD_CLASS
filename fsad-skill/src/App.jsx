
import './App.css'

function App() {

  return (
    <>  <div className='container-fluid'>
          <div className='row'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary col-12">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>       
            <a className="navbar-brand" href="#">
              <h1 className="com_name d-flex flex-row justify-content-centre">
                <img src="ICONS/logo.png" alt="logo" className="logo" />
                <span className='head1 m-2'>JOB PORTAL</span>
              </h1>
            </a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-1">
                  <li className="nav-item d-flex flex-row justify-content-centre">
                  <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button"       data-bs-toggle="dropdown" aria-expanded="false">
          <a className="nav-link active" aria-current="page" href="#">
          <h5 className="nav_text m-2">Available Jobs</h5> 
          </a>    
          </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Technical</a></li>
                    <li className="dropdown-divider"></li>
                    <li><a className="dropdown-item" href="#">Non Technical</a></li>
                  </ul>
        </li>
                  
                      <div className="scrolling-message">
                          <h5 className='nav_text m-2'>
                            <span>Worlds Best Job Portal For Skilled People And Non Skilled People</span></h5>               
                      </div>
                  </li>
                      
                </ul>
              </div>
              <div>
             </div>  
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div>
            <button className="button_prof" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className="fa-solid fa-magnifying-glass icon"></i>
            </button>
          </div>
          <div>
            <button className="button_prof m-auto">
            <i className="fa-solid fa-bell icon"></i>
            </button>
          </div>
          <div>
            <button className="button_prof m-auto">
            <i className="fa-solid fa-user icon"></i>
            </button>
          </div>
        </div>
      </nav>    
          </div>
        </div>
    </>
  )
}

export default App
