// let div = document.createElement('div');
// div.id = 'content';
// div.innerHTML = '<p>CreateElement example</p>';

// document.body.appendChild(div);

/* BOM block is indepedent from DOM & would run before the DOM */
// opens a popup on the webpage upon load (only w/ an okay button)
// rip window.alert() will only accept text value (if want img can use Bootstrap Modal plugin)
window.alert("⚠️WARNING:LOW STORAGE DETECTED!!💾⚠️");

// prompts user for an input & caches the user input 
let input = prompt(`Please type in "I Agree" to continue`); // `YEP YEP`);

let tries = 0;
// limit will be a random number from the b/t 0-9
let limit = Math.round(Math.random() * 10);
// iterate via loop checking if the user's input matches what's wanted
while(tries < limit){
    // converts input to lowercase to account for capitalization & uppercase
    input = input.toLowerCase();
    // if the user agrees to the the terms & conditions
    if(input === "i agree"){
        // show user welcome sign
        // input = alert(`Welcome!😊`);
        // prompts user for their name
        let username = prompt(`Please enter your name: `);
        // if the entered input is neither null nor empty
        if(username !== null && username !== ""){
            // update the HTML text in the DOM w/ the user's name
            document.getElementById('child1').innerHTML = `Welcome ${username}!😊`;
        }
        // stop the loop
        break;
    }
    // if the conditions are NOT met ...
    else if(input !== "i agree"){
        // continuously prompt user for the wanted input
        input = prompt(`Not quite the entry...🤔 ${limit-tries} attempts left`);
    }
    // increment by 1 to continue the loop
    tries++;
}

// if the user ran out of tries 
if(tries === limit){
    // endless loop will run until user close down window
    // while(tries === limit){
    //     alert(`TIMEOUT!⏳`);
    // }
    // inform user of their tries
    alert(`TIMEOUT!⏳`);
    // and close the open window
    window.close();
    // opens a website just showing the clock
    // window.open("https://time.gov/widget/widget.html");
}

// this block of code would automatically change the innerHTML as you type in keystroke
// let username = document.getElementById('username');
// username.addEventListener('input', (event) => {
//     event.preventDefault();
//     let actual_name = document.getElementById('username').value;
//     document.getElementById('child1').innerHTML = actual_name;
// });

// let brands_check = document.querySelector('input[type=checkbox');
// brands_check.addEventListener
const ul = document.querySelector("ul");
// arrays of car brands and their respective colors in hexadecimal code
let brands = ["McLaren", "Red Bull", "Ferrari", "Mercedes", "Aston Martin", "Honda", "Haas", "Williams", "Renault", "Kick Sauber"];
let colors = ['#FF8700', '#FF0C49', '#FF2800', '#A4AAAE', '#037A68', '#CC0000', '#F5FEFD','#00A3E0', '#FFE135', '#76FF7A'];

/*------------------------------ Guess the background color block ----------------------------- */

// arrays of car and brands w/ their length reflected by the number of tries
let brands_new = brands.slice(0, limit-tries+1);
let colors_new = colors.slice(0, limit-tries+1);

// dynamically changes the background color of the DOM depending on number of user's attempts
// applying inline styling (precedes over internal & exteral)
document.body.style.backgroundColor = colors[tries];

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

// add an event listener to guess_color w/ a nameless function
guess_color.addEventListener('input', function(event){
    // halt any default behavior from happening
    // event.preventDefault();
    // declared clicked interaction
    let clicked = event.target;
    // check to see if user input matches the color correctly
    if(clicked.value !== random_color){
        // otherwise change the color of the box to the user inputted hexa code
        guess_color.style.backgroundColor = clicked.value;
        // const guessed_li = document.createElement("li");
        // guessed_li.textContent = `This is the color you've inserted`;
        // guess_color.appendChild(guessed_li);
        
        // brands.push(clicked_value);
    }
})

/*------------------------------ Formula One Hint Block ----------------------------- */
// create a new document fragment using the DocumentFragment constructor
let fragment = document.createDocumentFragment();
// declare a counter to iterate via colors array
let color_count = 0;
// iterate through the array of brands above
for(const brand of brands_new){
    //dynamically create the list item elements
    const li = document.createElement("li");
    // change the text of the list items to the corresponding brand name
    li.textContent = brand;
    // give a title attribute corresponding to each elements' name
    li.setAttribute('title', `${colors[color_count]}`);
    // increment color_count by 1 
    color_count++;
    // append to declared fragment above
    // *Note: .append() method can append multiple nodes or strings at once, .appendChild() only one node
    fragment.appendChild(li);
}
// add the list items to the unordered list block
ul.appendChild(fragment);

// add an event listener to form at index 0 as .getElementsByTagName() method 
// returns an array-like container
// retrieves all instance where the input type is of "text" 
const textbox = document.querySelectorAll('input[type="text"]');
// halt default behavior --- like refresh
// event.preventDefault();

// add an event listener to textbox
textbox[0].addEventListener('focus', (event) => {
    // change the background color of it to pink when "focus" on
    event.target.style.backgroundColor = 'pink';
    // final_textbox.classList.add('final-submit');
});

// textbox[0].addEventListener('blur', (event) => {
//     e.target.style.backgroundColor = '';
// });


// login.addEventListener('blur', (e) => {
//     e.target.style.backgroundColor = '#f3edc8';
// });

// activate this when the correct color is found
// function to remove everything from the visible body on a webpage
function eraseAll(){
    // iterate through every element in the body
    while(document.body.firstChild) {
        // remove every element
        document.body.removeChild(document.body.firstChild);
    }
}

