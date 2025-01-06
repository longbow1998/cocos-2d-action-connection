System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "classnames", "rc-util/lib/Children/toArray", "react", "shallowequal", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
      _req7 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req2 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req3 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req4 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req5 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req6 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req9 = _rcUtilLibChildrenToArray.__cjsMetaURL;
    }, function (_react) {
      _req10 = _react.__cjsMetaURL;
    }, function (_shallowequal2) {
      _req11 = _shallowequal2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req12 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof3 = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var React = _interopRequireWildcard(require("react"));

        var _shallowequal = _interopRequireDefault(require("shallowequal"));

        var _Panel = _interopRequireDefault(require("./Panel"));

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

          if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
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
        /* eslint-disable react/prop-types */


        function getActiveKeysArray(activeKey) {
          var currentActiveKey = activeKey;

          if (!Array.isArray(currentActiveKey)) {
            var activeKeyType = (0, _typeof2.default)(currentActiveKey);
            currentActiveKey = activeKeyType === 'number' || activeKeyType === 'string' ? [currentActiveKey] : [];
          }

          return currentActiveKey.map(function (key) {
            return String(key);
          });
        }

        var Collapse = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2.default)(Collapse, _React$Component);

          var _super = (0, _createSuper2.default)(Collapse);

          function Collapse(_props) {
            var _this;

            (0, _classCallCheck2.default)(this, Collapse);
            _this = _super.call(this, _props);

            _this.onClickItem = function (key) {
              var activeKey = _this.state.activeKey;

              if (_this.props.accordion) {
                activeKey = activeKey[0] === key ? [] : [key];
              } else {
                activeKey = (0, _toConsumableArray2.default)(activeKey);
                var index = activeKey.indexOf(key);
                var isActive = index > -1;

                if (isActive) {
                  // remove active state
                  activeKey.splice(index, 1);
                } else {
                  activeKey.push(key);
                }
              }

              _this.setActiveKey(activeKey);
            };

            _this.getNewChild = function (child, index) {
              if (!child) return null;
              var activeKey = _this.state.activeKey;
              var _this$props = _this.props,
                  prefixCls = _this$props.prefixCls,
                  openMotion = _this$props.openMotion,
                  accordion = _this$props.accordion,
                  rootDestroyInactivePanel = _this$props.destroyInactivePanel,
                  expandIcon = _this$props.expandIcon,
                  collapsible = _this$props.collapsible; // If there is no key provide, use the panel order as default key

              var key = child.key || String(index);
              var _child$props = child.props,
                  header = _child$props.header,
                  headerClass = _child$props.headerClass,
                  destroyInactivePanel = _child$props.destroyInactivePanel,
                  childCollapsible = _child$props.collapsible;
              var isActive = false;

              if (accordion) {
                isActive = activeKey[0] === key;
              } else {
                isActive = activeKey.indexOf(key) > -1;
              }

              var mergeCollapsible = childCollapsible !== null && childCollapsible !== void 0 ? childCollapsible : collapsible;
              var props = {
                key: key,
                panelKey: key,
                header: header,
                headerClass: headerClass,
                isActive: isActive,
                prefixCls: prefixCls,
                destroyInactivePanel: destroyInactivePanel !== null && destroyInactivePanel !== void 0 ? destroyInactivePanel : rootDestroyInactivePanel,
                openMotion: openMotion,
                accordion: accordion,
                children: child.props.children,
                onItemClick: mergeCollapsible === 'disabled' ? null : _this.onClickItem,
                expandIcon: expandIcon,
                collapsible: mergeCollapsible
              }; // https://github.com/ant-design/ant-design/issues/20479

              if (typeof child.type === 'string') {
                return child;
              }

              Object.keys(props).forEach(function (propName) {
                if (typeof props[propName] === 'undefined') {
                  delete props[propName];
                }
              });
              return /*#__PURE__*/React.cloneElement(child, props);
            };

            _this.getItems = function () {
              var children = _this.props.children;
              return (0, _toArray.default)(children).map(_this.getNewChild);
            };

            _this.setActiveKey = function (activeKey) {
              if (!('activeKey' in _this.props)) {
                _this.setState({
                  activeKey: activeKey
                });
              }

              _this.props.onChange(_this.props.accordion ? activeKey[0] : activeKey);
            };

            var _activeKey = _props.activeKey,
                defaultActiveKey = _props.defaultActiveKey;
            var currentActiveKey = defaultActiveKey;

            if ('activeKey' in _props) {
              currentActiveKey = _activeKey;
            }

            _this.state = {
              activeKey: getActiveKeysArray(currentActiveKey)
            };
            return _this;
          }

          (0, _createClass2.default)(Collapse, [{
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps, nextState) {
              return !(0, _shallowequal.default)(this.props, nextProps) || !(0, _shallowequal.default)(this.state, nextState);
            }
          }, {
            key: "render",
            value: function render() {
              var _classNames;

              var _this$props2 = this.props,
                  prefixCls = _this$props2.prefixCls,
                  className = _this$props2.className,
                  style = _this$props2.style,
                  accordion = _this$props2.accordion;
              var collapseClassName = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, prefixCls, true), (0, _defineProperty2.default)(_classNames, className, !!className), _classNames));
              return /*#__PURE__*/React.createElement("div", {
                className: collapseClassName,
                style: style,
                role: accordion ? 'tablist' : null
              }, this.getItems());
            }
          }], [{
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps) {
              var newState = {};

              if ('activeKey' in nextProps) {
                newState.activeKey = getActiveKeysArray(nextProps.activeKey);
              }

              return newState;
            }
          }]);
          return Collapse;
        }(React.Component);

        Collapse.defaultProps = {
          prefixCls: 'rc-collapse',
          onChange: function onChange() {},
          accordion: false,
          destroyInactivePanel: false
        };
        Collapse.Panel = _Panel.default;
        var _default = Collapse;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/toConsumableArray': _req2,
        '@babel/runtime/helpers/classCallCheck': _req3,
        '@babel/runtime/helpers/createClass': _req4,
        '@babel/runtime/helpers/inherits': _req5,
        '@babel/runtime/helpers/createSuper': _req6,
        '@babel/runtime/helpers/typeof': _req7,
        'classnames': _req8,
        'rc-util/lib/Children/toArray': _req9,
        'react': _req10,
        'shallowequal': _req11,
        './Panel': _req12
      }));
    }
  };
});
//# sourceMappingURL=de3ef6c400dcf1ca13ae4d2dcad4f3759bc0721a.js.map