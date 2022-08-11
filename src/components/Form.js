import React, { useState } from "react";

function Form({firstName, lastName, handleFirstName, handleLastName,}) {

  const [number, setNumber] = useState('')
  const [isValidNumber, setisValidNumber] = useState(null)

  const handleNumberChange= (e) => {
    const newNumber = parseInt(e.target.value)
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber)
      setisValidNumber(null)
    } else {
      setisValidNumber(`${newNumber} is not a valid number!`)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    console.log(lastName)   
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={number} onChange={handleNumberChange}/>
      {isValidNumber ? <span style={{color: 'red'}}>{isValidNumber}</span> : null}
      <input type="text" value={lastName} onChange={handleLastName}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
