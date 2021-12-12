const findVariance = (datas) => {
  const columnsVariance = {
    Date: {
      value: "15-Apr",
      variance: 0,
    },
    "Time Played": {
      value: "11:00 PM",
      variance: 0,
    },
    Rank: {
      value: [],
      variance: 0,
    },
    "Mental State": {
      value: "high",
      variance: 0,
    },
    Eliminations: {
      value: [],
      variance: 0,
    },
    Assists: {
      value: [],
      variance: 0,
    },
    Revives: {
      value: [],
      variance: 0,
    },
    Accuracy: {
      value: [], // yüzdelik
      variance: 0,
    },
    Hits: {
      value: [],
      variance: 0,
    },
    "Head Shots": {
      value: [],
      variance: 0,
    },
    "Distance Traveled": {
      value: [],
      variance: 0,
    },
    "Materials Gathered": {
      value: [],
      variance: 0,
    },
    "Materials Used": {
      value: [],
      variance: 0,
    },
    "Damage Taken": {
      value: [],
      variance: 0,
    },
    "Damage to Players": {
      value: [],
      variance: 0,
    },
    "Damage to Structures": {
      value: [],
      variance: 0,
    },
  };

  for (let row in datas) {
    for (let col in datas[row]) {
      if (col === "Rank") {
        columnsVariance.Rank.value.push(+datas[row][col]);
      } else if (col === "Eliminations") {
        columnsVariance.Eliminations.value.push(+datas[row][col]);
      } else if (col === "Assists") {
        columnsVariance.Assists.value.push(+datas[row][col]);
      } else if (col === "Revives") {
        columnsVariance.Revives.value.push(+datas[row][col]);
      } else if (col === "Accuracy") {
        let numberPart = datas[row][col].split("%")[0];
        columnsVariance.Accuracy.value.push(+numberPart);
      } else if (col === "Hits") {
        columnsVariance.Hits.value.push(+datas[row][col]);
      } else if (col === "Head Shots") {
        columnsVariance["Head Shots"].value.push(+datas[row][col]);
      } else if (col === "Distance Traveled") {
        columnsVariance["Distance Traveled"].value.push(+datas[row][col]);
      } else if (col === "Materials Gathered") {
        columnsVariance["Materials Gathered"].value.push(+datas[row][col]);
      } else if (col === "Materials Used") {
        columnsVariance["Materials Used"].value.push(+datas[row][col]);
      } else if (col === "Damage Taken") {
        columnsVariance["Damage Taken"].value.push(+datas[row][col]);
      } else if (col === "Damage to Players") {
        columnsVariance["Damage to Players"].value.push(+datas[row][col]);
      } else if (col === "Damage to Structures") {
        columnsVariance["Damage to Structures"].value.push(+datas[row][col]);
      }
    }
  }

  for (let item in columnsVariance) {
    if (Array.isArray(columnsVariance[item].value)) {
      let arr = columnsVariance[item].value;
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
      columnsVariance[item].variance = variance.toFixed(4);
    }
  }
  delete columnsVariance["Time Played"]
  delete columnsVariance.Date
  delete columnsVariance["Mental State"]
  return columnsVariance;
};

export default findVariance;
