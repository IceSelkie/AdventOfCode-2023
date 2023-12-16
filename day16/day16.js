data = (fs.readFileSync("input.txt")+"").split("\n").filter(a=>a)
str=(p,d)=>`${p.join()}|${d.join()}`;
ds = Object.fromEntries("^-1,0 v1,0 <0,-1 >0,1".split(" ").map(a=>[a[0],a.substring(1).split(",").map(Number)]));
reflMap = Object.fromEntries(">/^ >\\v v/< v\\> </v <\\^ ^/> ^\\< >-> >|^v <-< <|^v ^|^ v|v ^-<> v-<> >.> v.v ^.^ <.<".split(" ").map(a=>[a[0]+a[1],[...a.substring(2)].map(b=>ds[b])]));
dsr = Object.fromEntries(Object.entries(ds).map(a=>[a[1].join(),a[0]]))


run = (start="0,-1|0,1")=> {
  toProcess = [start];
  been = new Set();
  step = () => {
    let todo=toProcess;
    toProcess=[];
    todo.forEach(a=>{
      let [p,d]=a.split("|").map(b=>b.split(",").map(Number));
      let n=vadd(p,d);
      if (n[0]<0 || n[1]<0 || n[0]>=data.length || n[1]>=data[0].length)
        return;
      let sym=data[n[0]][n[1]];
      // console.log({p,d,n,sym,rk:dsr[d.join()]+sym});
      reflMap[dsr[d.join()]+sym].forEach(d=>{
        // console.log({d});
        toProcess.push(str(n,d));
      });
    });
    toProcess = toProcess.filter(a=>!been.has(a));
    toProcess.forEach(a=>been.add(a));
  }
  i=0;
  while (toProcess.length && i++<1e6) step();
  if (i==1e6)
    console.log("Did not complete.");
  return uniq([...been.values()].map(a=>a.split("|")[0])).length;
}
console.log("Part 1:",run());


starts = transpose(range(data.length).map(i=>[str([i,-1],ds[">"]), str([i,data.length],ds["<"]), str([-1,i],ds["v"]), str([data.length,i],ds["^"])])).flat();
time(()=>console.log("Part 2:",starts.map(run).max()));



