let convertButton = document.getElementById("convertButton");
let temp = document.getElementById("temp");
let Type = document.getElementById("Type");
let Result = document.getElementById("Result");
convertButton.addEventListener('click', () => {
    if (Type.value == "fahrenheit"){
        let number = parseInt(temp.value);
        let fahrenheit = (number * 1.8) + 32;
        Result.value = `${fahrenheit} Fahrenheit`;
    }
    else{
        let number = parseInt(temp.value);
        let celcius = (number - 32) * 0.5556;
        Result.value = `${celcius} Degree Celcius`;
    }
});