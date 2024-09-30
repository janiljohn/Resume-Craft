import React, { useState } from "react";

const ResumeForm = () => {
  const [universities, setUniversities] = useState([{ name: "", graduationDate: "", major: "", location: "" }]);
  const [workExperiences, setWorkExperiences] = useState([{ company: "", position: "", startDate: "", endDate: "", description: "", location: "" }]);
  const [projects, setProjects] = useState([{ title: "", description: "" }]);

  // Handle change functions
  const handleUniversityChange = (index, e) => {
    const updatedUniversities = [...universities];
    updatedUniversities[index][e.target.name] = e.target.value;
    setUniversities(updatedUniversities);
  };

  const handleWorkExperienceChange = (index, e) => {
    const updatedWorkExperiences = [...workExperiences];
    updatedWorkExperiences[index][e.target.name] = e.target.value;
    setWorkExperiences(updatedWorkExperiences);
  };

  const handleProjectChange = (index, e) => {
    const updatedProjects = [...projects];
    updatedProjects[index][e.target.name] = e.target.value;
    setProjects(updatedProjects);
  };

  // Add entry functions
  const addUniversity = () => {
    setUniversities([...universities, { name: "", graduationDate: "", major: "", location: "" }]);
  };

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, { company: "", position: "", startDate: "", endDate: "", description: "", location: "" }]);
  };

  const addProject = () => {
    setProjects([...projects, { title: "", description: "" }]);
  };

  // Remove entry functions
  const removeUniversity = (index) => {
    const updatedUniversities = universities.filter((_, i) => i !== index);
    setUniversities(updatedUniversities);
  };

  const removeWorkExperience = (index) => {
    const updatedWorkExperiences = workExperiences.filter((_, i) => i !== index);
    setWorkExperiences(updatedWorkExperiences);
  };

  const removeProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

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

      {/* Work Experience Section */}
      <h3>Work Experience</h3>
      {workExperiences.map((workExperience, index) => (
        <div key={index}>
          <br/>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={workExperience.company}
            onChange={(e) => handleWorkExperienceChange(index, e)}
          />
          <br/>
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={workExperience.position}
            onChange={(e) => handleWorkExperienceChange(index, e)}
          />
          <br/>
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            value={workExperience.startDate}
            onChange={(e) => handleWorkExperienceChange(index, e)}
          />
          <br/>
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            value={workExperience.endDate}
            onChange={(e) => handleWorkExperienceChange(index, e)}
          />
          <br/>
          <textarea
            name="description"
            placeholder="Description"
            value={workExperience.description}
            onChange={(e) => handleWorkExperienceChange(index, e)}
          />
          <br/>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={workExperience.location}
            onChange={(e) => handleWorkExperienceChange(index, e)}
          />
          <br/>
          <button onClick={() => removeWorkExperience(index)}>Remove</button>
        </div>
      ))}
      <br/>
      <button onClick={addWorkExperience}>Add Work Experience</button>

      {/* Personal Projects Section */}
      <h3>Personal Projects</h3>
      {projects.map((project, index) => (
        <div key={index}>
          <br/>
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <br/>
          <textarea
            name="description"
            placeholder="Project Description"
            value={project.description}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <br/>
          <button onClick={() => removeProject(index)}>Remove</button>
        </div>
      ))}
      <br/>
      <button onClick={addProject}>Add Project</button>
    </div>
  );
};

export default ResumeForm;
