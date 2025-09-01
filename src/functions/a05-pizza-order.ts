export function orderPizza(callback: (message: string) => void): void {
    setTimeout(() => {
        callback('Your pizza is ready!');
    }, 3000);
}