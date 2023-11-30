import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

  

const Navbar = () => {
    let navigate=useNavigate()
    const HandleLogout=()=>{
        localStorage.removeItem('Sid');
        navigate('/login')
    }
    let location = useLocation();
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <Link class="navbar-brand" to="/">Campus Mate</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {localStorage.getItem("Sid")?<li class="nav-item">
            <Link class="nav-link" to="/subpro">Profile</Link>
            </li>:<li class="nav-item">
            <Link class="nav-link disabled" to="/subpro">Profile</Link>
            </li>}
            {localStorage.getItem("Sid")?<>
            {!localStorage.getItem("SUB1")?<li class="nav-item">
            <Link class="nav-link" to="/getsub">Registration</Link>
            </li>:<li class="nav-item">
            <Link class="nav-link disabled" to="/getsub">Registration</Link>
            </li>}
            {localStorage.getItem("SUB1")?<li class="nav-item">
            <Link class="nav-link" to="/subswt">Switching</Link>
            </li>:<li class="nav-item">
            <Link class="nav-link disabled" to="/subswt">Switching</Link>
            </li>}</>:<></>}
        </ul>
        </div>
        {!localStorage.getItem('Sid')?<form className="d-flex"> 
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    </form>:<button onClick={HandleLogout} className="btn btn-primary" >logout</button>}
                
    </div>
    </nav>
    )
}

export default Navbar