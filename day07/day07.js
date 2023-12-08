data = (fs.readFileSync("input.txt")+"").split("\n").filter((a,i)=>a).map(a=>a.split(" ")).map(a=>[a[0],Number(a[1])]);
// data = (fs.readFileSync("ex1.txt")+"").split("\n").filter((a,i)=>a).map(a=>a.split(" ")).map(a=>[a[0],Number(a[1])]);

cards = [...range(10).map(a=>""+a),..."TJQKA"];
cardVal=c=>cards.indexOf(c);

handTypes = a=>{let d=distrib([...a]);return d.length==1?"7":d.length==2?(d[0][1]==4?"6":"5"):d.length==3?(d[0][1]==3?"4":"3"):d.length==4?"2":"1"};
// ["AAAAA","AA8AA","23332","TTT98","23432","A23A4","23456"].map(a=>handTypes(a));
handValStr=a=>handTypes(a)+[...a].map(c=>String.fromCharCode(cardVal(c)+95)).join("");
console.log("Part 1:",sum(data.map(a=>[handValStr(a[0]),a]).sort().map((a,i)=>a[1][1]*(i+1))));


convertJs = a=>{if(!a.includes("J"))return a;let d=distrib([...a]).filter(a=>a[0]!="J")[0]??["A"];return [...a].map(a=>a=="J"?d[0]:a).join("")};
cards2 = ["J",...range(10).map(a=>""+a),..."TQKA"];
cardVal2=c=>cards2.indexOf(c)
handValStr2=a=>handTypes(convertJs(a))+[...a].map(c=>String.fromCharCode(cardVal2(c)+95)).join("");
console.log("Part 2:",sum(data.map(a=>[handValStr2(a[0]),a]).sort().map((a,i)=>a[1][1]*(i+1))));
