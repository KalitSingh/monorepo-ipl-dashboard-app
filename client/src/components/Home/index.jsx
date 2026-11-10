import { Component } from "react"

import TeamCard from "../TeamCard"

import Logo from "../../assets/ipl-logo-img.png"
import "./index.css"


// dummy data 
const dummyTeam = 
    [
        {
            "name": "Royal Challengers Bangalore",
            "id": "RCB",
            "team_image_url": "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png"
        },
        {
            "name": "Kolkata Knight Riders",
            "id": "KKR",
            "team_image_url": "https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png"
        },
        {
            "name": "Kings XI Punjab",
            "id": "KXP",
            "team_image_url": "https://assets.ccbp.in/frontend/react-js/kxp-logo-img.png"
        },
        {
            "name": "Chennai Super Kings",
            "id": "CSK",
            "team_image_url": "https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
        },
        {
            "name": "Rajasthan Royals",
            "id": "RR",
            "team_image_url": "https://assets.ccbp.in/frontend/react-js/rr-logo-img.png"
        },
        {
            "name": "Mumbai Indians",
            "id": "MI",
            "team_image_url": "https://assets.ccbp.in/frontend/react-js/mi-logo-img.png"
        },
        {
            "name": "Sunrisers Hyderabad",
            "id": "SH",
            "team_image_url": "https://assets.ccbp.in/frontend/react-js/srh-logo-img.png"
        },
        {
            "name": "Delhi Capitals",
            "id": "DC",
            "team_image_url": "https://assets.ccbp.in/frontend/react-js/dc-logo-img.png"
        }
    ]


class Home extends Component {

    render(){ 
        const teamCardImgae = "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png";
        return(
            <>
                <div className="home-page-container">
                    <section className="home-page-card">
                        <div className="home-page-card-title-container">
                            <div className="home-page-logo-container">
                                <img className="home-page-logo" src={Logo} alt="logo" />
                            </div>
                            <h1 className="home-page-title">IPL Dashboard</h1>
                        </div>

                        <div>
                            <ul className="home-page-team-list-container">
                                {
                                    dummyTeam.map((eachTeam) => (<TeamCard team={eachTeam} key={eachTeam.id} />))
                                }
                            </ul>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}

export default Home