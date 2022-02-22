

const EventEmitter = require("events")
const fs = require("fs")

class MyEvent2 extends EventEmitter {
    constructor() {
        super();
        this.Onprint();
    }
    Onprint() {
        this.on("print", () => {
            fs.writeFile("./event2.txt", "exercise999", () => { })
        })
    }
    emitprint() {
        this.emit("print", () => { })
    }
}
module.exports = new MyEvent2;