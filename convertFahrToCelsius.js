function convertFahrToCelsius(e){
   let celsius = (e - 32) * 5/9 ;
   if(Array.isArray(e)){
       return `[${e}] is not a valid number but a/an array.`
   }else if(isNaN(e) && !Array.isArray(e) && typeof e != 'object'){
       return `${e} is not a valid number`
   }else if(typeof e == 'object' && !Array.isArray(e)) {
       return `${JSON.stringify(e)} is not a valid number but a/an object.`;
   }
   else {
       return `${celsius.toFixed(4)} deg C`;
   }
}
console.log(convertFahrToCelsius([1,2,3,4]));
console.log(convertFahrToCelsius('i'));
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius({a: 1}));