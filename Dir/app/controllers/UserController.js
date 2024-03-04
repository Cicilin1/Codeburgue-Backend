"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _uuid = require('uuid');
var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);
var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);


class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
            admin: Yup.boolean(),
        })

        try {
            await schema.validateSync(req.body, { abortEarly: false })
        } catch (err) {
            return res.status(400).json({ error: err.errors })
        }

        const { name, email, password, admin } = req.body

        const userExists = await _Userjs2.default.findOne({
            where: { email },
        })

        if(userExists){
            return res.status(400).json({error: "User already exists"})
        }

        console.log(userExists)

        const user = await _Userjs2.default.create({
            id: _uuid.v4.call(void 0, ),
            name,
            email,
            password,
            admin
        })

        return res.status(201).json({ id: user.id, name, email, admin })
    }
}

exports. default = new UserController();