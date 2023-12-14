data = (fs.readFileSync("input.txt")+"").split("\n\n").filter(a=>a).map(a=>a.split("\n").filter(a=>a)) ; datai = data.map(a=>[a,transpose(a.map(b=>[...b])).map(a=>a.join(""))].map(a=>a.map(b=>Number("0b"+([...b].map(c=>c=="#"?"1":"0").join(""))))))

both=(a,b)=>a===undefined||b===undefined||a==b;
findMirrors=arr=>arr.filteri((a,i)=>prod(range(arr.length).map(j=>both(arr[i+j],arr[i-j-1])))).slice(1).map(a=>a[0]);
console.log("Nonconformal ct:",datai.map(a=>[findMirrors(a[0]),findMirrors(a[1])]).filter(a=>a.flat().length!=1).length);
console.log("Part 1:",datai.map(a=>[findMirrors(a[0]),findMirrors(a[1])]).map(a=>(a[0][0]??0)*100+(a[1][0]??0)).sum());

bits=(a)=>a<0?bits(abs(a)):a==0?0:(a%2)+bits(Math.floor(a/2))
bitcmp=(a,b)=>a===undefined?0:b===undefined?0:bits(a^b);
findSmudgedMirrors=arr=>arr.filteri((a,i)=>1==sum(range(arr.length).map(j=>bitcmp(arr[i+j],arr[i-j-1])))).map(a=>a[0]);
console.log("Nonconformal ct:",datai.map(a=>[findSmudgedMirrors(a[0]),findSmudgedMirrors(a[1])]).filter(a=>a.flat().length!=1).length);
console.log("Part 2:",datai.map(a=>[findSmudgedMirrors(a[0]),findSmudgedMirrors(a[1])]).map(a=>(a[0][0]??0)*100+(a[1][0]??0)).sum());