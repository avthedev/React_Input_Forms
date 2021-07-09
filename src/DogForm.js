import React, { useState } from "react";

function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0)
    const handleNameChange = (event) => setName(event.target.value);
    const handleBreedChange = (event) => setBreed(event.target.value);
    const handleAgeChange = (event) => setAge(event.target.value);
    
    const handleSubmit = (event) => { 
      event.preventDefault();
      console.log(name, breed, age);
      setName("")
      setBreed("")
      setAge("")
    };
    
      return (
       <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
          </label>
          <label htmlFor="breed">Breed:
            <input id="breed" type="text" name="breed" value={breed} onChange={handleBreedChange}/>
          </label>
          <label htmlFor="age">Age:
            <input type="text" id="age" type="text" name="age" value={age} onChange={handleAgeChange} />
          </label>
          <button type="submit">Submit</button>
       </form>
    );
  }

export default DogForm;
