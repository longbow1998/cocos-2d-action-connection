System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "classnames", "rc-util/lib/hooks/useMergedState", "rc-util/lib/KeyCode"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req3 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req6 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req7 = _rcUtilLibKeyCode.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var Switch = React.forwardRef(function (_ref, ref) {
          var _classNames;

          var _ref$prefixCls = _ref.prefixCls,
              prefixCls = _ref$prefixCls === void 0 ? 'rc-switch' : _ref$prefixCls,
              className = _ref.className,
              checked = _ref.checked,
              defaultChecked = _ref.defaultChecked,
              disabled = _ref.disabled,
              loadingIcon = _ref.loadingIcon,
              checkedChildren = _ref.checkedChildren,
              unCheckedChildren = _ref.unCheckedChildren,
              onClick = _ref.onClick,
              onChange = _ref.onChange,
              onKeyDown = _ref.onKeyDown,
              restProps = (0, _objectWithoutProperties2.default)(_ref, ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"]);

          var _useMergedState = (0, _useMergedState3.default)(false, {
            value: checked,
            defaultValue: defaultChecked
          }),
              _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
              innerChecked = _useMergedState2[0],
              setInnerChecked = _useMergedState2[1];

          function triggerChange(newChecked, event) {
            var mergedChecked = innerChecked;

            if (!disabled) {
              mergedChecked = newChecked;
              setInnerChecked(mergedChecked);
              onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
            }

            return mergedChecked;
          }

          function onInternalKeyDown(e) {
            if (e.which === _KeyCode.default.LEFT) {
              triggerChange(false, e);
            } else if (e.which === _KeyCode.default.RIGHT) {
              triggerChange(true, e);
            }

            onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
          }

          function onInternalClick(e) {
            var ret = triggerChange(!innerChecked, e); // [Legacy] trigger onClick with value

            onClick === null || onClick === void 0 ? void 0 : onClick(ret, e);
          }

          var switchClassName = (0, _classnames.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-checked"), innerChecked), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
          return React.createElement("button", Object.assign({}, restProps, {
            type: "button",
            role: "switch",
            "aria-checked": innerChecked,
            disabled: disabled,
            className: switchClassName,
            ref: ref,
            onKeyDown: onInternalKeyDown,
            onClick: onInternalClick
          }), loadingIcon, React.createElement("span", {
            className: "".concat(prefixCls, "-inner")
          }, innerChecked ? checkedChildren : unCheckedChildren));
        });
        Switch.displayName = 'Switch';
        var _default = Switch;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        '@babel/runtime/helpers/objectWithoutProperties': _req3,
        'react': _req4,
        'classnames': _req5,
        'rc-util/lib/hooks/useMergedState': _req6,
        'rc-util/lib/KeyCode': _req7
      }));
    }
  };
});
//# sourceMappingURL=742af21c2c1639e8bb5ca24c6dc4435324422074.js.map