var button = document.getElementById('btn5');
var table = [1,2,3,6,9,8,7,4];

button.onclick = () => {
    table.unshift(table.pop());
    document.getElementById('btn1').innerHTML = table[0];
    document.getElementById('btn2').innerHTML = table[1];
    document.getElementById('btn3').innerHTML = table[2];
    document.getElementById('btn6').innerHTML = table[3];
    document.getElementById('btn9').innerHTML = table[4];
    document.getElementById('btn8').innerHTML = table[5];
    document.getElementById('btn7').innerHTML = table[6];
    document.getElementById('btn4').innerHTML = table[7];
}
