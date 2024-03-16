document.addEventListener('DOMContentLoaded', (event) => {
    const mediaContainer = document.getElementById('mediaContainer');
    let items = Array.from(mediaContainer.getElementsByClassName('item'));
    
    // Fisher-Yates Shuffle algorithm
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]]; // ES6 destructuring assignment for swapping
    }
    
    // Clear the container and append the shuffled items
    mediaContainer.innerHTML = '';
    items.forEach(item => mediaContainer.appendChild(item));
});