const find = function(table, key) {
  return table.find(function(e) {
    return e[0] == key;
  });
};

/*const insert = function(table,key,value) {
  if(find(table,key)) {
    return;            
  }                    
  table.push([key,value]);
  return table;           
};*/

const getValue = function(table, key) {
  let e = find(table, key);
  if (e) {
    return e[1];
  }
};

const update = function(table, key, value) {
  let e = find(table, key);
  if (e) {
    e[1] = value;
  }
};

const filledLine = function(element) {
  return " ".repeat(element[0]) + "*".repeat(element[1]);
};

const hollowLine = function(length) {
  return function(element, index) {
    if (index < 1 || index == length - 1) {
      return " ".repeat(element[0]) + "*".repeat(element[1]);
    }
    return " ".repeat(element[0]) + "*" + " ".repeat(element[1] - 2) + "*";
  };
};

const alternatingLine = function(length) {
  return function(element, index) {
    if (index % 2 == 0) {
      return " ".repeat(element[0]) + "-".repeat(element[1]);
    }
    return " ".repeat(element[0]) + "+".repeat(element[1]);
  };
};

const interLacedLine = function(length) {
  return function(element, index) {
    if (index % 2 == 0) {
      return (
        " ".repeat(element[0]) + "-+".repeat(element[1]).substr(0, element[1])
      );
    }
    return (
      " ".repeat(element[0]) + "+-".repeat(element[1]).substr(0, element[1])
    );
  };
};

const angledLine = function(length) {
  return function(element, index) {
    if (index < 1 || index == length - 1) {
      return " ".repeat(element[0]) + "*".repeat(element[1]);
    }
    if (index == Math.floor(length / 2)) {
      return " ".repeat(element[0]) + "*" + " ".repeat(element[1] - 2) + "*";
    }
    if (index < Math.floor(length / 2)) {
      return " ".repeat(element[0]) + "/" + " ".repeat(element[1] - 2) + "\\";
    }
    return " ".repeat(element[0]) + "\\" + " ".repeat(element[1] - 2) + "/";
  };
};

//exports.find = find;
//exports.insert = insert;
exports.getValue = getValue;
exports.update = update;
exports.filledLine = filledLine;
exports.hollowLine = hollowLine;
exports.alternatingLine = alternatingLine;
exports.interLacedLine = interLacedLine;
exports.angledLine = angledLine;
