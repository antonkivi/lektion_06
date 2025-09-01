export function uppercaseCallback(text: string, callback: (result: string) => string): string {
    return callback(text.toUpperCase());
}