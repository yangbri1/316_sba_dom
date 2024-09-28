# Project Name
### Skill Based Assessment #3 --- <em> The Document Object Model </em>
- - - - 

## Project Description
### Create a website using a combination of HTML, CSS, and JavaScript files linked together. Topic is totally up in the air. The main objectives consists of ...

#### 1. Using DOM properties, methods, and techniques in creating a web application that provides a dynamic user experience. 
#### 2. In addition, use BOM properties, methods, and techniques to facilatate creation of a dynamic web application. (BOM must be passed before DOM could do anything)
#### 3. Show proficiency with event-driven-programming and DOM events.
#### 4. Include form validations using any combination of built-in HTML validation attributes and DOM-event-driven JavaScript validations (ex. required)
- - - -

## Technologies used
### DOM properties, methods, and techniques:
#### 

### BOM properties, methods, and techniques:
#### window.prompt(), window.alert(), window.close(), etc.

### Event-driven-programming & DOM events:
#### .getElementById(), .querySelectorAll(), .firstChild(), .createElement(), .append(), DocumentFragment, .innerHTML, .textContent, etc.

### Form validations:
#### minlength, maxlength, regex, required, etc.

### CSS inlined and external styling
### JavaScript built-in objects, methods
#### Math.random(), .toLowerCase(), etc.

* Others: Github add, commits; JavaScript syntax, VSCode IDE

- - - -

## How to get started
### Functionality over form!!
### I made the mistake of thinking about how the website should look like, looking at some examples and at one point even thought about using Bootstrap, flexbox, and other css properties to style it. 
### Functionality first!

- - - - 

## Acknowledgements
### All used materials are stored in the "reference" folder of this repo

- - - -
### F1 standings
#### https://www.formula1.com/en/results/2024/team

### Brand palettes
#### https://brandpalettes.com/ 

### Compatible color palettes for website
#### https://www.colorhunt.co/palette/7d0a0abf3131ead196f3edc8

### Some regex examples
#### https://stackoverflow.com/questions/23676778/what-html5-form-attribute-should-be-used-for-a-zipcode#:~:text=You%20can%20use%20the%20maxlength%20attribute%20to%20set%20the%20maximum

### Icons & Emojis
#### https://icons8.com/icons/set/login

### JavaScript focus events -- when selecting the textbar
#### https://www.javascripttutorial.net/javascript-dom/javascript-focus-events/#:~:text=Introduction%20to%20JavaScript%20focus%20events.%20The%20focus%20events%20fire%20when

### Lecture Notes
#### https://www.canva.com/design/DAFrinwCYiw/WayxY83lprtXWbETcXt7Vw/edit
#### https://www.canva.com/design/DAFrigzTnFM/view
#### https://www.canva.com/design/DAFrinVIJsw/view#1

- - - -
> <em> First opening up the web application would yield an alert telling the user that they're low on storage (attempting to impersonate a real popup). Afterwards a windows.prompt() will go underway requesting the user to input "I Agree" to continue forward from the BOM to the DOM. Under the impression that the user does NOT agree, another prompt would come up showing a random number of attempts (ranging from 1-10) left for the user to input "I Agree". If the given number of tries are insufficient, an alert would popup timing out the user and window.close() out of the web application. 

> When the user finally agrees to proceed, they would be inquired about their name. Upon doing so, the BOM stage is finally done and onward we go to the DOM. The document would be updated with user's given name welcoming them on top (innerHTML changed). The website's background color would dynamically change to reflect the number of tries out of 10 taken to access the DOM (index of color array = attempts left). Also, the number of list items being dynamically populated is related to the user's attempts left during the BOM era (iterate via the array of brands only up to the number of attempts left). 

> Next, the color of the "Guess the background color" rectangle would change depending on the inputted hex color code. Selecting the textbar would give it a pinkish hue. It requires the user to input a color in the #rrggbb format, if the length of the text is any less or more or without the '#' at the front it won't fire. Simultaneously it will give the user a warning instructing them about the format. 

> Aside: The checklist on the side is just for the user to keep track of which colors they had already tried.

> Once the wanted hex color code is found, input the result into the submit button at the bottom. </em>