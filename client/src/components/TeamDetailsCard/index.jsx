import "./index.css"

const TeamDetailsCard = (props) => {
    const {teamDetails} = props
    const { competing_team_logo, competing_team, match_status, result } = teamDetails

    return(
        <>
            <li className="team-details-card-container">
                <div className="team-details-card-img-container">
                    <img src={competing_team_logo} className="team-details-card-img" alt="team-detail-logo" />
                </div>
                <h1 className="team-details-card-title">{competing_team}</h1>
                <p className="team-details-card-descrip">{result}</p>
                <p className="team-details-card-result">{match_status}</p>
            </li>
        </>
    )
}

export default TeamDetailsCard