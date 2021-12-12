const findMedian = (datas) => {
  let columnsMedian = {
    Date: {
      value: "15-Apr",
      med: 0,
    },
    "Time Played": {
      value: "11:00 PM",
      med: 0,
    },
    Rank: {
      value: [],
      med: 0,
    },
    "Mental State": {
      value: "high",
      med: 0,
    },
    Eliminations: {
      value: [],
      med: 0,
    },
    Assists: {
      value: [],
      med: 0,
    },
    Revives: {
      value: [],
      med: 0,
    },
    Accuracy: {
      value: [], // yüzdelik
      med: 0,
    },
    Hits: {
      value: [],
      med: 0,
    },
    "Head Shots": {
      value: [],
      med: 0,
    },
    "Distance Traveled": {
      value: [],
      med: 0,
    },
    "Materials Gathered": {
      value: [],
      med: 0,
    },
    "Materials Used": {
      value: [],
      med: 0,
    },
    "Damage Taken": {
      value: [],
      med: 0,
    },
    "Damage to Players": {
      value: [],
      med: 0,
    },
    "Damage to Structures": {
      value: [],
      med: 0,
    },
  };

  for (let row in datas) {
    for (let col in datas[row]) {
      if (col === "Rank") {
        columnsMedian.Rank.value.push(+datas[row][col]);
      } else if (col === "Eliminations") {
        columnsMedian.Eliminations.value.push(+datas[row][col]);
      } else if (col === "Assists") {
        columnsMedian.Assists.value.push(+datas[row][col]);
      } else if (col === "Revives") {
        columnsMedian.Revives.value.push(+datas[row][col]);
      } else if (col === "Accuracy") {
        let numberPart = datas[row][col].split("%")[0];
        columnsMedian.Accuracy.value.push(+numberPart);
      } else if (col === "Hits") {
        columnsMedian.Hits.value.push(+datas[row][col]);
      } else if (col === "Head Shots") {
        columnsMedian["Head Shots"].value.push(+datas[row][col]);
      } else if (col === "Distance Traveled") {
        columnsMedian["Distance Traveled"].value.push(+datas[row][col]);
      } else if (col === "Materials Gathered") {
        columnsMedian["Materials Gathered"].value.push(+datas[row][col]);
      } else if (col === "Materials Used") {
        columnsMedian["Materials Used"].value.push(+datas[row][col]);
      } else if (col === "Damage Taken") {
        columnsMedian["Damage Taken"].value.push(+datas[row][col]);
      } else if (col === "Damage to Players") {
        columnsMedian["Damage to Players"].value.push(+datas[row][col]);
      } else if (col === "Damage to Structures") {
        columnsMedian["Damage to Structures"].value.push(+datas[row][col]);
      }
    }
  }
  for (let i in columnsMedian) {
    if (Array.isArray(columnsMedian[i].value)) {
      const mid = Math.floor(columnsMedian[i].value.length / 2);
      columnsMedian[i].value.sort(function (a, b) {
        return a - b;
      });
      if (columnsMedian[i].value.length % 2) {
        columnsMedian[i].med = columnsMedian[i].value[mid];
      } else {
        columnsMedian[i].med =
          (columnsMedian[i].value[mid - 1] + columnsMedian[i].value[mid]) / 2.0;
      }
    }
  }
  delete columnsMedian["Time Played"]
  delete columnsMedian.Date
  delete columnsMedian["Mental State"]
  return columnsMedian
};

export default findMedian;
