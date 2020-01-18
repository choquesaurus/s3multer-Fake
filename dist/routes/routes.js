"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();
router.post('/file', function (req, resp, next) {
  console.log(req.file.path);
  console.log(req.file);
  return resp.send({
    path: req.file.path
  });
});
router.get('/go', function (req, res) {
  return res.send({
    message: 'Goin'
  });
});
var _default = router;
exports["default"] = _default;