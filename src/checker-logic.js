export class Checker {
  constructor(rowArr, colArr) {
    this.row = rowArr;
    this.column = colArr;
  }

  isLegal = function() {
    const numbersToCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let rowIsTrue;
    if (this.row.length != 9) {
      rowIsTrue = false;
    } else {
      let sortedRow = this.row.sort();
      for (let i = 0, i < 9, i++) {
        if(sortedRow[i] != numbersToCheck[i]) {
          rowIsTrue = false;
        }
      }
      rowIsTrue = true;
    }

    let colIsTrue;
    if (this.col.length != 9) {
      rowIsTrue = false;
    } else {
      let sortedCol = this.col.sort();
      for (let i = 0, i < 9, i++) {
        if(sortedCol[i] != numbersToCheck[i]) {
          rowIsTrue = false;
        }
      }
      rowIsTrue = true;
    }

    if(rowIsTrue && colIsTrue) {
      return true;
    } else {
      return false;
    }
  }
}
