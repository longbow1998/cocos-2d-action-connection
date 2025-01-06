System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectWithoutProperties", "react", "rc-util/lib/warning", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _arrAdd, _arrDel, _calcDropPosition, _calcSelectedKeys, _conductExpandParent, _convertDataToTree, _getDragChildrenKeys, _getPosition, _isFirstChild, _isLastChild, _isTreeNode, _parseCheckedKeys, _posToArr, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req0 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req1 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req3 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react2) {
      _req4 = _react2.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req5 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.arrAdd = arrAdd;
        exports.arrDel = arrDel;
        exports.calcDropPosition = calcDropPosition;
        exports.calcSelectedKeys = calcSelectedKeys;
        exports.conductExpandParent = conductExpandParent;
        exports.convertDataToTree = convertDataToTree;
        exports.getDragChildrenKeys = getDragChildrenKeys;
        exports.getPosition = getPosition;
        exports.isFirstChild = isFirstChild;
        exports.isLastChild = isLastChild;
        exports.isTreeNode = isTreeNode;
        exports.parseCheckedKeys = parseCheckedKeys;
        exports.posToArr = posToArr;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _react = _interopRequireDefault(require("react"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _TreeNode = _interopRequireDefault(require("./TreeNode"));

        var _excluded = ["children"];

        function arrDel(list, value) {
          if (!list) return [];
          var clone = list.slice();
          var index = clone.indexOf(value);

          if (index >= 0) {
            clone.splice(index, 1);
          }

          return clone;
        }

        function arrAdd(list, value) {
          var clone = (list || []).slice();

          if (clone.indexOf(value) === -1) {
            clone.push(value);
          }

          return clone;
        }

        function posToArr(pos) {
          return pos.split('-');
        }

        function getPosition(level, index) {
          return "".concat(level, "-").concat(index);
        }

        function isTreeNode(node) {
          return node && node.type && node.type.isTreeNode;
        }

        function getDragChildrenKeys(dragNodeKey, keyEntities) {
          // not contains self
          // self for left or right drag
          var dragChildrenKeys = [];
          var entity = keyEntities[dragNodeKey];

          function dig() {
            var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            list.forEach(function (_ref) {
              var key = _ref.key,
                  children = _ref.children;
              dragChildrenKeys.push(key);
              dig(children);
            });
          }

          dig(entity.children);
          return dragChildrenKeys;
        }

        function isLastChild(treeNodeEntity) {
          if (treeNodeEntity.parent) {
            var posArr = posToArr(treeNodeEntity.pos);
            return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
          }

          return false;
        }

        function isFirstChild(treeNodeEntity) {
          var posArr = posToArr(treeNodeEntity.pos);
          return Number(posArr[posArr.length - 1]) === 0;
        } // Only used when drag, not affect SSR.


        function calcDropPosition(event, dragNode, targetNode, indent, startMousePosition, allowDrop, flattenedNodes, keyEntities, expandKeys, direction) {
          var _abstractDropNodeEnti;

          var clientX = event.clientX,
              clientY = event.clientY;

          var _event$target$getBoun = event.target.getBoundingClientRect(),
              top = _event$target$getBoun.top,
              height = _event$target$getBoun.height; // optional chain for testing


          var horizontalMouseOffset = (direction === 'rtl' ? -1 : 1) * (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX);
          var rawDropLevelOffset = (horizontalMouseOffset - 12) / indent; // find abstract drop node by horizontal offset

          var abstractDropNodeEntity = keyEntities[targetNode.props.eventKey];

          if (clientY < top + height / 2) {
            // first half, set abstract drop node to previous node
            var nodeIndex = flattenedNodes.findIndex(function (flattenedNode) {
              return flattenedNode.key === abstractDropNodeEntity.key;
            });
            var prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
            var prevNodeKey = flattenedNodes[prevNodeIndex].key;
            abstractDropNodeEntity = keyEntities[prevNodeKey];
          }

          var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
          var abstractDragOverEntity = abstractDropNodeEntity;
          var dragOverNodeKey = abstractDropNodeEntity.key;
          var dropPosition = 0;
          var dropLevelOffset = 0; // Only allow cross level drop when dragging on a non-expanded node

          if (!expandKeys.includes(initialAbstractDropNodeKey)) {
            for (var i = 0; i < rawDropLevelOffset; i += 1) {
              if (isLastChild(abstractDropNodeEntity)) {
                abstractDropNodeEntity = abstractDropNodeEntity.parent;
                dropLevelOffset += 1;
              } else {
                break;
              }
            }
          }

          var abstractDragDataNode = dragNode.props.data;
          var abstractDropDataNode = abstractDropNodeEntity.node;
          var dropAllowed = true;

          if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop({
            dragNode: abstractDragDataNode,
            dropNode: abstractDropDataNode,
            dropPosition: -1
          }) && abstractDropNodeEntity.key === targetNode.props.eventKey) {
            // first half of first node in first level
            dropPosition = -1;
          } else if ((abstractDragOverEntity.children || []).length && expandKeys.includes(dragOverNodeKey)) {
            // drop on expanded node
            // only allow drop inside
            if (allowDrop({
              dragNode: abstractDragDataNode,
              dropNode: abstractDropDataNode,
              dropPosition: 0
            })) {
              dropPosition = 0;
            } else {
              dropAllowed = false;
            }
          } else if (dropLevelOffset === 0) {
            if (rawDropLevelOffset > -1.5) {
              // | Node     | <- abstractDropNode
              // | -^-===== | <- mousePosition
              // 1. try drop after
              // 2. do not allow drop
              if (allowDrop({
                dragNode: abstractDragDataNode,
                dropNode: abstractDropDataNode,
                dropPosition: 1
              })) {
                dropPosition = 1;
              } else {
                dropAllowed = false;
              }
            } else {
              // | Node     | <- abstractDropNode
              // | ---==^== | <- mousePosition
              // whether it has children or doesn't has children
              // always
              // 1. try drop inside
              // 2. try drop after
              // 3. do not allow drop
              if (allowDrop({
                dragNode: abstractDragDataNode,
                dropNode: abstractDropDataNode,
                dropPosition: 0
              })) {
                dropPosition = 0;
              } else if (allowDrop({
                dragNode: abstractDragDataNode,
                dropNode: abstractDropDataNode,
                dropPosition: 1
              })) {
                dropPosition = 1;
              } else {
                dropAllowed = false;
              }
            }
          } else {
            // | Node1 | <- abstractDropNode
            //      |  Node2  |
            // --^--|----=====| <- mousePosition
            // 1. try insert after Node1
            // 2. do not allow drop
            if (allowDrop({
              dragNode: abstractDragDataNode,
              dropNode: abstractDropDataNode,
              dropPosition: 1
            })) {
              dropPosition = 1;
            } else {
              dropAllowed = false;
            }
          }

          return {
            dropPosition: dropPosition,
            dropLevelOffset: dropLevelOffset,
            dropTargetKey: abstractDropNodeEntity.key,
            dropTargetPos: abstractDropNodeEntity.pos,
            dragOverNodeKey: dragOverNodeKey,
            dropContainerKey: dropPosition === 0 ? null : ((_abstractDropNodeEnti = abstractDropNodeEntity.parent) === null || _abstractDropNodeEnti === void 0 ? void 0 : _abstractDropNodeEnti.key) || null,
            dropAllowed: dropAllowed
          };
        }
        /**
         * Return selectedKeys according with multiple prop
         * @param selectedKeys
         * @param props
         * @returns [string]
         */


        function calcSelectedKeys(selectedKeys, props) {
          if (!selectedKeys) return undefined;
          var multiple = props.multiple;

          if (multiple) {
            return selectedKeys.slice();
          }

          if (selectedKeys.length) {
            return [selectedKeys[0]];
          }

          return selectedKeys;
        }

        var internalProcessProps = function internalProcessProps(props) {
          return props;
        };

        function convertDataToTree(treeData, processor) {
          if (!treeData) return [];

          var _ref2 = processor || {},
              _ref2$processProps = _ref2.processProps,
              processProps = _ref2$processProps === void 0 ? internalProcessProps : _ref2$processProps;

          var list = Array.isArray(treeData) ? treeData : [treeData];
          return list.map(function (_ref3) {
            var children = _ref3.children,
                props = (0, _objectWithoutProperties2.default)(_ref3, _excluded);
            var childrenNodes = convertDataToTree(children, processor);
            return /*#__PURE__*/_react.default.createElement(_TreeNode.default, (0, _extends2.default)({
              key: props.key
            }, processProps(props)), childrenNodes);
          });
        }
        /**
         * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
         */


        function parseCheckedKeys(keys) {
          if (!keys) {
            return null;
          } // Convert keys to object format


          var keyProps;

          if (Array.isArray(keys)) {
            // [Legacy] Follow the api doc
            keyProps = {
              checkedKeys: keys,
              halfCheckedKeys: undefined
            };
          } else if ((0, _typeof2.default)(keys) === 'object') {
            keyProps = {
              checkedKeys: keys.checked || undefined,
              halfCheckedKeys: keys.halfChecked || undefined
            };
          } else {
            (0, _warning.default)(false, '`checkedKeys` is not an array or an object');
            return null;
          }

          return keyProps;
        }
        /**
         * If user use `autoExpandParent` we should get the list of parent node
         * @param keyList
         * @param keyEntities
         */


        function conductExpandParent(keyList, keyEntities) {
          var expandedKeys = new Set();

          function conductUp(key) {
            if (expandedKeys.has(key)) return;
            var entity = keyEntities[key];
            if (!entity) return;
            expandedKeys.add(key);
            var parent = entity.parent,
                node = entity.node;
            if (node.disabled) return;

            if (parent) {
              conductUp(parent.key);
            }
          }

          (keyList || []).forEach(function (key) {
            conductUp(key);
          });
          return (0, _toConsumableArray2.default)(expandedKeys);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _arrAdd = module.exports.arrAdd;
        _arrDel = module.exports.arrDel;
        _calcDropPosition = module.exports.calcDropPosition;
        _calcSelectedKeys = module.exports.calcSelectedKeys;
        _conductExpandParent = module.exports.conductExpandParent;
        _convertDataToTree = module.exports.convertDataToTree;
        _getDragChildrenKeys = module.exports.getDragChildrenKeys;
        _getPosition = module.exports.getPosition;
        _isFirstChild = module.exports.isFirstChild;
        _isLastChild = module.exports.isLastChild;
        _isTreeNode = module.exports.isTreeNode;
        _parseCheckedKeys = module.exports.parseCheckedKeys;
        _posToArr = module.exports.posToArr;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/toConsumableArray': _req0,
        '@babel/runtime/helpers/typeof': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/objectWithoutProperties': _req3,
        'react': _req4,
        'rc-util/lib/warning': _req5,
        './TreeNode': _req6
      }));
    }
  };
});
//# sourceMappingURL=5ab27a4ff7bfc92ebbc71fb962814f89ef21c926.js.map