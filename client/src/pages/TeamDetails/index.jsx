import { Component } from "react";

class TeamDetails extends Component{

    render(){
        const { match } = this.props
        console.log(match)
        const {id} = match.params 
        console.log(match.params, `This id - ${match.params.id}`)
        return(
            <>
                This is Details Page
            </>
        )
    }
}

export default TeamDetails