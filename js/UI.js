export default class UI {
  constructor(timer) {
    this.timer = timer;

    this.timeEl = document.getElementById("time");
    this.modeEl = document.getElementById("mode");

    this.startBtn = document.getElementById("start");
    this.pauseBtn = document.getElementById("pause");
    this.resetBtn = document.getElementById("reset");

    this.addEventListeners();
    this.update();
  }

  formatTime(seconds) {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  }

  update() {
    this.timeEl.textContent = this.formatTime(this.timer.getTime());
    this.modeEl.textContent = this.timer.getMode().toUpperCase();
  }

  addEventListeners() {
    this.startBtn.addEventListener("click", () => {
      this.timer.start(() => this.update());
    });

    this.pauseBtn.addEventListener("click", () => {
      this.timer.pause();
    });

    this.resetBtn.addEventListener("click", () => {
      this.timer.reset();
      this.update();
    });
  }
}