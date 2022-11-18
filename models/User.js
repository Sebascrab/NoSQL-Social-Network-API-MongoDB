

const { Schema, model} = require('mongoose');
const { arrayBuffer } = require('stream/consumers');



// user schema
const userSchema = new Schema(
    {
       username: {
        type: String, 
        required: "Must have username",
        unique: true,
        trim: true
       },

       email: {
            type: String,
            required: "Must have email",
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
       },

       thought: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thought",
        },
      ],

      friends: [
          {
              type: Schema.Types.ObjectId,
              ref: "Friends"
          },
      ],
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
          virtuals: true,
        },
        id: false,
      },
);

userSchema
.virtual('friendCount')
.get(function () {
    return this.friends.length;
});

const User = model('User, userSchema');

module.exports = User;