import { Link,Outlet } from "react-router-dom";
import Task_styling from "../../styling/Task.js"


const chang=()=>{
    const x= document.getElementById("btn_add_task")
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   
  }
const Task=()=>{
    return<Task_styling>
    <div className="btn_add" id="btn_add_task">
     <h1>Project</h1>   
     <Link onClick={chang} className="link_add" to='role'>Add New Task</Link>
    <div className="main-container">
       <div className="New">
        New
        <div className="add_data">
            a
        </div>
        <div className="add_data">
            a
        </div>
        
       </div>
       <div className="In_Progress">In Progress
       <div className="add_data">
            a
        </div>
        <div className="add_data">
            a
        </div>
        </div>
       <div className="Done">Done
       <div className="add_data">
            a
        </div>
        <div className="add_data">
            a
        </div>
        </div>  
       <div className="Backlog" id="Backlog">Backlog
       <div className="add_data">
            a
        </div>
        <div className="add_data">
            a
        </div>
        <div className="add_data">
            a
        </div>
        </div>
    </div>
     </div>
     <Outlet/>
    </Task_styling>

}

export default Task