// alert("JavaScript works!");

//
//
//
//

// Does a string follow a 123-456-7890 pattern?
var phonecheck = function(string) {
    var stringComponents = string.split('-');
    if (stringComponents.length === 3 && stringComponents[0].length === 3 && stringComponents[1].length === 3
        && stringComponents[2].length === 4) {
        for(string in stringComponents) {
          if (isNaN(stringComponents[string])) 
            return false;
        }
        return true;
    }
    return false;
};

console.log(phonecheck("123-456-7890"));
console.log(phonecheck("123-45l-0987"));
console.log(phonecheck("23-456-7890"));
console.log(phonecheck("1221123"));