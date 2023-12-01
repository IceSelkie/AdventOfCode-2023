data = (fs.readFileSync("input.txt")+"").split("\n").filter(a=>a);
console.log("Part 1:",sum(data.map(a=>[...a].filter(a=>/[0-9]/.test(a))).map(a=>a[0]+a[a.length-1]).map(Number)));

numbers = ["zero","one","two","three","four","five","six","seven","eight",'nine',..."0123456789"];
num = (n,i)=>isNaN(Number(n))?i:Number(n) ; numbers.map(num);
console.log("Part 2:",sum(data.map(a=>numbers.map((n,i)=>[[a.indexOf(n),num(n,i)],[a.lastIndexOf(n),num(n,i)]]).flat().filter(a=>a[0]!=-1).sort((a,b)=>a[0]-b[0])).map(a=>a[0][1]+""+a[a.length-1][1]).map(Number)));

