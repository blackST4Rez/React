const Card = ({
    name,
    age,
    skill,
    profile
}) => {
    
    return (
        <div className="card">
            <img src={profile} alt="user-profile" />
            <h1>{name}</h1>
            <p>Age - {age}</p>
            <p>{skill}</p> 
            <button>View Profile</button>
        </div>
    )
}

export default Card