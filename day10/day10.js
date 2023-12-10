fs = require("fs") ; zlib = require("zlib") ; null
// import util::rfs
rfs  = (fname)=> (fs.readFileSync(fname)+"").split("\n")
// import util::Array::sum
Object.defineProperties(Array.prototype,{sum: {value:function sum (acc=(a)=>a){return this.length==0?0:this.map(acc).reduce((c,n)=>c+n)},configurable:true}});
// import util::Array::count
Object.defineProperties(Array.prototype,{count:{value:function count(acc=(a)=>a){return this.length==0?0:this.reduce((c,n,i,arr)=>c+=!!acc(n,i,arr),0);},configurable:true}});


let data = rfs("input.txt").filter(a=>a).map(a=>" "+a+" ");
const width = data[0].length;
// Reshape to 2d, with a border of spaces
data = " ".repeat(width)+data.join("")+" ".repeat(width);
const neighbors = {
  "|":[-width,width],
  "-":[-1,1],
  "L":[-width,1],
  "J":[-width,-1],
  "7":[-1,width],
  "F":[1,width],
  ".":[],
  " ":[]
};

// console.log("Input read as:");
// data.split(" ").filter(a=>a).forEach(a=>console.log(a));

const start = data.indexOf("S");
// Move one unit in each direction from start
let curr = ([-width,-1,1,width].map(d=>d+start)
  // follow each path one unit from there
  .map(a=>[a,neighbors[data[a]].map(d=>d+a)])
  // select the paths that can move back to start
  .filter(a=>a[1].includes(start))
  // and those positions are where we will start BFS from
  .map(a=>a[0]).sort());

// For each possible letter at starting position
const letterForStart = (Object.entries(neighbors)
  // Find the location that flows into the two values in curr
  .find(a=>a[1].map(d=>start+d).sort()+""==curr+"")
  // Get the string of that letter
  [0]);
// Replace the S with that letter
data = data.substring(0,start) + letterForStart + data.substring(start+1);

// Positions already been to
let been = new Set([start]);
// Steps taken (started after the S)
let i=1;

// keep taking steps until ran out of places to go
while (curr.length>0) {
  // Move to neighboring locations
  curr = (curr.map(a=>neighbors[data[a]].map(d=>d+a)).flat()
    // Remove ones already been to
    .filter(a=>!been.has(a)));

  // Mark all locations as been-to
  curr.forEach(a=>been.add(a))

  // Increment step counter
  i++;
}
console.log("Part 1:",i-1);

// Only the path; all others are changed to "." (spaces still used to delimit lines)
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").join("");
// Ray cast to the left, odd edge count means inside
data3 = [...data2].map((a,i,datat)=>{
  // Select only "." positions
  if (a!=".")
    return a;
  // Take the substring from the start of the line to this location
  let t=data2.substring(0,i);
  t=t.substring(t.lastIndexOf(" ")+1);
  // Count symbols to the left: vertical bars are 1, // are -1/2 each, and \\ is +1/2
  let ret = [...t].map(a=>{return {"|":2,"7":1,"L":1,"F":-1,"J":-1}[a]??0}).sum();
  // Mod by 4; 0 is even edges, 2 is odd edges, happen with skipped spots
  ret = (ret%4+4)%4;
  // Convert insides to "I"
  return ret==2?"I":".";
}).join("");

// // Display just the path
// console.log("");
// console.log("Path:");
// data3.split(" ").filter(a=>a).forEach(a=>console.log([...a].map(a=>a!="I"?a:".").join("")));

// // Display the tiles inside
// console.log("");
// console.log("Insides:");
// data3.split(" ").filter(a=>a).forEach(a=>console.log([...a].map(a=>a=="I"?a:".").join("")));
// console.log("");

console.log("Part 2:",[...data3].count(a=>a=="I"));













