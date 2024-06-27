// Function to return a promise that resolves with an array of numbers after 3 seconds

function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

function filterOddNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(number => number % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
}

function multiplyEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = numbers.map(number => number * 2);
            resolve(multipliedNumbers);
        }, 2000);
    });
}

function manipulateData() {
    const output = document.getElementById('output');

    // Start with fetching the numbers
    getNumbers()
        .then(numbers => {
            output.textContent = `Initial array: ${numbers}`;
            return filterOddNumbers(numbers);
        })
        .then(evenNumbers => {
            output.textContent = `Even numbers: ${evenNumbers}`;
            return multiplyEvenNumbers(evenNumbers);
        })
        .then(multipliedNumbers => {
            output.textContent = `Multiplied numbers: ${multipliedNumbers}`;
        })
        .catch(error => {
            output.textContent = `Error: ${error.message}`;
        });
}

// Call the function to start the process
manipulateData();
