
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {

  return (
    <>  <div className='container-fluid d-flex flex-column justify-content-start'>
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
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className='d-flex flex-row justify-content-center search_container'>
              <img src="ICONS/searchicon.png" alt="search" className="searchbar_icon" />
               <input type="text" className='search_bar search_bar_left' placeholder="Search By Skill" />
              <img src='ICONS/location.png' alt='location' className='searchbar_icon' />
               <input type="text" className="search_bar" placeholder="Search By Location" />
              <button className='btn btn-primary' >Search</button>
          </div>
          <div>
            <button className="button_prof m-auto">
                <i className="fa-solid fa-bell icon"></i>
            </button>
          </div>
          <div>
            <button className="button_prof m-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-user icon"></i>
            </button>     
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header align-items-center">
                      <h1 className="modal-title fs-5 login_popup_bar" id="exampleModalLabel">Welcome Back!
                      <span> Let&apos;s login to your account</span>
                      </h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                       <input type="text" className="form-control m-2" placeholder="Enter Your User Id"  />
                       <input type="text" className="form-control m-2" placeholder="Enter Your Password"  /><br></br>
                       <div className='d-flex flex-row justify-content-end'>
                         <p>Forgot Password ?</p>   
                      </div>
                    <button className='btn btn-primary login_popup_bar_loginbtn'>Login</button>
                    </div>
                    
                    <div className="modal-footer">
                      <p>Do You Have An Account ?</p>
                      <button type="button" className="btn btn-secondary">Create An Account</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </nav>  
<<<<<<< HEAD
      <div className='d-flex flex-column justify-content-center text-center' style={{height: '816px'}}>
        <img className='logo_content' src="/ICONS/main.png" alt="" />
        <h3>THERE IS THE ONE STOP DESTINATION FOR YOUR JOB HUNT</h3>
      </div>
        <div className='d-flex flex-column justify-content-start bg-secondary text-centre'>
            <div className='d-flex flex-row justify-content-start'>
              <i className="fa-regular fa-copyright icon"  style={{marginRight: '8px'}}></i>
              <p>Copyright (2300030511)</p>
=======
     
        <div className='d-flex flex-column justify-content-end bg-secondary text-center'>
            <div className='d-flex flex-row justify-content-start'>
              <i className="fa-regular fa-copyright icon_footer"></i>
              <p className='copy_right'>2025 Rights Reserved , (2300031237)</p>
>>>>>>> 683e0acc44de8ecd3aab5fc23e47192b6681d875
            </div>
            <div className='d-flex flex-row justify-content-end'>
              <i className="fa-brands fa-facebook icon"></i>
              <i className="fa-brands fa-twitter icon"></i>
              <i className="fa-brands fa-linkedin icon"></i>
            </div>
        </div>
          </div>
        </div>
    </> 
  )
}

export default App
