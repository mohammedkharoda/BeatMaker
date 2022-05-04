class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");
    this.kickAudio = document.querySelector(".kick-sound");
    this.tomAudio = document.querySelector(".tom-sound");
    this.percAudio = document.querySelector(".perc-sound");
    this.index = 0;
    this.bpm = 150;
  }

  activePads() {
    this.classList.toggle("active");
  }
  repeat() {
    let steps = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${steps}`);
    // Loop Over the activeBar
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;

      //check if pads are active
      if (bar.classList.contains("active")) {
        //check sounds
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("tom-pad")) {
          this.tomAudio.currentTime = 0;
          this.tomAudio.play();
        }
        if (bar.classList.contains("perc-pad")) {
          this.percAudio.currentTime = 0;
          this.percAudio.play();
        }
      }
    });
    this.index++;
  }

  start() {
    const interval = (60 / this.bmp) * 1000;
    setInterval(() => {
      this.repeat();
    }, interval);
  }
}

const drumKit = new DrumKit();

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePads);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumKit.playBtn.addEventListener("click", () => {
  drumKit.start();
});
