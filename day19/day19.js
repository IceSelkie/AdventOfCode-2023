[workflows, parts] = (fs.readFileSync("input.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a));
parts = parts.map(a=>Object.fromEntries(a.substring(1,a.length-1).split(",").map(a=>a.split("=")).map(([n,v])=>[n,Number(v)])));
workflows = new Map(workflows.map(a=>{let i=a.indexOf("{"); return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b]).map(a=>a.length==2?[eval("(a)=>a."+a[0]),a[1]]:[()=>true,a[0]])]}));
work = (p,w="in")=>{let ret=workflows.get(w).find(([f,sym])=>f(p))[1];if(!"RA".includes(ret))return work(p,ret);return ret};
console.log("Part 1:",parts.filter(a=>work(a)=="A").map(a=>Object.values(a).sum()).sum());



inv = (str)=>{let arr=str.split(/([<>])/g) ; arr.push({"<":[">",-1],">":["<",1]}[arr[1]]); return arr[0]+arr[3][0]+(Number(arr[2])+arr[3][1])};
splith = (conds,next)=>{conds=conds?conds+"&&":"";return[conds+next,conds+inv(next)]};
recomb = (w,cond="")=>w.reduce((c,n)=>{if(n.length==1) c.ret.push([c.cond,n[0]]); else {let [a,r]=splith(c.cond,n[0]);c.ret.push([a,n[1]]);c.cond=r;} return c},{cond,ret:[]}).ret.map(a=>[a[0].split("&&").sort().join("&&"),a[1]]);
step = rw => rw.map(a=>"AR".includes(a[1])?[a]:recomb(workflows2.get(a[1]),a[0])).flat();
stepAll = () => {let ret=[]; let work=recomb(workflows2.get("in")); i=0; while (work.length && i++<1000) {work=step(work); /*console.log(work);*/ ret.push(work.filter(a=>"AR".includes(a[1]))); work = work.filter(a=>!"AR".includes(a[1]));} return ret.flat()};
countOne = (str) => {let ret=groupBy(str.split("&&"),a=>a[0]).map(a=>[a[0],groupBy(a[1],a=>a[1]).map(a=>[a[0],a[1].map(b=>Number(b.substring(2)))]).map(([s,arr])=>[s,s=="<"?arr.min():arr.max()])]).map(a=>{let m = new Map(a[1]); return (m.get("<")??4001)-(m.get(">")??0)-1});while (ret.length<4)ret.push(4000);return ret.prod()};

[workflows, parts] = (fs.readFileSync("input.txt")+"").split("\n\n").map(b=>b.split("\n").filter(a=>a));
workflows2 = new Map(workflows.map(a=>{let i=a.indexOf("{");return[a.substring(0,i), a.substring(i+1,a.length-1).split(",").map(b=>b.includes(":")?b.split(":"):[b])]}));
groupBy(stepAll(),a=>a[1]).sort()[0][1].map(a=>countOne(a[0])).sum();
console.log("Part 2:",groupBy(stepAll(),a=>a[1]).sort()[0][1].map(a=>countOne(a[0])).sum());
