const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pas to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch our errors here
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start picture im Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
})

// On Load
selectMediaStream();