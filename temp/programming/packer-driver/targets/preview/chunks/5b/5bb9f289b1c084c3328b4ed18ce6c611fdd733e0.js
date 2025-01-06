System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _NumberDecimal, _BigIntDecimal, _default, _toFixed, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req0 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req1 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req3 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.NumberDecimal = exports.BigIntDecimal = void 0;
        exports.default = getMiniDecimal;
        exports.toFixed = toFixed;

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _numberUtil = require("./numberUtil");

        var _supportUtil = require("./supportUtil");
        /* eslint-disable max-classes-per-file */

        /**
         * We can remove this when IE not support anymore
         */


        var NumberDecimal = /*#__PURE__*/function () {
          function NumberDecimal(value) {
            (0, _classCallCheck2.default)(this, NumberDecimal);
            this.origin = '';
            this.number = void 0;
            this.empty = void 0;

            if (!value && value !== 0 || !String(value).trim()) {
              this.empty = true;
              return;
            }

            this.origin = String(value);
            this.number = Number(value);
          }

          (0, _createClass2.default)(NumberDecimal, [{
            key: "negate",
            value: function negate() {
              return new NumberDecimal(-this.toNumber());
            }
          }, {
            key: "add",
            value: function add(value) {
              if (this.isInvalidate()) {
                return new NumberDecimal(value);
              }

              var target = Number(value);

              if (Number.isNaN(target)) {
                return this;
              }

              var number = this.number + target; // [Legacy] Back to safe integer

              if (number > Number.MAX_SAFE_INTEGER) {
                return new NumberDecimal(Number.MAX_SAFE_INTEGER);
              }

              if (number < Number.MIN_SAFE_INTEGER) {
                return new NumberDecimal(Number.MIN_SAFE_INTEGER);
              }

              var maxPrecision = Math.max((0, _numberUtil.getNumberPrecision)(this.number), (0, _numberUtil.getNumberPrecision)(target));
              return new NumberDecimal(number.toFixed(maxPrecision));
            }
          }, {
            key: "isEmpty",
            value: function isEmpty() {
              return this.empty;
            }
          }, {
            key: "isNaN",
            value: function isNaN() {
              return Number.isNaN(this.number);
            }
          }, {
            key: "isInvalidate",
            value: function isInvalidate() {
              return this.isEmpty() || this.isNaN();
            }
          }, {
            key: "equals",
            value: function equals(target) {
              return this.toNumber() === (target === null || target === void 0 ? void 0 : target.toNumber());
            }
          }, {
            key: "lessEquals",
            value: function lessEquals(target) {
              return this.add(target.negate().toString()).toNumber() <= 0;
            }
          }, {
            key: "toNumber",
            value: function toNumber() {
              return this.number;
            }
          }, {
            key: "toString",
            value: function toString() {
              var safe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

              if (!safe) {
                return this.origin;
              }

              if (this.isInvalidate()) {
                return '';
              }

              return (0, _numberUtil.num2str)(this.number);
            }
          }]);
          return NumberDecimal;
        }();

        exports.NumberDecimal = NumberDecimal;

        var BigIntDecimal = /*#__PURE__*/function () {
          /** BigInt will convert `0009` to `9`. We need record the len of decimal */
          function BigIntDecimal(value) {
            (0, _classCallCheck2.default)(this, BigIntDecimal);
            this.origin = '';
            this.negative = void 0;
            this.integer = void 0;
            this.decimal = void 0;
            this.decimalLen = void 0;
            this.empty = void 0;
            this.nan = void 0;

            if (!value && value !== 0 || !String(value).trim()) {
              this.empty = true;
              return;
            }

            this.origin = String(value); // Act like Number convert

            if (value === '-') {
              this.nan = true;
              return;
            }

            var mergedValue = value; // We need convert back to Number since it require `toFixed` to handle this

            if ((0, _numberUtil.isE)(mergedValue)) {
              mergedValue = Number(mergedValue);
            }

            mergedValue = typeof mergedValue === 'string' ? mergedValue : (0, _numberUtil.num2str)(mergedValue);

            if ((0, _numberUtil.validateNumber)(mergedValue)) {
              var trimRet = (0, _numberUtil.trimNumber)(mergedValue);
              this.negative = trimRet.negative;
              var numbers = trimRet.trimStr.split('.');
              this.integer = BigInt(numbers[0]);
              var decimalStr = numbers[1] || '0';
              this.decimal = BigInt(decimalStr);
              this.decimalLen = decimalStr.length;
            } else {
              this.nan = true;
            }
          }

          (0, _createClass2.default)(BigIntDecimal, [{
            key: "getMark",
            value: function getMark() {
              return this.negative ? '-' : '';
            }
          }, {
            key: "getIntegerStr",
            value: function getIntegerStr() {
              return this.integer.toString();
            }
          }, {
            key: "getDecimalStr",
            value: function getDecimalStr() {
              return this.decimal.toString().padStart(this.decimalLen, '0');
            }
            /**
             * Align BigIntDecimal with same decimal length. e.g. 12.3 + 5 = 1230000
             * This is used for add function only.
             */

          }, {
            key: "alignDecimal",
            value: function alignDecimal(decimalLength) {
              var str = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(decimalLength, '0'));
              return BigInt(str);
            }
          }, {
            key: "negate",
            value: function negate() {
              var clone = new BigIntDecimal(this.toString());
              clone.negative = !clone.negative;
              return clone;
            }
          }, {
            key: "add",
            value: function add(value) {
              if (this.isInvalidate()) {
                return new BigIntDecimal(value);
              }

              var offset = new BigIntDecimal(value);

              if (offset.isInvalidate()) {
                return this;
              }

              var maxDecimalLength = Math.max(this.getDecimalStr().length, offset.getDecimalStr().length);
              var myAlignedDecimal = this.alignDecimal(maxDecimalLength);
              var offsetAlignedDecimal = offset.alignDecimal(maxDecimalLength);
              var valueStr = (myAlignedDecimal + offsetAlignedDecimal).toString(); // We need fill string length back to `maxDecimalLength` to avoid parser failed

              var _trimNumber = (0, _numberUtil.trimNumber)(valueStr),
                  negativeStr = _trimNumber.negativeStr,
                  trimStr = _trimNumber.trimStr;

              var hydrateValueStr = "".concat(negativeStr).concat(trimStr.padStart(maxDecimalLength + 1, '0'));
              return new BigIntDecimal("".concat(hydrateValueStr.slice(0, -maxDecimalLength), ".").concat(hydrateValueStr.slice(-maxDecimalLength)));
            }
          }, {
            key: "isEmpty",
            value: function isEmpty() {
              return this.empty;
            }
          }, {
            key: "isNaN",
            value: function isNaN() {
              return this.nan;
            }
          }, {
            key: "isInvalidate",
            value: function isInvalidate() {
              return this.isEmpty() || this.isNaN();
            }
          }, {
            key: "equals",
            value: function equals(target) {
              return this.toString() === (target === null || target === void 0 ? void 0 : target.toString());
            }
          }, {
            key: "lessEquals",
            value: function lessEquals(target) {
              return this.add(target.negate().toString()).toNumber() <= 0;
            }
          }, {
            key: "toNumber",
            value: function toNumber() {
              if (this.isNaN()) {
                return NaN;
              }

              return Number(this.toString());
            }
          }, {
            key: "toString",
            value: function toString() {
              var safe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

              if (!safe) {
                return this.origin;
              }

              if (this.isInvalidate()) {
                return '';
              }

              return (0, _numberUtil.trimNumber)("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr;
            }
          }]);
          return BigIntDecimal;
        }();

        exports.BigIntDecimal = BigIntDecimal;

        function getMiniDecimal(value) {
          // We use BigInt here.
          // Will fallback to Number if not support.
          if ((0, _supportUtil.supportBigInt)()) {
            return new BigIntDecimal(value);
          }

          return new NumberDecimal(value);
        }
        /**
         * Align the logic of toFixed to around like 1.5 => 2.
         * If set `cutOnly`, will just remove the over decimal part.
         */


        function toFixed(numStr, separatorStr, precision) {
          var cutOnly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          if (numStr === '') {
            return '';
          }

          var _trimNumber2 = (0, _numberUtil.trimNumber)(numStr),
              negativeStr = _trimNumber2.negativeStr,
              integerStr = _trimNumber2.integerStr,
              decimalStr = _trimNumber2.decimalStr;

          var precisionDecimalStr = "".concat(separatorStr).concat(decimalStr);
          var numberWithoutDecimal = "".concat(negativeStr).concat(integerStr);

          if (precision >= 0) {
            // We will get last + 1 number to check if need advanced number
            var advancedNum = Number(decimalStr[precision]);

            if (advancedNum >= 5 && !cutOnly) {
              var advancedDecimal = getMiniDecimal(numStr).add("".concat(negativeStr, "0.").concat('0'.repeat(precision)).concat(10 - advancedNum));
              return toFixed(advancedDecimal.toString(), separatorStr, precision, cutOnly);
            }

            if (precision === 0) {
              return numberWithoutDecimal;
            }

            return "".concat(numberWithoutDecimal).concat(separatorStr).concat(decimalStr.padEnd(precision, '0').slice(0, precision));
          }

          if (precisionDecimalStr === '.0') {
            return numberWithoutDecimal;
          }

          return "".concat(numberWithoutDecimal).concat(precisionDecimalStr);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _NumberDecimal = module.exports.NumberDecimal;
        _BigIntDecimal = module.exports.BigIntDecimal;
        _default = module.exports.default;
        _toFixed = module.exports.toFixed;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/classCallCheck': _req0,
        '@babel/runtime/helpers/createClass': _req1,
        './numberUtil': _req2,
        './supportUtil': _req3
      }));
    }
  };
});
//# sourceMappingURL=5bb9f289b1c084c3328b4ed18ce6c611fdd733e0.js.map