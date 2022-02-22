// שאלה 8
const EventEmitter = require("events");
const fs = require("fs")

class MyEvent1 extends EventEmitter {
    constructor() {
        super();
        this.onWriteToFile()
    }
    onWriteToFile() {
        this.on("print to file", (Data) => {
            fs.writeFile("./event1.txt", `${Data}`, () => { })
        })
    }
    emitReadFromFile(data) {
        this.emit("print to file",data)
    }
}
module.exports = new MyEvent1;