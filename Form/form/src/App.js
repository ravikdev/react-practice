import React, { useState } from 'react';
import './App.css';

function App() {

  const infoForm = {
    name: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(infoForm);
  //giving initial value (empty string)

  const handleChange = (e) => {
    //function is called whenever any of the input fields (name, email, message) change.
    //It takes e as parameter and extract values
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      //create a shallow copy of the previous state.
      [name]: value
    }));

  };

  const handleReset = () => {
    setFormData(infoForm);
  };

  return (
    <div className="App">
      <h1>Simple Form</h1>
      <form >
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
       
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>

        <div>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>

    </div>

  );

}


export default App;