input = fs.readFileSync("input.txt")+""

time(()=>{
  data = transpose(input.split("\n").filter((a,i)=>a).map(a=>a.split(": ")[1].split(" ").filter(a=>a).map(Number)))

  numSolns = (t,b) => {let rt = .5*Math.sqrt(t*t-4*b); return Math.floor(.5*t+rt-1e-6)-Math.ceil(.5*t-rt+1e-6)+1};
  console.log("Part 1:",prod(data.map(a=>numSolns(...a))));
  console.log("Part 2:",numSolns(...transpose(data).map(a=>Number(a.join("")))));
});
