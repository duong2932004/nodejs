require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine"); /*use template*/
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.use(express.json());
app.use(express.urlencoded({ extendes: true }));
// template
configViewEngine(app);
//router
app.use("/", webRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
