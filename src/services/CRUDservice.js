const connection = require("../config/database");

const getAllUsers = async () => {
    let [result, fields] = await connection.query("SELECT * FROM Users");
    return result;
};
const getUserById = async (id) => {
    let [result, fields] = await connection.query(
        "SELECT * FROM Users WHERE id =?",
        [id]
    );
    let user = result && result.length ? result[0] : {};
    return user;
};
const postUserById = async (email, name, city, id) => {
    let [result, fields] = await connection.query(
        "UPDATE Users SET name =?, email =?, city =? WHERE id =?",
        [name, email, city, id]
    );
    return result;
};
const postDeleteUserById = async (id) => {
    let [result, fields] = await connection.query(
        "DELETE FROM Users WHERE id =?",
        [id]
    );
    return "done";
};
module.exports = { getAllUsers, getUserById, postUserById, postDeleteUserById };
