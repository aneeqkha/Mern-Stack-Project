import styled from "styled-components";


const Styling_home=styled.section`
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


table{
    width: 95%;
    border-collapse: collapse;
    text-align: left;
    margin-top: 4%;
    background-color: white;
    margin-left: 2%;
}

th{
    background-color: gray;
}

td,th{
    height: 40px;
    border-top: 1px solid gray;
}

.table_img{
height: 30px;
}

`

export default Styling_home