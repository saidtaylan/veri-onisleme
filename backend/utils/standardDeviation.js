const findStandardDeviation = (datas) => {
  const columnsStandardDeviation = {
    Date: {
      value: "15-Apr",
      std: 0,
    },
    "Time Played": {
      value: "11:00 PM",
      std: 0,
    },
    Rank: {
      value: [],
      std: 0,
    },
    "Mental State": {
      value: "high",
      std: 0,
    },
    Eliminations: {
      value: [],
      std: 0,
    },
    Assists: {
      value: [],
      std: 0,
    },
    Revives: {
      value: [],
      std: 0,
    },
    Accuracy: {
      value: [], // yüzdelik
      std: 0,
    },
    Hits: {
      value: [],
      std: 0,
    },
    "Head Shots": {
      value: [],
      std: 0,
    },
    "Distance Traveled": {
      value: [],
      std: 0,
    },
    "Materials Gathered": {
      value: [],
      std: 0,
    },
    "Materials Used": {
      value: [],
      std: 0,
    },
    "Damage Taken": {
      value: [],
      std: 0,
    },
    "Damage to Players": {
      value: [],
      std: 0,
    },
    "Damage to Structures": {
      value: [],
      std: 0,
    },
  };

  for (let row in datas) {
    for (let col in datas[row]) {
      if (col === "Rank") {
        columnsStandardDeviation.Rank.value.push(+datas[row][col]);
      } else if (col === "Eliminations") {
        columnsStandardDeviation.Eliminations.value.push(+datas[row][col]);
      } else if (col === "Assists") {
        columnsStandardDeviation.Assists.value.push(+datas[row][col]);
      } else if (col === "Revives") {
        columnsStandardDeviation.Revives.value.push(+datas[row][col]);
      } else if (col === "Accuracy") {
        let numberPart = datas[row][col].split("%")[0];
        columnsStandardDeviation.Accuracy.value.push(+numberPart);
      } else if (col === "Hits") {
        columnsStandardDeviation.Hits.value.push(+datas[row][col]);
      } else if (col === "Head Shots") {
        columnsStandardDeviation["Head Shots"].value.push(+datas[row][col]);
      } else if (col === "Distance Traveled") {
        columnsStandardDeviation["Distance Traveled"].value.push(
          +datas[row][col]
        );
      } else if (col === "Materials Gathered") {
        columnsStandardDeviation["Materials Gathered"].value.push(
          +datas[row][col]
        );
      } else if (col === "Materials Used") {
        columnsStandardDeviation["Materials Used"].value.push(+datas[row][col]);
      } else if (col === "Damage Taken") {
        columnsStandardDeviation["Damage Taken"].value.push(+datas[row][col]);
      } else if (col === "Damage to Players") {
        columnsStandardDeviation["Damage to Players"].value.push(
          +datas[row][col]
        );
      } else if (col === "Damage to Structures") {
        columnsStandardDeviation["Damage to Structures"].value.push(
          +datas[row][col]
        );
      }
    }
  }
  for (let item in columnsStandardDeviation) {
    if (Array.isArray(columnsStandardDeviation[item].value)) {
      let arr = columnsStandardDeviation[item].value;
      if (!arr.length) {
        return 0;
      }
      const sum = arr.reduce((acc, val) => acc + val);
      const { length: num } = arr;
      const median = sum / num;
      let variance = 0;
      arr.forEach((num) => {
        variance += (num - median) * (num - median);
      });
      variance /= num;
      let std = Math.sqrt(variance);
      columnsStandardDeviation[item].std = std.toFixed(4);
    }
  }
  delete columnsStandardDeviation["Time Played"]
  delete columnsStandardDeviation.Date
  delete columnsStandardDeviation["Mental State"]
  return columnsStandardDeviation;
};

export default findStandardDeviation;
