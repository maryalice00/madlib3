function addCommas(number) {
    // Convert the number to a string
    let numberString = number.toString();
  
    // Split the string into integer and decimal parts (if any)
    let [integerPart, decimalPart] = numberString.split('.');
  
    // Add commas to the integer part
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Join the integer and decimal parts (if any)
    if (decimalPart !== undefined) {
      return `${integerPart}.${decimalPart}`;
    } else {
      return integerPart;
    }
  }
  
  module.exports = addCommas;