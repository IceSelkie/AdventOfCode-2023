// import util::range
// import util::sum
// import util::itc
// import util::distrib
const range=n=>n<1?[]:[...new Array(n)].map((a,i)=>i);
const sum=arr=>arr.reduce((c,n)=>c+n);
const itc=i=>String.fromCharCode(i);
const distrib=(arr)=>{let map=new Map();arr.forEach(a=>{map.set(a,(map.get(a)??0)+1)});return[...map.entries()].sort().sort((a,b)=>b[1]-a[1])};
// import fs::readFileSync
const fs=require("fs");

// read "input.txt" to [[str, num], [str, num], ...]
const data = String(fs.readFileSync("input.txt")).split("\n").filter((a,i)=>a).map(a=>a.split(" ")).map(a=>[a[0],Number(a[1])]);
// map [hand, wager] to [9 - (number of unique symbols in hand), (number of the most common symbol in hand), (the card value of each character in hand as an integer cast to a string), wager]
// the array of those values will then be sorted alphabetically by their json representation (which is why the positive number 9-# is used instead of -#; and cast to char to keep each card as a single character, since otherwise "10" is before "9")
// Then extract the wager from each array element, multiply by its 1-indexed index
// And finally sum and print
console.log("Part 1:",sum(data.map(a=>{let d=distrib([...a[0]]);return[9-d.length,d[0][1],[...a[0]].map(a=>itc([...range(10).map(a=>""+a),..."TJQKA"].indexOf(a))),a[1]]}).sort().map((a,i)=>a[3]*(i+1))));

// Same thing as above, but convert all "J"s to the most common symbol in hand, and the card value of "J" is now below 2 (as 0).
convertJs=a=>[...a].map(c=>c=="J"?distrib([...a]).filter(a=>a[0]!="J")[0]?.[0]??"A":c);
console.log("Part 2:",sum(data.map(a=>{let d=distrib(convertJs(a[0]));return[9-d.length,d[0][1],[...a[0]].map(a=>itc(["J",...range(10).map(a=>""+a),..."TQKA"].indexOf(a))),a[1]]}).sort().map((a,i)=>a[3]*(i+1))));
