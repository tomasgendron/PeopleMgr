import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPeople, deletePerson } from '../services/api';

function PeopleList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    const response = await getPeople();
    setPeople(response.data);
  };

  const handleDelete = async (id) => {
    await deletePerson(id);
    fetchPeople();
  };

  return (
    <div>
      <h2>People List</h2>
      <Link to="/add">Add Person</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>
                <Link to={`/edit/${person.id}`}>Edit</Link>
                <button onClick={() => handleDelete(person.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleList;
