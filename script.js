let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;

    try{
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }catch(err){
        output.innerHTML = "Error";
        throw new SyntaxError("The inputs were not numbers")
    }finally{
        console.log("calculation input went through")
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish
function consoleLog(){
    console.log("you've put something in the log!")
}

function consoleError(){
    console.error("This is a console error!")
}

function consoleCount(){
    console.count("This is the number of times console.count() has run")
}

function consoleWarn(){
    console.warn("This is a warning")
}

function consoleAssert(){
    console.assert(false, "This is an assert error")
}

function consoleClear(){
    console.clear()
}

function consoleDir(){
    console.dir(window)
}

function consoleXML(){
    console.dirxml(window)
}

function consoleGS(){
    console.group("New group")
}

function consoleGE(){
    console.groupEnd()
}

function consoleTable(){
    console.table(["Thomas Powell", "Ayla Kurdak", "Audria Saravi"])
}

function startTimer(){
    console.time("New timer")
}

function endTimer(){
    console.timeEnd("New timer")
}

function consoleTrace(){
    console.trace()
}

function consoleGlobal(){
    throw new globalError("This is a custom error named global error")
}

class globalError extends Error{
    constructor(message){
        super(message);
        this.name = "globalError"
    }
}

window.onerror = function(message, source, lineno, colno, error){
    console.log("global error caught");
    return false;
}