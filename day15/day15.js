cti = s=>s.charCodeAt();
hash = str => [...str].reduce((c,n)=>((c+cti(n))*17)%256,0);
data = (fs.readFileSync("input.txt")+"").split(/\n|,/g).filter(a=>a);
console.log("Part 1:",data.map(hash).sum())

data2 = data.map(a=>a.split(/([-=])/g));
boxes = range(256).map(a=>[]); data2.forEach(([l,op,f],i)=>{let box=boxes[hash(l)];if(op=="="){if (box.find(a=>a[0]==l))box.find(a=>a[0]==l)[1]=Number(f);else box.push([l,Number(f)]);}else boxes[hash(l)]=box.filter(a=>a[0]!=l); /*console.log([l,op,f].join(""),i,boxes.filteri(a=>a.length).flat(2))*/ });
boxes.filteri(a=>a.length).map(a=>a[1].map((b,i)=>[a[0]+1,i+1,Number(b[1])].prod())).flat().sum();
console.log("Part 2:",boxes.filteri(a=>a.length).map(a=>a[1].map((b,i)=>[a[0]+1,i+1,Number(b[1])].prod())).flat().sum());