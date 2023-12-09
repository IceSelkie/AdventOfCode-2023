data = (fs.readFileSync("input.txt")+"").split("\n").filter((a,i)=>a);
[instr, nodes] = [data[0],Object.fromEntries(data.slice(1).map(a=>a.split(" = ")).map(a=>[a[0],{L:a[1].substring(1,4),R:a[1].substring(6,9)}]))]

i = 0; curr = "AAA";
while (curr!="ZZZ") {
  curr = nodes[curr][instr[(i++)%instr.length]];
}
console.log("Part 1:", i);

start = Object.keys(nodes).filter(a=>a[2]=="A");
curr = start;
been=new Map();
memo=new Array(start.length).fill(null);
i=0;
while(memo.filter(a=>a).length!=start.length) {
  curr = curr.map(c=>c==null?c:nodes[c][instr[(i)%instr.length]]);
  i++;
  for (let j=0;j<start.length;j++)
    if (curr[j]){
      let k=j+" "+curr[j]+" "+(i%instr.length);
      if(!been.has(k)){
        been.set(k,i);
      }else{
        memo[j]=`${curr[j]} ${i}`;
        curr[j]=null;
      }
    }
};
console.log("Memoize done after",i,"iterations.");

lcm=(a,b)=>a*b/gcd(a,b);
memo = memo.map(a=>a.split(" ")).map(a=>{return {
      "node":a[0],
      "im":Number(a[1])%instr.length,
      "i":Number(a[1])
    }
  });
been=groupBy(
        [...been.entries()].map(a=>[a[0].split(" "),a[1]]),
        a=>a[0][0]
      ).map(a=>
        [
          Number(a[0]),
          a[1].map(a=>{return{"node":a[0][1],"im":Number(a[0][2]),"i":a[1]}})
        ]
      ).sort((a,b)=>a[0]-b[0]).map(a=>a[1]);
final = transpose([memo, been]);
final = final.map(([match,hist])=>
  [
    match.i-hist.find(a=>a.node==match.node&&a.im==match.im).i,
    ...hist.filter(a=>a.node[2]=="Z").sort((a,b)=>a.i-b.i)
  ]);
final = final.map(a=>
  [
    a[0],
    a.slice(1).map(b=>b.i%a[0])
  ]);
final = final.map(a=>(a[0])).reduce(lcm);

console.log("Part 2:",final);




