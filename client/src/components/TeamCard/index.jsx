import "./index.css"

const TeamCard = (props) => {
    const { team } = props
    const { name, team_image_url } = team 

    return(
        <li className="team-list-cards-container">
            <div className="team-list-cards-img-container">
                <img className="team-list-cards-img" src={team_image_url} alt="team-logo" />
            </div>
            <h2 className="team-cards-heading">{name}</h2>
        </li>
    )
}

export default TeamCard