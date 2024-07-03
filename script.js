// Function to return a promise that resolves with an array of numbers after 3 seconds

function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

function filterEvenNumbers(numbers) {
    return new Promise(resolve => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            document.getElementById('output').textContent = `Even Numbers: ${evenNumbers.join(', ')}`;
            resolve(evenNumbers);
        }, 1000);
    });
}

function multiplyNumbers(numbers) {
    return new Promise(resolve => {
        setTimeout(() => {
            const multipliedNumbers = numbers.map(num => num * 2);
            document.getElementById('output').textContent = `Multiplied Numbers: ${multipliedNumbers.join(', ')}`;
            resolve(multipliedNumbers);
        }, 2000);
    });
}

// Chain the promises
getData()
    .then(numbers => filterEvenNumbers(numbers))
    .then(evenNumbers => multiplyNumbers(evenNumbers))
    .catch(error => {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    });
