export class Shape {
    getArea() {
        throw new Error('This method should be overwritten');
    }

    getPerimeter() {
        throw new Error('This method should be overwritten');
    }
}

// Exercise 3: Make Rectangle, Triangle, and Circle child classes of Shape
// And override the getArea and getPerimeter methods

export class Rectangle {
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    getArea() {
        return this.#width * this.#height;
    }

    getPerimeter() {
        return 2 * (this.#width + this.#height);
    }

    getWidth() {
        return this.#width;
    }

    getHeight() {
        return this.#height;
    }
}

export class Triangle {
    #base;
    #height;

    constructor(base, height) {
        this.#base = base;
        this.#height = height;
    }

    getBase() {
        return this.#base;
    }

    getHeight() {
        return this.#height;
    }

    getHypotenuse() {
        return Math.sqrt(this.#base ** 2 + this.#height ** 2);
    }
}

export class Circle {
    #radius;

    constructor(radius) {
        this.#radius = radius;
    }

    getRadius() {
        return this.#radius;
    }
}
