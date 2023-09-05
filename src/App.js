import logo from './logo.svg';
import './App.css';
import Rgstr from './component/Rgstr';
import Login from './component/Login';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
   
    <div>
      <Routes>
        <Route path='/' element={<Rgstr/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Home' element={<Home/>}/>
        
      </Routes>





    </div>
  );
}

export default App;
