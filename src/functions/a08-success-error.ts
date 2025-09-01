export function successOrError(
    successCallback: (message: string) => void,
    errorCallback: (message: string) => void
): void {
    const randomValue = Math.random();
    
    if (randomValue < 0.5) {
        successCallback("Operation completed successfully!");
    } else {
        errorCallback("Something went wrong!");
    }
}