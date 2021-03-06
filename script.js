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
const decimalEl = document.querySelector('.decimal')
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

// Variables
let valueStrInMemory = null;
let operatorInMemory = null;


//Functions    
const getValueAsStr = () => valueEl.textContent.split(',').join('') ;

const getValueAsNum = () => {
    return parseFloat(getValueAsStr());
}

const setStrAsValue = (valueStr) => {
    if(valueStr[valueStr.length - 1] === '.'){
        valueEl.textContent += '.';
        return;
    }

    const [wholeNumStr, decimalStr] = valueStr.split('.');
    if(decimalStr){
        valueEl.textContent = parseFloat(wholeNumStr).toLocaleString('en-US') +'.' + decimalStr;
    }else {
        valueStr.textContent = parseFloat(wholeNumStr).toLocaleString('en-US')
    }

    valueEl.textContent = parseFloat(valueStr).toLocaleString('en-US');
}




const handleNumberClick = (numStr) => {
    // console.log(numStr)
    const currentValueStr = getValueAsStr();
    if(currentValueStr === '0'){
        setStrAsValue(numStr);
    }else{
        setStrAsValue(currentValueStr + numStr)
        
    };
    
}
const getResultOfOperationAsStr = () =>{
    const currentValueNum = getValueAsNum();
    const valueNumInMemory = parseFloat(valueStrInMemory);
    let newValueNum;
    if (operatorInMemory === 'addition') {
        newValueNum =valueNumInMemory + currentValueNum;
    } else if(operatorInMemory === 'substraction'){
        newValueNum =valueNumInMemory - currentValueNum;

    } else if(operatorInMemory === 'multiplication'){
        newValueNum =valueNumInMemory * currentValueNum;

    } else if(operatorInMemory === 'division'){
        newValueNum =valueNumInMemory / currentValueNum;

    }
    return newValueNum.toString();
};

const handleOperatorClick = (operation)=>{
    const currentValueStr = getValueAsStr();
    if(!valueStrInMemory){
        valueStrInMemory = currentValueStr;
        operatorInMemory = operation;
        setStrAsValue('0');
        return;
    }
    valueStrInMemory = getResultOfOperationAsStr();
    operatorInMemory = operation;
    setStrAsValue('0') 
}


// Adding Event Listeners to Operators
additionEl.addEventListener('click',()=>{
    handleOperatorClick('addition');
})
substractionEl.addEventListener('click',()=>{
    handleOperatorClick('substraction');
})
multiplicationEl.addEventListener('click',()=>{
    handleOperatorClick('multiplication');
})
divisionEl.addEventListener('click',()=>{
    handleOperatorClick('division');
})
equalEl.addEventListener('click',()=>{
    if (valueStrInMemory) {
        setStrAsValue(getResultOfOperationAsStr());
        valueStrInMemory = null;
        operatorInMemory = null;


    }
})

//Add Event Listeners to numbers and decimal
for (let i = 0; i < numberElArray.length; i++) {
    const numberEl = numberElArray[i];
    numberEl.addEventListener('click', () => {
        handleNumberClick(i.toString());
    } );
    
}

decimalEl.addEventListener('click', ()=>{
    const currentValueStr = getValueAsStr();
    if(!currentValueStr.includes('.')){
        setStrAsValue(currentValueStr + ".")
    }
});

// Adding event Listeners to functions
acEl.addEventListener('click', ()=>{
    setStrAsValue('0');
    valueStrInMemory = null;
    operatorInMemory = null;
});
pmEl.addEventListener('click', ()=>{
    const currenValueNum = getValueAsNum();
    const currentValueStr = getValueAsStr();

    if (currentValueStr === '-0'){
        setStrAsValue('0');
        return;
    }
    if(currenValueNum >= 0){
        setStrAsValue('-' + currentValueStr)
    }else{
        setStrAsValue(currentValueStr.substring(1))
    }
});
percentEl.addEventListener('click', ()=>{
    const currentValueNum = getValueAsNum();
    const newValueNum = currentValueNum / 100 ;
    setStrAsValue(newValueNum.toString())
    valueStrInMemory = null;
    operatorInMemory = null;
});






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


