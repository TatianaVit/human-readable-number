module.exports = function toReadable (number) {
    number = String(number)
number = number.split('')
let units = ([['1','one'], ['2','two'], ['3','three'], ['4','four'], ['5','five'], ['6','six'], ['7','seven'], ['8','eight'], ['9','nine']]);
let tens = ([['2','twenty'], ['3','thirty'], ['4','forty'], ['5','fifty'], ['6','sixty'], ['7','seventy'], ['8','eighty'], ['9','ninety']]);
let teens = ([['0','ten'], ['1','eleven'], ['2','twelve'], ['3','thirteen'], ['4','fourteen'], ['5','fifteen'], ['6','sixteen'], ['7','seventeen'], ['8','eighteen'], ['9','nineteen']]);
let words = [];
if (number.length == 1){
for (let i of number){
    if (number[0] == '0'){
        return 'zero'
    }
  for (let [key, value] of units){
    if (number[0] === key){  
      words[0] = value
      };
    };
    };
    };
if (number.length == 2){
for (let i of number){
  if (number[0] != 1){
    for (let [key, value] of tens){
      if (key == number[0]){
        words[0] = value
      };
    };
  for (let [key, value] of units){
    if (number[1] === key){  
      words[1] = ' ' + value
      };
    };
    } else {
    for (let [key, value] of teens){
      if (key == number[1]){
        words[0] = value
      };
    };
    };
    };
    };
    if (number.length == 3){
      for (let i of number){
          for (let [key, value] of units){
            if (number[0] === key){  
      words[0] = value + ' hundred'
      };
    };
        
  if (number[1] != 1){
    for (let [key, value] of tens){
      if (key == number[1]){
        words[1] = ' ' + value
      };
    };
  for (let [key, value] of units){
    if (number[2] === key){  
      words[2] = ' ' + value
      };
    };
    } else {
    for (let [key, value] of teens){
      if (key == number[2]){
        words[1] = ' ' + value
      };
    };
    };
    };
    };
    return(words.join(''));
    };
