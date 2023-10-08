document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('changeClassButton');
    
    // Add an event listener to the button
    button.addEventListener('click', function () {
        const paragraphs = document.querySelectorAll('p'); // Select all <p> elements
        
        // Iterate through the paragraphs and add classes based on the index
        paragraphs.forEach(function (paragraph, index) {
            const classNumber = Math.floor(index / 9) + 1; // Calculate class number
            paragraph.classList.add('q' + classNumber); // Add class
        }
        );
    });
}
);
