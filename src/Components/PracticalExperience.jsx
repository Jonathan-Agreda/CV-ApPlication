function PracticalExperience({ experience, setExperience, isEditing = true }) {
    return (
        <div className="section">
            <h2>Practical Experience</h2>
            {isEditing ? (
                <>
                    <input type="text" placeholder="Company Name" value={experience.company} onChange={(e) => setExperience({ ...experience, company: e.target.value })} />
                    <input type="text" placeholder="Position Title" value={experience.position} onChange={(e) => setExperience({ ...experience, position: e.target.value })} />
                    <textarea placeholder="Main Responsibilities" value={experience.responsibilities} onChange={(e) => setExperience({ ...experience, responsibilities: e.target.value })} />
                    <input type="date" placeholder="From" value={experience.from} onChange={(e) => setExperience({ ...experience, from: e.target.value })} />
                    <input type="date" placeholder="To" value={experience.to} onChange={(e) => setExperience({ ...experience, to: e.target.value })} />
                </>
            ) : (
                <>
                    <p>{experience.company} - {experience.position} ({experience.from} to {experience.to})</p>
                    <p>{experience.responsibilities}</p>
                </>
            )}
        </div>
    );
}

export default PracticalExperience;