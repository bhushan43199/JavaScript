 // type conversion and coercion
 console.log("welcome to tut 5");
 let myVar;
 myVar = String(22);
 console.log(myVar, (typeof myVar));

 let booleanVar = String(true);
 console.log(booleanVar, (typeof booleanVar));

 let date = String(new Date());
 console.log(date, (typeof date));

 let arr = String([1,2,3,4]);
 console.log(arr, (typeof arr));
 console.log("array + string length is " +arr.length);

 //second type to convert into string by "toString" for number "Number"

 let i = new Date;
 console.log(i.toString());

 let stri = Number("45");
 stri = Number(true)   //True and false 1 ,0
 console.log(stri, (typeof stri));


 let number = parseInt('40.0456'); // first convert string to number and then parstInt pass the 40.0456 = 40 "in integer value"
 console.log(number, (typeof number));


 //Use of PasreFloat and .toFirxed
 let numAge = parseFloat("23.0045");
 console.log(numAge.toFixed(3));



 // Type Coercion

 let mystr = Number('450');
 let mynum = 40;

 console.log(mystr + mynum);

