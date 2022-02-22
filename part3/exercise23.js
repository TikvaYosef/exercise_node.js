const htmlserver = require("http").Server
const fs = require("fs");

const managers = [
    {firstName: "tikva",lastName: "yosef",email: "tikva@gmail.com",salary: 15000,employees: ["keren", "yafit", "eden"]},
    {firstName: "tikva",lastName: "yosef",email: "tikva@gmail.com",salary: 15000,employees: ["keren", "yafit", "eden"]},
    {firstName: "tikva",lastName: "yosef",email: "tikva@gmail.com",salary: 15000,employees: ["keren", "yafit", "eden"]},
    {firstName: "tikva",lastName: "yosef",email: "tikva@gmail.com",salary: 15000,employees: ["keren", "yafit", "eden"]},
    {firstName: "tikva",lastName: "yosef",email: "tikva@gmail.com",salary: 15000,employees: ["keren", "yafit", "eden"]},

]

class Mystream4 extends htmlserver {
    constructor() {
        super();
        this.onWrite();
        this.on("request", this.onShowData)
        this.listen(7003);
    }
    onWrite() {
        let jsonToWrite = JSON.stringify(managers)
        fs.writeFile("./managers.json", `${jsonToWrite}`, () => { })
    }
    onShowData = (request, response) => {
        const streamData = fs.createReadStream('./managers.json');
        streamData.pipe(response)
        
    }

}
module.exports = new Mystream4;
