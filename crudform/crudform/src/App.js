import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const initializevalue = {
    firstName: '',
    lastName: '',
    number: '',
    email: '',
    gender: 'male',
    subjects: '',
  };
  // other way to intialize 
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [number, setNumber] = useState('');

  const [person, setPerson] = useState(initializevalue);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getFromLocal = JSON.parse(localStorage.getItem('people'));
    if (getFromLocal) {
      setPeople(getFromLocal);
    }
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson((prev) => ({ ...prev, [name]: value }));
  };
        //chande edit
        const handleEdit = (id) => {
          const personToEdit = people.find((person) => person.id === id);
          setPerson(personToEdit);
         };


  function setinLocal() {
    localStorage.setItem('people', JSON.stringify(people));
  }

  const generateRandomID = () => {
    return Math.floor(Math.random() * 10000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, number, email, gender, subjects } = person;


    // Generate a random ID
    const id = generateRandomID();

    const newPerson = {
      id,
      firstName,
      lastName,
      number,
      email,
      gender,
      subjects,
    };

    setPeople((prev) => [...prev, newPerson]);
    setPerson(initializevalue);
    setinLocal();
  };

  const handleDelete = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);

    // Remove data from local storage
    localStorage.removeItem(`person_${id}`);
  };

  return (
    <>
      <div className="App">
        <h1>REACT FORM</h1>
        <h2>Person Information</h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: 'flex', flexDirection: 'column', width: '400px' }}
        >
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={person.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="number">Phone Number (10 digits):</label>
            <input
              type="text"
              id="number"
              name="number"
              value={person.number}
              onChange={handleChange}
              minLength={10}
              maxLength={10}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={person.gender}
              onChange={handleChange}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subjects">Subjects:</label>
            <input
              type="text"
              id="subjects"
              name="subjects"
              value={person.subjects}
              onChange={handleChange}
            />
          </div>

          <button type={"submit"} buttonName={"Submit"} >Submit</button>
        </form>

        <h2>Person Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Subjects</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.number}</td>
                <td>{person.email}</td>
                <td>{person.gender}</td>
                <td>{person.subjects}</td>
                <td>
                  <button onClick={() => handleDelete(person.id)}>Delete</button>
                  <button onClick={() => handleEdit(person.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
