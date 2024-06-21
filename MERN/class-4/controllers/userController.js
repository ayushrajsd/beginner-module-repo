const UserModel = require('../models/userModel');

    const createUser = async (req, res) => {
        console.log("creating user")
        const { name, email } = req.body;
        try {
            const user = await UserModel.create({
                name: name,
                email: email,
            });
            console.log("saved user");
            return res.status(201).json({ message: "User Created" });
        } catch (err) {
            return res.status(400).json({ message: "Something went wrong", error: err.message });
        }
    }
module.exports = {createUser};