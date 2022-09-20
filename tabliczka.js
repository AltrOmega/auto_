/**
* @param any
* @return true if any is a numer of a string with only a number(can have spaces), false otherwise
*/
function isInt(value) {
    var x = parseFloat(value);
    return !isNaN(value) && (x | 0) === x;
  }

/**
* @param number 1st parameter is a number, can be a string that does or does not contain spaces
* @param number 2nd parameter is a number, can be a string that does or does not contain spaces, if not specifies =2
* @return if the 1st parm is devisible by 2nd param without a remainder, returns null if set to something unexpected
*/
function dziel(dln, dlk = 2) {

    if(isInt(dln) && isInt(dlk)) 
    return dln % dlk ? false : true; 
    else return null;

  }