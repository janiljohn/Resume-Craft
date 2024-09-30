import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const University = () => {

  const history = useNavigate()
  const [universities, setUniversities] = useState([{ name: "", graduationDate: "", major: "", location: "" }]);

  // Handle change functions
  const handleUniversityChange = (index, e) => {
    const updatedUniversities = [...universities];
    updatedUniversities[index][e.target.name] = e.target.value;
    setUniversities(updatedUniversities);
  };

  // Add entry functions
  const addUniversity = () => {
    setUniversities([...universities, { name: "", graduationDate: "", major: "", location: "" }]);
  };

  // Remove entry functions
  const removeUniversity = (index) => {
    const updatedUniversities = universities.filter((_, i) => i !== index);
    setUniversities(updatedUniversities);
  };

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
        const user = token
        if(!user){
            localStorage.removeItem('token')
            history('/login')
        } else {
            populateUniversity()
        }
    }
  }, [])

  async function populateUniversity(){

    const req = await fetch('http://localhost:1337/api/university', {
        headers: {
            'x-access-token': localStorage.getItem('token')
        }
    })

    const data = await req.json()
    if(data.status === 'ok'){
        const userUniversities = JSON.parse(data.university)
        setUniversities(userUniversities)
    } else{
        alert(data.error)
    }

  }

  async function updateUniversity(){
    const req = await fetch('http://localhost:1337/api/university',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
            university: universities
        })
    })

    const data = await req.json()
    if(data.status === 'ok'){
        alert('University List Updated')
    } else{
        alert(data.error)
    }

  }

  return (
    <div>
      {/* University Section */}
      <h3>University</h3>
      {universities.map((university, index) => (
        <div key={index}>
          <br/>
          <input
            type="text"
            name="name"
            placeholder="University Name"
            value={university.name}
            onChange={(e) => handleUniversityChange(index, e)}
          />
          <br/>
          <input
            type="text"
            name="graduationDate"
            placeholder="Expected Graduation Date"
            value={university.graduationDate}
            onChange={(e) => handleUniversityChange(index, e)}
          />
          <br/>
          <input
            type="text"
            name="major"
            placeholder="Major"
            value={university.major}
            onChange={(e) => handleUniversityChange(index, e)}
          />
          <br/>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={university.location}
            onChange={(e) => handleUniversityChange(index, e)}
          />
          <br/>
          <button onClick={() => removeUniversity(index)}>Remove</button>
        </div>
      ))}
      <br/>
      <button onClick={addUniversity}>Add University</button>
      <br/>
      <button onClick={updateUniversity}>Update University</button>
      <br/>
      <button onClick={populateUniversity}>Populate University</button>
    </div>
  );
};

export default University;
