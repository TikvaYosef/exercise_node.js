const htmlserver = require("http").Server
const util = require("util");
const fs = require("fs");
const readFilePromise = util.promisify(fs.readFile)

let arrayOfparrots = [
    {name:"parrotA",gender:"male",color:"red",country:"Brazil"},
    {name:"parrotB",gender:"female",color:"yellow",country:"israel"},
    {name:"parrotC",gender:"male",color:"green",country:"japan"},
    {name:"parrotD",gender:"female",color:"orange",country:"usa"},
    {name:"parrotE",gender:"male",color:"red",country:"Brazil"},
]

class Myserver5 extends htmlserver {
    constructor() {
        super();
        this.onWrite();
        this.on("request", this.onShowData)
        this.listen(2020);
    }
    onWrite() {
        let jsonToWrite = JSON.stringify(arrayOfparrots)
        fs.writeFile("./Parrots.json", `${jsonToWrite}`, () => { })
    }
    onShowData = (request, response) => {
        readFilePromise("./Parrots.json")
            .then((data) => { response.end(data) })
            .catch((err) => { response.end("error with info") })
    }
}
module.exports = new Myserver5;
