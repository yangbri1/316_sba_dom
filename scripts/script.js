// let div = document.createElement('div');
// div.id = 'content';
// div.innerHTML = '<p>CreateElement example</p>';

// document.body.appendChild(div);

/* BOM block is indepedent from DOM & would run before the DOM */
// opens a popup on the webpage upon load (only w/ an okay button)
// rip window.alert() will only accept text value (if want img can use Bootstrap Modal plugin)
// window.alert("⚠️WARNING:LOW STORAGE DETECTED!!💾⚠️");

// // prompts user for an input & caches the user input 
// let input = prompt(`Please type in "I Agree" to continue`); // `YEP YEP`);

// let tries = 0;
// let limit = Math.round(Math.random() * 10);
// // iterate via loop checking if the user's input matches what's wanted
// while(tries < limit){
//     // converts input to lowercase to account for capitalization & uppercase
//     input = input.toLowerCase();
//     // if the user agrees to the the terms & conditions
//     if(input === "i agree"){
//         // show user welcome sign
//         input = alert(`Welcome!😊`);
//         // stop the loop
//         break;
//     }
//     // if the conditions are NOT met ...
//     else if(input !== "i agree"){
//         // continuously prompt user for the wanted input
//         input = prompt(`Not quite the entry...🤔 ${limit-tries} attempts left`);
//     }
//     // increment by 1 to continue the loop
//     tries++;
// }

// // if the user ran out of tries 
// if(tries === limit){
//     // endless loop will run until user close down window
//     // while(tries === limit){
//     //     alert(`TIMEOUT!⏳`);
//     // }
//     // inform user of their tries
//     alert(`TIMEOUT!⏳`);
//     // and close the open window
//     window.close();
// }




let brands_check = document.querySelector('input[type=checkbox');
// brands_check.addEventListener
const ul = document.querySelector("ul");
const brands = ["McLaren", "Red Bull", "Ferrari", "Mercedes", "Aston Martin", "Honda", "Haas", "Williams", "Renault", "Kick Sauber"];
const colors = ['#FF8700', '#FF0C49', '#FF2800', '#A4AAAE', '#037A68', '#CC0000', '#F5FEFD','#00A3E0', '#FFE135', '#76FF7A'];

// retrieve the element w/ the specified id from the DOM document & assign it to a variable
let guess_color = document.getElementById('hexa-color');
// let guess_color = document.getElementsByTagName('body');


// assign randomly generate a number b/t 0-9 to random_number variable
let random_number = Math.floor(Math.random() * 10);

// use the random_number as index of the colors array for a random color
let random_color = colors[random_number];

// set background of div container to random color
guess_color.style.backgroundColor = random_color;

// guess_color.style.backgroundColor = random_color;
// document.body.classList.add()
// if(guess_color.style.backgroundColor === '#76FF7A'){
//     guess_color.style.color = 'white';
// }


guess_color.addEventListener("onclick", function(event){
    let clicked = event.target;
    if(clicked.value !== random_color){
        guess_color.style.backgroundColor = clicked.value;
        const guessed_li = document.createElement("li");
        guess_color.li.textContent = `This is the color you've inserted`;
    }
})


// create a new document fragment using the DocumentFragment constructor
let fragment = document.createDocumentFragment();

// iterate through the array of brands above
for(const brand of brands){
    //dynamically create the list item elements
    const li = document.createElement("li");
    // change the text of the list items to the corresponding brand name
    li.textContent = brand;
    // append to declared fragment above
    // *Note: .append() method can append multiple nodes or strings at once, .appendChild() only one node
    fragment.appendChild(li);
}

// add the list items to the unordered list block
ul.appendChild(fragment);

// const pass = document.querySelector('input[type="password"]');
let login = document.getElementById('login');
// let form = document.getElementsByTagName('form');

// add an event listener to form at index 0 as .getElementsByTagName() method 
// returns an array-like container
form[0].addEventListener('submit', (event)=>{
    // halt default behavior --- like refresh
    event.preventDefault();

})

login.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = '#f3edc8';
});

// login.addEventListener('blur', (e) => {
//     e.target.style.backgroundColor = '#f3edc8';
// });