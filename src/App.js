import React, { useState } from 'react';
import './App.css';

function App() {
  // State hooks to manage form data and success message
  const [formData, setFormData] = useState({
    name: '',  // User's name
    age: '',   // User's age group
    file: null, // Selected file for upload
  });
  const [message, setMessage] = useState(''); // Success message for file selection

  // Handle changes in input fields (name and age)
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure input name and value
    setFormData({
      ...formData, // Spread existing formData
      [name]: value, // Update the specific field based on name
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0], // Save the selected file
    });

    // Set success message if file is selected, else reset the message
    if (e.target.files[0]) {
      setMessage('File selected successfully!');
    } else {
      setMessage('');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    // Validation: Check if name and file are entered
    if (!formData.name || !formData.file) {
      alert('Please enter your name and select a file!');
      return;
    }

    // Log form data and display submission message
    console.log(formData);
    alert('Form Submitted!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <h1 className="dashboard-title">Healthcare Dashboard</h1> {/* Main title of the dashboard */}
        </div>

        {/* Form for collecting user data */}
        <form className="form-container" onSubmit={handleSubmit}>
          
          {/* Input field for user's name */}
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}  // Controlled input for name
              onChange={handleChange} // Handle changes in name
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Dropdown to select age group */}
          <div className="input-group">
            <label htmlFor="age">Age</label>
            <select
              id="age"
              name="age"
              value={formData.age} // Controlled input for age
              onChange={handleChange} // Handle changes in age
              required
            >
              <option value="">Select Age</option>
              <option value="0-5">0-5 years (Kids)</option>
              <option value="6-12">6-12 years</option>
              <option value="13-17">13-17 years</option>
              <option value="18-25">18-25 years</option>
              <option value="26-35">26-35 years</option>
              <option value="36-45">36-45 years</option>
              <option value="46-60">46-60 years</option>
              <option value="60+">60+ years</option>
            </select>
          </div>

          {/* File upload section */}
          <div className="input-group file-input">
            <label htmlFor="file">Upload File</label>
            <div className="file-upload">
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}  // Handle file selection
                required
              />
              {/* Button to trigger file input */}
              <button 
                type="button" 
                className="choose-file-button" 
                onClick={() => document.getElementById('file').click()}>
                Choose File
              </button>

              {/* Display file name after selection */}
              {formData.file && <span className="file-name">{formData.file.name}</span>}
            </div>

            {/* Display success message after file selection */}
            {message && <div className="success-message">{message}</div>}
          </div>

          {/* Submit button for form submission */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
