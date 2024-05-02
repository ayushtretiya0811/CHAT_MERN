
import './App.css';
import MainContainer from './components/MainContainer';
import { Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login';
import '../src/App.css'
import Register from './components/auth/Register';
import Loading from './components/Loading';

function App() {
  return (
    <>
   
<Routes>
  <Route path="/" element={<Register/>} />
  {/* <Route path="/" element={<Loading/>} /> */}
  <Route path="/login" element={<Login/>} />
  <Route path="/chat" element={<MainContainer/>} />
</Routes>
    
  
    </>
  );
}

export default App;
