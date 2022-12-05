import {useEffect} from 'react'

const DashBoard=()=>{
const fetchdata=async()=>{
    //  const response=await fetch("/data.json")
const response=await fetch('/api/m1')
const data= await response.json()
console.log(data)
}
useEffect(()=>{
    fetchdata()
},[])
return<h1>DashBoard</h1>
}

export default DashBoard