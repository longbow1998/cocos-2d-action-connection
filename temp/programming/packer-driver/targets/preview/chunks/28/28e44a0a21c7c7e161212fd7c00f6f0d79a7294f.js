System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Collider2D, Component, Contact2DType, input, Input, KeyCode, RigidBody2D, v2, _dec, _class, _class2, _descriptor, _crd, ccclass, property, hero;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      RigidBody2D = _cc.RigidBody2D;
      v2 = _cc.v2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d74c9955pHxoNNOJJwc6Uu", "hero", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider2D', 'Collider', 'Collider2D', 'Component', 'Contact2DType', 'EventKeyboard', 'input', 'Input', 'KeyCode', 'Node', 'RigidBody2D', 'SystemEvent', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("hero", hero = (_dec = ccclass("hero"), _dec(_class = (_class2 = class hero extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "keyCode", _descriptor, this);

          this.stand = false;
        }

        start() {
          input.on(Input.EventType.KEY_DOWN, event => {
            console.log(event.keyCode);
            this.keyCode.push(event.keyCode);
            console.log(this.keyCode);
          });
          input.on(Input.EventType.KEY_UP, event => {
            this.keyCode = this.keyCode.filter(item => item !== event.keyCode);
            console.log(this.keyCode);
          });
          var collider = this.getComponent(Collider2D);

          if (collider) {
            console.log("碰撞检测开始"); // 这里没有绑定this的话 回调函数中的this.stand会报错

            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }

        onBeginContact(contact, selfCollider, otherCollider) {
          console.log("碰撞开始");
          console.log(contact, selfCollider, otherCollider);
          this.stand = true;
        }

        onEndContact(contact, selfCollider, otherCollider) {
          console.log("碰撞结束");
          console.log(contact, selfCollider, otherCollider);
          this.stand = false;
        }

        action() {
          var body = this.getComponent(RigidBody2D);

          if (this.keyCode.some(x => x === KeyCode.KEY_W) && this.stand) {
            console.log("跳跃");
            body.linearVelocity = body.linearVelocity.add(v2(0, 3));
          }

          if (this.keyCode.some(x => x === KeyCode.KEY_A)) {
            console.log("左移");
            body.linearVelocity = body.linearVelocity.add(v2(-0.1, 0));
          }

          if (this.keyCode.some(x => x === KeyCode.KEY_D)) {
            console.log("右移");
            body.linearVelocity = body.linearVelocity.add(v2(0.1, 0));
          }

          if (this.keyCode.some(x => x === KeyCode.KEY_S)) {}
        }

        update(deltaTime) {
          this.action();
        }

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN);
          input.off(Input.EventType.KEY_UP);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "keyCode", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28e44a0a21c7c7e161212fd7c00f6f0d79a7294f.js.map