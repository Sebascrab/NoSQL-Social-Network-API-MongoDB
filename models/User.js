

const { Schema, model} = require('mongoose');




// user schema:
const userSchema = new Schema(
    {
       username: {
        type: String, 
        required: true,
        unique: true,
        trim: true
       },

       email: {
            type: String,
            required: "Must have email",
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
       },

       thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thought",
        }
      ],

      friends: [
          {
              type: Schema.Types.ObjectId,
              ref: "User"
          }
      ]
    },
    {
        
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

userSchema
.virtual('friendCount')
.get(function () {
    return this.friends.length;
});


// initializes our User model
const User = model('User', userSchema);

module.exports = User;