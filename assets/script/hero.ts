import {
  _decorator,
  BoxCollider2D,
  Collider,
  Collider2D,
  Component,
  Contact2DType,
  EventKeyboard,
  input,
  Input,
  KeyCode,
  Node,
  RigidBody2D,
  SystemEvent,
  v2
} from "cc"
const { ccclass, property } = _decorator

@ccclass("hero")
export class hero extends Component {
  @property
  public keyCode: number[] = []
  private stand: boolean = false

  start() {
    input.on(Input.EventType.KEY_DOWN, event => {
      console.log(event.keyCode)
      this.keyCode.push(event.keyCode)
      console.log(this.keyCode)
    })

    input.on(Input.EventType.KEY_UP, event => {
      this.keyCode = this.keyCode.filter(item => item !== event.keyCode)
      console.log(this.keyCode)
    })

    const collider = this.getComponent(Collider2D)
    if (collider) {
      console.log("碰撞检测开始")
      // 这里没有绑定this的话 回调函数中的this.stand会报错
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
      collider.on(Contact2DType.END_CONTACT, this.onEndContact, this)
    }
  }

  onBeginContact(contact, selfCollider, otherCollider) {
    console.log("碰撞开始")
    console.log(contact, selfCollider, otherCollider)
    this.stand = true
  }

  onEndContact(contact, selfCollider, otherCollider) {
    console.log("碰撞结束")
    console.log(contact, selfCollider, otherCollider)
    this.stand = false
  }

  action() {
    const body = this.getComponent(RigidBody2D)

    if (this.keyCode.some(x => x === KeyCode.KEY_W) && this.stand) {
      console.log("跳跃")
      body.linearVelocity = body.linearVelocity.add(v2(0, 3))
    }
    if (this.keyCode.some(x => x === KeyCode.KEY_A)) {
      console.log("左移")
      body.linearVelocity = body.linearVelocity.add(v2(-0.1, 0))
    }
    if (this.keyCode.some(x => x === KeyCode.KEY_D)) {
      console.log("右移")
      body.linearVelocity = body.linearVelocity.add(v2(0.1, 0))
    }
    if (this.keyCode.some(x => x === KeyCode.KEY_S)) {
    }
  }

  update(deltaTime: number) {
    this.action()
  }

  onDestroy() {
    input.off(Input.EventType.KEY_DOWN)
    input.off(Input.EventType.KEY_UP)
  }
}
