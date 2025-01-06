System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_classnames2) {
      _req2 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req5 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req6 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _col = _interopRequireDefault(require("../grid/col"));

        var _context = require("./context");

        var _ErrorList = _interopRequireDefault(require("./ErrorList"));

        var FormItemInput = function FormItemInput(props) {
          var prefixCls = props.prefixCls,
              status = props.status,
              wrapperCol = props.wrapperCol,
              children = props.children,
              errors = props.errors,
              warnings = props.warnings,
              formItemRender = props._internalItemRender,
              extra = props.extra,
              help = props.help,
              fieldId = props.fieldId,
              marginBottom = props.marginBottom,
              onErrorVisibleChanged = props.onErrorVisibleChanged;
          var baseClassName = "".concat(prefixCls, "-item");
          var formContext = React.useContext(_context.FormContext);
          var mergedWrapperCol = wrapperCol || formContext.wrapperCol || {};
          var className = (0, _classnames["default"])("".concat(baseClassName, "-control"), mergedWrapperCol.className); // Pass to sub FormItem should not with col info

          var subFormContext = React.useMemo(function () {
            return (0, _extends2["default"])({}, formContext);
          }, [formContext]);
          delete subFormContext.labelCol;
          delete subFormContext.wrapperCol;
          var inputDom = /*#__PURE__*/React.createElement("div", {
            className: "".concat(baseClassName, "-control-input")
          }, /*#__PURE__*/React.createElement("div", {
            className: "".concat(baseClassName, "-control-input-content")
          }, children));
          var formItemContext = React.useMemo(function () {
            return {
              prefixCls: prefixCls,
              status: status
            };
          }, [prefixCls, status]);
          var errorListDom = marginBottom !== null || errors.length || warnings.length ? /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexWrap: 'nowrap'
            }
          }, /*#__PURE__*/React.createElement(_context.FormItemPrefixContext.Provider, {
            value: formItemContext
          }, /*#__PURE__*/React.createElement(_ErrorList["default"], {
            fieldId: fieldId,
            errors: errors,
            warnings: warnings,
            help: help,
            helpStatus: status,
            className: "".concat(baseClassName, "-explain-connected"),
            onVisibleChanged: onErrorVisibleChanged
          })), !!marginBottom && /*#__PURE__*/React.createElement("div", {
            style: {
              width: 0,
              height: marginBottom
            }
          })) : null;
          var extraProps = {};

          if (fieldId) {
            extraProps.id = "".concat(fieldId, "_extra");
          } // If extra = 0, && will goes wrong
          // 0&&error -> 0


          var extraDom = extra ? /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, extraProps, {
            className: "".concat(baseClassName, "-extra")
          }), extra) : null;
          var dom = formItemRender && formItemRender.mark === 'pro_table_render' && formItemRender.render ? formItemRender.render(props, {
            input: inputDom,
            errorList: errorListDom,
            extra: extraDom
          }) : /*#__PURE__*/React.createElement(React.Fragment, null, inputDom, errorListDom, extraDom);
          return /*#__PURE__*/React.createElement(_context.FormContext.Provider, {
            value: subFormContext
          }, /*#__PURE__*/React.createElement(_col["default"], (0, _extends2["default"])({}, mergedWrapperCol, {
            className: className
          }), dom));
        };

        var _default = FormItemInput;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'classnames': _req2,
        'react': _req3,
        '../grid/col': _req4,
        './context': _req5,
        './ErrorList': _req6
      }));
    }
  };
});
//# sourceMappingURL=ed3758ad10226ae44f3e2195a2dcb8513af5ed47.js.map