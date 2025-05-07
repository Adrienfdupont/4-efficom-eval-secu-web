const User = require('./../model/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = (req, res, next) => {
    let user = User.getByEmail(req.body.email);
    if (!user) {
        return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }
    res.status(200).json({
        id: user.id,
        email: user.email,
        token: jwt.sign({
            id: user.id,
            email: user.email,
            roles: user.roles
        }, process.env.JWT_KEY)
    });
}

const signIn = async (req,res,next) => {
    let member = await Role.findOne({ where: { name: "Member" } });
    if (!member) {
        return res.status(404).json({ message: "Le rôle Member n'as pas été trouvé" });
    }
    try {
        let result = await User.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            roles: [member.id]
        });
        res.status(201).json(result);
    } catch (e) {
        res.status(400).json({ error: 'Une erreur est survenue, veuillez réessayer plus tard.' });
    }
}

module.exports = { login, signIn };