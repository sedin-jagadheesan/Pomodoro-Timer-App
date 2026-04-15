export default class Timer {
  #timeLeft;
  #intervalId;
  #mode;

  constructor() {
    this.workDuration = 10; 
    this.breakDuration = 5; 

    this.#mode = "work";
    this.#timeLeft = this.workDuration;
    this.#intervalId = null;
  }

  getTime() {
    return this.#timeLeft;
  }

  getMode() {
    return this.#mode;
  }

  start(callback) {
    if (this.#intervalId) return;

    this.#intervalId = setInterval(() => {
      this.#timeLeft--;

      if (callback) callback();

      if (this.#timeLeft === 0) {
        this.switchMode();
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.#intervalId);
    this.#intervalId = null;
  }

  reset() {
    this.pause();
    this.#mode = "work";
    this.#timeLeft = this.workDuration;
  }

  switchMode() {
    if (this.#mode === "work") {
      this.#mode = "break";
      this.#timeLeft = this.breakDuration;
    } else {
      this.#mode = "work";
      this.#timeLeft = this.workDuration;
    }
  }
}