
data = (fs.readFileSync("ex1.txt")+"").split("\n").filter(a=>a).map(a=>a.split(" "))
cruns = arr => arr.map(a=>a=="#"?1:0).reduce(([ret,l],n,)=>{if(n)return[ret,l+1];ret.push(l);return[ret,0]},[[],0]).flat().filter(a=>a).join()
pickN=(arr,ct,left)=>{if(ct==0)return[arr.map(a=>a[0])];if(ct==left)return[arr.map(a=>a[1]??a[0])]; if(arr[0].length==1) {return pickN(arr.slice(1),ct,left).map(b=>[arr[0][0],...b])} return [...pickN(arr.slice(1),ct,left-1).map(b=>[arr[0][0],...b]),...pickN(arr.slice(1),ct-1,left-1).map(b=>[arr[0][1],...b])]};
U = [".","#"]; Y=["#"]; N=["."];

time(()=>
console.log("Part 1:",data.map(a=>[[...a[0]],...a,a[1].split(",").map(Number).sum()]).map(a=>[a[0].count(a=>a=="#"),a[0].count(a=>a=="?"),a[3],...a]).map(a=>[pickN(a[3].map(a=>a=="?"?U:a),a[2]-a[0],a[1]).map(cruns).count(b=>b==a[5])]).flat().sum())
)



// [..."?###????????"].reduce((c,n)=>n==c[1][0][0]?[c[0],[[n,c[1][0][1]+1]]]:[[...c[0],[c[1][0][0],c[1][0][1]]],[[n,1]]],[[],[[null,0]]]).flat().filter(a=>a[1])
// [ [ '?', 1 ], [ '#', 3 ], [ '?', 8 ] ]

getRuns = arr => arr.reduce((c,n)=>n==c[1][0][0]?[c[0],[[n,c[1][0][1]+1]]]:[[...c[0],[c[1][0][0],c[1][0][1]]],[[n,1]]],[[],[[null,0]]]).flat().filter(a=>a[1]);

[runs,goal] = [getRuns([...data[5][0]]), data[5][1].split(",").map(Number)]

processRuns = (runs, goal) => {
  known = runs.filteri(a=>a[0]=="#").map(([i,[symbol,ct]])=>{return{i,ct}});
  max = goal.max();
  two = goal.reduce((c,n)=>n<max&&n>c?n:c,0);
  maxRuns = known.filter(a=>a.ct>two);
  return maxRuns.length>0;

  // Longest run identified with certainty: cap it and mark as known.
  if (maxRuns.length == goal.count(a=>a==max)) {
    capRuns(runs,maxRuns.map(a=>a.i));
  }
  // Longest run location locked by one end: expand and cap

  //
}






runs.filteri(a=>a[0]=="#")








// Dp attempt

function dpCount(str, goal, debug = false) {
  str = ("."+str).replaceAll(/\.+/g,'.');
  // console.log(str);
  let width = str.length+1-(goal.sum()+goal.length);
  if (width == 0)
    return 1;
  let curr = new Array(width).fill(null);
  let prev = new Array(width).fill(0);

  let offset = goal[0]+1;
  let prevoffset = 0;

  if (debug) console.log({width,curr,prev,offset,prevoffset});

  if (str.includes("#")) {
    const firstIndex = Math.min(width,str.indexOf("#"));
    for (let i=0; i<firstIndex; i++)
      prev[i] = 1;
  }

  if (debug) console.log(prev.join(" "));

  for (let j=0; j<goal.length; j++) {
    for (let i=0; i<width; i++) {
      if (str[i+offset] == "#") {
        curr[i] = 0; continue;
      }
      curr[i] = curr[i-1]??0;
      
      let valid = true;
      for (let k=0; k<goal[j] && valid; k++)
        if(str[offset+i-k-1]==".") {
          valid = false;
          // console.log("Invalidated at",{offset,i,k,s:str.substring(offset+i+k-2,offset+i+k+1)});
        }
      // console.log({i,valid})
      if (valid)
        curr[i] += prev[i]
    }

    if (debug) console.log("_ ".repeat(offset)+curr.join(" "));

    [prev, curr] = [curr, prev];
    [prevoffset, offset] = [offset, offset+goal[j+1]+1];
  }
  if (debug) console.log([...str].join(" "));

  return prev[width-1];
}















function dpCount(str, goal) {
  // Ensure we start with a '.'; duplicates can be ignored.
  str = ("."+str).replaceAll(/\.+/g,'.');

  let width = str.length - goal.sum() - goal.length + 1;
  if (width == 0) return 1;
  let curr = new Array(width).fill(null);
  let prev = new Array(width).fill(1);

  let offset = goal[0]+1;

  let i,j,k,invalid;


  // Fill the "no elements found" row:
  if (str.includes("#"))
    for (i = str.indexOf("#"); i < width; i++)
      prev[i] = 0;

  for (j=0; j<goal.length; j++) {
    for (i=0; i<width; i++) {
      curr[i] = curr[i-1]??0;
      
      invalid = 0;
      for (k=0; k<goal[j]; k++)
        invalid += str[offset+i-k-1]==".";
      curr[i] += prev[i] * (!invalid);

      curr[i] *= str[i+offset] != "#";
    }

    [prev, curr] = [curr, prev];
    offset = offset+goal[j+1]+1;
  }

  return prev[width-1];
}

data2 = data.map(a=>[new Array(5).fill(a[0]).join("?"), new Array(5).fill(a[1]).join().split(",").map(Number)])
console.log("Part 2:",time(()=>data2.map(a=>dpCount(a[0],a[1])).sum()))






















