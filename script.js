function getNumbers() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000);
            });
        }

        // Step 2: Function to filter out odd numbers
        function filterOddNumbers(numbers) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evenNumbers = numbers.filter(number => number % 2 === 0);
                    document.getElementById("output").innerText = evenNumbers.join(', ');
                    resolve(evenNumbers);
                }, 1000);
            });
        }

        // Step 3: Function to multiply even numbers by 2
        function multiplyByTwo(numbers) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const multipliedNumbers = numbers.map(number => number * 2);
                    document.getElementById("output").innerText = multipliedNumbers.join(', ');
                    resolve(multipliedNumbers);
                }, 2000);
            });
        }

        // Step 4: Chaining the promises
        getNumbers()
            .then(numbers => filterOddNumbers(numbers))
            .then(evenNumbers => multiplyByTwo(evenNumbers))
            .catch(error => console.error(error));