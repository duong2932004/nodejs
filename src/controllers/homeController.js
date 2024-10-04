const connection = require("../config/database");
const {
    getAllUsers,
    getUserById,
    postUserById,
    postDeleteUserById,
} = require("../services/CRUDservice");
const getHomePage = async (req, res) => {
    let result = await getAllUsers();
    return res.render("home", { listUsers: result });
};
const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body;
    console.log(email, name, city);

    // connection.query(
    //     "INSERT INTO Users (email,name , city) VALUES (?,?,?)",
    //     [email, name, city],
    //     (err, result) => {
    //         res.send("success");
    //     }
    // );
    let [result, fields] = await connection.query(
        "INSERT INTO Users (email,name , city) VALUES (?,?,?)",
        [email, name, city]
    );
    res.send("success");
};
const getCreateUser = (req, res) => {
    return res.render("create");
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    return res.render("edit", { user: user });
};
const postUpdateUser = async (req, res) => {
    const { email, name, city, id } = req.body;
    console.log(email, name, city, id);

    await postUserById(email, name, city, id);
    res.redirect("/");
};
const postDeleteUser = async (req, res) => {
    const { id } = req.body;
    await postDeleteUserById(id);
    res.redirect("/");
};
module.exports = {
    getHomePage,
    postCreateUser,
    getCreateUser,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
};
