var sm = [
  [1, 0],
  [0, 1, 1, 1],
  [1],
];

var addMatrixWhileWrong = function(matrix) {
  var sum=0;
  var i=0;
  while (matrix[i] != undefined) {
    var j=0;
    while (matrix[i][j] != undefined) {
      sum += matrix[i][j];
      console.log("Row: ", i, " Column: ", j, " Element: ", matrix[i][j], " Sum: ", sum);
      j++;
    }
    i++;
  }
  console.log("Sum: ", sum);
};

var addMatrix = function(m) {
  var sum = 0;
  for (var i=0;;i++) {
    if (m[i] != undefined) {
      console.log(m[i]);
      for (var j=0;;j++) {
        if (m[i][j] != undefined) {
          console.log(m[i][j], sum);
          sum += m[i][j];
        } else {
          break;
        }
      }
    } else {
      break;
    }
  }
  console.log('Sum: ',sum);
}

addMatrix(sm);
console.log("Whiles:");
addMatrixWhileWrong(sm);
