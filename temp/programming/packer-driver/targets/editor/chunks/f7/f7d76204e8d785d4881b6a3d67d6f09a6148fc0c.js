System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BoxCollider2D, Component, ERigidBody2DType, PhysicsSystem2D, RigidBody2D, TiledMap, v2, _dec, _class, _crd, ccclass, property, game;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      BoxCollider2D = _cc.BoxCollider2D;
      Component = _cc.Component;
      ERigidBody2DType = _cc.ERigidBody2DType;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      RigidBody2D = _cc.RigidBody2D;
      TiledMap = _cc.TiledMap;
      v2 = _cc.v2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1981e50eCRPcYoOacuAC8+G", "game", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider2D', 'Component', 'ERigidBody2DType', 'PhysicsSystem2D', 'RigidBody2D', 'TiledMap', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("game", game = (_dec = ccclass("game"), _dec(_class = class game extends Component {
        start() {
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = 1;
          let map = this.node.getChildByName("map");
          const tiledMap = map.getComponent(TiledMap);
          const tiledSize = tiledMap.getTileSize();
          const layer = tiledMap.getLayer("wall");
          const layerSize = layer.getLayerSize();

          for (let i = 0; i < layerSize.width; i++) {
            for (let j = 0; j < layerSize.height; j++) {
              let tiled = layer.getTiledTileAt(i, j, true);

              if (tiled.grid !== 0) {
                let body = tiled.addComponent(RigidBody2D);
                body.group = Math.pow(2, 2);
                body.type = ERigidBody2DType.Static;
                let collider = tiled.node.addComponent(BoxCollider2D);
                collider.group = Math.pow(2, 2);
                collider.offset = v2(tiledSize.width / 2, tiledSize.height / 2);
                collider.size = tiledSize;
                collider.apply();
                console.log(body);
                console.log(collider);
              }
            }
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f7d76204e8d785d4881b6a3d67d6f09a6148fc0c.js.map