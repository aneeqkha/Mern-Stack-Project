import styled from 'styled-components'

const Styling=styled.section`


*{
	margin: 0%;
	padding: 0%;
	box-sizing:border-box;
    
}

.main{
    font-family: 'Lato', sans-serif;
	overflow-x: hidden;
    overflow-y: hidden;
    height: 575px;
    background-color: seagreen;

}

.header {
display: flex;
background-color: ghostwhite;
}
.header >h1{
    padding: 1.5% 0% 1% 0%;
    font-size: 200%;
}
.header-img{
    width: 6%;
}

.Form{
padding-left: 35%;
align-items: center;
}

.form-input,.btn,.alert{
    margin-top: 1%;
    height: 30px;
    width: 50%;
}
.alert{
    text-align: center;
    background-color: lightgreen;
    font-size: 150%;
    font-weight: bold;
}
.alert-danger{
    padding-top: 0.6%;
    font-size: 120%;
}

.btn{
    background-color: royalblue;
    color: white;
    font-size: 130%;
}

.label{
    font-size: 200%;
    font-weight: bold;
    color: white;
}

#select{
    margin-top: 1%;
    overflow-y: hidden;
    width: 50%;
}

.member-btn {
    
    background: transparent;
    border: transparent;
    color: white;
    cursor: pointer;
    letter-spacing:3px;
    font-size: 130%;
    height: 30px;
    width: 20%; 
  }

  .member-btn:hover,.btn-block:hover{
    color: black;
  }
  
  .member-btn:active,.btn-block:active{
    color: gray;
  }

p{
    font-size: 130%;
}
`

export default Styling