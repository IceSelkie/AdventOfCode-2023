data = (fs.readFileSync("input.txt")+"").split("\n").filter(a=>a)
colors = ["red","green","blue"]
allowed = [12, 13, 14]
console.log("Part 1:",sum(data.map(a=>a.split(": ")).map(a=>[Number(a[0].split(" ")[1]),a[1].split("; ").map(a=>{let cs=a.split(", ").map(a=>a.split(" "));return colors.map(c=>Number(cs.find(a=>a[1]==c)?.[0]??0))}).map(a=>a.map((b,i)=>b<=allowed[i])).reduce((c,n)=>c&&prod(n),true)]).filter(a=>a[1]).map(a=>a[0])))
console.log("Part 2:",sum(data.map(a=>a.split(": ")).map(a=>[Number(a[0].split(" ")[1]),prod(transpose(a[1].split("; ").map(a=>{let cs=a.split(", ").map(a=>a.split(" "));return colors.map(c=>Number(cs.find(a=>a[1]==c)?.[0]??0))})).map(a=>max(a)))]).map(a=>a[1])))
