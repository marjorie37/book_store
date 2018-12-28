// pour démarrer mongodb : "sudo service mongod start" puis "mongo"
// dans Backend

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./db");
// const session = require("express-session");
// const mongoSessionStore = require("connect-mongo");
const users = require("./routes/user");

mongoose
  .connect(
    config.DB,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Cannot connect to the database" + err);
    }
  );

const app = express();

// const MongoStore = mongoSessionStore(session);

// const userSession = {
//   secret: "secret key",
//   store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   resave: false,
//   cookie: {
//     path: "/",
//     httpOnly: true,
//     resave: false,
//     saveUninitialized: true,
//     secure: false,
//     maxAge: null
//   }
// };

// app.use(session(userSession));

app.use(passport.initialize());
require("./passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
