module.exports = {
  friendlyName: "Get users",

  description: "",

  inputs: {},

  exits: {},

  fn: async function(inputs) {
    const users = await User.find();
    return users;
  }
};
