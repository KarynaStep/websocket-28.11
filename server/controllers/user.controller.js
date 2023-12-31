const { User } = require('../models');

module.exports.createOrFindUser = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(body.email);
    const [user] = await User.find({ email: body.email });
    console.log(user);
    if (user) {
      return res.status(200).send({ data: user });
    }
    const newUser = await User.create(body);
    res.status(201).send({ data: newUser });
  } catch (error) {
    next(error);
  }
};
