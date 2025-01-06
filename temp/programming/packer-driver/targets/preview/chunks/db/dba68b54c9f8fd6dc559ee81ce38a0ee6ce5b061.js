System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react", "react-dom", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
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

        var _react = require("react");

        var _reactDom = _interopRequireDefault(require("react-dom"));

        var _canUseDom = _interopRequireDefault(require("./Dom/canUseDom"));

        var Portal = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
          var didUpdate = props.didUpdate,
              getContainer = props.getContainer,
              children = props.children;
          var parentRef = (0, _react.useRef)();
          var containerRef = (0, _react.useRef)(); // Ref return nothing, only for wrapper check exist

          (0, _react.useImperativeHandle)(ref, function () {
            return {};
          }); // Create container in client side with sync to avoid useEffect not get ref

          var initRef = (0, _react.useRef)(false);

          if (!initRef.current && (0, _canUseDom.default)()) {
            containerRef.current = getContainer();
            parentRef.current = containerRef.current.parentNode;
            initRef.current = true;
          } // [Legacy] Used by `rc-trigger`


          (0, _react.useEffect)(function () {
            didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
          });
          (0, _react.useEffect)(function () {
            // Restore container to original place
            // React 18 StrictMode will unmount first and mount back for effect test:
            // https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors
            if (containerRef.current.parentNode === null && parentRef.current !== null) {
              parentRef.current.appendChild(containerRef.current);
            }

            return function () {
              var _containerRef$current, _containerRef$current2; // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
              // Since some component use `Portal` directly, we have to keep the logic here.


              (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeChild(containerRef.current);
            };
          }, []);
          return containerRef.current ? /*#__PURE__*/_reactDom.default.createPortal(children, containerRef.current) : null;
        });
        var _default = Portal;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react': _req0,
        'react-dom': _req1,
        './Dom/canUseDom': _req2
      }));
    }
  };
});
//# sourceMappingURL=dba68b54c9f8fd6dc559ee81ce38a0ee6ce5b061.js.map