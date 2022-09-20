import './App.scss';
import Home from './pages/Home/home';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user=false;
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user? <Home/> : <Navigate to="/register"/>}/>
      </Routes>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path='/movies' element={<Home type="movies"/>}/>
      </Routes>
      <Routes>
        <Route path='/series' element={<Home type="series"/>}/>
      </Routes>
      <Routes>
        <Route path='/watch' element={<Watch/>}/>
      </Routes>
    </Router>
  );
}

export default App;
