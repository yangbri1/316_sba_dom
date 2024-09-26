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
let limit = Math.round(Math.random() * 10);
// iterate via loop checking if the user's input matches what's wanted
while(tries < limit){
    // converts input to lowercase to account for capitalization & uppercase
    input = input.toLowerCase();
    // if the user agrees to the the terms & conditions
    if(input === "i agree"){
        // show user welcome sign
        input = alert(`Welcome!😊`);
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
}
