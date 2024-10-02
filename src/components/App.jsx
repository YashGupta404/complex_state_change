import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){
    event.preventDefault()
    const {name,value} = event.target;
    setContact((previousValue)=>{
       return{
        ...previousValue,
        [name]: value //Here [name] here the [] brackets are important as we want to use the name variable not "name" string as key
      }
    })

  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" />
        <button onChange={handleChange}>Submit</button>
      </form>
    </div>
  );
}

export default App;
