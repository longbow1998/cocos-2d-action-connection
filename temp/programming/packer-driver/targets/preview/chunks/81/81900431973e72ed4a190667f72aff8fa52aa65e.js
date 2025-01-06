System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _backLastFocusNode, _clearLastFocusNode, _getFocusNodeList, _limitTabRange, _saveLastFocusNode, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req0 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
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
        exports.backLastFocusNode = backLastFocusNode;
        exports.clearLastFocusNode = clearLastFocusNode;
        exports.getFocusNodeList = getFocusNodeList;
        exports.limitTabRange = limitTabRange;
        exports.saveLastFocusNode = saveLastFocusNode;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _isVisible = _interopRequireDefault(require("./isVisible"));

        function focusable(node) {
          var includePositive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if ((0, _isVisible.default)(node)) {
            var nodeName = node.nodeName.toLowerCase();
            var isFocusableElement = // Focusable element
            ['input', 'select', 'textarea', 'button'].includes(nodeName) || // Editable element
            node.isContentEditable || // Anchor with href element
            nodeName === 'a' && !!node.getAttribute('href'); // Get tabIndex

            var tabIndexAttr = node.getAttribute('tabindex');
            var tabIndexNum = Number(tabIndexAttr); // Parse as number if validate

            var tabIndex = null;

            if (tabIndexAttr && !Number.isNaN(tabIndexNum)) {
              tabIndex = tabIndexNum;
            } else if (isFocusableElement && tabIndex === null) {
              tabIndex = 0;
            } // Block focusable if disabled


            if (isFocusableElement && node.disabled) {
              tabIndex = null;
            }

            return tabIndex !== null && (tabIndex >= 0 || includePositive && tabIndex < 0);
          }

          return false;
        }

        function getFocusNodeList(node) {
          var includePositive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var res = (0, _toConsumableArray2.default)(node.querySelectorAll('*')).filter(function (child) {
            return focusable(child, includePositive);
          });

          if (focusable(node, includePositive)) {
            res.unshift(node);
          }

          return res;
        }

        var lastFocusElement = null;
        /** @deprecated Do not use since this may failed when used in async */

        function saveLastFocusNode() {
          lastFocusElement = document.activeElement;
        }
        /** @deprecated Do not use since this may failed when used in async */


        function clearLastFocusNode() {
          lastFocusElement = null;
        }
        /** @deprecated Do not use since this may failed when used in async */


        function backLastFocusNode() {
          if (lastFocusElement) {
            try {
              // 元素可能已经被移动了
              lastFocusElement.focus();
              /* eslint-disable no-empty */
            } catch (e) {// empty
            }
            /* eslint-enable no-empty */

          }
        }

        function limitTabRange(node, e) {
          if (e.keyCode === 9) {
            var tabNodeList = getFocusNodeList(node);
            var lastTabNode = tabNodeList[e.shiftKey ? 0 : tabNodeList.length - 1];
            var leavingTab = lastTabNode === document.activeElement || node === document.activeElement;

            if (leavingTab) {
              var target = tabNodeList[e.shiftKey ? tabNodeList.length - 1 : 0];
              target.focus();
              e.preventDefault();
            }
          }
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _backLastFocusNode = module.exports.backLastFocusNode;
        _clearLastFocusNode = module.exports.clearLastFocusNode;
        _getFocusNodeList = module.exports.getFocusNodeList;
        _limitTabRange = module.exports.limitTabRange;
        _saveLastFocusNode = module.exports.saveLastFocusNode;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/toConsumableArray': _req0,
        './isVisible': _req1
      }));
    }
  };
});
//# sourceMappingURL=81900431973e72ed4a190667f72aff8fa52aa65e.js.map