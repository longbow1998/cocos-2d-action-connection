System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _default, _getValue, _leftPad, _toArray, _tuple, _updateValues, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = getDataOrAriaProps;
        exports.getValue = getValue;
        exports.leftPad = leftPad;
        exports.toArray = toArray;
        exports.tuple = void 0;
        exports.updateValues = updateValues;

        function leftPad(str, length) {
          var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
          var current = String(str);

          while (current.length < length) {
            current = "".concat(fill).concat(str);
          }

          return current;
        }

        var tuple = function tuple() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return args;
        };

        exports.tuple = tuple;

        function toArray(val) {
          if (val === null || val === undefined) {
            return [];
          }

          return Array.isArray(val) ? val : [val];
        }

        function getDataOrAriaProps(props) {
          var retProps = {};
          Object.keys(props).forEach(function (key) {
            if ((key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role' || key === 'name') && key.substr(0, 7) !== 'data-__') {
              retProps[key] = props[key];
            }
          });
          return retProps;
        }

        function getValue(values, index) {
          return values ? values[index] : null;
        }

        function updateValues(values, value, index) {
          var newValues = [getValue(values, 0), getValue(values, 1)];
          newValues[index] = typeof value === 'function' ? value(newValues[index]) : value;

          if (!newValues[0] && !newValues[1]) {
            return null;
          }

          return newValues;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
        _getValue = module.exports.getValue;
        _leftPad = module.exports.leftPad;
        _toArray = module.exports.toArray;
        _tuple = module.exports.tuple;
        _updateValues = module.exports.updateValues;
      }, {});
    }
  };
});
//# sourceMappingURL=5d83cd7953a713e5d1fe3aea8ab4853b2e571c63.js.map