
import './App.css';
import {HashRouter  as Router,Routes,Route,} from 'react-router-dom'
import Login from "./Login";
import TodoList from "./TodoList";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/todoApp" element={<Login/>}></Route>
        <Route path="/todoList" element={<TodoList/>}></Route>
      </Routes>
    </Router>
    
  
     
   
  );
}

export default App;
