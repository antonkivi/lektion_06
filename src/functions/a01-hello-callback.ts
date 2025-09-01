export function helloCallback(callback: (message: string) => void): void {
    callback('Hello from callback!');
}