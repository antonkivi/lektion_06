import { helloCallback } from './functions/a01-hello-callback';
import { sayHelloLater } from './functions/a02-delayed-greeting';
import { mathCallback } from './functions/a03-math-callback';
import { uppercaseCallback } from './functions/a04-uppercase-callback';
import { orderPizza } from './functions/a05-pizza-order';
import { multipleMessages } from './functions/a06-multiple-messages';
import { downloadSimulation } from './functions/a07-download-simulation';
import { successOrError } from './functions/a08-success-error';
import { mathOperations } from './functions/a09-math-operations';
import { chainedCallbacks } from './functions/a10-chained-callbacks';

// 1) Hello Callback
console.log('1) Hello Callback:');
helloCallback((message) => {
    console.log(message);
});

console.log('\n2) Delayed Greeting (2 seconds):');
sayHelloLater((message) => {
    console.log(message);
});

// 3) Math Callback
console.log('\n3) Math Callback (5 + 3):');
mathCallback(5, 3, (result) => {
    console.log(`The result is: ${result}`);
});

// 4) Uppercase Callback
console.log('\n4) Uppercase Callback:');
const uppercased = uppercaseCallback('hello world', (text) => {
    return text;
});
console.log(`Original: "hello world", Uppercase: "${uppercased}"`);

// 5) Pizza Order
console.log('\n5) Pizza Order (3 seconds):');
orderPizza((message) => {
    console.log(message);
});

// 6) Multiple Messages
console.log('\n6) Multiple Messages:');
multipleMessages((message) => {
    console.log(message);
});

// 7) Download Simulation
console.log('\n7) Download Simulation (2 seconds):');
downloadSimulation('https://pocketbase.akivi.se', (message) => {
    console.log(message);
});

// 8) Success or Error
console.log('\n8) Success or Error (random):');
successOrError(
    (successMessage) => {
        console.log(`✓ ${successMessage}`);
    },
    (errorMessage) => {
        console.log(`✗ ${errorMessage}`);
    }
);

// 9) Math Operations
console.log('\n9) Math Operations:');
mathOperations(10, 5, 'add', (result) => {
    console.log(`10 + 5 = ${result}`);
});
mathOperations(10, 3, 'multiply', (result) => {
    console.log(`10 * 3 = ${result}`);
});
mathOperations(15, 3, 'divide', (result) => {
    console.log(`15 / 3 = ${result}`);
});
mathOperations(20, 7, 'subtract', (result) => {
    console.log(`20 - 7 = ${result}`);
});

// 10) Chained Callbacks
console.log('\n10) Chained Callbacks (3 seconds total):');
chainedCallbacks(() => {
    console.log('All steps completed!');
});

console.log('\nWaiting for delayed callbacks...');