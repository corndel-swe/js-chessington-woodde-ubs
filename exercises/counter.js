class Counter {
    count;

    constructor() {
        count = 0;
    }

    increment() {
        count++;
    }

    reset() {
        count = 0;
    }

    getCount() {
        return count;
    }
}

// Replace `null` with an _instance_ of your counter
const counterInstance = null 

// Please don't change the lines below!
export {
    Counter,
    counterInstance
}