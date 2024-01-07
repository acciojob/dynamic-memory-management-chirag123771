// Function to generate elements
function generateElements() {
    const container = document.getElementById('container');
    
    // Generate 10000 elements
    for (let i = 0; i < 10000; i++) {
        const element = document.createElement('div');
        element.textContent = `Element ${i + 1}`;
        container.appendChild(element);
    }
}

// Function to remove elements
function removeElements() {
    const container = document.getElementById('container');
    container.innerHTML = '';
}

// Event listeners for buttons
document.getElementById('generateBtn').addEventListener('click', generateElements);
document.getElementById('removeBtn').addEventListener('click', removeElements);

// Track memory usage
function trackMemoryUsage() {
    const memoryLimit = 50 * 1024 * 1024; // 50 MB in bytes

    const usedHeapSize = performance.memory.usedJSHeapSize;

    if (usedHeapSize > memoryLimit) {
        alert("Memory usage has exceeded 50 MB. Please optimize your actions to reduce memory consumption.");
    }

    // Schedule the next check
    setTimeout(trackMemoryUsage, 1000);
}

// Start tracking memory usage
trackMemoryUsage();
