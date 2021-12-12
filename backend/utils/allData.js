const firstCaseSum = {
  Date: {
    value: "15-Apr",
    count: 0,
  },
  "Time Played": {
    value: "11:00 PM",
    count: 0,
  },
  Rank: {
    value: 0,
    count: 0,
  },
  "Mental State": {
    value: "high",
    count: 0,
  },
  Eliminations: {
    value: 0,
    count: 0,
  },
  Assists: {
    value: 0,
    count: 0,
  },
  Revives: {
    value: 0,
    count: 0,
  },
  Accuracy: {
    value: 0, // yüzdelik
    count: 0,
  },
  Hits: {
    value: 0,
    count: 0,
  },
  "Head Shots": {
    value: 0,
    count: 0,
  },
  "Distance Traveled": {
    value: 0,
    count: 0,
  },
  "Materials Gathered": {
    value: 0,
    count: 0,
  },
  "Materials Used": {
    value: 0,
    count: 0,
  },
  "Damage Taken": {
    value: 0,
    count: 0,
  },
  "Damage to Players": {
    value: 0,
    count: 0,
  },
  "Damage to Structures": {
    value: 0,
    count: 0,
  },
};

const missingDataComplete = () => {
  app.get("/missing-data-complete", async function (req, res) {
    // sütun toplamlarını bulma
    for (let row in datas) {
      for (let col in datas[row]) {
        if (datas[row][col] !== "") {
          if (col === "Rank") {
            firstCaseSum.Rank.value += +datas[row][col];
            firstCaseSum.Rank.count += 1;
          } else if (col === "Eliminations") {
            firstCaseSum.Eliminations.value += +datas[row][col];
            firstCaseSum.Eliminations.count += 1;
          } else if (col === "Assists") {
            firstCaseSum.Assists.value += +datas[row][col];
            firstCaseSum.Assists.count += 1;
          } else if (col === "Revives") {
            firstCaseSum.Revives.value += +datas[row][col];
            firstCaseSum.Revives.count += 1;
          } else if (col === "Accuracy") {
            let numberPart = datas[row][col].split("%")[0];
            firstCaseSum.Accuracy.value += +numberPart;
            firstCaseSum.Accuracy.count += 1;
          } else if (col === "Hits") {
            firstCaseSum.Hits.value += +datas[row][col];
            firstCaseSum.Hits.count += 1;
          } else if (col === "Head Shots") {
            firstCaseSum["Head Shots"].value += +datas[row][col];
            firstCaseSum["Head Shots"].count += 1;
          } else if (col === "Distance Traveled") {
            firstCaseSum["Distance Traveled"].value += +datas[row][col];
            firstCaseSum["Distance Traveled"].count += 1;
          } else if (col === "Materials Gathered") {
            firstCaseSum["Materials Gathered"].value += +datas[row][col];
            firstCaseSum["Materials Gathered"].count += 1;
          } else if (col === "Materials Used") {
            firstCaseSum["Materials Used"].value += +datas[row][col];
            firstCaseSum["Materials Used"].count += 1;
          } else if (col === "Damage Taken") {
            firstCaseSum["Damage Taken"].value = +datas[row][col];
            firstCaseSum["Damage Taken"].count += 1;
          } else if (col === "Damage to Players") {
            firstCaseSum["Damage to Players"].value += +datas[row][col];
            firstCaseSum["Damage to Players"].count += 1;
          } else if (col === "Damage to Structures") {
            firstCaseSum["Damage to Structures"].value += +datas[row][col];
            firstCaseSum["Damage to Structures"].count += 1;
          }
        }
      }
    }
    // aritmetik ortalama ile doldurma
    for (let row in datas) {
      for (let col in datas[row]) {
        if (datas[row][col] === "") {
          if (col === "Rank") {
            datas[row][col] = (
              firstCaseSum.Rank.value / firstCaseSum.Rank.count
            ).toFixed(4);
          } else if (col === "Eliminations") {
            datas[row][col] = (
              firstCaseSum.Eliminations.value / firstCaseSum.Eliminations.count
            ).toFixed(4);
          } else if (col === "Assists") {
            datas[row][col] = (
              firstCaseSum.Assists.value / firstCaseSum.Assists.count
            ).toFixed(4);
          } else if (col === "Revives") {
            datas[row][col] = (
              firstCaseSum.Revives.value / firstCaseSum.Revives.count
            ).toFixed(4);
          } else if (col === "Accuracy") {
            datas[row][col] = (
              firstCaseSum.Accuracy.value / firstCaseSum.Accuracy.count
            ).toFixed(4);
          } else if (col === "Hits") {
            datas[row][col] = (
              firstCaseSum.Hits.value / firstCaseSum.Hits.count
            ).toFixed(4);
          } else if (col === "Head Shots") {
            datas[row][col] = (
              firstCaseSum["Head Shots"].value /
              firstCaseSum["Head Shots"].count
            ).toFixed(4);
          } else if (col === "Distance Traveled") {
            datas[row][col] = (
              firstCaseSum["Distance Traveled"].value /
              firstCaseSum["Distance Traveled"].count
            ).toFixed(4);
          } else if (col === "Materials Gathered") {
            datas[row][col] = (
              firstCaseSum["Materials Gathered"].value /
              firstCaseSum["Materials Gathered"].count
            ).toFixed(4);
          } else if (col === "Materials Used") {
            datas[row][col] = (
              firstCaseSum["Materials Used"].value /
              firstCaseSum["Materials Used"].count
            ).toFixed(4);
          } else if (col === "Damage Taken") {
            datas[row][col] = (
              firstCaseSum["Damage Taken"].value /
              firstCaseSum["Damage Taken"].count
            ).toFixed(4);
          } else if (col === "Damage to Players") {
            datas[row][col] = (
              firstCaseSum["Damage to Players"].value /
              firstCaseSum["Damage to Players"].count
            ).toFixed(4);
          } else if (col === "Damage to Structures") {
            datas[row][col] = (
              firstCaseSum["Damage to Structures"].value /
              firstCaseSum["Damage to Structures"].count
            ).toFixed(4);
          }
        }
      }
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(datas));
    res.end();
  });
};

export {
    missingDataComplete
}
