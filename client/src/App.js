import { Login,Error,AddProject,DashBoard,Protected } from './Pages';
import { Home,User,Mainlayout } from './Pages/Dashboard/index.js';
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
        </Route> 
        <Route path='User' element={<User/>}/>
        
      </Route>
      

      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
 
  )
}

export default App;
