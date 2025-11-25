// import the requires modules
const express = require("express");
const { getUsers, createUsers, updateUsers, deleteUsers, getSingleUser } = require("../controllers/user.controllers");
const UserRouter = express.Router();

UserRouter.route('/user').get(getUsers);
UserRouter.route('/user').post(createUsers);
UserRouter.route('/user/:id')
    .get(getSingleUser)
    .put(updateUsers)
    .delete(deleteUsers);

module.exports = UserRouter;