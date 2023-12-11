data = (fs.readFileSync("input.txt")+"").split("\n").filter(a=>a);
data = transpose(transpose(data.map(a=>a.includes("#")?[[...a]]:[[...a],[...a]]).flat()).map(a=>a.includes("#")?[a]:[a,a]).flat()).map(a=>a.join(""));
poss = data.map((a,i)=>[...a].map((b,j)=>b=="#"?[i,j]:undefined).filter(a=>a)).flat();
pairs = choose(poss.length,2).map(([a,b])=>[poss[a],poss[b]]);
console.log("Part 1:",pairs.map(([a,b])=>abs(a[0]-b[0])+abs(a[1]-b[1])).sum());

scale=1000000-1;
data = (fs.readFileSync("input.txt")+"").split("\n").filter(a=>a);
runsum = arr=>arr.reduce(([ret,run],n)=>{run+=n;ret.push(run);return[ret,run]},[[],0])[0];
bRows = runsum(data.map((a,i)=>a.includes("#")?0:1));
bCols = runsum(transpose(data.map(a=>[...a])).map(a=>a.join("")).map((a,i)=>a.includes("#")?0:1));
poss = data.map((a,i)=>[...a].map((b,j)=>b=="#"?[i,j]:undefined).filter(a=>a)).flat();
pairs = choose(poss.length,2);
console.log("Part 2:",pairs.map(([a,b])=>[poss[a],poss[b]]).map(([a,b])=>abs(a[0]-b[0])+abs(a[1]-b[1])+scale*(abs(bRows[b[0]]-bRows[a[0]])+abs(bCols[b[1]]-bCols[a[1]]))).sum());

