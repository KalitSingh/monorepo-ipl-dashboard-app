const mongoose = require("mongoose") 

const teamSchema = new mongoose.Schema({
    name: {type: String},
    id: {type: String},
    team_image_url: {type: String}
})

const team = mongoose.model("team", teamSchema, "teams")

module.exports = team 













// {
//     _id: ObjectId('6ae924f77676d3425ce04bb6'),
//         name: 'Rajasthan Royals',
//             id: 'RR',
//                 team_image_url: 'https://assets.ccbp.in/frontend/react-js/rr-logo-img.png'
// }