// Fullscreen functionality
document.querySelector('.fullscreen-btn').addEventListener('click', function() {
    const gameContainer = document.querySelector('.game-iframe-container');
    
    if (gameContainer.requestFullscreen) {
        gameContainer.requestFullscreen();
    } else if (gameContainer.webkitRequestFullscreen) {
        gameContainer.webkitRequestFullscreen();
    } else if (gameContainer.msRequestFullscreen) {
        gameContainer.msRequestFullscreen();
    }
});

// Add click handlers for all "Play Now" buttons that don't have links
document.querySelectorAll('.play-now-btn').forEach(button => {
    if (!button.parentElement.tagName === 'A') {
        button.addEventListener('click', function() {
            // You can update these URLs with actual game URLs later
            window.open('https://gamemonetize.com/magic-tunnel-rush-game', '_blank');
        });
    }
});