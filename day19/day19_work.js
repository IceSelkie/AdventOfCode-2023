data = rfs2("ex1.txt").filter(a=>a)
data = rfs2("ex1.txt")
data = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n"))
data = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a))
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a))
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>a.substring(1,a.length-2))
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>a.substring(1,a.length-1))
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)])))
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1)]})
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",")]})
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split():[true,b])]})
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split():[true,b])]}).flat()
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split():[true,b])]}).flat(2)
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[true,b])]}).flat(2)
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a)]}).flat(2)
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a)]})
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a)]})[0]
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a)]})[0][1]
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a.length)]})[0][1]
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a.length==2?[eval("(a)=>a."+a[0],a[1])]:[()=>true,a[0]])]})[0][1]
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a.length==2?[eval("(a)=>a."+a[0]),a[1]]:[()=>true,a[0]])]})[0][1]
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a.length==2?[eval("(a)=>a."+a[0]),a[1]]:[()=>true,a[0]])]})[0]
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a.length==2?[eval("(a)=>a."+a[0]),a[1]]:[()=>true,a[0]])]})
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows = new Map(workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a.length==2?[eval("(a)=>a."+a[0]),a[1]]:[()=>true,a[0]])]}))
work=(p,w="in")=>workflows.get(w).find(([f,sym])=>f(p))[1]
work(parts[0],work(parts[0]))
parts[0]
parts
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts=parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows = new Map(workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a.length==2?[eval("(a)=>a."+a[0]),a[1]]:[()=>true,a[0]])]}))
work(parts[0],work(parts[0]))
work = (p,w="in")=>{let ret=workflows.get(w).find(([f,sym])=>f(p))[1]; if (!"RA".includes(ret)) return work(p,ret) return ret;}
work = (p,w="in")=>{let ret=workflows.get(w).find(([f,sym])=>f(p))[1];if(!"RA".includes(ret))return work(p,ret);return ret;}
work(parts[0])
parts.map(a=>work(a))
parts.filter(a=>work(a)=="A").map(a=>Object.values(a).sum()).sum()
work = (p,w="in")=>{let ret=workflows.get(w).find(([f,sym])=>f(p))[1];if(!"RA".includes(ret))return work(p,ret);return ret;}
[workflows, parts] = (fs.readFileSync("input.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts=parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows = new Map(workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a.length==2?[eval("(a)=>a."+a[0]),a[1]]:[()=>true,a[0]])]}))
work = (p,w="in")=>{let ret=workflows.get(w).find(([f,sym])=>f(p))[1];if(!"RA".includes(ret))return work(p,ret);return ret;}
console.log("Part 1:",parts.filter(a=>work(a)=="A").map(a=>Object.values(a).sum()).sum())
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)) ; parts=parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows = new Map(workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a.length==2?[eval("(a)=>a."+a[0]),a[1]]:[()=>true,a[0]])]}))
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); // parts=parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)]))) ; workflows = new Map(workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a.length==2?[eval("(a)=>a."+a[0]),a[1]]:[()=>true,a[0]])]}))
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = new Map(workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = new Map(workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]))
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]))
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])}
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])]
)
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])]}
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])]})
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])]})[0]
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])]})[6]
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])]})[7]
(inv=(str)=>str.split(/[<>]/g))("s<1351")
(inv=(str)=>str.split(/([<>])/g))("s<1351")
(inv=(str)=>{let arr=str.split(/([<>])/g) ; return arr[0]+{"<":">",">":"<"}[arr[1]]+arr[2]})("s<1351")
(inv=(str)=>{let arr=str.split(/([<>])/g) ; return arr[0]+{"<":">",">":"<"}[arr[1]]+arr[2]+1})("s<1351")
(inv=(str)=>{let arr=str.split(/([<>])/g) ; return arr[0]+{"<":">-1+",">":"<1+"}[arr[1]]+arr[2]})("s<1351")
(inv=(str)=>{let arr=str.split(/([<>])/g) ; arr.push({"<":[">",-1],">":["<",1]}[arr[1]]); return arr[0]+arr[3][0]+(arr[2]+arr[3][1])})("s<1351")
(inv=(str)=>{let arr=str.split(/([<>])/g) ; arr.push({"<":[">",-1],">":["<",1]}[arr[1]]); return arr[0]+arr[3][0]+(Number(arr[2])+arr[3][1])})("s<1351")
(inv=(str)=>{let arr=str.split(/([<>])/g) ; arr.push({"<":[">",-1],">":["<",1]}[arr[1]]); return arr[0]+arr[3][0]+(Number(arr[2])+arr[3][1])})("s>1351")
inv = (str)=>{let arr=str.split(/([<>])/g) ; arr.push({"<":[">",-1],">":["<",1]}[arr[1]]); return arr[0]+arr[3][0]+(Number(arr[2])+arr[3][1])}
workflows2
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])]}) ; workflows2[7]
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])]}) ; workflows2[7][1]
split = (conds,next)=> [conds+"&&"+next, conds+"&&"+inv(next)]
split = (conds,next)=>{conds=conds?conds+"&&":"";return[conds+next,conds+inv(next)]}
split("",workflows2[7][1][0][0])
splith = (conds,next)=>{conds=conds?conds+"&&":"";return[conds+next,conds+inv(next)]}
workflows2[7][1]
workflows2[7][1].reduce((c,n)=>{if(n.length==1) c.ret.push(c.in,n[0]); else {let [a,r]=splith(c.in,n[0]);c.ret.push(a,n[1]);c.in=r;} return c},{in:"",ret:[]})
workflows2[7][1].reduce((c,n)=>{if(n.length==1) c.ret.push([c.in,n[0]]); else {let [a,r]=splith(c.in,n[0]);c.ret.push([a,n[1]]);c.in=r;} return c},{in:"",ret:[]})
workflows2[7][1].reduce((c,n)=>{if(n.length==1) c.ret.push([c.in,n[0]]); else {let [a,r]=splith(c.in,n[0]);c.ret.push([a,n[1]]);c.in=r;} return c},{in:"",ret:[]}).ret
workflows2[7][1].reduce((c,n)=>{if(n.length==1) c.ret.push([c.in,n[0]]); else {let [a,r]=splith(c.in,n[0]);c.ret.push([a,n[1]]);c.in=r;} return c},{in:"",ret:[]}).ret
recomb = w=>w.reduce((c,n)=>{if(n.length==1) c.ret.push([c.in,n[0]]); else {let [a,r]=splith(c.in,n[0]);c.ret.push([a,n[1]]);c.in=r;} return c},{in:"",ret:[]}).ret
recomb = (w,in)=>w.reduce((c,n)=>{if(n.length==1) c.ret.push([c.in,n[0]]); else {let [a,r]=splith(c.in,n[0]);c.ret.push([a,n[1]]);c.in=r;} return c},{in,ret:[]}).ret
recomb = (w,in)=>w.reduce((c,n)=>{if(n.length==1) c.ret.push([c.in,n[0]]); else {let [a,r]=splith(c.in,n[0]);c.ret.push([a,n[1]]);c.in=r;} return c},{in:in,ret:[]}).ret
recomb = (w,cond)=>w.reduce((c,n)=>{if(n.length==1) c.ret.push([c.cond,n[0]]); else {let [a,r]=splith(c.cond,n[0]);c.ret.push([a,n[1]]);c.cond=r;} return c},{cond,ret:[]}).ret
recomb = (w,cond="")=>w.reduce((c,n)=>{if(n.length==1) c.ret.push([c.cond,n[0]]); else {let [a,r]=splith(c.cond,n[0]);c.ret.push([a,n[1]]);c.cond=r;} return c},{cond,ret:[]}).ret
recomb(workflows2[7][1])
recomb(workflows2[0][1])
workflows2[0]
workflows2.map(a=>[a[0],recomb(a[1])])
workflows2.map(a=>[a[0],recomb(a[1])]).flat()
(recomb = (w,cond="")=>w.reduce((c,n)=>{if(n.length==1) c.ret.push([c.cond,n[0]]); else {let [a,r]=splith(c.cond,n[0]);c.ret.push([a,n[1]]);c.cond=r;} return c},{cond,ret:[]}).ret)(workflows2[0][1])
(recomb = (w,cond="")=>w.reduce((c,n)=>{if(n.length==1) c.ret.push([c.cond,n[0]]); else {let [a,r]=splith(c.cond,n[0]);c.ret.push([a,n[1]]);c.cond=r;} return c},{cond,ret:[]}).ret.map(a=>[a[0],a[1]]))(workflows2[0][1])
(recomb = (w,cond="")=>w.reduce((c,n)=>{if(n.length==1) c.ret.push([c.cond,n[0]]); else {let [a,r]=splith(c.cond,n[0]);c.ret.push([a,n[1]]);c.cond=r;} return c},{cond,ret:[]}).ret.map(a=>[a[0].split("&&").sort().join("&&"),a[1]]))(workflows2[0][1])
recomb = (w,cond="")=>w.reduce((c,n)=>{if(n.length==1) c.ret.push([c.cond,n[0]]); else {let [a,r]=splith(c.cond,n[0]);c.ret.push([a,n[1]]);c.cond=r;} return c},{cond,ret:[]}).ret.map(a=>[a[0].split("&&").sort().join("&&"),a[1]]))
recomb = (w,cond="")=>w.reduce((c,n)=>{if(n.length==1) c.ret.push([c.cond,n[0]]); else {let [a,r]=splith(c.cond,n[0]);c.ret.push([a,n[1]]);c.cond=r;} return c},{cond,ret:[]}).ret.map(a=>[a[0].split("&&").sort().join("&&"),a[1]])
recomb(workflows2[7][1])
[workflows, parts] = (fs.readFileSync("ex1.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = new Map(workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])]})) ; workflows2.get("in")
recomb(workflows2.get("in")).map(a=>recomb(workflows2.get(a[1],a[0])))
recomb(workflows2.get("in")).map(a=>recomb(workflows2.get(a[1],a[0]))).flat()
recomb(workflows2.get("in")).map(a=>recomb(workflows2.get(a[1],a[0])))
recomb(workflows2.get("in")).map(a=>"AR".includes(a[1])?[a]:recomb(workflows2.get(a[1],a[0])))
step = w => recomb(w).map(a=>"AR".includes(a[1])?[a]:recomb(workflows2.get(a[1],a[0])))
step(workflows2.get("in"))
step(workflows2.get("in")).flat()
step = rw => rw.map(a=>"AR".includes(a[1])?[a]:recomb(workflows2.get(a[1],a[0])))
step = rw => rw.map(a=>"AR".includes(a[1])?[a]:recomb(workflows2.get(a[1],a[0]))).flat()
step(recomb(workflows2.get("in")))
step(step(recomb(workflows2.get("in"))))
stepAll = () => {let ret=[]; let work=recomb(workflows2.get("in")); while (work.length) {work=step(work); console.log(work); ret.push(work.filter(a=>"AR".includes(a[1]))); work = work.filter(a=>!"AR".includes(a[1]));}}
stepAll()
stepAll = () => {let ret=[]; let work=recomb(workflows2.get("in")); while (work.length) {work=step(work); console.log(work); ret.push(work.filter(a=>"AR".includes(a[1]))); work = work.filter(a=>!"AR".includes(a[1]));} return ret.flat()}
stepAll()
groupBy(_,a=>a[1])
groupBy(_,a=>a[1]).sort()
groupBy(stepAll(),a=>a[1]).sort()
groupBy(stepAll(),a=>a[1]).sort()[1][1]
stepAll = () => {let ret=[]; let work=recomb(workflows2.get("in")); i=0; while (work.length && i++<1000) {work=step(work); /*console.log(work);*/ ret.push(work.filter(a=>"AR".includes(a[1]))); work = work.filter(a=>!"AR".includes(a[1]));} return ret.flat()}
groupBy(stepAll(),a=>a[1]).sort()[1][1]
groupBy(stepAll(),a=>a[1]).sort()[0][1]
recomb(workflows2.get("in"))
step(recomb(workflows2.get("in")))
step = rw => rw.map(a=>"AR".includes(a[1])?[a]:recomb(workflows2.get(a[1],a[0]))).flat()
recomb(workflows2.get("px"))
recomb(workflows2.get("px"),"a")
step = rw => rw.map(a=>"AR".includes(a[1])?[a]:recomb(workflows2.get(a[1]),a[0])).flat()
step(recomb(workflows2.get("in")))
groupBy(stepAll(),a=>a[1]).sort()[0][1]
recomb(workflows2.get("in"))
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]))("a<1717&&m<1801&&m<839&&s<2771&&s>1350")
ts = "a<1717&&m<1801&&m<839&&s<2771&&s>1350"
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],a[1].map(a=>a.slice(1)))))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],a[1].map(a=>a.slice(1))))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],a[1].map(a=>a.slice(1))])(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],a[1].map(a=>a.slice(1))]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a.substring(0,2)).map(a=>[a[0],a[1].map(a=>a.slice(1,2),)]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a.substring(0,2)).map(a=>[a[0],a[1].map(a=>a)]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a.substring(0,2)).map(a=>[a[0],a[1].map(a=>a.slice(2))]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a.substring(0,2)).map(a=>[a[0],a[1].map(a=>Number(a.slice(2)))]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a.substring(0,2)).map(a=>[a[0].split(""),a[1].map(a=>Number(a.slice(2)))]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[0][1]).map(a=>Number(a.slice(2)))]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[0][1])]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[0])]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[0])]))(ts).flat()
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1])]))(ts).flat()
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1])]))(ts).flat().flat()
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1]])]))(ts).flat().flat()
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1][2]])]))(ts).flat().flat()
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1][0]])]))(ts).flat().flat()
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1]])]))(ts).flat().flat()
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))])]))(ts).flat().flat()
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>s=="<"?arr.min():arr.max())]))(ts).flat().flat()
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>s=="<"?arr.min():arr.max())]))(ts).flat()
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>s=="<"?arr.min():arr.max())]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]))(ts).flat()
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>a[1]))(ts).flat()
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>a[1]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>a[1].sort()))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>a[1].sort((a,b)=>b<a)))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>a[1].sort((a,b)=>a<b)))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>a[1]))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>new Map(a[1])))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>{let m = new Map(a[1]); return m.get("<")-m.get(">")}))(ts)
(countOne = (str) => groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>{let m = new Map(a[1]); return (m.get("<")??4001)-(m.get(">")??0)-1}))(ts)
(countOne = (str) => {let ret=groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>{let m = new Map(a[1]); return (m.get("<")??4001)-(m.get(">")??0)-1});while (ret.length<4)ret.push(4000);return ret})(ts)
(countOne = (str) => {let ret=groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>{let m = new Map(a[1]); return (m.get("<")??4001)-(m.get(">")??0)-1});while (ret.length<4)ret.push(4000);return ret.prod()})(ts)
4000**4
4000**4+1
(4000**4)*8+1
(countOne = (str) => {let ret=groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>{let m = new Map(a[1]); return (m.get("<")??4001)-(m.get(">")??0)-1});while (ret.length<4)ret.push(4000);return BigInt(ret.prod())})(ts)
countOne = (str) => {let ret=groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>{let m = new Map(a[1]); return (m.get("<")??4001)-(m.get(">")??0)-1});while (ret.length<4)ret.push(4000);return BigInt(ret.prod())})
countOne = (str) => {let ret=groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>{let m = new Map(a[1]); return (m.get("<")??4001)-(m.get(">")??0)-1});while (ret.length<4)ret.push(4000);return BigInt(ret.prod())}
groupBy(stepAll(),a=>a[1]).sort()[0][1]
groupBy(stepAll(),a=>a[1]).sort()[0][1].map(a=>countOne(a[0]))
groupBy(stepAll(),a=>a[1]).sort()[0][1].map(a=>countOne(a[0])).sum()
[workflows, parts] = (fs.readFileSync("input.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a)); workflows2 = new Map(workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])]})) ; workflows2.get("in")
groupBy(stepAll(),a=>a[1]).sort()[0][1].map(a=>countOne(a[0])).sum()
console.log("Part 2:",groupBy(stepAll(),a=>a[1]).sort()[0][1].map(a=>countOne(a[0])).sum())
countOne = (str) => {let ret=groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>{let m = new Map(a[1]); return (m.get("<")??4001)-(m.get(">")??0)-1});while (ret.length<4)ret.push(4000);return BigInt(ret.prod())}
console.log("Part 2:",groupBy(stepAll(),a=>a[1]).sort()[0][1].map(a=>countOne(a[0])).sum())