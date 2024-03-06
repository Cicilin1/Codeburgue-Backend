import * as Yup from "yup"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import authConfig from "../../config/auth.js"

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required()
        })

        const UserEmailOrPasswordIncorrect = () => {
            return res.status(400).json({ error: "E-mail ou senha incorretos" })
        }

        if (!(await schema.isValid(req.body))) UserEmailOrPasswordIncorrect()

        const { email, password } = req.body

        const user = await User.findOne({
            where: { email },
        })

        if (!user) UserEmailOrPasswordIncorrect()

        if (!(await user.checkPassword(password))) UserEmailOrPasswordIncorrect()

        console.log("Consigo chegar até aqui!")
        return res.json({ id: user.id, email, name: user.name, admin: user.admin, token: jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: authConfig.expiresIn }) })
    }
}

export default new SessionController();