import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({Sid: "", Password: ""}) 
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/studentlog/get", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Sid: credentials.Sid, Password: credentials.Password})
        });
        const json = await response.json()
        console.log(json);
        
            // Save the auth token and redirect
        if(json){
            localStorage.setItem('Sid', json.Sid); 
        history(`/subpro`);
        }
        else{history("/login")}
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='container' style={{width:"300px", border:"2px Solid Black", padding:"30px"}}>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Sid</label>
                    <input type="number" className="form-control" value={credentials.Sid} onChange={onChange} id="Sid" name="Sid" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.Password} onChange={onChange} name="Password" id="Password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login