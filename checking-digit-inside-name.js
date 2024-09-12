function checkDigitsInName(name) {
    let isDigitInName = false;
    if(typeof name !== 'string'){
        return "Invalid Input";
    }else{
        for(let i = 0; i<=9; i++){
            if(name.includes(i)){
                isDigitInName = true;
                break;
            }
        }
        return isDigitInName;
    }
}    

let isName = checkDigitsInName(["Raj"] );
console.log(isName)