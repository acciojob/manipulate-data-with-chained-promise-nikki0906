//your JS code here. If required.
// Function to return a promise after 3 seconds
// Function to return a promise after 3 seconds
function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Example usage of getData and chaining promises
getData()
    .then(array => {
        // Filter out odd numbers
        const filteredArray = array.filter(num => num % 2 === 0);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(filteredArray);
            }, 1000);
        });
})
    .then(filteredArray => {
        // Multiply even numbers by 2
        const multipliedArray = filteredArray.map(num => num * 2);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(multipliedArray);
            }, 2000);
        });
    })
    .then(finalArray => {
        // Update the HTML output with the final array
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = finalArray.join(', ');
    })
    .catch(error => {
        console.error('Error:', error);
    });
