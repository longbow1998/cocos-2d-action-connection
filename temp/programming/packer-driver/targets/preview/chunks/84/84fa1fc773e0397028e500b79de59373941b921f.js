System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react", "react-dom"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default, _isDOM, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_react2) {
      _req0 = _react2.__cjsMetaURL;
    }, function (_reactDom2) {
      _req1 = _reactDom2.__cjsMetaURL;
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
        exports.default = findDOMNode;
        exports.isDOM = isDOM;

        var _react = _interopRequireDefault(require("react"));

        var _reactDom = _interopRequireDefault(require("react-dom"));

        function isDOM(node) {
          // https://developer.mozilla.org/en-US/docs/Web/API/Element
          // Since XULElement is also subclass of Element, we only need HTMLElement and SVGElement
          return node instanceof HTMLElement || node instanceof SVGElement;
        }
        /**
         * Return if a node is a DOM node. Else will return by `findDOMNode`
         */


        function findDOMNode(node) {
          if (isDOM(node)) {
            return node;
          }

          if (node instanceof _react.default.Component) {
            return _reactDom.default.findDOMNode(node);
          }

          return null;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
        _isDOM = module.exports.isDOM;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react': _req0,
        'react-dom': _req1
      }));
    }
  };
});
//# sourceMappingURL=84fa1fc773e0397028e500b79de59373941b921f.js.map