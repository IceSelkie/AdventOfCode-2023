fs = require("fs");
min  = (arr,acc=(a)=>a,get=false) => {let ret=arr.filter(a=>!isNaN(acc(a))).reduce((a,b)=>acc(a)<acc(b)?a:b);return get?get instanceof Function?get(ret):acc(ret):ret};

data = (fs.readFileSync("input.txt")+"").split("\n\n").filter(a=>a).map(a=>a.split("\n").filter((a,i)=>a));
seeds = data.splice(0,1)[0][0].split(": ")[1].split(" ").map(Number);
maps = data.map(a=>a.slice(1).map(a=>a.split(" ").map(Number)));
mapsf = maps.map(as => (v=>{let m = as.find(a=>v>=a[1]&&v<a[1]+a[2])??[0,0];return v-m[1]+m[0];}));
pos = seeds;
mapsf.forEach(map=>{/*console.log(pos);*/pos = pos.map(map)}); //console.log(pos);
console.log("Part 1:",min(pos));

seeds2 = seeds.join().split(/([0-9]+,[0-9]+)/g).filter((a,i)=>i%2).map(a=>a.split(",").map(Number)).sort((a,b)=>a[0]-b[0])
// .map((a,i,arr)=>[a[0],a[1],i>0&&a<=arr[i-1][0]+arr[i-1][1]])

splitRanges=(ranges,map)=>{
  let breakingVal = [map[1], map[1]+map[2]];
  let ret = [];
  for (let i=0; i<ranges.length; i++) {
    let range = [ranges[i][0], ranges[i][0]+ranges[i][1]];
    if (range[1]<=breakingVal[0] || range[0]>=breakingVal[1])
      ret.push(ranges[i]);
    else {
      // lower range
      if (range[0]<breakingVal[0]) {
        ret.push([range[0],breakingVal[0]-range[0]]);
        range[0] = breakingVal[0];
      }
      // within range
      if (breakingVal[1]<range[1]) {
        ret.push([range[0], breakingVal[1]-range[0]]);
        range[0] = breakingVal[1];
      }
      // remaining range
      if (range[1]-range[0] > 0)
        ret.push([range[0], range[1]-range[0]]);
    }
  }
  if (ret.find(a=>a[1]<=0))
    throw `Found invalid break: ${JSON.stringify({ranges,map,ret})}`;
  return ret;
}

splitRanges(seeds2, maps[0])

runMaps=(seeds,maps,mapf)=>{
  // console.log(seeds,maps);
  seeds = maps.reduce((s,m)=>{/*console.log("s:",s);*/return splitRanges(s,m)},seeds); //.sort((a,b)=>a[0]-b[0]);
  // console.log("s:",seeds)

  seeds = seeds.map(pair=>[mapf(pair[0]),pair[1]]);
  // console.log("sm:",seeds)
  return seeds;
}

ret = seeds2;
for (let i=0; i<maps.length; i++) {
  ret = runMaps(ret,maps[i],mapsf[i]);
}

console.log("Part 2:",min(ret,a=>a[0],true))