// שאלה2
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 != 0) {
//        console.log(i);
//     }
// }
// =========================================
// שאלה3
// let arrayOfNums = [];
// for (let i = 0; i <= 16; i++) {
//     let randomnum = Math.floor(Math.random() * 10)
//     if (i % 2 == 0) {
//         arrayOfNums.push(randomnum)
//         console.log(randomnum)
//     }
// }
// ==========================================
// שאלה4-אתגר
// const fs = require("fs");
// let Boy1 = {
//     name: "a",
//     age: 4,
//     Kindergarten: true
// }
// let boydata = JSON.stringify(Boy1);
// fs.writeFile("./boy1.json", `${boydata}`, () => {})
// ==============================================
// שאלה 5
// const fs = require("fs");
// let Kids = ["tikva", "keren", "shay", "yakov", "yoni"]
// // fs.writeFile("./kids.txt", `${Kids}`, () => { })
// fs.readFile("./kids.txt", (err, result) => {
//     if (err) throw err;
//     console.log(result.toString())
// })
// ================================================
// שאלה6-אתגר
// const fs = require("fs")
// let kids2 = [
//     kid1 = { name: "kid1", age: 3, isInKindergarten: true },
//     kid2 = { name: "kid2", age: 4, isInKindergarten: false },
//     kid3 = { name: "kid3", age: 5, isInKindergarten: false },
//     kid4 = { name: "kid4", age: 2, isInKindergarten: true },
//     kid5 = { name: "kid5", age: 1, isInKindergarten: true }
// ]
// // let data = JSON.stringify(kids2)
// // fs.writeFile("./kids.json", `${data}`, () => { })
// fs.readFile("./kids.json", (err, result) => {
//     if (err) throw err;
//     let data = JSON.parse(result)
//     data.forEach(item => {
//         if (item.isInKindergarten == true) {
//             console.log(item)
//         }
//     });
// })
// =====================================================
// שאלה 7
// const fs = require("fs")
// let arrayOfNums = []
// // for (let i = 0; i <= 100; i++) {
// //     let randomNum = Math.floor(Math.random() * 100)
// //     if (i % 7 == 0) {
// //         arrayOfNums.push(randomNum);
// //         fs.writeFile("./nums7.txt",`${arrayOfNums}`, () => { })
// //     }
// // }
// fs.readFile("./nums7.txt", (err, result) => {
//     if (err) throw err;
//     let nums = result.toString().split(",")
//     nums.forEach(item => {
//         let num = parseInt(item)
//         if (item > 50) {
//             console.log(item)
//         }
//     });
// })
// ==========================================
// const objectEvent1 = require("./exercise8")
// objectEvent1.emitReadFromFile("message")
// ==========================================
// const objectEvent2 = require("./exercise9");
// objectEvent2.emitprint();
// ==========================================
// require("./part2/exercise13")
// ==========================================
// require("./part2/exercise15")
// ==========================================
// require("./part2/exercise16")
// ==========================================
// require("./part2/exercise17")
// ==========================================
// require("./part2/exercise18")
// ==========================================
// require("./part3/exercise20")
// ==========================================
// require("./part3/exercise21")
// ==========================================
// require("./part3/exercise22")
// ==========================================
// require("./part3/exercise23")








