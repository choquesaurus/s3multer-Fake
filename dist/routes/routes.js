"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/file', function (req, resp, next) {
  return resp.send(Object.assign({
    path: req.file
  }, {
    upload: _path["default"].join(__dirname, '../uploads/images')
  }));
});
router.get('/go', function (req, res) {
  return res.send({
    message: 'Goin'
  });
});
var _default = router;
exports["default"] = _default;