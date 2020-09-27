module.exports = (req, res, next) => {

  console.log("requireLogin middleware is running...");
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  next();
};
