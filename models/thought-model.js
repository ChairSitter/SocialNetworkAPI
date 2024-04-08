const mongoose = require('mongoose');

const formatDate = (date) => {
    return dayjs(date).format('mm/dd/yyyy');
}

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId
    },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, get: formatDate },
})

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, maxLength: 280 },
    createdAt: { type: Date, default: Date.now, get: formatDate },
    username: { type: String, required: true },
    reactions: reactionSchema,
},
    {
        toJSON: { virtuals: true }
    }
)

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
}); //TODO ensure this works

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = (Thought, thoughtSchema);