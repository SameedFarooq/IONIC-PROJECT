const btnTog=document.querySelector('#toggle');
const btnProfile=document.querySelector('#profile');

if(btnTog.checked){
var grid=document.querySelector('#grid');
var row=document.querySelector('#row');
grid.removeChild(row);
}
