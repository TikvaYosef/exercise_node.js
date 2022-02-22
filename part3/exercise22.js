const htmlserver = require("http").Server
const fs = require("fs");


const manager = {
    firstName: "tikva",
    lastName: "yosef",
    email: "tikva@gmail.com",
    salary: 15000,
    employees: ["keren", "yafit", "eden"]
}

class Mystream3 extends htmlserver {
    constructor() {
        super();
        this.onWrite();
        this.on("request", this.onShowData)
        this.listen(7000);
    }
    onWrite() {
        let jsonToWrite = JSON.stringify(manager)
        fs.writeFile("./manager.json", `${jsonToWrite}`, () => { })
    }
    onShowData = (request, response) => {
        const streamData = fs.createReadStream('./manager.json');
        streamData.pipe(response)
        
    }

}
module.exports = new Mystream3;
