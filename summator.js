const fs = require("fs");


let fileContent = fs.readFileSync("new_file.el", "utf8");

console.log(calculate(fileContent));

function calculate(str) {

    let split = str.split(' '),
      o = split[0],
      a = split[1],
      b = split[2]
  
    methods = {
    "сумма": (a, b) => Number(a) + Number(b)
    };
    
    return methods[o](a, b);
  
}
