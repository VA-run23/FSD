import React, { useState, useEffect } from "react";

function Check() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect on age is working");
  }, [age]);

  useEffect(() => {

    // create a element saying namaste when this runs
    console.log("useEffect on name is working");
  }, [name]);

  return (
    <div>
      <h1>The entered age is: {age}</h1>
      <h4>You have written the name: {name}</h4>

      <label htmlFor="ageInput">Enter your age</label>
      <input
        id="ageInput"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <label htmlFor="nameInput">Enter your name</label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Check;
