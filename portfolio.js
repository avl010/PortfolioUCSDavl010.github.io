document.addEventListener('DOMContentLoaded', function () {
    // Get references to the sections
    const aboutSection = document.getElementById('about');
    const worksSection = document.getElementById('works');

    // Create an Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the section is in view, add the 'active' class
                entry.target.classList.add('active');

                // Check which section is in view and load content accordingly
                if (entry.target.id === 'dice-game') {
                    loadDiceGameContent();
                }
            }
        });
    }, { threshold: 0.5 });

    // Observe the sections
    observer.observe(aboutSection);
    observer.observe(worksSection);
    observer.observe(diceGameSection); // Add this line

    // Your existing code for reloading sections
    const sectionsToReload = document.querySelectorAll(".reloadable-section");
    const reloadObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionToReload = entry.target;
                console.log(`Reload section: ${sectionToReload.id}`);
            }
        });
    }, { threshold: 0.5 });

    sectionsToReload.forEach(section => {
        reloadObserver.observe(section);
    });
});

function loadDiceGameContent() {
    // Your logic to load content for the Dice Game page goes here
    // For example, update inner HTML, fetch data, etc.
    console.log('Loading Dice Game content...');
}
