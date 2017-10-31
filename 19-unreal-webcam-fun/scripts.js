const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error('oooh no!!', err);
    });
}

function paintToCanvas() {
  var width = video.videoWidth;
  var height = video.videoHeight;

  console.log(width, height);
  canvas.width = width;
  canvas.height = height;

  return setInterval(function() {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);

}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();
}

getVideo();

video.addEventListener('canplay', paintToCanvas);