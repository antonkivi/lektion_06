type MathOperation = 'add' | 'subtract' | 'multiply' | 'divide';

export function mathOperations(
    num1: number, 
    num2: number, 
    operation: MathOperation, 
    callback: (result: number | string) => void
): void {
    let result: number | string;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result = "Error: Division by zero";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Error: Invalid operation";
            break;
    }
    
    callback(result);
}