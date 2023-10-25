const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
 for(let a in sampleObject){
    if(a===key)
    return true;
 }
 
    return false;
}


// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
