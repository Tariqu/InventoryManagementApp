const express = require("express");
const DB = require("./config/database");
const UserRouter = require("./api/user/user.router");
const ProductRouter = require("./api/product/product.router");
const tokenValidation = require("./api/auth/user.tokenValidation");
const cors = require("cors");

const app = express();
const PORT = require("./config/config").PORT;
app.use(cors());
DB();

app.use(express.json());
app.use(tokenValidation.checkToken);
app.use("/api/Accounts", UserRouter);

app.use("/api/p/", ProductRouter);
app.listen(PORT);
