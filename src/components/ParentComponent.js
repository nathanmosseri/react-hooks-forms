import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

const ParentComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    return(
        <>
        <Form firstName={firstName} lastName={lastName} 
        handleFirstName={handleFirstName} handleLastName={handleLastName} />
        <DisplayData firstName={firstName} lastName={lastName} />
        </>
    )
}

export default ParentComponent