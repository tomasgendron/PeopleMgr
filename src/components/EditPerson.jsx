import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPerson, updatePerson } from '../services/api';

function EditPerson() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchPerson();
  }, []);

  const fetchPerson = async () => {
    const response = await getPerson(id);
    setName(response.data.name);
    setAge(response.data.age);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePerson(id, { name, age: parseInt(age) });
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Person</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditPerson;
