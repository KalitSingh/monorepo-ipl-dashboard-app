import {Link} from "react-router-dom"

import "./index.css"

const TeamCard = (props) => {
    const { team } = props
    const { name, team_image_url, id } = team 

    return(
        <Link className="team-cards-link" to={`/team/details/${id}/`}>
        <li className="team-list-cards-container">
            <div className="team-list-cards-img-container">
                <img className="team-list-cards-img" src={team_image_url} alt="team-logo" />
            </div>
            <h2 className="team-cards-heading">{name}</h2>
        </li>
        </Link>
    )
}

export default TeamCard