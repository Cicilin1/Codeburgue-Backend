"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _Userjs = require('../app/models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);
var _databasejs = require('../config/database.js'); var _databasejs2 = _interopRequireDefault(_databasejs);

const models = [_Userjs2.default]

class Database{
    constructor(){
        this.init()  
    }

    init(){
        this.connection = new (0, _sequelize2.default)(_databasejs2.default)
        models.map((model) => model.init(this.connection))
    }
}

exports. default = new Database()
