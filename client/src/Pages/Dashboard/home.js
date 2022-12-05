import { Link,Outlet} from "react-router-dom"
import Styling_home from "../../styling/home.js"
import { useState } from "react";



const Home=()=>{

const changed=()=>{
    
 const x= document.getElementById("btn_add")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

return<Styling_home>
   
    <div className="btn_add" id="btn_add">
     <h1>Project</h1>   
   <Link onClick={changed} className="link_add" to='add'>Add New Project</Link>
   </div>
   <Outlet/>
   

   </Styling_home>
}

export default Home