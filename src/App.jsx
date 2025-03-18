import { useState } from "react";
import GeneralInfo from "./Components/GeneralInfo.JSX";
import EducationalExperience from "./Components/EducationalExperience";
import PracticalExperience from "./Components/PracticalExperience";

function App() {
  const [generalInfo, setGeneralInfo] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState({ school: "", title: "", date: "" });
  const [experience, setExperience] = useState({ company: "", position: "", responsibilities: "", from: "", to: "" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="container">
      {isEditing ? (
        <form className="cv-form">
          <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
          <EducationalExperience education={education} setEducation={setEducation} />
          <PracticalExperience experience={experience} setExperience={setExperience} />
          <button type="button" className="submit-btn" onClick={() => setIsEditing(false)}>Submit</button>
        </form>
      ) : (
        <div className="cv-display">
          <GeneralInfo generalInfo={generalInfo} isEditing={false} />
          <EducationalExperience education={education} isEditing={false} />
          <PracticalExperience experience={experience} isEditing={false} />
          <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default App;
