export function step1(callback: () => void): void {
    setTimeout(() => {
        console.log('Step 1 done');
        callback();
    }, 1000);
}

export function step2(callback: () => void): void {
    setTimeout(() => {
        console.log('Step 2 done');
        callback();
    }, 1000);
}

export function step3(callback: () => void): void {
    setTimeout(() => {
        console.log('Step 3 done');
        callback();
    }, 1000);
}

export function chainedCallbacks(finalCallback: () => void): void {
    step1(() => {
        step2(() => {
            step3(() => {
                finalCallback();
            });
        });
    });
}