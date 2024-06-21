Function.prototype.myBind = function (context, ...boundArgs) {
    if (typeof this !== 'function') {
        throw new Error(this + ' is not callable');
    }
    const targetFunction = this;  // The function on which myBind is called

    return function (...args) {
        return targetFunction.apply(context, [...boundArgs, ...args]);
    };
}

let car = {
    name: "Mercedes",
    color: "White",
};

function buyCar(price, year) {
    console.log(`I bought a ${this.color} ${this.name} for ${price} made in ${year}`);
}

const buyMyCar = buyCar.myBind(car, "3000000");
buyMyCar("2020");