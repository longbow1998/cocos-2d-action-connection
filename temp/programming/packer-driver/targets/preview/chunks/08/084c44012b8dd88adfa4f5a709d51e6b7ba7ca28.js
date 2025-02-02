System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _getDecupleSteps, _getNumberPrecision, _isE, _num2str, _trimNumber, _validateNumber, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.getDecupleSteps = getDecupleSteps;
        exports.getNumberPrecision = getNumberPrecision;
        exports.isE = isE;
        exports.num2str = num2str;
        exports.trimNumber = trimNumber;
        exports.validateNumber = validateNumber;

        var _supportUtil = require("./supportUtil");
        /**
         * Format string number to readable number
         */


        function trimNumber(numStr) {
          var str = numStr.trim();
          var negative = str.startsWith('-');

          if (negative) {
            str = str.slice(1);
          }

          str = str // Remove decimal 0. `1.000` => `1.`, `1.100` => `1.1`
          .replace(/(\.\d*[^0])0*$/, '$1') // Remove useless decimal. `1.` => `1`
          .replace(/\.0*$/, '') // Remove integer 0. `0001` => `1`, 000.1' => `.1`
          .replace(/^0+/, '');

          if (str.startsWith('.')) {
            str = "0".concat(str);
          }

          var trimStr = str || '0';
          var splitNumber = trimStr.split('.');
          var integerStr = splitNumber[0] || '0';
          var decimalStr = splitNumber[1] || '0';

          if (integerStr === '0' && decimalStr === '0') {
            negative = false;
          }

          var negativeStr = negative ? '-' : '';
          return {
            negative: negative,
            negativeStr: negativeStr,
            trimStr: trimStr,
            integerStr: integerStr,
            decimalStr: decimalStr,
            fullStr: "".concat(negativeStr).concat(trimStr)
          };
        }

        function isE(number) {
          var str = String(number);
          return !Number.isNaN(Number(str)) && str.includes('e');
        }
        /**
         * [Legacy] Convert 1e-9 to 0.000000001.
         * This may lose some precision if user really want 1e-9.
         */


        function getNumberPrecision(number) {
          var numStr = String(number);

          if (isE(number)) {
            var precision = Number(numStr.slice(numStr.indexOf('e-') + 2));
            var decimalMatch = numStr.match(/\.(\d+)/);

            if (decimalMatch === null || decimalMatch === void 0 ? void 0 : decimalMatch[1]) {
              precision += decimalMatch[1].length;
            }

            return precision;
          }

          return numStr.includes('.') && validateNumber(numStr) ? numStr.length - numStr.indexOf('.') - 1 : 0;
        }
        /**
         * Convert number (includes scientific notation) to -xxx.yyy format
         */


        function num2str(number) {
          var numStr = String(number);

          if (isE(number)) {
            if (number > Number.MAX_SAFE_INTEGER) {
              return String((0, _supportUtil.supportBigInt)() ? BigInt(number).toString() : Number.MAX_SAFE_INTEGER);
            }

            if (number < Number.MIN_SAFE_INTEGER) {
              return String((0, _supportUtil.supportBigInt)() ? BigInt(number).toString() : Number.MIN_SAFE_INTEGER);
            }

            numStr = number.toFixed(getNumberPrecision(numStr));
          }

          return trimNumber(numStr).fullStr;
        }

        function validateNumber(num) {
          if (typeof num === 'number') {
            return !Number.isNaN(num);
          } // Empty


          if (!num) {
            return false;
          }

          return (// Normal type: 11.28
            /^\s*-?\d+(\.\d+)?\s*$/.test(num) || // Pre-number: 1.
            /^\s*-?\d+\.\s*$/.test(num) || // Post-number: .1
            /^\s*-?\.\d+\s*$/.test(num)
          );
        }

        function getDecupleSteps(step) {
          var stepStr = typeof step === 'number' ? num2str(step) : trimNumber(step).fullStr;
          var hasPoint = stepStr.includes('.');

          if (!hasPoint) {
            return step + '0';
          }

          return trimNumber(stepStr.replace(/(\d)\.(\d)/g, '$1$2.')).fullStr;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getDecupleSteps = module.exports.getDecupleSteps;
        _getNumberPrecision = module.exports.getNumberPrecision;
        _isE = module.exports.isE;
        _num2str = module.exports.num2str;
        _trimNumber = module.exports.trimNumber;
        _validateNumber = module.exports.validateNumber;
      }, () => ({
        './supportUtil': _req
      }));
    }
  };
});
//# sourceMappingURL=084c44012b8dd88adfa4f5a709d51e6b7ba7ca28.js.map