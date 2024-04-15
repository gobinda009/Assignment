import {Routes, Route} from 'react-router-dom'
import Landing from "./components/Landing"; 
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Landing/> }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        

      </Routes>

    </div>
  );
}

export default App;
