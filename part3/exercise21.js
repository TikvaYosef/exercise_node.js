const htmlserver = require("http").Server
const fs = require("fs");

let Users = [
   {firstName: "tikva",lastName: "yosef",email: "female",isConnect: true, age: 26},
   {firstName: "tikva",lastName: "yosef",email: "female",isConnect: true, age: 26},
   {firstName: "tikva",lastName: "yosef",email: "female",isConnect: true, age: 26},
   {firstName: "tikva",lastName: "yosef",email: "female",isConnect: true, age: 26},
   {firstName: "tikva",lastName: "yosef",email: "female",isConnect: true, age: 26},
   {firstName: "tikva",lastName: "yosef",email: "female",isConnect: true, age: 26}
]

class Mystream2 extends htmlserver {
    constructor() {
        super();
        this.onWrite();
        this.on("request", this.onShowData)
        this.listen(4002);
    }
    onWrite() {
        let jsonToWrite = JSON.stringify(Users)
        fs.writeFile("./users.json", `${jsonToWrite}`, () => { })
    }
    onShowData = (request, response) => {
        const streamData = fs.createReadStream('./users.json');
        streamData.pipe(response);
    }
}
module.exports = new Mystream2;
