import styled from "styled-components";

const Styling=styled.section`

*{
	margin: 0%;
	padding: 0%;
	box-sizing:border-box;
    
}

.addProject{
    padding-left: 50px;
    background-color: lightgreen;
}

.heading{
    color: white;
    font-size: 150%;
    padding-left: 10px;
}

.Form{
    background-color: white;
    padding:10px;
    margin: 10px;
    border-radius: 10px;
}
input{
    width: 100%;
}
#Description,#Members{
   width: 100%;
}

#Members{
    resize: none;
    overflow: hidden;
}

.btn2{
    margin-left:5% ;
    color: white;
    background-color: royalblue;
    width: 65px;

}

.btn{
    border-radius: 5px;
}

.btn:hover{
    background-color: blue;
}

.btns{
    margin-left: 87%;
    
}


 @media only screen and (max-width: 1200px) {
  .btns{
    margin-left: 80%;
  }
}

@media only screen and (max-width: 800px) {
  .btns{
    margin-left: 60%;
  }
}

@media only screen and (max-width: 400px) {
  .btns{
    margin-left: 20%;
  }
}
 

`

export default Styling