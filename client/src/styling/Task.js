import styled from "styled-components";

const Task_styling=styled.section`

*{
    margin: 0%;
    padding: 0%;
}
.link_add{
    text-decoration: none;
    color: royalblue;
    float: right;
    padding-top: 1%;
}

.main{
    background-color: lightgreen;
    height: 500px;
}

.btn_add{
    background-color: lightgreen;
    float: left;
    width: 100%;
    /* display: block; */
}

h1{
    float: left;
    color: white;
}

.main-container {
  margin-top: 5%;
  background-color: DodgerBlue;
  width: 100%;
}

.main-container > div {
  float:left ;
  width: 23%;
  margin: 1%;
  font-size: 30px;
  background-color: lightgrey;
}

.add_data{
    width: 90%;
    background-color: white;
    margin: 1% 5% 5% 5%;
}
@media (max-width: 1200px) {
 

.main-container >div{
    width: 30%;
}
}

@media  (max-width:1000px){
    
.main-container >div{
    
    width: 40%;
}
}

@media (max-width: 750px){
    .main-container >div{
    
    width: 70%;
}

.main-container{
    margin-top: 10%;
}

}



`

export default Task_styling