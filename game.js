const startButton = document.getElementById('startBtn');
const gridContainer = document.getElementById('gridContainer');
const dateContainer = document.getElementById('dateContainer');
const dateText = document.getElementById('date');


//Date
const date = new Date();
const dateDay = date.getDate();
const dateMonth = date.getMonth() + 1;
const dateYear = date.getFullYear();

const formattedDate = `${dateDay}-${dateMonth}-${dateYear}`;

//Start
const startGame = () => {
    startButton.remove();
    insertDate();
    insertGrid();
}
const insertDate = () => {
    dateContainer.style.display = 'flex';
    dateText.innerHTML = formattedDate;

}
const insertGrid = () => {
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateRows = 'repeat(4, 1fr)';
    gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    gridContainer.style.gap = '8px';
    gridContainer.style.width = '400px';
    gridContainer.style.height = '400px';
    gridContainer.style.backgroundColor = "lightblue";
    gridContainer.style.borderColor = "yellow";
    gridContainer.style.borderWidth = "thick";
    gridContainer.style.color = "red";
}

//Event Listeners
startButton.addEventListener('click', startGame);