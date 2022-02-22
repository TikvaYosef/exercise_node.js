const htmlserver = require("http").Server
const util = require("util");
const fs = require("fs");
const readFilePromise = util.promisify(fs.readFile)

const parrot ={
    name:"kakadu",
    gender:"male",
    color:"red",
    country:"Brazil"
}

class Myserver4 extends htmlserver {
    constructor() {
        super();
        this.onWrite();
        this.on("request", this.onShowData)
        this.listen(9000);
    }
    onWrite() {
        let jsonToWrite = JSON.stringify(parrot)
        fs.writeFile("./Parrot.json", `${jsonToWrite}`, () => { })
    }
    onShowData = (request, response) => {
        readFilePromise("./Parrot.json")
            .then((data) => { response.end(data) })
            .catch((err) => { response.end("error with info") })
    }
}
module.exports = new Myserver4;
