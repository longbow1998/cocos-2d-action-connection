System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@ant-design/icons/HolderOutlined", "classnames", "rc-tree", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersTypeof) {
      _req2 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req3 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_antDesignIconsHolderOutlined) {
      _req4 = _antDesignIconsHolderOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcTree2) {
      _req6 = _rcTree2.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req10 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req11 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _HolderOutlined = _interopRequireDefault(require("@ant-design/icons/HolderOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcTree = _interopRequireDefault(require("rc-tree"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _motion = _interopRequireDefault(require("../_util/motion"));

        var _dropIndicator = _interopRequireDefault(require("./utils/dropIndicator"));

        var _iconUtil = _interopRequireDefault(require("./utils/iconUtil"));

        var Tree = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classNames;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction,
              virtual = _React$useContext.virtual;

          var customizePrefixCls = props.prefixCls,
              className = props.className,
              _props$showIcon = props.showIcon,
              showIcon = _props$showIcon === void 0 ? false : _props$showIcon,
              showLine = props.showLine,
              _switcherIcon = props.switcherIcon,
              _props$blockNode = props.blockNode,
              blockNode = _props$blockNode === void 0 ? false : _props$blockNode,
              children = props.children,
              _props$checkable = props.checkable,
              checkable = _props$checkable === void 0 ? false : _props$checkable,
              _props$selectable = props.selectable,
              selectable = _props$selectable === void 0 ? true : _props$selectable,
              draggable = props.draggable,
              _props$motion = props.motion,
              motion = _props$motion === void 0 ? (0, _extends2["default"])((0, _extends2["default"])({}, _motion["default"]), {
            motionAppear: false
          }) : _props$motion;
          var prefixCls = getPrefixCls('tree', customizePrefixCls);
          var newProps = (0, _extends2["default"])((0, _extends2["default"])({}, props), {
            checkable: checkable,
            selectable: selectable,
            showIcon: showIcon,
            motion: motion,
            blockNode: blockNode,
            showLine: Boolean(showLine),
            dropIndicatorRender: _dropIndicator["default"]
          });
          var draggableConfig = React.useMemo(function () {
            if (!draggable) {
              return false;
            }

            var mergedDraggable = {};

            switch ((0, _typeof2["default"])(draggable)) {
              case 'function':
                mergedDraggable.nodeDraggable = draggable;
                break;

              case 'object':
                mergedDraggable = (0, _extends2["default"])({}, draggable);
                break;

              default:
                break;
              // Do nothing
            }

            if (mergedDraggable.icon !== false) {
              mergedDraggable.icon = mergedDraggable.icon || /*#__PURE__*/React.createElement(_HolderOutlined["default"], null);
            }

            return mergedDraggable;
          }, [draggable]);
          return /*#__PURE__*/React.createElement(_rcTree["default"], (0, _extends2["default"])({
            itemHeight: 20,
            ref: ref,
            virtual: virtual
          }, newProps, {
            prefixCls: prefixCls,
            className: (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-icon-hide"), !showIcon), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-block-node"), blockNode), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-unselectable"), !selectable), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className),
            direction: direction,
            checkable: checkable ? /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-checkbox-inner")
            }) : checkable,
            selectable: selectable,
            switcherIcon: function switcherIcon(nodeProps) {
              return (0, _iconUtil["default"])(prefixCls, _switcherIcon, showLine, nodeProps);
            },
            draggable: draggableConfig
          }), children);
        });
        var _default = Tree;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/typeof': _req2,
        '@babel/runtime/helpers/extends': _req3,
        '@ant-design/icons/HolderOutlined': _req4,
        'classnames': _req5,
        'rc-tree': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../_util/motion': _req9,
        './utils/dropIndicator': _req10,
        './utils/iconUtil': _req11
      }));
    }
  };
});
//# sourceMappingURL=fe7eb58f53f9ccba50ec3c79b574fee0269b0160.js.map