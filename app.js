require("dotenv-safe").config();
const express = require('express');
//const db = require('./models'); // agafa index.js per defecte
const morgan = require('morgan');
const errorHandler = require("./handlers/error");
const authRouter = require("./routes/auth");
const llibresRouter = require('./routes/llibres');
const { loginRequired } = require("./middleware/auth");
const app = express();

// middlewares
app.use(express.json()); // forma moderna de bodyParser.json()
app.use(morgan("dev"));

app.use("/auth", authRouter);
app.use("/llibres", loginRequired, llibresRouter);


// catch 404 and forward to error handler WITH NEXT
app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  // error handler
app.use(errorHandler);

// inicialitzar el srevidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor inicialitzat al port ${port}`));