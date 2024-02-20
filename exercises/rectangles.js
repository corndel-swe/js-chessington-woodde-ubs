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

// Exercise 2: Make Square a child class of Rectangle
export class Square {
    #side;

    constructor(side) {
        this.#side = side; 
    }

    getArea() {
        return this.#side * this.#side;
    }

    getPerimeter() {
        return 4 * this.#side;
    }

    getWidth() {
        return this.#side;
    }

    getHeight() {
        return this.#side;
    }
}