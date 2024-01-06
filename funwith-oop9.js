class Animator {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  //now we can pass methods
  fadeOut(time, toggle = false) {
    // cuz default toggle = false it cant return ad if was never be executed!
    if (toggle && this.selector.classList.contains("fadeout-active")) {
      this.selector.style.opacity = 1;
      this.selector.classList.remove("fadeout-active");
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.opacity = 0;
      this.selector.classList.add("fadeout-active");
    }
  }

  move(time, toggle = false, { x = 0, y = 0 }) {
    if (toggle && this.selector.classList.contains("move-active")) {
      this.selector.style.transform = "translate(0px,0px)";
      this.selector.classList.remove("move-active");
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.transform = `translate(${x}px , ${y}px)`;
      this.selector.classList.add("move-active");
    }
  }
}

// const intro = new Animator(".intro");  -> by this method will apply on intro class
const intro = new Animator("h1");
const btnAnim = new Animator("button");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  intro.move(1, true, { x: 100, y: 200 });
  intro.fadeOut(2, true); //by true it can toggle either not
  btnAnim.move(2, true, { x: 300 });
});

// intro.fadeOut(1);
