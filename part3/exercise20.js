const htmlserver = require("http").Server
const fs = require("fs");


const user = {
    firstName: "tikva",
    lastName: "yosef",
    email: "female",
    isConnect: true,
    age: 26
}

class Mystream1 extends htmlserver {
    constructor() {
        super();
        this.onWrite();
        this.on("request", this.onShowData)
        this.listen(3002);
    }
    onWrite() {
        let jsonToWrite = JSON.stringify(user)
        fs.writeFile("./user.json", `${jsonToWrite}`, () => { })
    }
    onShowData = (request, response) => {
        const streamData = fs.createReadStream('./user.json');
        streamData.pipe(response);
    }
}
module.exports = new Mystream1;
