data = (fs.readFileSync("input.txt")+"").split("\n").filter(a=>a);
console.log("Part 1:",transpose(data.map(a=>[...a])).map(a=>a.join("").split("#").map(a=>{let ct=[...a].count(b=>b=="O"); return "O".repeat(ct)+".".repeat(a.length-ct)}).join("#")).map(a=>[...a].map((b,i,arr)=>b=="O"?arr.length-i:0).sum()).sum());

fallUp = data => transpose(transpose(data.map(a=>[...a])).map(a=>a.join("").split("#").map(a=>{let ct=[...a].count(b=>b=="O"); return "O".repeat(ct)+".".repeat(a.length-ct)}).join("#")).map(a=>[...a])).map(a=>a.join(""));
fallLeft = data => data.map(a=>a.split("#").map(a=>{let ct=[...a].count(b=>b=="O"); return "O".repeat(ct)+".".repeat(a.length-ct)}).join("#"));

flip = data => data.map(a=>reverseString(a)).reverse();
loop = data => flip(fallUp(fallLeft(flip(fallLeft(fallUp(data))))));


seen = new Map(); w=data; i=0; seen.set(key=data.join(","),0);
while(i<1e6) {
  w=loop(w);
  i++;
  key=w.join(",");
  if(!seen.has(key)) 
    seen.set(key,i)
  else {
    console.log("Done at",{i});
    i+=1e10;
  }
}; i-=1e10;

cycle = i-seen.get(key);
goal = (1e9-i)%cycle + (i-cycle);
w=[...seen.entries()].filter(a=>a[1]==goal)[0][0].split(",");

score = arr => arr.map((row,i,arr)=>[...row].count(b=>b=="O")*(arr.length-i)).sum();
console.log("Part 2:",score(w));