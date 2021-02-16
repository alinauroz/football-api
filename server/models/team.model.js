const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    members: {
        type: [String],
        default: []
    },
    owner: {
        type: String,
        required: [true, 'A team must have team owner']
    },
    name: {
        type: String,
        required: [true, 'Team name is required']
    },
    requestMembers: {
        type: [String],
        default: []
    },
    requestMatches: {
        type: [{
            from: {
                type: String,
                required: [true, 'A team is required to send match request']
            },
            message: {
                type: String,
                default: ''
            }
        }],
        default: []
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);