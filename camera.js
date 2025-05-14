class Webcam {
  constructor(element, facingMode, videoElement) {
    this.element = element;
    this.facingMode = facingMode;
    this.videoElement = videoElement;
    this.stream = null;
  }

  async start() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: this.facingMode },
        audio: false,
      });
      this.videoElement.srcObject = this.stream;
    } catch (err) {
      console.error("Error:", err);
    }
  }

  snap() {
    const canvas = document.createElement("canvas");
    const video = this.videoElement;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.scale(-1, 1); // Flip horizontally
    ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);

    return canvas.toDataURL("image/png");
  }
}

let cameraBody = document.querySelector(".alarm-body");
let videoElement = document.getElementById("webcam-video");
let webCam = new Webcam(cameraBody, "user", videoElement);
webCam.start();

let isCamera = document.querySelector(".isCamera");

isCamera.addEventListener("click", () => {
  cameraBody.style.display = "block";
});

let x = document.querySelector(".X");

x.addEventListener("click", () => {
  cameraBody.style.display = "none";
});

let snap = document.querySelector(".snap");

snap.addEventListener("click", () => {
  let picture = webCam.snap();
  snap.href = picture;
});
