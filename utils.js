function createTable (width, height) {
  var table = document.createElement('table');
  var tbody = document.createElement('tbody');
  var tr, td, x, y;

  for (y = 0; y < height; y += 1) {
    tr = document.createElement('tr');
    for (x = 0; x < width ; x += 1) {
      td = document.createElement('td');
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  return table;
}

function getCell (table,x,y) {
  var row = table.querySelector('tr:nth-child(' + (y+1) + ')');
  return row.querySelector('td:nth-child(' + (x+1) + ')');
}

function colorize (node,color) {
  node.style.backgroundColor = color
}


