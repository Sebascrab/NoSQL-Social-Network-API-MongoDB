
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


// reaction schema: 
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => dateFormat(date)
        }
    },
    {
        
        toJSON: {
          virtuals: true,
        },
        id: false,
      }

);

// Thought Schema:
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => dateFormat(date)
        },

        username: {
            type: String,
            required: true
        },

        reactions: [reactionSchema]
            
        
    },
    {
        
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

thoughtSchema
.virtual('reactionCount')
.get(function () {
    return this.reactions.length;
});


// initializes our Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;