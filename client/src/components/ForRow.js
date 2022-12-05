const ForRow=({type,name,value,handleChange,placeholder})=>{
return(
    <div className='form-row'>

    <input
      type={type}
      value={value}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      className='form-input'  
    />
  
  </div>
)
}

export default ForRow