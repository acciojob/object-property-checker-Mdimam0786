const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	if (typeof sampleObject === 'object' && sampleObject !== null) {
    return key in sampleObject;
  }
  return false;
}
}
const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

// Examples
console.log(hasKey("red"));  
console.log(hasKey("blue"));
console.log(hasKey("white")); 

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
