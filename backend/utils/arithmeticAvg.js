const rowCount = 80;

const arithmeticAvg = (datas) => {
  let columnAvgs = {
    Date: {
      value: "15-Apr",
      avg: 0,
    },
    "Time Played": {
      value: "11:00 PM",
      avg: 0,
    },
    Rank: {
      value: 0,
      avg: 0,
    },
    "Mental State": {
      value: "high",
      avg: 0,
    },
    Eliminations: {
      value: 0,
      avg: 0,
    },
    Assists: {
      value: 0,
      avg: 0,
    },
    Revives: {
      value: 0,
      avg: 0,
    },
    Accuracy: {
      value: 0, // yüzdelik
      avg: 0,
    },
    Hits: {
      value: 0,
      avg: 0,
    },
    "Head Shots": {
      value: 0,
      avg: 0,
    },
    "Distance Traveled": {
      value: 0,
      avg: 0,
    },
    "Materials Gathered": {
      value: 0,
      avg: 0,
    },
    "Materials Used": {
      value: 0,
      avg: 0,
    },
    "Damage Taken": {
      value: 0,
      avg: 0,
    },
    "Damage to Players": {
      value: 0,
      avg: 0,
    },
    "Damage to Structures": {
      value: 0,
      avg: 0,
    },
  };

  for (let row of datas) {
    for (let col in row) {
      if (col === "Rank") {
        columnAvgs.Rank.value += +row[col];
      } else if (col === "Eliminations") {
        columnAvgs.Eliminations.value += +row[col];
      } else if (col === "Assists") {
        columnAvgs.Assists.value += +row[col];
      } else if (col === "Revives") {
        columnAvgs.Revives.value += +row[col];
      } else if (col === "Accuracy") {
        let numberPart = row[col].split("%")[0];
        columnAvgs.Accuracy.value += +numberPart;
      } else if (col === "Hits") {
        columnAvgs.Hits.value += +row[col];
      } else if (col === "Head Shots") {
        columnAvgs["Head Shots"].value += +row[col];
      } else if (col === "Distance Traveled") {
        columnAvgs["Distance Traveled"].value += +row[col];
      } else if (col === "Materials Gathered") {
        columnAvgs["Materials Gathered"].value += +row[col];
      } else if (col === "Materials Used") {
        columnAvgs["Materials Used"].value += +row[col];
      } else if (col === "Damage Taken") {
        columnAvgs["Damage Taken"].value = +row[col];
      } else if (col === "Damage to Players") {
        columnAvgs["Damage to Players"].value += +row[col];
      } else if (col === "Damage to Structures") {
        columnAvgs["Damage to Structures"].value += +row[col];
      }
    }
  }
  for (let row in columnAvgs) {
    if (row === "Rank") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    } else if (row === "Eliminations") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    } else if (row === "Assists") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    } else if (row === "Revives") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    } else if (row === "Accuracy") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    } else if (row === "Hits") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    } else if (row === "Head Shots") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    } else if (row === "Distance Traveled") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    } else if (row === "Materials Gathered") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    } else if (row === "Materials Used") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    } else if (row === "Damage Taken") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    } else if (row === "Damage to Players") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    } else if (row === "Damage to Structures") {
      columnAvgs[row].avg = (
        columnAvgs[row].value.toFixed(4) / rowCount
      ).toFixed(4);
    }
  }
  delete columnAvgs["Time Played"]
  delete columnAvgs.Date
  delete columnAvgs["Mental State"]
  return columnAvgs;
};

export default arithmeticAvg