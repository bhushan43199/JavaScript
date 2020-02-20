// JSON tutorial 

console.log("JSON tutorial");

let jsonobj = {
    name: "Montu",
    channel: "Patel Bhushan",
    friend: "Akshar",
    food: "Guar Ki sabji"
}

console.log(jsonobj);

// convert onject to json string
let myJsonStr = JSON.stringify(jsonobj);

console.log(myJsonStr);

myJsonStr = myJsonStr.replace("Akshar", "Chhayu");
console.log("Akshar got replaced by chhayu ", myJsonStr);

// convert that json string in to object again

newJsonObj = JSON.parse(myJsonStr);
console.log("After converting json string in to object ", newJsonObj);


