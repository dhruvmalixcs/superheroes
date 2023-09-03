const flexItems = document.querySelectorAll('.card');

// Add click event listeners to each item
flexItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle between expanded and collapsed states
        if (item.style.flex === '1') {
            item.style.flex = '3'; // Expanded
        } else {
            item.style.flex = '1'; // Collapsed
        }

        // Set a timeout to automatically collapse the item after 3 seconds
        const collapseAfterTimeout = () => {
            item.style.flex = '1'; // Collapsed
        };
        setTimeout(collapseAfterTimeout, 3000); // 3000 milliseconds = 3 seconds
    });
});
