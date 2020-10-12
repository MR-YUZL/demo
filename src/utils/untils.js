export function debounce(fn, time) {
    let timeout = null;
    return function () {
        clearTimeout(timeout)
        
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, time);
    }
}

export function throttle(fn, gapTime) {
    let lastTime = null;
    return function () {
        let newTime = +new Date()
        if (newTime - lastTime > gapTime || !lastTime) {
            fn()
            lastTime = newTime
        }
    }
}