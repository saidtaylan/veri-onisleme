const findFrequencies = (datas) => {
  let columnsFreq = {
    Date: {
      values: "15-Apr",
      freq: {},
    },
    "Time Played": {
      values: "11:00 PM",
      freq: {},
    },
    Rank: {
      values: [],
      freq: {},
    },
    "Mental State": {
      values: "high",
      freq: {},
    },
    Eliminations: {
      values: [],
      freq: {},
    },
    Assists: {
      values: [],
      freq: {},
    },
    Revives: {
      values: [],
      freq: {},
    },
    Accuracy: {
      values: [],
      freq: {},
    },
    Hits: {
      values: [],
      freq: {},
    },
    "Head Shots": {
      values: [],
      freq: {},
    },
    "Distance Traveled": {
      values: [],
      freq: {},
    },
    "Materials Gathered": {
      values: [],
      freq: {},
    },
    "Materials Used": {
      values: [],
      freq: {},
    },
    "Damage Taken": {
      values: [],
      freq: {},
    },
    "Damage to Players": {
      values: [],
      freq: {},
    },
    "Damage to Structures": {
      values: [],
      freq: {},
    },
  };

  let colName = "";
  for (let row in datas) {
    for (let col in datas[row]) {
      if (col === "Rank") {
        colName = "Rank";
        columnsFreq[colName].values.push(+datas[row][col]);
      } else if (col === "Eliminations") {
        colName = "Eliminations";
        columnsFreq[colName].values.push(+datas[row][col]);
      } else if (col === "Assists") {
        colName = "Assists";
        columnsFreq[colName].values.push(+datas[row][col]);
      } else if (col === "Revives") {
        colName = "Revives";
        columnsFreq[colName].values.push(+datas[row][col]);
      } else if (col === "Accuracy") {
        colName = "Accuracy";
        let numberPart = datas[row][col].split("%")[0];
        columnsFreq[colName].values.push(numberPart);
      } else if (col === "Hits") {
        colName = "Hits";
        columnsFreq[colName].values.push(+datas[row][col]);
      } else if (col === "Head Shots") {
        colName = "Head Shots";
        columnsFreq[colName].values.push(+datas[row][col]);
      } else if (col === "Distance Traveled") {
        colName = "Distance Traveled";
        columnsFreq[colName].values.push(+datas[row][col]);
      } else if (col === "Materials Gathered") {
        colName = "Materials Gathered";
        columnsFreq[colName].values.push(+datas[row][col]);
      } else if (col === "Materials Used") {
        colName = "Materials Used";
        columnsFreq[colName].values.push(+datas[row][col]);
      } else if (col === "Damage Taken") {
        colName = "Damage Taken";
        columnsFreq[colName].values.push(+datas[row][col]);
      } else if (col === "Damage to Players") {
        colName = "Damage to Players";
        columnsFreq[colName].values.push(+datas[row][col]);
      } else if (col === "Damage to Structures") {
        colName = "Damage to Structures";
        columnsFreq[colName].values.push(+datas[row][col]);
      }
    }
  }
  for (let item in columnsFreq) {
    if (Array.isArray(columnsFreq[item].values)) {
      if(item === 'Hits') {
      }
      let array = columnsFreq[item].values;
      array.forEach((element) => {
        if (`${element}` in columnsFreq[item].freq) {
          columnsFreq[item].freq[element] += 1;
        } else {
          columnsFreq[item].freq[element] = 1;
        }
      });
    }
  }
  delete columnsFreq["Time Played"]
  delete columnsFreq.Date
  delete columnsFreq["Mental State"]
  return columnsFreq;
};

export default findFrequencies;
