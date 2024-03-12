"use case"
import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [grade, setGrade] = useState('');

  const handleAddStudent = () => {
    if (firstName && lastName && dob && grade) {
      try {
        // Parse the input date string to ensure it is in yyyy-mm-dd format
        const dobDate = new Date(dob);
        if (isNaN(dobDate.getTime())) {
          throw new Error('Invalid Date');
        }

        const dobFormatted = dobDate.toISOString().split('T')[0];

        const newStudent = {
          first_name: firstName,
          last_name: lastName,
          date_of_birth: dobFormatted,
          current_grade_percentage: parseFloat(grade),
        };

        onAddStudent(newStudent);
        // Optionally, you can reset the form fields
        setFirstName('');
        setLastName('');
        setDob('');
        setGrade('');
      } catch (error) {
        alert('Please enter a valid Date of Birth in the format yyyy-mm-dd.');
      }
    } else {
      alert('Please fill in all the fields.');
    }
  };


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Student</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
        <input
          type="text"
          className="border text-gray-700 rounded w-full py-2 px-3"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
        <input
          type="text"
          className="border text-gray-700 rounded w-full py-2 px-3"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
        <input
          type="text"
          className="border text-gray-700 rounded w-full py-2 px-3"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Grade Percentage:</label>
        <input
          type="number"
          className="border text-gray-700 rounded w-full py-2 px-3"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-700 text-white px-4 py-2 rounded"
        onClick={handleAddStudent}
      >
        Add Student
      </button>
    </div>
  );
};

export default AddStudentForm;
