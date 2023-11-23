import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
function StudentProfile() {
    const [info, setInfo] = useState([]);
    
    useEffect(() => {
      console.log(localStorage.getItem('Sid'))
      axios.post(`http://localhost:5000/studentInfo/get`,{headers:{Sid:localStorage.getItem('Sid')}}).then((response) => {
        console.log(response.data);
        setInfo(response.data);

      });
    }, []);
    
      const backgroundStyle = {
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url("https://source.unsplash.com/random")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', 
          
        };
  
    return (
      <div className="App" style={backgroundStyle}>
        {info.map((value,key) => {
          localStorage.setItem('Name',value.Name)
          localStorage.setItem('Sem',value.Sem)
          if(value.SUB1){
          localStorage.setItem('SUB1',value.SUB1)
          localStorage.setItem('SUB2',value.SUB2)
          localStorage.setItem('SUB3',value.SUB3)
          localStorage.setItem('SUB4',value.SUB4)
          localStorage.setItem('SUB5',value.SUB5)}
          else{
            localStorage.setItem('SUB1',"") 
          }
          return (
            <div className="post">
              <div className="title"> {value.Sid} </div>
              <div className="body">Name:{value.Name}<br></br> sem:{value.Sem}</div>
              <div className="footer">Subject 1 : {value.SUB1}</div>
              <div className="footer">Subject 2 : {value.SUB2}</div>
              <div className="footer">Subject 3 : {value.SUB3}</div>
              <div className="footer">Subject 4 : {value.SUB4}</div>
              <div className="footer">Subject 5 : {value.SUB5}</div>
            </div>
          );
        })}
      </div>
    );
}

export default StudentProfile
