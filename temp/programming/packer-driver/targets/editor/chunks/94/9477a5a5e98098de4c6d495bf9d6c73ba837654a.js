System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react", "rc-util/lib/warning"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_react2) {
      _req0 = _react2.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req1 = _rcUtilLibWarning.__cjsMetaURL;
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
        exports.default = useCursor;

        var _react = require("react");

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));
        /**
         * Keep input cursor in the correct position if possible.
         * Is this necessary since we have `formatter` which may mass the content?
         */


        function useCursor(input, focused) {
          var selectionRef = (0, _react.useRef)(null);

          function recordCursor() {
            // Record position
            try {
              var start = input.selectionStart,
                  end = input.selectionEnd,
                  value = input.value;
              var beforeTxt = value.substring(0, start);
              var afterTxt = value.substring(end);
              selectionRef.current = {
                start: start,
                end: end,
                value: value,
                beforeTxt: beforeTxt,
                afterTxt: afterTxt
              };
            } catch (e) {// Fix error in Chrome:
              // Failed to read the 'selectionStart' property from 'HTMLInputElement'
              // http://stackoverflow.com/q/21177489/3040605
            }
          }
          /**
           * Restore logic:
           *  1. back string same
           *  2. start string same
           */


          function restoreCursor() {
            if (input && selectionRef.current && focused) {
              try {
                var value = input.value;
                var _selectionRef$current = selectionRef.current,
                    beforeTxt = _selectionRef$current.beforeTxt,
                    afterTxt = _selectionRef$current.afterTxt,
                    start = _selectionRef$current.start;
                var startPos = value.length;

                if (value.endsWith(afterTxt)) {
                  startPos = value.length - selectionRef.current.afterTxt.length;
                } else if (value.startsWith(beforeTxt)) {
                  startPos = beforeTxt.length;
                } else {
                  var beforeLastChar = beforeTxt[start - 1];
                  var newIndex = value.indexOf(beforeLastChar, start - 1);

                  if (newIndex !== -1) {
                    startPos = newIndex + 1;
                  }
                }

                input.setSelectionRange(startPos, startPos);
              } catch (e) {
                (0, _warning.default)(false, "Something warning of cursor restore. Please fire issue about this: ".concat(e.message));
              }
            }
          }

          return [recordCursor, restoreCursor];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react': _req0,
        'rc-util/lib/warning': _req1
      }));
    }
  };
});
//# sourceMappingURL=9477a5a5e98098de4c6d495bf9d6c73ba837654a.js.map