// console.log("Working");

let player = [

    {
        name: "Ankur",
        age: 24,
        country: "India",
        hobbies: ["Football",  "cricket"],
    },

    {
        name: "John",
        age: 35,
        country: "US",
        hobbies: ["Boxing",  "Tennis"],
    },

    {
        name: "Monica",
        age: 29,
        country: "England",
        hobbies: ["Badminton",  "cricket", "Skateboarding"],
    },

    {
        name: "Steave",
        age: 21,
        country: "Scottland",
        hobbies: ["Curling",  "cricket"],
    },

    {
        name: "Sanjana",
        age: 40,
        country: "India",
        hobbies: ["cricket", "Skateboarding", "Curling"],
    },
    
];

function ShowPlayers() {

    let count = 1;

    console.log("\n\nDisplay all the objects on the console: ")
    player.forEach(function(i) {

        console.log(count, " Object properties: \n")
        console.log("Name:\t",i.name);
        console.log("Age:\t",i.age);
        console.log("Country:", i.country);

        console.log("Hobbies:\t");
        i.hobbies.forEach(function(j){
            console.log("\t",j);
        })
        console.log("\n*******************")

        count = count + 1;  
    
    })
}


ShowPlayers();