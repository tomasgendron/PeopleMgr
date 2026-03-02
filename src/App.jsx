import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PeopleList from './components/PeopleList';
import AddPerson from './components/AddPerson';
import EditPerson from './components/EditPerson';

function App() {
  return (
    <Router>
      <div>
        <h1>People Manager</h1>
        <Routes>
          <Route path="/" element={<PeopleList />} />
          <Route path="/add" element={<AddPerson />} />
          <Route path="/edit/:id" element={<EditPerson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
