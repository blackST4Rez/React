

const Card = (userData) => {
    
    console.log(userData);
    return (
        <div className="card">
            <img src={userData.profile} alt="chinese-new-year" />
            <h1>{userData.user}</h1>
            <p>Age - {userData.age}</p>
            <p>{userData.skill}</p> 
            <button>View Profile</button>
        </div>
    )
}

export default Card