document.addEventListener('DOMContentLoaded', function () {
    const trackButtons = document.querySelectorAll('.TrackSelector_trackButton__arDBC');
    const playButton = document.querySelector('#playButton');
    const stopButton = document.querySelector('#stopButton');
    const audio = new Audio(); // Create an audio element

    trackButtons.forEach(button => {
        button.addEventListener('click', function () {
            const trackName = this.textContent;
            console.log(`Selected track: ${trackName}`);
            // You can add logic to load specific audio tracks here
        });
    });

    playButton.addEventListener('click', function () {
        audio.play();
        console.log('Audio playing...');
    });

    stopButton.addEventListener('click', function () {
        audio.pause();
        audio.currentTime = 0;
        console.log('Audio stopped.');
    });

    // Add more JavaScript logic as needed
});
