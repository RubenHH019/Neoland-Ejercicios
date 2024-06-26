const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");

// creamos el servidor web
const app = express();

// vamos a configurar dotenv para poder utilizar las variables d entorno del .env
dotenv.config();

//! conectamos con la base de datos
connect();

//! ----------------- CONFIGURAR CLOUDINARY--------
const { configCloudinary } = require("./src/middleware/files.middleware");

configCloudinary();

//! -----------------VARIABLES CONSTANTES --> PORT -

const PORT = process.env.PORT;

//! -----------------------CORS-------------
const cors = require("cors");
app.use(cors());

//! ------------------ limitaciones de cantidad en el back end
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//! -----------------> RUTAS
const UserRoutes = require("./src/api/routes/User.routes");

app.use("/api/v1/users/", UserRoutes);

const AdminRoutes = require("./src/api/routes/Admin.routes");
app.use("/api/v1/admin/", AdminRoutes);

const MessageRoutes = require("./src/api/routes/Message.routes");

app.use("/api/v1/messages/", MessageRoutes);

const MovieRoutes = require("./src/api/routes/Movie.routes");
app.use("/api/v1/movies/", MovieRoutes);

const CharacterRoutes = require("./src/api/routes/Character.routes");
app.use("/api/v1/characters/", CharacterRoutes);

//! --------------- generamos un error de cuando no see encuentre la ruta
app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

//! ------------------> cuando el servidor crachea metemos un 500 ----------
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

//! ------------------ ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB-----

// esto de aqui  nos revela con que tecnologia esta hecho nuestro back
app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);
