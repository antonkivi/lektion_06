export function mathCallback(num1: number, num2: number, callback: (result: number) => void): void {
    const result = num1 + num2;
    callback(result);
}