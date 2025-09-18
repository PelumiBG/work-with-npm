
export {default as Student} from "./class.js"

export function greet() {
    console.log("Hello Class")
};
export function sayHello(name) {
    console.log(`Hello ${name}! I hope you are good ?`)
};

export let gigs = '\nThere is a lot works and job listing on Upwork and fiver but you need to purchase connect'


export default class Student {
    // #water = 0;
    constructor(water) {
        return this._water = water;
    }
    getWater(amount) {
        return `${this._water += amount}ml`;
    }
    addWater(amount) {
        this._water += amount;
        return `${this._water}ml`;
    }
    get water() {
        return `There is ${this._water}ml water inside the bottle`
    }

    set water(amount) {
        this._water = amount;
    }
  }

export class jSS1 extends Student {

    getWater() {
        // super()
        return this._water;
    }
    addWater(amount) {
        this._water += amount;
        return `JSS1 student fetched ${this._water}ml of water inside the bucket`
    };
  };