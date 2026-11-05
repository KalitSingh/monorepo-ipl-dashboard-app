const mongoose = require("mongoose") 

// it will be a nested Schema jo matchSchema ke ander nest kia jayega
const matchSchema = new mongoose.Schema({
    umpires: {type: String},
    result: {type: String},
    man_of_the_match: {type: String},
    id: {type: String},
    date: { type: String },
    venue: { type: String },
    competing_team: { type: String },
    competing_team_logo: {type: String},
    first_innings: { type: String },
    second_innings: { type: String },
    match_status: { type: String },
})

// its the teamMatchsSchema jo ki main hoga for api crud
const teamMatchsSchema = new mongoose.Schema({
    team_id: {type: String, required: true, unique: true},

    team_banner_url: { type: String },
    latest_match_details: matchSchema,
    recent_matches: [matchSchema]
})


const Teammatch = mongoose.model("Teammatch", teamMatchsSchema, "teammatches")

module.exports = Teammatch 


