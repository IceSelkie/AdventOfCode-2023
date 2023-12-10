data = rfs("input.txt").filter(a=>a)
data = rfs("input.txt").filter(a=>a).map(a=>console.log(a))
data = rfs("input.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.flat();
neighbors = 
data = rfs("input.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.flat(); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1]}
data = rfs("input.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1]}
data.indexOf("S")
curr = [-1,1,width,-width].map(d=>d+data.indexOf("S"))
curr = [-1,1,width,-width].map(d=>d+data.indexOf("S")).map(a=>neighbors[data[a]])
curr = [-1,1,width,-width].map(d=>d+data.indexOf("S")).map(a=>data[a])
data = rfs("input.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]}
data = rfs("input.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]}
curr = [-1,1,width,-width].map(d=>d+data.indexOf("S")).map(a=>neighbors[data[a]])
curr = [-1,1,width,-width].map(d=>d+data.indexOf("S")).map(a=>neighbors[data[a]].map(d=>d+a))
curr = [-1,1,width,-width].map(d=>d+data.indexOf("S")).map(a=>neighbors[data[a]].map(d=>[a,d+a])).f
curr = [-1,1,width,-width].map(d=>d+data.indexOf("S")).map(a=>neighbors[data[a]].map(d=>[a,d+a]))
curr = [-1,1,width,-width].map(d=>d+data.indexOf("S")).map(a=>neighbors[data[a]].map(d=>[d,d+a]))
curr = [-1,1,width,-width].map(d=>d+data.indexOf("S")).map(a=>[a,neighbors[data[a]].map(d=>[d+a]]))
curr = [-1,1,width,-width].map(d=>d+data.indexOf("S")).map(a=>[a,neighbors[data[a]].map(d=>[d+a])])
start = data.indexOf("S") ; curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>[d+a])]).filter(a=>a[1].includes(start))
start = data.indexOf("S") ; curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>[d+a])]).filter(a=>a[1].includes(start))
start = data.indexOf("S") ; curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>[d+a])]).map(a=>a[1])
start
start = data.indexOf("S") ; curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>d+a)]).map(a=>a[1].includes(start))
start = data.indexOf("S") ; curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>d+a)]).filter(a=>a[1].includes(start))
start = data.indexOf("S") ; curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>d+a)]).filter(a=>a[1].includes(start)).map(a=>a[0])
data = rfs("input.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]}
i=1; start = data.indexOf("S") ; been = new Set([start]); curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>d+a)]).filter(a=>a[1].includes(start)).map(a=>a[0]); while (curr.length>0) {console.log(curr) ; curr = curr.map(a=>neighbors[data[a]].map(d=>d+a)).flat().filter(a=>!been.has(a)); i++; curr.forEach(a=>been.add(a))} console.log(i);
data = rfs("ex1.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]}
i=1; start = data.indexOf("S") ; been = new Set([start]); curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>d+a)]).filter(a=>a[1].includes(start)).map(a=>a[0]); while (curr.length>0) {console.log(curr) ; curr = curr.map(a=>neighbors[data[a]].map(d=>d+a)).flat().filter(a=>!been.has(a)); i++; curr.forEach(a=>been.add(a))} console.log(i);
i=1; start = data.indexOf("S") ; been = new Set([start]); curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>d+a)]).filter(a=>a[1].includes(start)).map(a=>a[0]); while (curr.length>0) {/*console.log(curr);*/ curr = curr.map(a=>neighbors[data[a]].map(d=>d+a)).flat().filter(a=>!been.has(a)); i++; curr.forEach(a=>been.add(a))} console.log(i-1);
data = rfs("ex2.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]}
data
data = rfs("ex2.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]," ":[]}
i=1; start = data.indexOf("S") ; been = new Set([start]); curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>d+a)]).filter(a=>a[1].includes(start)).map(a=>a[0]); while (curr.length>0) {console.log(curr); curr = curr.map(a=>neighbors[data[a]].map(d=>d+a)).flat().filter(a=>!been.has(a)); i++; curr.forEach(a=>been.add(a))} console.log(i-1);
data = rfs("input.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]," ":[]}
i=1; start = data.indexOf("S") ; been = new Set([start]); curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>d+a)]).filter(a=>a[1].includes(start)).map(a=>a[0]); while (curr.length>0) {console.log(curr); curr = curr.map(a=>neighbors[data[a]].map(d=>d+a)).flat().filter(a=>!been.has(a)); i++; curr.forEach(a=>been.add(a))} console.log(i-1);
data = rfs("ex3.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]," ":[]}
data2 = [...data].filter((a,i)=>been.has(i)).join("")
data2 = [...data].filter((a,i)=>been.has(i))
i=1; start = data.indexOf("S") ; been = new Set([start]); curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>d+a)]).filter(a=>a[1].includes(start)).map(a=>a[0]); while (curr.length>0) {console.log(curr); curr = curr.map(a=>neighbors[data[a]].map(d=>d+a)).flat().filter(a=>!been.has(a)); i++; curr.forEach(a=>been.add(a))} console.log(i-1);
data2 = [...data].filter((a,i)=>been.has(i)).join("")
data2 = [...data].map((a,i)=>been.has(i)?a:".").join("")
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").join("")
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").join("").split(" ").filter(a=>a)
data
data = rfs("ex5.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]," ":[]}
data
data = rfs("ex3.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]," ":[]}
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").join("")
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").join("").map((a,i)=>{if (a!=".")return ".";let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")) return t})
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a!=".")return ".";let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")); return t})
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a!=".")return ".";let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return t})
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a!=".")return ".";let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].filter(a=>a=="|").length})
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a!=".")return ".";let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].filter(a=>a=="|").length%2})
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a!=".")return 0;let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].filter(a=>a=="|").length%2})
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a==" ") return " "; if (a!=".")return "_";let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].filter(a=>a=="|").length%2==1?"I":"."})
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a==" ") return " "; if (a!=".")return "_";let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].filter(a=>a=="|").length%2==1?"I":"."}).join("")
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a==" ") return " "; if (a!=".")return "_";let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].filter(a=>a=="|").length%2==1?"I":"."}).join("").split(" ").filter(a=>a)
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a==" ") return " "; if (a!=".")return "_";let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].filter(a=>[..."|7LFJ"].includes(a)).length%2==1?"I":"."}).join("").split(" ").filter(a=>a)
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a==" ") return " "; if (a!=".")return "_";let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].filter(a=>[..."|7LFJS"].includes(a)).length%2==1?"I":"."}).join("").split(" ").filter(a=>a)
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a==" ") return " "; if (a!=".")return a;let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].filter(a=>[..."|7LFJS"].includes(a)).length%2==1?"I":"."}).join("").split(" ").filter(a=>a)
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a==" ") return " "; if (a!=".")return a;let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].map(a=>{return {"|":2,"7":1,"L":1,"F":-1,"J":-1}[a]??0}).sum()%4}).join("").split(" ").filter(a=>a)
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a==" ") return " "; if (a!=".")return a;let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].map(a=>{return {"|":2,"7":1,"L":1,"F":-1,"J":-1}[a]??0}).sum()%4==2}).join("").split(" ").filter(a=>a)
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a==" ") return " "; if (a!=".")return a;let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].map(a=>{return {"|":2,"7":1,"L":1,"F":-1,"J":-1}[a]??0}).sum()%4==2?"I":"."}).join("").split(" ").filter(a=>a)
data = rfs("ex5.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]," ":[]}
data
data = rfs("ex5.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]," ":[]} ; data.split(" ").filter(a=>a).forEach(a=>console.log(a))
data = rfs("ex6.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = data.join(""); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]," ":[]} ; data.split(" ").filter(a=>a).forEach(a=>console.log(a))
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a==" ") return " "; if (a!=".")return a;let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].map(a=>{return {"|":2,"7":1,"L":1,"F":-1,"J":-1}[a]??0}).sum()%4==2?"I":"."}).join("").split(" ").filter(a=>a)
start
data = rfs("ex6.txt").filter(a=>a).map(a=>" "+a+" ") ; width = data[0].length ; data = " ".repeat(width)+data.join("")+" ".repeat(width); neighbors = {"|":[-width,width],"-":[-1,1],"L":[-width,1],"J":[-1,-width],"7":[-1,width],"F":[width,1],".":[]," ":[]} ; data.split(" ").filter(a=>a).forEach(a=>console.log(a))
i=1; start = data.indexOf("S") ; been = new Set([start]); curr = [-1,1,width,-width].map(d=>d+start).map(a=>[a,neighbors[data[a]].map(d=>d+a)]).filter(a=>a[1].includes(start)).map(a=>a[0]); while (curr.length>0) {console.log(curr); curr = curr.map(a=>neighbors[data[a]].map(d=>d+a)).flat().filter(a=>!been.has(a)); i++; curr.forEach(a=>been.add(a))} console.log(i-1);
data2 = [...data].map((a,i)=>a==" "?" ":been.has(i)?a:".").map((a,i)=>{if (a==" ") return " "; if (a!=".")return a;let t=data.substring(0,i); t=t.substring(t.lastIndexOf(" ")+1); return [...t].map(a=>{return {"|":2,"7":1,"L":1,"F":-1,"J":-1}[a]??0}).sum()%4==2?"I":"."}).join("").split(" ").filter(a=>a)
[...data2.join("")].count(a=>a=="I")