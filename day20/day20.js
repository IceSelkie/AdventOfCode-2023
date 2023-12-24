data=(fs.readFileSync("input.txt")+"").split("\n").filter(a=>a).map(a=>a.split(" -> "));
// Convert to nodes map: nodestr -> {type,dests}
nodes = new Map(data.map(a=>[a[0].substring(1),{type:a[0][0],dests:a[1].split(", ")}]));
ne=[...nodes.entries()];
// Add dangling nodes
ne.map(a=>a[1].dests).flat().filter(a=>!nodes.has(a)).forEach(node=>nodes.set(node,{type:" ",dests:[]}));
// Disable print statements
disp=false;



queue = [["roadcaster",0,"button"]]; state = new Map([...nodes.keys()].filter(a=>nodes.get(a).type!="b").map(node=>nodes.get(node).type=="%"?[node,0]:[node,new Map(ne.filter(a=>a[1].dests.includes(node)).map(a=>[a[0],0]))])); occ={0:0,1:0};
step=(node,freq,from)=>{let {type,dests}=nodes.get(node); if (type=="b"){if(disp)console.log(`${from} -${freq}-> Broadcast ${freq} to ${dests}`);dests.forEach(a=>queue.push([a,freq,"Broad"]));occ[freq]+=dests.length;occ[0]++}else if (type=="%"){if(disp)console.log(`${from} -${freq}-> ${node} flop in state ${state.get(node)}`);if(!freq){let newState;state.set(node,newState=0+!state.get(node)); dests.forEach(a=>queue.push([a,newState,node])); occ[newState]+=dests.length;}}else if (type=="&"){if(disp)console.log(`${from} -${freq}-> ${node} conj in state ${[...state.get(node).entries()].map(a=>a.join("->"))}`);let conjstate=state.get(node);conjstate.set(from,freq);let conjval=0+![...conjstate.values()].prod();if(disp)console.log(`${node} emitted ${conjval} to ${dests}`);dests.forEach(a=>queue.push([a,conjval,node]));occ[conjval]+=dests.length;}};
range(1000).forEach(i=>{/*disp=false;if(i==0||i==999)disp=true;*/queue = [["roadcaster",0,"button"]];while (queue.length) step(...queue.splice(0,1)[0]); if (disp)console.log({queue,occ,state});});
console.log("Part 1:",Object.values(occ).prod());





state = new Map([...nodes.keys()].filter(a=>nodes.get(a).type!="b").map(node=>nodes.get(node).type=="%"?[node,0]:[node,new Map(ne.filter(a=>a[1].dests.includes(node)).map(a=>[a[0],0]))]));
occ={0:0,1:0};
step=(node,freq,from)=>{
  let {type,dests}=nodes.get(node);
  if (node=="rx"&&freq==0)
    done=true;
  if (type=="b") {
    if(disp)console.log(`${from} -${freq}-> Broadcast ${freq} to ${dests}`);
    dests.forEach(a=>queue.push([a,freq,"Broad"]));
    occ[freq]+=dests.length;
    occ[0]++
  } else if (type=="%") {
    if(disp)console.log(`${from} -${freq}-> ${node} flop in state ${state.get(node)}`);
    if(!freq){
      let newState;
      state.set(node,newState=0+!state.get(node));
      dests.forEach(a=>queue.push([a,newState,node]));
      occ[newState]+=dests.length;
    }
  } else if (type=="&") {
    if(disp)console.log(`${from} -${freq}-> ${node} conj in state ${[...state.get(node).entries()].map(a=>a.join("->"))}`);
    let conjstate=state.get(node);
    conjstate.set(from,freq);
    let conjval=0+![...conjstate.values()].prod();
    if(disp)console.log(`${node} emitted ${conjval} to ${dests}`);
    dests.forEach(a=>queue.push([a,conjval,node]));
    occ[conjval]+=dests.length;
  }
};

getStateStr=()=>[...state.keys()].sort().map(n=>(state.get(n) instanceof Map)?([...state.get(n).keys()].sort().map(b=>state.get(n).get(b)).join("")):state.get(n)).join("");
stateKeys=()=>{
  let keys=[...state.keys()].sort().map(n=>(state.get(n) instanceof Map)?([...state.get(n).keys()].sort().map(b=>`${n}.${b}`)):n).flat();
  let len = keys.max(a=>a.length,true);
  keys.map(a=>fw(a,len))
}
hamdist=(a,b)=>(BigInt(`0b${a}`)^BigInt(`0b${b}`)).toString(2).split("").count(a=>a=="1");


i=0;
done=false;
been=new Map([[getStateStr(),0]]);
// s830711 = "010110000000011100000010000000000001010000000000001000010000000000001000000000001110100111";
// been.set("010110000000011100000010000000000001010000000000001000010000000000001000000000001110100111",830711);

disp = false;
while(!done && i<1e5){
  // if(i%1e6==0)
  //   disp=true;
  // else
  //   disp=false;

  i++;

  // Send a new button press
  queue=[["roadcaster",0,"button"]];
  while (queue.length)
    step(...queue.splice(0,1)[0]);

  statestr = getStateStr();
  // if (hamdist(statestr,s830711)<10)
  //   console.log(statestr,i);

  if (been.has(statestr))
    console.log("Been here before:",been.get(statestr),i,statestr);
  been.set(statestr,i);

  // if (disp||done)console.log({occ,state});
  // if(i%1000==0)console.log(i)
};

console.log(i,"iterations done. Searching for cycles now.");



// Reverse the seen map
let beenReverse = new Array(been.size).fill(null);
[...been.entries()].forEach(([s,i])=>beenReverse[i]=s);

// Find Cycles
let cycleCandidates=range(10000);
let cycles = range(beenReverse[0].length).map(i=>
    cycleCandidates.find(cycleLen=>{
      let b=1000;
      let ks=range(cycleLen).map(j=>beenReverse[j+b][i]);
      b;

      j=cycleLen;
      while(j+b<beenReverse.length-1000){
        // If not a cycle, ret false
        if (ks[j%cycleLen]!=beenReverse[j+b][i])
          return false;
        j++;
      };

      // Loop complete and it is a cycle. Update cache and return true.
      // Move this item to the start to speed things up for others with the same cycle length.
      cycleCandidates = [cycleLen, ...cycleCandidates.filter(a=>a!=cycleLen)];
      return true;
    }));
// Above returns cycles, which is has the cycle length for each index of the state string.
// Find the products of the unique cycles.
console.log("Part 2:",cycles.filter(a=>a!=1).uniq().prod());











