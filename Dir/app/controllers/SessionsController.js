"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required()
        })

        const UserEmailOrPasswordIncorrect = () =>{
            return res.status(400).json({ error: "E-mail ou senha incorretos" })
        }

        if (!(await schema.isValid(req.body))) UserEmailOrPasswordIncorrect()

        const { email, password } = req.body

        const user = await _Userjs2.default.findOne({
            where: { email },
        })

        if (!user) UserEmailOrPasswordIncorrect()

        if (!(await user.checkPassword(password))) UserEmailOrPasswordIncorrect()


        return res.json({id: user.id, email, name: user.name, admin: user.admin })
    }
}


exports. default = new SessionController();