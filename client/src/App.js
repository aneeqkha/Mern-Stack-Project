import { Login,Error,AddProject,Protected } from './Pages';
import { Home,User,Mainlayout,Task,Role } from './Pages/Dashboard/index.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>

      <Route path='/Dashboard' element={<Protected>
        <Mainlayout/>
        </Protected>
        } >
        <Route path='Home' element={<Home/>}>
             <Route path='add' element={<AddProject/>}/>
             <Route path='task' element={<Task/>}>
                <Route path='role' element={<Role/>}/>
             </Route>
        </Route> 
        <Route path='User' element={<User/>}/>
        
      </Route>
      

      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
 
  )
}

export default App;
