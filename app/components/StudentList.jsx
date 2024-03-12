// StudentList.jsx
import React from 'react';

const StudentList = ({ students, onEdit, onRemove }) => {
  return (
    <div className="bg-blue-500 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Student List</h1>
      <ul className="list-none p-0">
        {students.map((student) => (
          <li key={student.id} className="mb-8 border-b-2 pb-4">
            <strong>Name:</strong> {`${student.first_name} ${student.last_name}`} <br />
            <strong>Date of Birth:</strong> {student.date_of_birth} <br />
            <strong>Grade Percentage:</strong> {student.current_grade_percentage}%
            <div className="mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded mr-4" onClick={() => onEdit(student.id)}>Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => onRemove(student.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;