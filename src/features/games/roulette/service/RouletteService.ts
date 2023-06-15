import { Emitter } from "src/common/libs/Emitter";

type Position = {
  x: number;
  y: number;
};
class RouletteService extends Emitter {
  constructor() {
    super();
    this.init = this.init.bind(this);
    this.update = this.update.bind(this);
    this.start = this.start.bind(this);
    this.spin = this.spin.bind(this);
    this.reset = this.reset.bind(this);
  }
  static maxSpeed = 35;
  static minSpeed = 0;
  static events = {
    onSpeedChange: "onSpeedChange",
    onDegreeChange: "onDegreeChange",
  };
  // 始点
  initialPoint?: Position;
  // 現在点
  currentPoint?: Position;
  /**タッチした時間(ms) */
  startMs?: number;
  /** 角度*/
  private _degree: number = 0;
  /** 回転速度*/
  private _spinSpeed: number = 1;
  /** 時計回りかどうか*/
  isClockWise: boolean = true;
  /** 初期化済*/
  initialized: boolean = false;

  static getRandomSpeed() {
    return Math.random() * 20 + 10;
  }

  get spinSpeed() {
    return this._spinSpeed;
  }

  set spinSpeed(spinSpeed) {
    const newSpinSpeed = Math.max(
      Math.min(Number(spinSpeed.toFixed(1)), RouletteService.maxSpeed),
      RouletteService.minSpeed
    );
    if (newSpinSpeed !== this._spinSpeed) {
      this._spinSpeed = newSpinSpeed;
      this.emitter.emit(RouletteService.events.onSpeedChange, newSpinSpeed);
    }
  }

  get degree() {
    return this._degree;
  }

  set degree(degree) {
    const newDegree = Math.floor(degree);
    if (this._degree !== newDegree) {
      this._degree = newDegree;
      this.emitter.emit(RouletteService.events.onDegreeChange, newDegree);
    }
  }

  init(initialPosition?: Position, startMs?: number) {
    this.initialized = true;
    this.initialPoint = initialPosition;
    this.currentPoint = initialPosition;
    this.startMs = startMs;
    this.degree = 0;
  }

  update(currentPoint?: Position) {
    if (!currentPoint) return;
    if (!this.initialPoint) this.initialPoint = currentPoint;
    // タッチした場所からの回転角度を計算する
    const radian = Math.atan2(
      currentPoint.y - window.innerHeight / 2,
      currentPoint.x - window.innerWidth / 2
    );
    const degree = radian * (180 / Math.PI);

    // 時計回りの回転かどうかを判定する
    const isClockwise = degree >= this.degree;

    // 回転の向きが変更された場合は始点を現在位置に更新する
    if (isClockwise !== this.isClockWise) {
      this.initialPoint = currentPoint;
    }
    this.currentPoint = currentPoint;
    this.degree = degree;
    this.isClockWise = isClockwise;
  }

  start(endMs?: number) {
    if (!this.initialPoint || !this.currentPoint || !endMs) {
      // ランダムに回転速度を更新する
      this.spinSpeed = RouletteService.getRandomSpeed();
    } else {
      const { x: startX, y: startY } = this.initialPoint;
      const { x: endX, y: endY } = this.currentPoint;
      // swipeされた距離と時間からスピードを計算する
      const distance = Math.sqrt((startX - endX) ** 2 + (startY - endY) ** 2);
      if (!this.startMs) this.startMs = endMs - 1;
      const time = endMs - this.startMs;
      // 速度に応じて回転速度を変更する
      const spinSpeed = (distance / time) * 100;
      // 回転速度を更新する
      this.spinSpeed = spinSpeed;
    }
    this.spin();
  }

  async spin() {
    const sleep = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(null);
        }, 10);
      });
    while (this.spinSpeed > 0) {
      this.degree = this.isClockWise
        ? this.degree + this.spinSpeed
        : this.degree - this.spinSpeed;
      this.spinSpeed = this.spinSpeed - 0.1;
      await sleep();
    }
  }

  reset() {
    this.initialized = false;
    this.initialPoint = undefined;
    this.currentPoint = undefined;
    this.startMs = undefined;
    this.degree = 0;
    this.spinSpeed = 0;
  }
}

export default RouletteService;
