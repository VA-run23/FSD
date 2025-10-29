import React, { useState, useEffect } from 'react';

function AgeUpdater({ age }) {
  const [currentAge, setCurrentAge] = useState(age);
  const [newAge, setNewAge] = useState('');

  useEffect(() => {
    console.log(`Age updated to: ${currentAge}`);
  }, [currentAge]);

  const handleUpdate = () => {
    const parsedAge = parseInt(newAge);
    if (!isNaN(parsedAge)) {
      setCurrentAge(parsedAge);
      setNewAge('');
    }
  };

  return (
    <div>
      <h1>Age: {currentAge}</h1>
      <input
        type="number"
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
        placeholder="Enter new age"
      />
      <button onClick={handleUpdate}>Update Age</button>
    </div>
  );
}

export default AgeUpdater;
