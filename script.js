//DOM Elements
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
// console.log(hour,minute) 

const valueEl = document.querySelector('.value')
const acEl = document.querySelector('.ac')
const pmEl = document.querySelector('.pm')
const percentEl = document.querySelector('.percent')
const divisionEl = document.querySelector('.division')
const multiplicationEl = document.querySelector('.multiplication')
const additionEl = document.querySelector('.addition')
const substractionEl = document.querySelector('.substraction')
// console.log(displayEl,acEl,pmEl,percentEl,divisionEl,multiplicationEl,additionEl,substractionEl)
const equalEl = document.querySelector('.equal')
const number1El = document.querySelector('.number-1')
const number2El = document.querySelector('.number-2')
const number3El = document.querySelector('.number-3')
const number4El = document.querySelector('.number-4')
const number5El = document.querySelector('.number-5')
const number6El = document.querySelector('.number-6')
const number7El = document.querySelector('.number-7')
const number8El = document.querySelector('.number-8')
const number9El = document.querySelector('.number-9')
const number0El = document.querySelector('.number-0')

const numberElArray = [
    number0El, number1El, number2El, number3El, number4El, number5El,number6El, number7El,number8El, number9El]




//Functions    
const getValueAsStr = () => valueEl.textContent.split(',').join('') ;




const handleNumberClick = (numStr) => {
    // console.log(numStr)
    const currentDisplayStr = getValueAsStr();
    if(currentDisplayStr === '0'){
        valueEl.textContent = numStr;
    }else{
        valueEl.textContent = parseFloat(currentDisplayStr + numStr).toLocaleString('en-US');
    };
    
}

//Add Event Listeners to numbers and buttons
for (let i = 0; i < numberElArray.length; i++) {
    const numberEl = numberElArray[i];
    numberEl.addEventListener('click', () => {
        handleNumberClick(i.toString());
    } );
    
}







//Setting up the time
updateTime = () => {
    const currentTime = new Date()
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    // console.log("hour",currentHour,"Minute" ,currentMinute)
    
    hour.textContent = currentHour.toString().padStart(2,'0');
    minute.textContent = currentMinute.toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();


