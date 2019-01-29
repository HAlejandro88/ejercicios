const repetidos=(numbers)=>{
   let repit = numbers.sort().filter((item,index,array)=> array[index]===array[index+1]);
   return new Set(repit).size;
}

console.log(repetidos([1,1,2,4,5,6,6,7,6,9]))