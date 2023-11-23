import React from 'react'

const Home = () => {
    const backgroundStyle = {
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url("https://source.unsplash.com/random")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        
      };
      const textStyle = {
        fontSize: '30px',
        fontFamily: 'Arial, sans-serif', 
        fontStyle: 'italic' 
      };

  return (<div style={backgroundStyle}>
    <div className='container' >
      <header className='text-center'>
    <h1>Campus Mate</h1>
      </header>
        <p style={textStyle}>
        Welcome to Campus-Mate, where academic management meets simplicity. Our platform is dedicated to enhancing the student experience by offering a seamless solution for viewing, registering, and switching subjects. Designed with user-friendliness in mind, Campus-Mate empowers students to effortlessly navigate their academic journey. Say goodbye to the hassle of managing subjects and hello to a more efficient and organized approach. Whether you're planning your upcoming semester, exploring new subjects, or making adjustments to your academic schedule, we're here to make the process smooth and stress-free. Join us in embracing a new era of academic management at Campus-Mate
        </p>
       <footer className="blockquote-footer position-fixed bottom-0">
        <p>&copy; 2023 Campus-Mate. All rights reserved.</p>
        </footer>
    </div></div>
  )
}

export default Home
