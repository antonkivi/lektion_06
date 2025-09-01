export function multipleMessages(callback: (message: string) => void): void {
    callback("First message: Hello!");
    callback("Second message: How are you?");
    callback("Third message: Goodbye!");
}
