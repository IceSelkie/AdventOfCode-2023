data = (fs.readFileSync("input.txt")+"").split("\n").filter(a=>a).map(a=>a.split(": ")[1].split(" | ").map(a=>a.split(" ").filter(a=>a).map(Number)));
sum(data.map(a=>a[0].filter(b=>a[1].includes(b)).length).map(a=>Math.floor(2**(a-1))));
console.log("Part 1:",sum(data.map(a=>a[0].filter(b=>a[1].includes(b)).length).map(a=>Math.floor(2**(a-1)))));

matches = data.map(a=>a[0].filter(b=>a[1].includes(b)).length);
multipliers = range(matches.length).map(a=>1).map((a,i,arr)=>{for(let j=0;j<matches[i];j++)if(i+j+1<arr.length)arr[i+j+1]+=a; return arr[i];});
console.log("Part 2:",sum(multipliers));
