"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes2 = _interopRequireDefault(require("./routes/routes"));

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

require("@babel/polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var storageMulterDiskConfiguration = _multer["default"].diskStorage({
  destination: _path["default"].join(__dirname, 'uploads/images'),
  filename: function filename(req, file, done) {
    done(null, file.originalname); //paso el  nombre original del archivo con su extencion
  }
});

var Application =
/*#__PURE__*/
function () {
  function Application() {
    _classCallCheck(this, Application);

    this.app = (0, _express["default"])();
    this.config();
    this.routes();
  }

  _createClass(Application, [{
    key: "config",
    value: function config() {
      this.app.use((0, _cors["default"])());
      this.app.use((0, _morgan["default"])('dev'));
      this.app.use(_express["default"].json());
      this.app.use((0, _multer["default"])({
        storage: storageMulterDiskConfiguration,
        dest: _path["default"].join(__dirname, 'uploads/images'),
        limits: 5000000
      }).single('archivo'));
    }
  }, {
    key: "routes",
    value: function routes() {
      this.app.use(_routes2["default"]);
    }
  }, {
    key: "start",
    value: function start() {
      this.app.listen(process.env.PORT || 5555, function () {
        console.log("running in port 6000");
      });
    }
  }]);

  return Application;
}();

new Application().start();