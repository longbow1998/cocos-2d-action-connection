System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/assertThisInitialized", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "@babel/runtime/helpers/defineProperty", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _default0, _genCSSMotionList, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req2 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req4 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req5 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersAssertThisInitialized) {
      _req6 = _babelRuntimeHelpersAssertThisInitialized.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req7 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req8 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req9 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_react) {
      _req10 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req11 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req12 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req13 = _unresolved_4.__cjsMetaURL;
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
        exports.genCSSMotionList = genCSSMotionList;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var React = _interopRequireWildcard(require("react"));

        var _CSSMotion = _interopRequireDefault(require("./CSSMotion"));

        var _motion = require("./util/motion");

        var _diff = require("./util/diff");

        var _excluded = ["component", "children", "onVisibleChanged", "onAllRemoved"],
            _excluded2 = ["status"];

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

        var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
        /**
         * Generate a CSSMotionList component with config
         * @param transitionSupport No need since CSSMotionList no longer depends on transition support
         * @param CSSMotion CSSMotion component
         */

        function genCSSMotionList(transitionSupport) {
          var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CSSMotion.default;

          var CSSMotionList = /*#__PURE__*/function (_React$Component) {
            (0, _inherits2.default)(CSSMotionList, _React$Component);

            var _super = (0, _createSuper2.default)(CSSMotionList);

            function CSSMotionList() {
              var _this;

              (0, _classCallCheck2.default)(this, CSSMotionList);

              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              _this = _super.call.apply(_super, [this].concat(args));
              (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
                keyEntities: []
              });
              (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "removeKey", function (removeKey) {
                var keyEntities = _this.state.keyEntities;
                var nextKeyEntities = keyEntities.map(function (entity) {
                  if (entity.key !== removeKey) return entity;
                  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, entity), {}, {
                    status: _diff.STATUS_REMOVED
                  });
                });

                _this.setState({
                  keyEntities: nextKeyEntities
                });

                return nextKeyEntities.filter(function (_ref) {
                  var status = _ref.status;
                  return status !== _diff.STATUS_REMOVED;
                }).length;
              });
              return _this;
            }

            (0, _createClass2.default)(CSSMotionList, [{
              key: "render",
              value: function render() {
                var _this2 = this;

                var keyEntities = this.state.keyEntities;
                var _this$props = this.props,
                    component = _this$props.component,
                    children = _this$props.children,
                    _onVisibleChanged = _this$props.onVisibleChanged,
                    onAllRemoved = _this$props.onAllRemoved,
                    restProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
                var Component = component || React.Fragment;
                var motionProps = {};
                MOTION_PROP_NAMES.forEach(function (prop) {
                  motionProps[prop] = restProps[prop];
                  delete restProps[prop];
                });
                delete restProps.keys;
                return /*#__PURE__*/React.createElement(Component, restProps, keyEntities.map(function (_ref2) {
                  var status = _ref2.status,
                      eventProps = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
                  var visible = status === _diff.STATUS_ADD || status === _diff.STATUS_KEEP;
                  return /*#__PURE__*/React.createElement(CSSMotion, (0, _extends2.default)({}, motionProps, {
                    key: eventProps.key,
                    visible: visible,
                    eventProps: eventProps,
                    onVisibleChanged: function onVisibleChanged(changedVisible) {
                      _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                        key: eventProps.key
                      });

                      if (!changedVisible) {
                        var restKeysCount = _this2.removeKey(eventProps.key);

                        if (restKeysCount === 0 && onAllRemoved) {
                          onAllRemoved();
                        }
                      }
                    }
                  }), children);
                }));
              }
            }], [{
              key: "getDerivedStateFromProps",
              value: function getDerivedStateFromProps(_ref3, _ref4) {
                var keys = _ref3.keys;
                var keyEntities = _ref4.keyEntities;
                var parsedKeyObjects = (0, _diff.parseKeys)(keys);
                var mixedKeyEntities = (0, _diff.diffKeys)(keyEntities, parsedKeyObjects);
                return {
                  keyEntities: mixedKeyEntities.filter(function (entity) {
                    var prevEntity = keyEntities.find(function (_ref5) {
                      var key = _ref5.key;
                      return entity.key === key;
                    }); // Remove if already mark as removed

                    if (prevEntity && prevEntity.status === _diff.STATUS_REMOVED && entity.status === _diff.STATUS_REMOVE) {
                      return false;
                    }

                    return true;
                  })
                };
              } // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.

            }]);
            return CSSMotionList;
          }(React.Component);

          (0, _defineProperty2.default)(CSSMotionList, "defaultProps", {
            component: 'div'
          });
          return CSSMotionList;
        }

        var _default = genCSSMotionList(_motion.supportTransition);

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _genCSSMotionList = module.exports.genCSSMotionList;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectWithoutProperties': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        '@babel/runtime/helpers/classCallCheck': _req4,
        '@babel/runtime/helpers/createClass': _req5,
        '@babel/runtime/helpers/assertThisInitialized': _req6,
        '@babel/runtime/helpers/inherits': _req7,
        '@babel/runtime/helpers/createSuper': _req8,
        '@babel/runtime/helpers/defineProperty': _req9,
        'react': _req10,
        './CSSMotion': _req11,
        './util/motion': _req12,
        './util/diff': _req13
      }));
    }
  };
});
//# sourceMappingURL=01142af764fdf415ff1d34b2e37820989d4ce38f.js.map