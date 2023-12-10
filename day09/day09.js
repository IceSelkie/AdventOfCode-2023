data = rfs("input.txt").filter(a=>a).map(a=>a.split(" ").map(Number));
diffs = arr=>range(arr.length-1).map(i=>arr[i+1]-arr[i]);
console.log("Part 1:",data.map(a=>{let ret = [a]; while (!!ret[0].find(a=>a)) ret = [diffs(ret[0]),...ret]; return ret}).map(a=>a.reduce((c,n,i,a)=>c+n[n.length-1],0)).sum());
console.log("Part 2:",data.map(a=>{let ret = [a]; while (!!ret[0].find(a=>a)) ret = [diffs(ret[0]),...ret]; return ret}).map(a=>a.reduce((c,n,i,a)=>n[0]-c,0)).sum());
