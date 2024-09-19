// import React from 'react';
// import Home from './pages/home/Home'
// import TopBar from './components/topbar/TopBar'
// import Single from './pages/single/Single'
// import Write from './pages/write/Write'
// import Settings from './pages/settings/Settings'
// import Login from './pages/login/Login'
// import Register from './pages/register/Register'



// function App() {
//   return (
   
//     <>
//       <TopBar />
//       <Home />
//     </>
    
 

    
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Post from './components/post/Post';

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Register /> :<Register />} />
        <Route path="/login" element={user ? <Login /> :<Login />} />  
        <Route path="/write" element={user ? <Write /> :<Write />} />
        <Route path="/settings" element={user ? <Settings /> :<Register />} />
        <Route path="/post/:postId" element={<Single /> } />
                  
      </Routes>
    </Router>
  );
}

export default App;
