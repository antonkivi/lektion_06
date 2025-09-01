export function downloadSimulation(url: string, callback: (message: string) => void): void {
    setTimeout(() => {
        callback(`Downloaded data from ${url}`);
    }, 2000);
}