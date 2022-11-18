
const { Schema, model } = require('mongoose');



// reaction schema: 
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
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
            // getter method to format the timestamp on query
        }
    }
)

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
            // use a getter method to format the timestamp on query
        },

        username: {
            type: String,
            required: true
        },

        reactions: {
            // array of nested documents created with "reactionSchema"
        }
    },
    {
        
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

userSchema
.virtual('reactionCount')
.get(function () {
    return this.reactions.length;
});


// initializes our Thought model
const Thought = model('Thought, thoughtSchema');

module.exports = User;