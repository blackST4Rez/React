
const Card2 = ({
    name,
    age,
    skills
}) => {
    return (
        <div>
            <h1>This is the child component of Card.</h1>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{skills}</h2>
        </div>
    )
}

export default Card2