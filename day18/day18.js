
d4 = {"L":[0,-1], "D":[1,0], "R":[0,1], "U":[-1,0]}
file = "input.txt"
data = rfs(file).filter(a=>a).map(a=>a.split(" ")).map(([d,n,c])=>[d,Number(n),c.substring(2,8)])
p = [0,0]; grid = new Map(); grid.set("0,0",[null,null]); data.forEach(([d,n,c])=>range(n).forEach((_,i)=>{if(i==0)grid.set(p.join(),["C",grid.get(p.join())[1]]);p=vadd(p,d4[d]); grid.set(p.join(),[d,c])})); grid.set(p.join(),["C",grid.get(p.join())[1]]);
toFlood = [[1,1]]; while(toFlood.length>0) {let n=toFlood.splice(-1)[0]; if (!grid.has(vts(n))) {grid.set(vts(n),["+",0]); Object.values(d4).map(d=>toFlood.push(vadd(n,d)))}}
dispGrid = (grid,disp) => {let [xstart, xlen, ystart, ylen] = transpose([...grid.keys()].map(a=>a.split(",").map(Number))).map(arr=>[arr.min(),arr.max()]).map(([mi,ma])=>[mi-1,ma-mi+3]).flat(); return range(xlen).map(i=>{let bars=0; return range(ylen).map(j=>{let here=grid.get([xstart+i,ystart+j].join()); if (!here && bars%2) return "+"; if (!here) return "."; if("UD".includes(here[0])) bars+=0; return here[0]}).join("")}).map(a=>{if (disp)console.log(a); return a})};
console.log("Part 1:",dispGrid(grid,true).map(a=>[...a]).flat().count(a=>a!="."));


