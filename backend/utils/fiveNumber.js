const findFiveNumber = (datas) => {
  const columnsFiveNumber = {
    Date: {
      value: "15-Apr",
      fiveNumber: {},
    },
    "Time Played": {
      value: "11:00 PM",
      fiveNumber: {},
    },
    Rank: {
      value: [],
      fiveNumber: {},
    },
    "Mental State": {
      value: "high",
      fiveNumber: {},
    },
    Eliminations: {
      value: [],
      fiveNumber: {},
    },
    Assists: {
      value: [],
      fiveNumber: {},
    },
    Revives: {
      value: [],
      fiveNumber: {},
    },
    Accuracy: {
      value: [], // yüzdelik
      fiveNumber: {},
    },
    Hits: {
      value: [],
      fiveNumber: {},
    },
    "Head Shots": {
      value: [],
      fiveNumber: {},
    },
    "Distance Traveled": {
      value: [],
      fiveNumber: {},
    },
    "Materials Gathered": {
      value: [],
      fiveNumber: {},
    },
    "Materials Used": {
      value: [],
      fiveNumber: {},
    },
    "Damage Taken": {
      value: [],
      fiveNumber: {},
    },
    "Damage to Players": {
      value: [],
      fiveNumber: {},
    },
    "Damage to Structures": {
      value: [],
      fiveNumber: {},
    },
  };

  for (let row in datas) {
    for (let col in datas[row]) {
      if (col === "Rank") {
        columnsFiveNumber.Rank.value.push(+datas[row][col]);
      } else if (col === "Eliminations") {
        columnsFiveNumber.Eliminations.value.push(+datas[row][col]);
      } else if (col === "Assists") {
        columnsFiveNumber.Assists.value.push(+datas[row][col]);
      } else if (col === "Revives") {
        columnsFiveNumber.Revives.value.push(+datas[row][col]);
      } else if (col === "Accuracy") {
        let numberPart = datas[row][col].split("%")[0];
        columnsFiveNumber.Accuracy.value.push(+numberPart);
      } else if (col === "Hits") {
        columnsFiveNumber.Hits.value.push(+datas[row][col]);
      } else if (col === "Head Shots") {
        columnsFiveNumber["Head Shots"].value.push(+datas[row][col]);
      } else if (col === "Distance Traveled") {
        columnsFiveNumber["Distance Traveled"].value.push(+datas[row][col]);
      } else if (col === "Materials Gathered") {
        columnsFiveNumber["Materials Gathered"].value.push(+datas[row][col]);
      } else if (col === "Materials Used") {
        columnsFiveNumber["Materials Used"].value.push(+datas[row][col]);
      } else if (col === "Damage Taken") {
        columnsFiveNumber["Damage Taken"].value.push(+datas[row][col]);
      } else if (col === "Damage to Players") {
        columnsFiveNumber["Damage to Players"].value.push(+datas[row][col]);
      } else if (col === "Damage to Structures") {
        columnsFiveNumber["Damage to Structures"].value.push(+datas[row][col]);
      }
    }
  }
  for (let item in columnsFiveNumber) {
    if (Array.isArray(columnsFiveNumber[item].value)) {
      let array = columnsFiveNumber[item].value;
      array.sort((a, b) => a - b);
      let arrLen = array.length;
      let mid_index = medianFind(array, 0, arrLen);
      let min = array[0];
      let max = array[arrLen - 1];
      let median;
      if (columnsFiveNumber[item].value.length % 2) {
        median = columnsFiveNumber[item].value[mid_index];
      } else {
        median =
          (columnsFiveNumber[item].value[mid_index - 1] +
            columnsFiveNumber[item].value[mid_index]) /
          2.0;
      }
      let Q1;
      if (!Number.isInteger(medianFind(array, 0, mid_index))) {
        Q1 = array[Math.ceil(medianFind(array, 0, mid_index))];
      } else {
        Q1 = array[medianFind(array, 0, mid_index)];
      }
      let Q3;
      if (!Number.isInteger(medianFind(array, mid_index + 1, arrLen))) {
        Q3 = array[Math.ceil(medianFind(array, mid_index + 1, arrLen))];
      } else {
        Q3 = array[medianFind(array, mid_index + 1, arrLen)];
      }
      columnsFiveNumber[item].fiveNumber = {
        min,
        Q1,
        median,
        Q3,
        max,
      };
    }
  }
  delete columnsFiveNumber["Time Played"]
  delete columnsFiveNumber.Date
  delete columnsFiveNumber["Mental State"]
  return columnsFiveNumber;
};

const medianFind = (a, l, r) => {
  let n = r - l + 1;
  n = (n + 1) / 2 - 1;
  return n + l;
};

export default findFiveNumber;
