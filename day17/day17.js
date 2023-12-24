data = rfs("input.txt").filter(a=>a)



left=z=>((Math.floor(z/4)+1)*4+1)%16;
right=z=>((Math.floor(z/4)-1)*4+17)%16;
forward=z=>z%4==3?null:z+1;
d4=[[0,-1],[1,0],[0,1],[-1,0]];
d4s = "<v>^";

getHeat=([x,y,z])=>Number(data[x][y]);
mh = ([x,y,z])=>z?been.get([x,y,z].join()):range(16).min(z=>been.get([x,y,z].join()),true);

validMoves=([x,y,z])=>{let ret=[left(z),forward(z),right(z)].filter(a=>a);return ret.map(z=>[...vadd([x,y],d4[Math.floor(z/4)]),z]).filter(([x,y])=>x>=0&&y>=0&&x<data.length&&y<data.length)};

data = rfs("input.txt").filter(a=>a)
paths = new Map(); been = new Map(); been.set("0,0,4",0); queue = [[0,0,4]]; lastMin = 0; while (queue.length) {if (mh(queue[0])!=lastMin) {queue.sort((a,b)=>mh(a)-mh(b)); /*console.log*/(lastMin=mh(queue[0]));} let curr=queue.splice(0,1)[0];let h=been.get(curr.join());let next=validMoves(curr).filter(n=>!been.has(n.join())); /*console.log(curr,h,"->",*/next.map(n=>{let str=`${n}->${h+getHeat(n)}`; paths.set(str,[...curr,h]); return str;}/*)*/);next.forEach(n=>{been.set(n.join(),h+getHeat(n));queue.push(n)});};

console.log("Part 1:",mh([data.length-1,data.length-1]));

// stepBefore=([x,y])=>{let h=-getHeat([x,y])+range(16).map(z=>been.get([x,y,z].join())).min(); let check = d4.map((d,i)=>range(16).map(z=>[...vsub([x,y],d),z])).flat(); return check.find(a=>been.get(a.join())==h)/*.min(a=>been.get(a.join()))*/}
// pathTo=([x,y,z])=>{let chain=[[x,y,z]]; let i=0; while (!(x==0&&y==0) && i<50) {[x,y,z]=stepBefore([x,y]);chain.push([x,y,z,mh([x,y,z])]); i++; console.log({x,y,z})}; return chain.reverse()}
// chain = new Map(pathTo([data.length-1,data.length-1,0]).map(([x,y,z])=>[x+","+y,z]))
// console.log(range(data.length).map(x=>range(data.length).map(y=>d4s[Math.floor(chain.get(x+","+y)/4)]??".").join("")).join("\n"))



nStep = 10;
stepMin = 4;

smx = nStep+1;
zlen = smx*4;

left=z=>z%smx<stepMin?null:((Math.floor(z/smx)+1)*smx+1)%zlen;
right=z=>z%smx<stepMin?null:((Math.floor(z/smx)-1)*smx+1+zlen)%zlen;
forward=z=>z%smx==smx-1?null:z+1;
d4=[[0,-1],[1,0],[0,1],[-1,0]];
d4s = "<v>^";

getHeat=([x,y,z])=>Number(data[x][y]);
mh = ([x,y,z])=>z?been.get([x,y,z].join()):range(zlen).min(z=>been.get([x,y,z].join()),true);
validMoves=([x,y,z])=>{let ret=[left(z),forward(z),right(z)].filter(a=>a);return ret.map(z=>[...vadd([x,y],d4[Math.floor(z/smx)]),z]).filter(([x,y])=>x>=0&&y>=0&&x<data.length&&y<data[0].length)};

paths = new Map();
been = new Map();
queue = [[0,0,smx],[0,0,2*smx]];
queue.forEach(q=>been.set(q.join(),0));
lastMin = 0;
step = () => {
  let curr=queue.splice(0,1)[0];
  let h=been.get(curr.join());
  let next=validMoves(curr).filter(n=>!been.has(n.join()));
  /*console.log(curr,h,"->",*/next.map(n=>{
    let str=`${n}->${h+getHeat(n)}`;
    paths.set(str,[...curr,h]);
    return str;
  })/*)*/;
  next.forEach(n=>{been.set(n.join(),h+getHeat(n));
    queue.push(n)
  });
}
while (queue.length){
  if (mh(queue[0])!=lastMin){queue.sort((a,b)=>mh(a)-mh(b));/*console.log*/(lastMin=mh(queue[0]))}
  step();
};

console.log("Part 2:",mh([data.length-1,data[0].length-1]));








