function GeneralInfo({ generalInfo, setGeneralInfo, isEditing = true }) {
    return (
        <div className="section">
            <h2>General Information</h2>
            {isEditing ? (
                <>
                    <input type="text" placeholder="Name" value={generalInfo.name} onChange={(e) => setGeneralInfo({ ...generalInfo, name: e.target.value })} />
                    <input type="email" placeholder="Email" value={generalInfo.email} onChange={(e) => setGeneralInfo({ ...generalInfo, email: e.target.value })} />
                    <input type="tel" placeholder="Phone" value={generalInfo.phone} onChange={(e) => setGeneralInfo({ ...generalInfo, phone: e.target.value })} />
                </>
            ) : (
                <p>{generalInfo.name} - {generalInfo.email} - {generalInfo.phone}</p>
            )}
        </div>
    );
}

export default GeneralInfo;