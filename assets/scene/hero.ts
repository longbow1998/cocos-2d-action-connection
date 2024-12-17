import { _decorator, Component, Input, input, Node, SystemEvent } from "cc"
const { ccclass, property } = _decorator

enum State {
  stand = 0,
  attack
}

@ccclass("hero")
export class hero extends Component {
  start() {
    input.on(Input.EventType.KEY_DOWN, this.keyDown)
  }

  keyDown(e) {
    console.log(e)
  }

  update(deltaTime: number) {}
}
