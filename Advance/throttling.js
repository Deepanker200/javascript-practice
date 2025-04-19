function throttle(func, delay) {
    let shouldWait = false;

    return function (...args) {
        if (!shouldWait) {
            func.apply(this, args);
            shouldWait = true;

            setTimeout(() => {
                shouldWait = false;
            }, delay);
        }
    };
}


function logScroll() {
    console.log("Scrolling...");
}

window.addEventListener("scroll", throttle(logScroll, 1000)); // Runs once per second max
