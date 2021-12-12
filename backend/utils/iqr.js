const computeIQR = (datas) => {
  const columnsIQR = {
    Date: {
      value: "15-Apr",
      iqr: 0,
    },
    "Time Played": {
      value: "11:00 PM",
      iqr: 0,
    },
    Rank: {
      value: [],
      iqr: 0,
    },
    "Mental State": {
      value: "high",
      iqr: 0,
    },
    Eliminations: {
      value: [],
      iqr: 0,
    },
    Assists: {
      value: [],
      iqr: 0,
    },
    Revives: {
      value: [],
      iqr: 0,
    },
    Accuracy: {
      value: [], // yüzdelik
      iqr: 0,
    },
    Hits: {
      value: [],
      iqr: 0,
    },
    "Head Shots": {
      value: [],
      iqr: 0,
    },
    "Distance Traveled": {
      value: [],
      iqr: 0,
    },
    "Materials Gathered": {
      value: [],
      iqr: 0,
    },
    "Materials Used": {
      value: [],
      iqr: 0,
    },
    "Damage Taken": {
      value: [],
      iqr: 0,
    },
    "Damage to Players": {
      value: [],
      iqr: 0,
    },
    "Damage to Structures": {
      value: [],
      iqr: 0,
    },
  };

  for (let row in datas) {
    for (let col in datas[row]) {
      if (col === "Rank") {
        columnsIQR.Rank.value.push(+datas[row][col]);
      } else if (col === "Eliminations") {
        columnsIQR.Eliminations.value.push(+datas[row][col]);
      } else if (col === "Assists") {
        columnsIQR.Assists.value.push(+datas[row][col]);
      } else if (col === "Revives") {
        columnsIQR.Revives.value.push(+datas[row][col]);
      } else if (col === "Accuracy") {
        let numberPart = datas[row][col].split("%")[0];
        columnsIQR.Accuracy.value.push(+numberPart);
      } else if (col === "Hits") {
        columnsIQR.Hits.value.push(+datas[row][col]);
      } else if (col === "Head Shots") {
        columnsIQR["Head Shots"].value.push(+datas[row][col]);
      } else if (col === "Distance Traveled") {
        columnsIQR["Distance Traveled"].value.push(+datas[row][col]);
      } else if (col === "Materials Gathered") {
        columnsIQR["Materials Gathered"].value.push(+datas[row][col]);
      } else if (col === "Materials Used") {
        columnsIQR["Materials Used"].value.push(+datas[row][col]);
      } else if (col === "Damage Taken") {
        columnsIQR["Damage Taken"].value.push(+datas[row][col]);
      } else if (col === "Damage to Players") {
        columnsIQR["Damage to Players"].value.push(+datas[row][col]);
      } else if (col === "Damage to Structures") {
        columnsIQR["Damage to Structures"].value.push(+datas[row][col]);
      }
    }
  }

  for (let item in columnsIQR) {
    if (Array.isArray(columnsIQR[item].value)) {
      let array = columnsIQR[item].value;
      array.sort((a, b) => a - b);
      let arrLen = array.length;
      let mid_index = median(array, 0, arrLen);
      let Q1;
      if (!Number.isInteger(median(array, 0, mid_index))) {
        Q1 = array[Math.ceil(median(array, 0, mid_index))];
      } else {
        Q1 = array[median(array, 0, mid_index)];
      }
      let Q3;
      if (!Number.isInteger(median(array, mid_index + 1, arrLen))) {
        Q3 = array[Math.ceil(median(array, mid_index + 1, arrLen))];
      } else {
        Q3 = array[median(array, mid_index + 1, arrLen)];
      }
      columnsIQR[item].iqr = Q3 - Q1;
    }
  }
  delete columnsIQR["Time Played"]
  delete columnsIQR.Date
  delete columnsIQR["Mental State"]
  return columnsIQR;
};

const median = (a, l, r) => {
  let n = r - l + 1;
  n = (n + 1) / 2 - 1;
  return n + l;
};

export default computeIQR;
