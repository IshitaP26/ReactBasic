
import './App.css';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import AddDetails from './Pages/AddDetails';
import Comply from './Pages/Comply';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <LogIn/>
      
    </div> 
  );
}

export default App;
