const modeFind = (datas) => {
  let columnsMode = {
    Date: {
      values: "15-Apr",
      mod: 0,
    },
    "Time Played": {
      values: "11:00 PM",
      mod: 0,
    },
    Rank: {
      values: [],
      mod: 0,
    },
    "Mental State": {
      values: "high",
      mod: 0,
    },
    Eliminations: {
      values: [],
      mod: 0,
    },
    Assists: {
      values: [],
      mod: 0,
    },
    Revives: {
      values: [],
      mod: 0,
    },
    Accuracy: {
      values: [],
      mod: 0,
    },
    Hits: {
      values: [],
      mod: 0,
    },
    "Head Shots": {
      values: [],
      mod: 0,
    },
    "Distance Traveled": {
      values: [],
      mod: 0,
    },
    "Materials Gathered": {
      values: [],
      mod: 0,
    },
    "Materials Used": {
      values: [],
      mod: 0,
    },
    "Damage Taken": {
      values: [],
      mod: 0,
    },
    "Damage to Players": {
      values: [],
      mod: 0,
    },
    "Damage to Structures": {
      values: [],
      mod: 0,
    },
  };

  let colName = "";
  for (let row in datas) {
    for (let col in datas[row]) {
      if (col === "Rank") {
        colName = "Rank";
        columnsMode[colName].values.push(+datas[row][col]);
      } else if (col === "Eliminations") {
        colName = "Eliminations";
        columnsMode[colName].values.push(+datas[row][col]);
      } else if (col === "Assists") {
        colName = "Assists";
        columnsMode[colName].values.push(+datas[row][col]);
      } else if (col === "Revives") {
        colName = "Revives";
        columnsMode[colName].values.push(+datas[row][col]);
      } else if (col === "Accuracy") {
        colName = "Accuracy";
        let numberPart = datas[row][col].split("%")[0];
        columnsMode[colName].values.push(numberPart);
      } else if (col === "Hits") {
        colName = "Hits";
        columnsMode[colName].values.push(+datas[row][col]);
      } else if (col === "Head Shots") {
        colName = "Head Shots";
        columnsMode[colName].values.push(+datas[row][col]);
      } else if (col === "Distance Traveled") {
        colName = "Distance Traveled";
        columnsMode[colName].values.push(+datas[row][col]);
      } else if (col === "Materials Gathered") {
        colName = "Materials Gathered";
        columnsMode[colName].values.push(+datas[row][col]);
      } else if (col === "Materials Used") {
        colName = "Materials Used";
        columnsMode[colName].values.push(+datas[row][col]);
      } else if (col === "Damage Taken") {
        colName = "Damage Taken";
        columnsMode[colName].values.push(+datas[row][col]);
      } else if (col === "Damage to Players") {
        colName = "Damage to Players";
        columnsMode[colName].values.push(+datas[row][col]);
      } else if (col === "Damage to Structures") {
        colName = "Damage to Structures";
        columnsMode[colName].values.push(+datas[row][col]);
      }
    }
  }

  for (let item in columnsMode) {
    if (Array.isArray(columnsMode[item].values)) {
      let array = columnsMode[item].values;
      array.sort((x, y) => x - y);

      let bestStreak = 1;
      let bestElem = array[0];
      let currentStreak = 1;
      let currentElem = array[0];

      for (let i = 1; i < array.length; i++) {
        if (array[i - 1] !== array[i]) {
          if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            bestElem = currentElem;
          }

          currentStreak = 0;
          currentElem = array[i];
        }

        currentStreak++;
      }
      if (currentStreak > bestStreak) {
        columnsMode[item].mod = currentElem;
      } else {
        columnsMode[item].mod = bestElem;
      }
    }
  }
  delete columnsMode["Time Played"]
  delete columnsMode.Date
  delete columnsMode["Mental State"]
  return columnsMode
};

export default modeFind;
