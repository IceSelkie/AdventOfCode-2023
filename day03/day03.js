dispwmask = (arr,mask)=>console.log(mask.map((a,i)=>a.map((b,j)=>b?arr[i][j]:" ").join("")).map(a=>"|"+a+"|").join("\n"));

// data = (fs.readFileSync("ex1.txt")+"").split("\n").filter(a=>a).map(a=>[...a]);
data = (fs.readFileSync("input.txt")+"").split("\n").filter(a=>a).map(a=>[...a]);
dataf = data.flat().join("");

adj = range(-1,2).map(i=>range(-1,2).map(j=>[i,j])).flat();
get = (mda,inds) => (!inds||inds.length==0||!mda)?mda??0:get(mda[inds[0]],inds.slice(1));
mask = data.map(a=>a.map(a=>/[^.0-9]/.test(a)));
mask2 = mask.map((a,i,arr)=>a.map((b,j)=>sum(adj.map(([i2,j2])=>get(arr,[i+i2,j+j2])))));
maskn = data.map(a=>a.map(a=>/[0-9]/.test(a)));
// console.log(maskn.map((a,i)=>a.map((b,j)=>b?data[i][j]:" ").join("")).join("\n"));
// maskn.map((a,i)=>a.map((b,j)=>b?data[i][j]:""));

val = 0; maskn2 = maskn.map((a,i)=>{
	let inNum=false;
	return a.map((b,j)=>{
		isNum = b;
		if (!inNum&&isNum){inNum=true;val++;}
		if(isNum) return val;
		else inNum = false;
		return 0;
	});
});
runsAreParts = uniq(mask2.map((a,i)=>a.map((b,j)=>b?maskn2[i][j]:null)).flat(2).filter(a=>a));
maskn2f = maskn2.flat();
nums = Object.fromEntries(distrib(maskn2.map(a=>a.filter(a=>a)).flat()).map(a=>[Number(a[0]),a[1]]).sort((a,b)=>a[0]-b[0]).map(a=>[maskn2f.indexOf(a[0]),a[1],a[0]]).map(a=>[a[2],Number(dataf.substring(a[0],a[0]+a[1]))]));
console.log("Part 1:",sum(runsAreParts.map(a=>nums[a])));




gearOri = data.map(a=>a.map(a=>/\*/.test(a))).flat().map((a,i)=>a?i:null).filter(a=>a);
adjf = adj.map(a=>a[0]*data[0].length+a[1]);
console.log("Part 2:",sum(gearOri.map(a=>uniq(adjf.map(i=>maskn2f[a+i]).filter(a=>a))).filter(a=>a.length==2).map(a=>nums[a[0]]*nums[a[1]])));