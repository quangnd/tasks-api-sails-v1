module.exports = {
  friendlyName: "Signup",

  description: "Signup user.",

  inputs: {
    username: {
      required: true,
      type: "string",
      description: "The username"
    },

    password: {
      required: true,
      type: "string",
      maxLength: 200,
      example: "passwordlol",
      description: "The unencrypted password to use for the new account."
    }
  },

  exits: {
    success: {
      description: "New user account was created successfully."
    },

    invalid: {
      responseType: "badRequest",
      description: "The provided username, password are invalid.",
      extendedDescription:
        "If this request was sent from a graphical user interface, the request " +
        "parameters should have been validated/coerced _before_ they were sent."
    },

    usernameAlreadyInUse: {
      statusCode: 409,
      description: "The provided username is already in use."
    }
  },

  fn: async function(inputs) {
    let username = inputs.username.toLowerCase();

    const user = {
      username: username,
      password: await sails.helpers.passwords.hashPassword(inputs.password)
    };

    let newUser = await User.create(user)
      .intercept({ name: "UsageError" }, "invalid")
      .fetch();

    console.log(newUser)

  }
};
