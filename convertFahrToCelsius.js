//Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.


function convertFahrToCelsius(convert){
   let celsius = (convert - 32) * 5/9 ;
   if(Array.isArray(convert)){ // checking if it's an array
       return `[${convert}] is not a valid number but an array.`;
   }else if(isNaN(convert) && !Array.isArray(convert) && typeof convert != 'object'){ //checking strictly for not a number type
       return `${convert} is not a valid number`;
   }else if(typeof convert == 'object' && !Array.isArray(convert)) { //
       return `${JSON.stringify(convert)} is not a valid number but an object.`;
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