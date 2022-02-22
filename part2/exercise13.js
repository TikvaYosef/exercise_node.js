
const htmlserver = require("http").Server
const util = require("util");
const fs = require("fs");
const readFilePromise = util.promisify(fs.readFile)


class Myserver1 extends htmlserver {
    constructor() {
        super();
        this.onWrite();
        this.on("request", this.onShowData)
        this.listen(8000);
    }
    onWrite() {
        fs.writeFile("./Movie.txt", "Big Momma's House is a 2000 crime comedy film, directed by Raja Gosnell, and written by Darryl Quarles and Don Rhymer. The film stars Martin Lawrence as an FBI agent who is tasked with tracking down an escaped convict and their loot, by going undercover as the estranged grandmother of their former girlfriend, unaware of the bond he will form with her. The film also stars Nia Long, Paul Giamatti, and Terrence Howard.", () => { })
    }
    onShowData = (request, response) => {
        readFilePromise("./Movie.txt")
            .then((data) => { response.end(data) })
            .catch((err) => { response.end("error with info")})
    }
}
module.exports = new Myserver1;