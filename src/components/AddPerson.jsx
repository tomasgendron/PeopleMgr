import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPerson } from '../services/api';

function AddPerson() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPerson({ name, age: parseInt(age) });
    navigate('/');
  };

  return (
    <div>
      <h2>Add Person</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddPerson;
