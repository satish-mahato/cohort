// const fs = require("fs");
// function satish(cb) {
//   fs.readFile("a.txt", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     cb(data);
//   });
// }
// function onDone(data) {
//   console.log(data);
// }
// satish(onDone);


// by Promise
const fs = require("fs");
function satishPromise(){
    return new Promise((resolve)=>{
        fs.readFile("a.txt", "utf-8", (err, data)=>{
            if (err){
                console.log("error",err);
            }
            resolve(data);
        });
});
}
function onDone(data){
    console.log(data);
}
satishPromise().then(onDone);
