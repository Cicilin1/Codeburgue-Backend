import jwt from "jsonwebtoken";
import authConfig from "../../config/auth.js"

export default (req, res, next) => {
    const authTOken = req.headers.authorization
    console.log( authTOken)

    if (!authTOken) return res.status(401).json({ error: "token not provider" })

    const token = authTOken.split(' ')[1]

    try {
        jwt.verify(token, authConfig.secret, function (err, decoded) {
            if (err) {
                throw new Error
            }
            req.userId = decoded.id
            return next()

        })
    } catch (err) {
        return res.status(401).json({ error: 'token is invalid' })
    }
}