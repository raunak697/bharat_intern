// Define the delayedMessage function
// function delayedMessage(message, delay) {
//     setTimeout(function() {
//         console.log(message);
//     }, delay);
// }

// // Example usage of the delayedMessage function
// delayedMessage("This message will appear after 2 seconds", 2000);

// Define the countdown function
// function countdown(number) {
//     const intervalId = setInterval(function() {
//         console.log(number);
        
//         // Decrement the number
//         number--;

//         // Stop the interval when it reaches zero
//         if (number < 0) {
//             clearInterval(intervalId);
//         }
//     }, 1000);
// }

// // Example usage of the countdown function
// countdown(5);

// Define the wait function
// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // Define the countdown function
// async function countdown(number) {
//     for (let i = number; i >= 0; i--) {
//         console.log(i);
//         await wait(1000); // Wait for 1 second before the next iteration
//     }
//     return "Countdown complete!";
// }

// // Example usage of the countdown function
// countdown(5).then(message => console.log(message));

// Define the wait function
// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // Define the delayedLogSequence function
// async function delayedLogSequence(messages, delay) {
//     for (const message of messages) {
//         console.log(message);
//         await wait(delay); // Wait for the specified delay before logging the next message
//     }
// }

// // Example usage of the delayedLogSequence function
// const messages = ["Hello", "How are you?", "This is a delayed log sequence."];
// delayedLogSequence(messages, 2000); // Logs each message every 2 seconds

// Define the randomDelayMessage function
// function randomDelayMessage(message) {
//     return new Promise((resolve) => {
//         // Generate a random delay between 1000 ms (1 second) and 5000 ms (5 seconds)
//         const delay = Math.floor(Math.random() * 4000) + 1000;

//         setTimeout(() => {
//             console.log(message);
//             resolve();
//         }, delay);
//     });
// }

// // Example usage of the randomDelayMessage function
// randomDelayMessage("This message is displayed after a random delay.");

// Define the repeatAction function
// function repeatAction(action, interval, duration) {
//     return new Promise((resolve) => {
//         const intervalId = setInterval(action, interval);
        
//         // Stop the interval after the specified duration
//         setTimeout(() => {
//             clearInterval(intervalId);
//             resolve("Action repeated for the specified duration.");
//         }, duration);
//     });
// }

// // Example usage of the repeatAction function
// repeatAction(() => console.log("Action executed"), 1000, 5000)
//     .then(message => console.log(message));