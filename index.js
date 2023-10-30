
console.log('index.js connected..!');
let binaryConvert = true ; 
function binary(num){
    if(num == 0){
      return '0';
    }
    
    let binaryValue = '';
    
    while(num > 0){
      binaryValue = (num % 2 ) + binaryValue;
      num = Math.floor(num / 2);
    }
    
    return binaryValue ;
}

function binaryToDecimal(binaryString) {
  if (/[^01]/.test(binaryString)) {
    // Check for invalid characters in the binary string
    return 'error';
  }
  
  let decimalNumber = 0;
  let binaryLength = binaryString.length;
  
  for (let i = 0; i < binaryLength; i++) {
    const bit = parseInt(binaryString[binaryLength - 1 - i]);
    decimalNumber += bit * Math.pow(2, i);
  }
  
  return decimalNumber;
}

// let binaryString = '101010'; // Replace '101010' with the binary string you want to convert
// let decimalNumber = binaryToDecimal(binaryString);
// console.log(decimalNumber);


const circle = document.querySelector('.circle');

circle.addEventListener('click',function(){
    document.querySelector('.container').classList.toggle('light');
    if (binaryConvert) {
      binaryConvert = false;
      document.querySelector('.output-box').innerHTML = '<p>Decimal form will comes here..!</p>';
    }else{
      binaryConvert = true;
      document.querySelector('.output-box').innerHTML = '<p>Binary form will comes here..!</p>';
    }
});

const output_box = document.querySelector('.output-box');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
    let num = document.getElementById('number');
    
    if (num.value.length < 0) {
      document.querySelector('.error').innerHTML = 'invalid input ';
      document.querySelector('.error').classList.add('active');
    }else{

    

    var out = binary(num.value);

    if (binaryConvert) {
      var out = binary(num.value);
    }else{
      var out = binaryToDecimal(num.value).toString();
    }
    // console.log(out.length);

    if (out == 'error') {
      document.querySelector('.error').innerHTML = 'invalid input ';
      document.querySelector('.error').classList.add('active');
    }
    output_box.innerHTML = ''

    let sec = 0.5;
    for(let i = 0; i < out.length; i++){
        let p = document.createElement('p');
        p.innerHTML = out[i];
        //p.style.animationDelay = `.${(0.5 / parseInt(i))}s`;
        p.style.animationDelay = `.${(sec)}s`;
        sec = sec + 0.5;
        output_box.appendChild(p);
        console.log(sec);
    }

    num.value = '';
    num.focus();
  }
});
