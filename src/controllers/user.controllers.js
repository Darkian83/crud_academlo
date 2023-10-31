const catchError = require("../utils/catchError");
const User = require("../models/User");

const getAll = catchError(async (req, res) => {
  // Operaciones...
  const users = await User.findAll();
  return res.json(users);
});

const create = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } =
    req.body;
  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    birthday,
  });
  return res.status(201).json(user);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.destroy({
    where: {
      id,
    },
  });
  return res.status(204).json(user);
});

update = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, birthday } =
    req.body;
  const user = await User.update(
    {
      first_name,
      last_name,
      email,
      password,
      birthday,
    },
    {
      where: {
        id,
      },
    }
  );
  return res.json(user);
});

module.exports = {
  getAll,
  create,
  remove,
  update,
};
