const DAYS = 7;
const WEEKS = 52;
const Colors = ["grey","grey","grey","grey","grey","grey","green1", "green2", "green3","green4"]

let gridContainer = document.getElementsByClassName('gridContainer');
console.log(gridContainer[0]);

let table = document.createElement('table');

gridContainer[0].appendChild(table);

for(let i = 0; i < DAYS; i++){ 
  let tr = table.insertRow();
  for(let j =0; j < WEEKS; j++){
    let randomClass = Math.floor(Math.random() * Colors.length); 
    let td = tr.insertCell();
    td.className = "cell";
    td.classList.add("cell", Colors[randomClass]);   
  }
}