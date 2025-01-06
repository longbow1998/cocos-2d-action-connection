System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req3 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req8 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req9 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req10 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req11 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req12 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req13 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req14 = _unresolved_10.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _Avatar = _interopRequireDefault(require("./Avatar"));

        var _Button = _interopRequireDefault(require("./Button"));

        var _Node = _interopRequireDefault(require("./Node"));

        var _Element = _interopRequireDefault(require("./Element"));

        var _Image = _interopRequireDefault(require("./Image"));

        var _Input = _interopRequireDefault(require("./Input"));

        var _Paragraph = _interopRequireDefault(require("./Paragraph"));

        var _Title = _interopRequireDefault(require("./Title"));

        function getComponentProps(prop) {
          if (prop && (0, _typeof2["default"])(prop) === 'object') {
            return prop;
          }

          return {};
        }

        function getAvatarBasicProps(hasTitle, hasParagraph) {
          if (hasTitle && !hasParagraph) {
            // Square avatar
            return {
              size: 'large',
              shape: 'square'
            };
          }

          return {
            size: 'large',
            shape: 'circle'
          };
        }

        function getTitleBasicProps(hasAvatar, hasParagraph) {
          if (!hasAvatar && hasParagraph) {
            return {
              width: '38%'
            };
          }

          if (hasAvatar && hasParagraph) {
            return {
              width: '50%'
            };
          }

          return {};
        }

        function getParagraphBasicProps(hasAvatar, hasTitle) {
          var basicProps = {}; // Width

          if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
          } // Rows


          if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
          } else {
            basicProps.rows = 2;
          }

          return basicProps;
        }

        var Skeleton = function Skeleton(props) {
          var customizePrefixCls = props.prefixCls,
              loading = props.loading,
              className = props.className,
              style = props.style,
              children = props.children,
              _props$avatar = props.avatar,
              avatar = _props$avatar === void 0 ? false : _props$avatar,
              _props$title = props.title,
              title = _props$title === void 0 ? true : _props$title,
              _props$paragraph = props.paragraph,
              paragraph = _props$paragraph === void 0 ? true : _props$paragraph,
              active = props.active,
              round = props.round;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var prefixCls = getPrefixCls('skeleton', customizePrefixCls);

          if (loading || !('loading' in props)) {
            var _classNames;

            var hasAvatar = !!avatar;
            var hasTitle = !!title;
            var hasParagraph = !!paragraph; // Avatar

            var avatarNode;

            if (hasAvatar) {
              var avatarProps = (0, _extends2["default"])((0, _extends2["default"])({
                prefixCls: "".concat(prefixCls, "-avatar")
              }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar)); // We direct use SkeletonElement as avatar in skeleton internal.

              avatarNode = /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-header")
              }, /*#__PURE__*/React.createElement(_Element["default"], (0, _extends2["default"])({}, avatarProps)));
            }

            var contentNode;

            if (hasTitle || hasParagraph) {
              // Title
              var $title;

              if (hasTitle) {
                var titleProps = (0, _extends2["default"])((0, _extends2["default"])({
                  prefixCls: "".concat(prefixCls, "-title")
                }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
                $title = /*#__PURE__*/React.createElement(_Title["default"], (0, _extends2["default"])({}, titleProps));
              } // Paragraph


              var paragraphNode;

              if (hasParagraph) {
                var paragraphProps = (0, _extends2["default"])((0, _extends2["default"])({
                  prefixCls: "".concat(prefixCls, "-paragraph")
                }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
                paragraphNode = /*#__PURE__*/React.createElement(_Paragraph["default"], (0, _extends2["default"])({}, paragraphProps));
              }

              contentNode = /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-content")
              }, $title, paragraphNode);
            }

            var cls = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-with-avatar"), hasAvatar), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-active"), active), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-round"), round), _classNames), className);
            return /*#__PURE__*/React.createElement("div", {
              className: cls,
              style: style
            }, avatarNode, contentNode);
          }

          return typeof children !== 'undefined' ? children : null;
        };

        Skeleton.Button = _Button["default"];
        Skeleton.Avatar = _Avatar["default"];
        Skeleton.Input = _Input["default"];
        Skeleton.Image = _Image["default"];
        Skeleton.Node = _Node["default"];
        var _default = Skeleton;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/typeof': _req3,
        'classnames': _req4,
        'react': _req5,
        '../config-provider': _req6,
        './Avatar': _req7,
        './Button': _req8,
        './Node': _req9,
        './Element': _req10,
        './Image': _req11,
        './Input': _req12,
        './Paragraph': _req13,
        './Title': _req14
      }));
    }
  };
});
//# sourceMappingURL=b65037a8a86fab893975dc4f958c90e8e9527d27.js.map