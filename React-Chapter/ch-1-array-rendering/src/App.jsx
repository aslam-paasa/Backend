import { useState } from 'react';
import './App.css'

/**
 * Functionalities:
 * 1. Array Map
 * 2. Line Index
 * 3. Forum
 * 4. Push Method
 * 5. Filter 
 * 6. Update Form
 * 7. Console
 * 8. Const*/ 

function App() {

  /**
   * 1. Add bootstrap in to your project.
   * 2. Create a Student Component with src/components folder
  */
  return (
    <>
      <Student />
    </>
  )
}


function Student() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [course, setCourse] = useState();
  const [student, setStudents] = useState([
    {"id":100, "name":"abc", "course":"ReactJS"},
    {"id":200, "name":"pqr", "course":"AngularJS"},
    {"id":300, "name":"xyz", "course":"VueJS"}
  ]);

  /**
   * 1. setStudents([...students, newStudent]); 
   * => Yahaan hum students array me naya student add karte hain. 
   * => ...student ka matlab hai ki hum existing students ko copy karte 
   *    hain, aur newStudent ko add karte hain.
   * => setStudent = oldData of student + newStudent
   * 
   * 2. setId(''); setName(''); setCourse('');
   * => Yahaan hum form ke input fields ko empty karte hain, taaki naya 
   *    student banaane ke baad form saaf ho jaaye.
   * 
   * Note: Toh, is function me hum naya student banaate hain,  usko 
   *       students array me add karte hain, aur phir form ko empty 
   *       karte hain!
  */
  const createStudent = () => {
    alert(id + " " + name + " " + course);
    const newStudent = { id: parseInt(id), name, course };
    setStudents([...student, newStudent]);
    setId('');
    setName('');
    setCourse('');
  }

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1>Create Student</h1>
        </div>
        <div className='card-body'>
          <div className='mb-3'>
            <label className='form-label'>Student Id</label>
            <input type="text" 
                  name='id' 
                  className='form-control' 
                  onChange={(e) => {setId(e.target.value)}} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Student Name</label>
            <input type="text" 
                  name='name' 
                  className='form-control'
                  onChange={(e) => {setName(e.target.value)}} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Student Course</label>
            <input type="text" 
                  name='course' 
                  className='form-control'
                  onChange={(e) => {setCourse(e.target.value)}} />
          </div>
          <button className='btn btn-primary' onClick={(createStudent)}>Create</button>
          <br />
          {id} {name} {course}
        </div>
        <div className='card-header'>
          <h1>Student List</h1>
        </div>
        <div className='card-body'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                student.map((student, index) => {
                  return <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>
                      <button className='btn btn-primary'>Update</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App

