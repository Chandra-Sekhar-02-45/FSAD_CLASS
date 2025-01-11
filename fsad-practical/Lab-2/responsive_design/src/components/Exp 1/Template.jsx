function Template(){
    return(
        <div className="container">
        <div className="header">
            <div className="heading">
                KLUniversity
            </div>
        <div className="menu">
            <span>Home</span>
            <span>About</span>
            <span>Portofolio</span>
            <span>Login</span>
        </div>
        </div>
        <div className="content">
          <div className="plogo">
             <img src="" alt="no_image"/>
          </div>
          <div className="pdetails">
            <div className="pname">
                Product Name
            </div>
            <div className="pother">
                <p>Product Details</p>
                <p>Rs 10000</p>
                <p>Magf Date : 2024</p>
            </div>
          </div>
        </div>
        <div className="footer">
            <div className="slogo">
                 <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </div>
        </div>
    </div>
    )
}

export default Template;