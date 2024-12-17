System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, _dec, _class, _crd, ccclass, property, State, hero;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Input = _cc.Input;
      input = _cc.input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8b4fpf93xAK7kwUpil8Q93", "hero", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Input', 'input', 'Node', 'SystemEvent']);

      ({
        ccclass,
        property
      } = _decorator);

      State = /*#__PURE__*/function (State) {
        State[State["stand"] = 0] = "stand";
        State[State["attack"] = 1] = "attack";
        return State;
      }(State || {});

      _export("hero", hero = (_dec = ccclass("hero"), _dec(_class = class hero extends Component {
        start() {
          input.on(Input.EventType.KEY_DOWN, this.keyDown);
        }

        keyDown(e) {
          console.log(e);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0cf58f4ab86fcc21bad1577d6112e15528f253a.js.map