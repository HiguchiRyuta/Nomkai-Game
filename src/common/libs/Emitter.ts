import EventEmitter from "events";

export class Emitter {
  emitter = new EventEmitter();
  constructor() {}

  on(eventName: string, listener: (...args: any[]) => void) {
    this.emitter.on(eventName, listener);
  }
  off(eventName: string, listener: (...args: any[]) => void) {
    this.emitter.off(eventName, listener);
  }
}
