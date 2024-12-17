import {
  _decorator,
  BoxCollider2D,
  Component,
  ERigidBody2DType,
  PhysicsSystem2D,
  RigidBody2D,
  TiledMap,
  v2
} from "cc"
const { ccclass, property } = _decorator

@ccclass("game")
export class game extends Component {
  start() {
    PhysicsSystem2D.instance.enable = true
    PhysicsSystem2D.instance.debugDrawFlags = 1
    let map = this.node.getChildByName("map")
    const tiledMap = map.getComponent(TiledMap)
    const tiledSize = tiledMap.getTileSize()
    const layer = tiledMap.getLayer("wall")
    const layerSize = layer.getLayerSize()

    for (let i = 0; i < layerSize.width; i++) {
      for (let j = 0; j < layerSize.height; j++) {
        let tiled = layer.getTiledTileAt(i, j, true)
        if (tiled.grid !== 0) {
          let body = tiled.addComponent(RigidBody2D)
          body.group = Math.pow(2, 2)
          body.type = ERigidBody2DType.Static
          let collider = tiled.node.addComponent(BoxCollider2D)
          collider.group = Math.pow(2, 2)
          collider.offset = v2(tiledSize.width / 2, tiledSize.height / 2)
          collider.size = tiledSize
          collider.apply()

          console.log(body)
          console.log(collider)
        }
      }
    }
  }

  update(deltaTime: number) {}
}
