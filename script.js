const textbox = document.getElementById("textbox");
const tofaranite = document.getElementById("tofaranite");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
const clear = document.getElementById("clear");
let temp;
function convert(){
    if(tofaranite.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + " °F";
    }
    else if(tocelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + " °c";
    }
    else{
        result.textContent = "select a unit";
    }
}
clear.onclick = function(){
    textbox.value ="";
    result.textContent ='';
}