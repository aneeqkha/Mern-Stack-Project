import 'normalize.css'
import { Link,Outlet } from "react-router-dom";
import main from '../../images/208934.svg'
import Styling from '../../styling/mainLayout.js';

const Mainlayout=()=>{
   return <Styling> 
    <div className="header">
     <img src={main} alt='img' className='header-img'/>
     <h1>ebryx</h1>
    
    <nav>
        <Link className='link' to='Home'>Home</Link>
        <Link className='link' to='User'>User</Link>
    </nav>

  </div>
  <Outlet/>
  </Styling>
    
    
  
}

export default Mainlayout