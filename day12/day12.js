// import filesystem
fs = require("fs");
// import util::array::sum
Object.defineProperties(Array.prototype,{sum: {value:function sum (acc=(a)=>a){return this.length==0?0:this.map(acc).reduce((c,n)=>c+n)},configurable:true}});
// import util::time
time=f=>{let t=+new Date();let r=f();console.log("Time Taken: "+((new Date()-t)/1000)+"s");return r};

// Dynamic Programming count of possible 
function dpCount(str, goal) {
  // Ensure we start with a '.'; duplicates can be ignored.
  str = ("."+str).replaceAll(/\.+/g,'.');

  let width,curr,prev,offset,i,j,k,invalid;

  width = str.length - goal.sum() - goal.length + 1;
  curr = new Array(width).fill(null);
  prev = new Array(width).fill(1);
  offset = goal[0]+1;

  if (width == 0)
    return 1;

  // Fill the "no elements found so far" row:
  if (str.includes("#"))
    for (i = str.indexOf("#"); i < width; i++)
      prev[i] = 0;

  for (j=0; j<goal.length; j++) {
    for (i=0; i<width; i++) {
      curr[i] = curr[i-1]??0;
      
      invalid = 0;
      for (k=0; k<goal[j]; k++)
        invalid += str[offset+i-k-1]==".";
      curr[i] += prev[i] * (!invalid);

      curr[i] *= str[i+offset] != "#";
    }

    [prev, curr] = [curr, prev];
    offset = offset+goal[j+1]+1;
  }

  return prev[width-1];
}


data = (fs.readFileSync("input.txt")+"").split("\n").filter(a=>a).map(a=>a.split(" "));
console.log("Part 1:",time(()=>data.map(a=>dpCount(a[0],a[1].split(",").map(Number))).sum()));
let scaleFactor = 5;
console.log("Part 2:",time(()=>data.map(a=>dpCount(new Array(scaleFactor).fill(a[0]).join("?"),new Array(scaleFactor).fill(a[1].split(",")).flat().map(Number))).sum()));
