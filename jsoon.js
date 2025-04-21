// const names = `["Derric","Sophia ","Kishan"," Anitha"]`

// const jsonstring = JSON.stringify(names);

// console.log(jsonstring );

// const person =`{
//     "name":"Derric",
//      "age":20,
//     "Isemployed":false,
//     "hobbies":["gaming","songs","working out"]

// }`

// const jjson = JSON.stringify(person);  

// const people = `[{ 
//     "name":"Derric",
//      "age":20,
//     "Isemployed":false
// },
// {
//     "name":"sophia",
//      "age":50,
//     "Isemployed":true
// },
// {
//     "name":"anitha",
//      "age":40,
//     "Isemployed":true
// },{
//     "name":"kishan",
//      "age":19,
//     "Isemployed":false
// }
// ]`

// // const json = JSON.stringify(jjson);

// // console.log(json);

// // console.log(jjson);


// const parsedData = JSON.parse(jjson);

// console.log(parsedData);

// fetch("Java_script/person.json")
// .then(response=>response.json())
// .then(value=> console.log(value));
const fs = require("fs");

fs.readFile("Java_script/person.json", "utf-8", (err, data) => {
    if (err) {
        console.error("Failed to read file:", err);
    } else {
        const parsed = JSON.parse(data);
        console.log(parsed);
    }
});
