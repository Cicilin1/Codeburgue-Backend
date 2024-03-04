"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _appjs = require('./app.js'); var _appjs2 = _interopRequireDefault(_appjs);

_appjs2.default.listen(3000, () => {
  console.log("Server is running on port 3000");
});
