const htmlserver = require("http").Server
const util = require("util");
const fs = require("fs");
const readFilePromise = util.promisify(fs.readFile)

let namesOfMovies = ["big mama", "batmen", "shrek", "toy story", "superman"]

class Myserver3 extends htmlserver {
    constructor() {
        super();
        this.onWrite();
        this.on("request", this.onShowData)
        this.listen(9090);
    }
    onWrite() {
        let jsonToWrite = JSON.stringify(namesOfMovies)
        fs.writeFile("./Movies.json", `${jsonToWrite}`, () => { })
    }
    onShowData = (request, response) => {
        readFilePromise("./Movies.json")
            .then((data) => { response.end(data) })
            .catch((err) => { response.end("error with info") })
    }
}
module.exports = new Myserver3;