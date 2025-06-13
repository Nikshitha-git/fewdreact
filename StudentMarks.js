import React, { useState } from 'react';

const StudentMarks = () => {
  const studentsCount = 5;
  const subjectsCount = 3;

  const [marks, setMarks] = useState(
    Array.from({ length: studentsCount }, () => Array(subjectsCount).fill(''))
  );

  const handleChange = (studentIndex, subjectIndex, value) => {
    const updated = [...marks];
    updated[studentIndex][subjectIndex] = value;
    setMarks(updated);
  };

  const calculateTotal = (studentMarks) => {
    return studentMarks.reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
  };

  const calculateAverage = (studentMarks) => {
    const validMarks = studentMarks.filter((val) => val !== '');
    const total = calculateTotal(studentMarks);
    return validMarks.length ? (total / validMarks.length).toFixed(2) : '0.00';
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Marks Summary</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Student</th>
            {[...Array(subjectsCount)].map((_, i) => (
              <th key={i}>Subject {i + 1}</th>
            ))}
            <th>Total</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((studentMarks, studentIndex) => {
            const total = calculateTotal(studentMarks);
            const average = calculateAverage(studentMarks);
            return (
              <tr key={studentIndex}>
                <td>Student {studentIndex + 1}</td>
                {studentMarks.map((mark, subjectIndex) => (
                  <td key={subjectIndex}>
                    <input
                      type="number"
                      value={mark}
                      onChange={(e) =>
                        handleChange(studentIndex, subjectIndex, e.target.value)
                      }
                      style={{ width: '60px' }}
                    />
                  </td>
                ))}
                <td>{total}</td>
                <td>{average}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentMarks;
