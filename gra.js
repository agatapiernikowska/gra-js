var mazeGame = (function() {
var gameContainer = document.getElementById('game');
var table =  createTable(10,10);
var cell = getCell(table,0,0);
colorize(cell, 'red');

gameContainer.appendChild(table);
})();

