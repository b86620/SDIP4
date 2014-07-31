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

// Does a string follow a aaa@bbb.ccc pattern like an e-mail address?

var emailCheck = function(string) {
   var emailSections = string.split ('@');
   if(emailSections.length === 2) {
    var addressSection = emailSections[1].split('.');
    if (addressSection[addressSection.length-1].length > 1 && addressSection[0].length > 0 && emailSections[0].length > 0) {
       return true;
    }
    return false;
  }
  return false;
};

console.log(emailCheck("superlink@gmail.com"));
console.log(emailCheck("@google.com"));
console.log(emailCheck("l@g.c"));
console.log(emailCheck("l@g.co"));
console.log(emailCheck("@."));

// Is the string a URL?
var urlCheck = function(url) {
if(url.indexOf("http://") === 0 || url.indexOf("https://") === 0)
    return true;
  return false;
};

console.log(urlCheck("httpp://"));
console.log(urlCheck("http://www.google.com"));
console.log(urlCheck("https://www.this.com"));
console.log(urlCheck("http//www.google.com"));


// titlecase

var titleCase = function(string) {
   var words = string.split(" ");
   var upperWords = [];
   for(var word in words) {
      upperWords.push(words[word].substring(0,1).toUpperCase() + words[word].substring(1));
   }
   return upperWords.join(" ");
};

console.log(titleCase("This is awesome"));

//
var substituteSeparator = function(string, current, revised) {
    var separated = string.split(current);
    return separated.join(revised);
};

console.log(substituteSeparator('a,b,c', ',', '/'));

