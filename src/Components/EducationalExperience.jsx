function EducationalExperience({ education, setEducation, isEditing = true }) {
    return (
        <div className="section">
            <h2>Educational Experience</h2>
            {isEditing ? (
                <>
                    <input type="text" placeholder="School Name" value={education.school} onChange={(e) => setEducation({ ...education, school: e.target.value })} />
                    <input type="text" placeholder="Title of Study" value={education.title} onChange={(e) => setEducation({ ...education, title: e.target.value })} />
                    <input type="date" placeholder="Date of Study" value={education.date} onChange={(e) => setEducation({ ...education, date: e.target.value })} />
                </>
            ) : (
                <p>{education.school} - {education.title} - {education.date}</p>
            )}
        </div>
    );
}

export default EducationalExperience;