const findOutliers = (datas) => {
  const columnsOutliers = {
    Date: {
      value: "15-Apr",
      outliers: [],
    },
    "Time Played": {
      value: "11:00 PM",
      outliers: [],
    },
    Rank: {
      value: [],
      outliers: [],
    },
    "Mental State": {
      value: "high",
      outliers: [],
    },
    Eliminations: {
      value: [],
      outliers: [],
    },
    Assists: {
      value: [],
      outliers: [],
    },
    Revives: {
      value: [],
      outliers: [],
    },
    Accuracy: {
      value: [], // yüzdelik
      outliers: [],
    },
    Hits: {
      value: [],
      outliers: [],
    },
    "Head Shots": {
      value: [],
      outliers: [],
    },
    "Distance Traveled": {
      value: [],
      outliers: [],
    },
    "Materials Gathered": {
      value: [],
      outliers: [],
    },
    "Materials Used": {
      value: [],
      outliers: [],
    },
    "Damage Taken": {
      value: [],
      outliers: [],
    },
    "Damage to Players": {
      value: [],
      outliers: [],
    },
    "Damage to Structures": {
      value: [],
      outliers: [],
    },
  };

  for (let row in datas) {
    for (let col in datas[row]) {
      if (col === "Rank") {
        columnsOutliers.Rank.value.push(+datas[row][col]);
      } else if (col === "Eliminations") {
        columnsOutliers.Eliminations.value.push(+datas[row][col]);
      } else if (col === "Assists") {
        columnsOutliers.Assists.value.push(+datas[row][col]);
      } else if (col === "Revives") {
        columnsOutliers.Revives.value.push(+datas[row][col]);
      } else if (col === "Accuracy") {
        let numberPart = datas[row][col].split("%")[0];
        columnsOutliers.Accuracy.value.push(+numberPart);
      } else if (col === "Hits") {
        columnsOutliers.Hits.value.push(+datas[row][col]);
      } else if (col === "Head Shots") {
        columnsOutliers["Head Shots"].value.push(+datas[row][col]);
      } else if (col === "Distance Traveled") {
        columnsOutliers["Distance Traveled"].value.push(+datas[row][col]);
      } else if (col === "Materials Gathered") {
        columnsOutliers["Materials Gathered"].value.push(+datas[row][col]);
      } else if (col === "Materials Used") {
        columnsOutliers["Materials Used"].value.push(+datas[row][col]);
      } else if (col === "Damage Taken") {
        columnsOutliers["Damage Taken"].value.push(+datas[row][col]);
      } else if (col === "Damage to Players") {
        columnsOutliers["Damage to Players"].value.push(+datas[row][col]);
      } else if (col === "Damage to Structures") {
        columnsOutliers["Damage to Structures"].value.push(+datas[row][col]);
      }
    }
  }

  for (let item in columnsOutliers) {
    if (Array.isArray(columnsOutliers[item].value)) {
      let array = columnsOutliers[item].value;
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
      let iqr = Q3 - Q1;
      let maxValue = Q3 + iqr * 1.5;
      let minValue = Q1 - iqr * 1.5;
      let filteredValues = array.filter((x) => {
        return x > maxValue || x < minValue;
      });
      columnsOutliers[item].outliers = [...filteredValues];
    }
  }
  delete columnsOutliers["Time Played"]
  delete columnsOutliers.Date
  delete columnsOutliers["Mental State"]
  return columnsOutliers;
};

const median = (a, l, r) => {
  let n = r - l + 1;
  n = (n + 1) / 2 - 1;
  return n + l;
};

export default findOutliers;
