const throttle = (fun, delay) => {
    let lastTime = 0;
    return (...args) => {
        let now = Date.now();
        if(now - lastTime >= delay) {
            fun(...args);
            lastTime = now;
        }
    }
}

const search = (data) => {
    console.log("seaching", data);
}

const throttlingFunction = throttle(search, 1000);

throttlingFunction("Soham 1");
throttlingFunction("Soham 2");
throttlingFunction("Soham 3");
throttlingFunction("Soham 4");
throttlingFunction("Soham 5");

setTimeout(() => {
 throttlingFunction("searching in interval");
}, 2000)