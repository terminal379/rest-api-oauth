const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async function(req, res, next) {
  // finding a user
  try {
    let user = await db.User.findOne({
      email: req.body.email
    });
    let { id, username, profileImageUrl } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
          profileImageUrl
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({
        id,
        username,
        profileImageUrl,
        token
      });
    } else {
      return next({
        status: 400,
        message: "Email o Contrasenya Invàlids."
      });
    }
  } catch (e) {
    return next({ status: 400, message: "Email o Contrasenya Invàlids." });
  }
};

exports.signup = async function(req, res, next) {
  try {
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    let token = jwt.sign(
      {
        id,
        username,
        profileImageUrl
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Aquest usuari o email ja està donat d'alta.";
    }
    return next({
      status: 400,
      message: err.message
    });
  }
};
