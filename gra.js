var mazeGame = (function() {
var gameContainer = document.getElementById('game');
var table =  createTable(10,10);
colorize(table, 0, 0, 'red');

gameContainer.appendChild(table);
})();

