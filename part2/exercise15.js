

const htmlserver = require("http").Server
const util = require("util");
const fs = require("fs");
const readFilePromise = util.promisify(fs.readFile)

class Myserver2 extends htmlserver {
    constructor() {
        super();
        this.onWrite();
        this.on("request", this.onShowData)
        this.listen(8080);
    }
    onWrite() {
        fs.writeFile("./City.txt", "Netanya (Hebrew: נְתַנְיָה) is a city in the Northern Central District of Israel, and is the capital of the surrounding Sharon plain. It is 30 km (18.6 mi) north of Tel Aviv, and 56 km (34.8 mi) south of Haifa, between Poleg stream and Wingate Institute in the south and the Avihayil stream in the north. Netanya was named in honor of Nathan Straus, a prominent Jewish American merchant and philanthropist in the early 20th century who was the co-owner of Macy's department store.", () => { })
    }
    onShowData = (request, response) => {
        readFilePromise("./City.txt")
            .then((data) => { response.end(data) })
            .catch((err) => { response.end("error with info") })
    }
}
module.exports = new Myserver2;