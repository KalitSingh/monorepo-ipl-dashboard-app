const express = require("express")
const team = require("./models/team.model")
const Teammatch = require("./models/teamMatches.model")

const app = express() 


// testing 

// to get team details
app.get("/teams", async(req, res)=> {
    try{
        const allTeams = await team.find()

        
        res.status(200).json({
            message: "team details fetched Succesfully !",
            teams: allTeams
        })
    }catch(err) {
        console.log(`Response Error !! ${err}`)
        res.send(`${err}`)
    }
    
})

// to get metadata of team
app.get("/teams/details/:id", async(req, res) => {
    const {id} = req.params

    try{

        const details = await Teammatch.findOne({team_id: id})

        if (!details) {
            return res.status(400).json({
                message: "Details Not Fetched",
               
            })
        }

        res.status(200).json({details})
        
    }catch(err){
        res.send(`Not fetched Details ${err}`)
    }
})

module.exports = app; 