System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/typeof"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req0 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req2 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req3 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req4 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var SPLIT = '__@field_split__';
        /**
         * Convert name path into string to fast the fetch speed of Map.
         */

        function normalize(namePath) {
          return namePath.map(function (cell) {
            return "".concat((0, _typeof2.default)(cell), ":").concat(cell);
          }) // Magic split
          .join(SPLIT);
        }
        /**
         * NameMap like a `Map` but accepts `string[]` as key.
         */


        var NameMap = /*#__PURE__*/function () {
          function NameMap() {
            (0, _classCallCheck2.default)(this, NameMap);
            this.kvs = new Map();
          }

          (0, _createClass2.default)(NameMap, [{
            key: "set",
            value: function set(key, value) {
              this.kvs.set(normalize(key), value);
            }
          }, {
            key: "get",
            value: function get(key) {
              return this.kvs.get(normalize(key));
            }
          }, {
            key: "update",
            value: function update(key, updater) {
              var origin = this.get(key);
              var next = updater(origin);

              if (!next) {
                this.delete(key);
              } else {
                this.set(key, next);
              }
            }
          }, {
            key: "delete",
            value: function _delete(key) {
              this.kvs.delete(normalize(key));
            } // Since we only use this in test, let simply realize this

          }, {
            key: "map",
            value: function map(callback) {
              return (0, _toConsumableArray2.default)(this.kvs.entries()).map(function (_ref) {
                var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                var cells = key.split(SPLIT);
                return callback({
                  key: cells.map(function (cell) {
                    var _cell$match = cell.match(/^([^:]*):(.*)$/),
                        _cell$match2 = (0, _slicedToArray2.default)(_cell$match, 3),
                        type = _cell$match2[1],
                        unit = _cell$match2[2];

                    return type === 'number' ? Number(unit) : unit;
                  }),
                  value: value
                });
              });
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              var json = {};
              this.map(function (_ref3) {
                var key = _ref3.key,
                    value = _ref3.value;
                json[key.join('.')] = value;
                return null;
              });
              return json;
            }
          }]);
          return NameMap;
        }();

        var _default = NameMap;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/slicedToArray': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        '@babel/runtime/helpers/classCallCheck': _req2,
        '@babel/runtime/helpers/createClass': _req3,
        '@babel/runtime/helpers/typeof': _req4
      }));
    }
  };
});
//# sourceMappingURL=5e1e850f3a381a60171686f6e3c5065e0fd6bafe.js.map