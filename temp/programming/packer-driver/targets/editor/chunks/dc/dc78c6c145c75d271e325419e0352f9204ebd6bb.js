System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/KeyCode", "rc-util/lib/hooks/useMemo", "rc-select", "rc-tree", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req2 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req5 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMemo) {
      _req6 = _rcUtilLibHooksUseMemo.__cjsMetaURL;
    }, function (_rcSelect2) {
      _req7 = _rcSelect2.__cjsMetaURL;
    }, function (_rcTree2) {
      _req8 = _rcTree2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _useMemo = _interopRequireDefault(require("rc-util/lib/hooks/useMemo"));

        var _rcSelect = require("rc-select");

        var _rcTree = _interopRequireDefault(require("rc-tree"));

        var _LegacyContext = _interopRequireDefault(require("./LegacyContext"));

        var _TreeSelectContext = _interopRequireDefault(require("./TreeSelectContext"));

        var _valueUtil = require("./utils/valueUtil");

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
          width: 0,
          height: 0,
          display: 'flex',
          overflow: 'hidden',
          opacity: 0,
          border: 0,
          padding: 0,
          margin: 0
        };

        var OptionList = function OptionList(_, ref) {
          var _useBaseProps = (0, _rcSelect.useBaseProps)(),
              prefixCls = _useBaseProps.prefixCls,
              multiple = _useBaseProps.multiple,
              searchValue = _useBaseProps.searchValue,
              toggleOpen = _useBaseProps.toggleOpen,
              open = _useBaseProps.open,
              notFoundContent = _useBaseProps.notFoundContent;

          var _React$useContext = React.useContext(_TreeSelectContext.default),
              virtual = _React$useContext.virtual,
              listHeight = _React$useContext.listHeight,
              listItemHeight = _React$useContext.listItemHeight,
              treeData = _React$useContext.treeData,
              fieldNames = _React$useContext.fieldNames,
              onSelect = _React$useContext.onSelect,
              dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth,
              treeExpandAction = _React$useContext.treeExpandAction;

          var _React$useContext2 = React.useContext(_LegacyContext.default),
              checkable = _React$useContext2.checkable,
              checkedKeys = _React$useContext2.checkedKeys,
              halfCheckedKeys = _React$useContext2.halfCheckedKeys,
              treeExpandedKeys = _React$useContext2.treeExpandedKeys,
              treeDefaultExpandAll = _React$useContext2.treeDefaultExpandAll,
              treeDefaultExpandedKeys = _React$useContext2.treeDefaultExpandedKeys,
              onTreeExpand = _React$useContext2.onTreeExpand,
              treeIcon = _React$useContext2.treeIcon,
              showTreeIcon = _React$useContext2.showTreeIcon,
              switcherIcon = _React$useContext2.switcherIcon,
              treeLine = _React$useContext2.treeLine,
              treeNodeFilterProp = _React$useContext2.treeNodeFilterProp,
              loadData = _React$useContext2.loadData,
              treeLoadedKeys = _React$useContext2.treeLoadedKeys,
              treeMotion = _React$useContext2.treeMotion,
              onTreeLoad = _React$useContext2.onTreeLoad,
              keyEntities = _React$useContext2.keyEntities;

          var treeRef = React.useRef();
          var memoTreeData = (0, _useMemo.default)(function () {
            return treeData;
          }, [open, treeData], function (prev, next) {
            return next[0] && prev[1] !== next[1];
          }); // ========================== Values ==========================

          var mergedCheckedKeys = React.useMemo(function () {
            if (!checkable) {
              return null;
            }

            return {
              checked: checkedKeys,
              halfChecked: halfCheckedKeys
            };
          }, [checkable, checkedKeys, halfCheckedKeys]); // ========================== Scroll ==========================

          React.useEffect(function () {
            // Single mode should scroll to current key
            if (open && !multiple && checkedKeys.length) {
              var _treeRef$current;

              (_treeRef$current = treeRef.current) === null || _treeRef$current === void 0 ? void 0 : _treeRef$current.scrollTo({
                key: checkedKeys[0]
              });
            }
          }, [open]); // ========================== Search ==========================

          var lowerSearchValue = String(searchValue).toLowerCase();

          var filterTreeNode = function filterTreeNode(treeNode) {
            if (!lowerSearchValue) {
              return false;
            }

            return String(treeNode[treeNodeFilterProp]).toLowerCase().includes(lowerSearchValue);
          }; // =========================== Keys ===========================


          var _React$useState = React.useState(treeDefaultExpandedKeys),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              expandedKeys = _React$useState2[0],
              setExpandedKeys = _React$useState2[1];

          var _React$useState3 = React.useState(null),
              _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
              searchExpandedKeys = _React$useState4[0],
              setSearchExpandedKeys = _React$useState4[1];

          var mergedExpandedKeys = React.useMemo(function () {
            if (treeExpandedKeys) {
              return (0, _toConsumableArray2.default)(treeExpandedKeys);
            }

            return searchValue ? searchExpandedKeys : expandedKeys;
          }, [expandedKeys, searchExpandedKeys, treeExpandedKeys, searchValue]);
          React.useEffect(function () {
            if (searchValue) {
              setSearchExpandedKeys((0, _valueUtil.getAllKeys)(treeData, fieldNames));
            }
          }, [searchValue]);

          var onInternalExpand = function onInternalExpand(keys) {
            setExpandedKeys(keys);
            setSearchExpandedKeys(keys);

            if (onTreeExpand) {
              onTreeExpand(keys);
            }
          }; // ========================== Events ==========================


          var onListMouseDown = function onListMouseDown(event) {
            event.preventDefault();
          };

          var onInternalSelect = function onInternalSelect(__, info) {
            var node = info.node;

            if (checkable && (0, _valueUtil.isCheckDisabled)(node)) {
              return;
            }

            onSelect(node.key, {
              selected: !checkedKeys.includes(node.key)
            });

            if (!multiple) {
              toggleOpen(false);
            }
          }; // ========================= Keyboard =========================


          var _React$useState5 = React.useState(null),
              _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
              activeKey = _React$useState6[0],
              setActiveKey = _React$useState6[1];

          var activeEntity = keyEntities[activeKey];
          React.useImperativeHandle(ref, function () {
            var _treeRef$current2;

            return {
              scrollTo: (_treeRef$current2 = treeRef.current) === null || _treeRef$current2 === void 0 ? void 0 : _treeRef$current2.scrollTo,
              onKeyDown: function onKeyDown(event) {
                var _treeRef$current3;

                var which = event.which;

                switch (which) {
                  // >>> Arrow keys
                  case _KeyCode.default.UP:
                  case _KeyCode.default.DOWN:
                  case _KeyCode.default.LEFT:
                  case _KeyCode.default.RIGHT:
                    (_treeRef$current3 = treeRef.current) === null || _treeRef$current3 === void 0 ? void 0 : _treeRef$current3.onKeyDown(event);
                    break;
                  // >>> Select item

                  case _KeyCode.default.ENTER:
                    {
                      if (activeEntity) {
                        var _ref = (activeEntity === null || activeEntity === void 0 ? void 0 : activeEntity.node) || {},
                            selectable = _ref.selectable,
                            value = _ref.value;

                        if (selectable !== false) {
                          onInternalSelect(null, {
                            node: {
                              key: activeKey
                            },
                            selected: !checkedKeys.includes(value)
                          });
                        }
                      }

                      break;
                    }
                  // >>> Close

                  case _KeyCode.default.ESC:
                    {
                      toggleOpen(false);
                    }
                }
              },
              onKeyUp: function onKeyUp() {}
            };
          }); // ========================== Render ==========================

          if (memoTreeData.length === 0) {
            return /*#__PURE__*/React.createElement("div", {
              role: "listbox",
              className: "".concat(prefixCls, "-empty"),
              onMouseDown: onListMouseDown
            }, notFoundContent);
          }

          var treeProps = {
            fieldNames: fieldNames
          };

          if (treeLoadedKeys) {
            treeProps.loadedKeys = treeLoadedKeys;
          }

          if (mergedExpandedKeys) {
            treeProps.expandedKeys = mergedExpandedKeys;
          }

          return /*#__PURE__*/React.createElement("div", {
            onMouseDown: onListMouseDown
          }, activeEntity && open && /*#__PURE__*/React.createElement("span", {
            style: HIDDEN_STYLE,
            "aria-live": "assertive"
          }, activeEntity.node.value), /*#__PURE__*/React.createElement(_rcTree.default, (0, _extends2.default)({
            ref: treeRef,
            focusable: false,
            prefixCls: "".concat(prefixCls, "-tree"),
            treeData: memoTreeData,
            height: listHeight,
            itemHeight: listItemHeight,
            virtual: virtual !== false && dropdownMatchSelectWidth !== false,
            multiple: multiple,
            icon: treeIcon,
            showIcon: showTreeIcon,
            switcherIcon: switcherIcon,
            showLine: treeLine,
            loadData: searchValue ? null : loadData,
            motion: treeMotion,
            activeKey: activeKey // We handle keys by out instead tree self
            ,
            checkable: checkable,
            checkStrictly: true,
            checkedKeys: mergedCheckedKeys,
            selectedKeys: !checkable ? checkedKeys : [],
            defaultExpandAll: treeDefaultExpandAll
          }, treeProps, {
            // Proxy event out
            onActiveChange: setActiveKey,
            onSelect: onInternalSelect,
            onCheck: onInternalSelect,
            onExpand: onInternalExpand,
            onLoad: onTreeLoad,
            filterTreeNode: filterTreeNode,
            expandAction: treeExpandAction
          })));
        };

        var RefOptionList = /*#__PURE__*/React.forwardRef(OptionList);
        RefOptionList.displayName = 'OptionList';
        var _default = RefOptionList;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/toConsumableArray': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'react': _req4,
        'rc-util/lib/KeyCode': _req5,
        'rc-util/lib/hooks/useMemo': _req6,
        'rc-select': _req7,
        'rc-tree': _req8,
        './LegacyContext': _req9,
        './TreeSelectContext': _req10,
        './utils/valueUtil': _req11
      }));
    }
  };
});
//# sourceMappingURL=dc78c6c145c75d271e325419e0352f9204ebd6bb.js.map