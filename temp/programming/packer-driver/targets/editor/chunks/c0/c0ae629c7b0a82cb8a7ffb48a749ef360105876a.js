System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_react) {
      _req1 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var React = _interopRequireWildcard(require("react"));

        var _PanelContext = _interopRequireDefault(require("../PanelContext"));

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }

          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }

          var cache = _getRequireWildcardCache(nodeInterop);

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj.default = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        var HIDDEN_STYLE = {
          visibility: 'hidden'
        };

        function Header(_ref) {
          var prefixCls = _ref.prefixCls,
              _ref$prevIcon = _ref.prevIcon,
              prevIcon = _ref$prevIcon === void 0 ? "\u2039" : _ref$prevIcon,
              _ref$nextIcon = _ref.nextIcon,
              nextIcon = _ref$nextIcon === void 0 ? "\u203A" : _ref$nextIcon,
              _ref$superPrevIcon = _ref.superPrevIcon,
              superPrevIcon = _ref$superPrevIcon === void 0 ? "\xAB" : _ref$superPrevIcon,
              _ref$superNextIcon = _ref.superNextIcon,
              superNextIcon = _ref$superNextIcon === void 0 ? "\xBB" : _ref$superNextIcon,
              onSuperPrev = _ref.onSuperPrev,
              onSuperNext = _ref.onSuperNext,
              onPrev = _ref.onPrev,
              onNext = _ref.onNext,
              children = _ref.children;

          var _React$useContext = React.useContext(_PanelContext.default),
              hideNextBtn = _React$useContext.hideNextBtn,
              hidePrevBtn = _React$useContext.hidePrevBtn;

          return /*#__PURE__*/React.createElement("div", {
            className: prefixCls
          }, onSuperPrev && /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: onSuperPrev,
            tabIndex: -1,
            className: "".concat(prefixCls, "-super-prev-btn"),
            style: hidePrevBtn ? HIDDEN_STYLE : {}
          }, superPrevIcon), onPrev && /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: onPrev,
            tabIndex: -1,
            className: "".concat(prefixCls, "-prev-btn"),
            style: hidePrevBtn ? HIDDEN_STYLE : {}
          }, prevIcon), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-view")
          }, children), onNext && /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: onNext,
            tabIndex: -1,
            className: "".concat(prefixCls, "-next-btn"),
            style: hideNextBtn ? HIDDEN_STYLE : {}
          }, nextIcon), onSuperNext && /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: onSuperNext,
            tabIndex: -1,
            className: "".concat(prefixCls, "-super-next-btn"),
            style: hideNextBtn ? HIDDEN_STYLE : {}
          }, superNextIcon));
        }

        var _default = Header;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        'react': _req1,
        '../PanelContext': _req2
      }));
    }
  };
});
//# sourceMappingURL=c0ae629c7b0a82cb8a7ffb48a749ef360105876a.js.map