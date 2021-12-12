import csv from "csvtojson";
import { createObjectCsvWriter } from "csv-writer";

csv({ separator: "," });

const csvFilePath = "../FortniteStatistics.csv";
let datasOrg = [];
let datas = [];
app.get("/get-file", async (req, res) => {
  datas = await csv({ delimiter: "," }).fromFile(csvFilePath);
  datasOrg = datas.map((data) => data);
  if (datas.length > 0) {
    res.end("1");
  } else {
    res.end("0");
  }
});

const saveMissingDataComplete = () => {
  let csvWriter = createObjectCsvWriter({
    path: "../FortniteStatistics_new.csv",
    header: [
      { id: "Date", title: "Date" },
      { id: "Time Played", title: "Time Played" },
      { id: "Rank", title: "Rank" },
      { id: "Mental State", title: "Mental State" },
      { id: "Eliminations", title: "Eliminations" },
      { id: "Assists", title: "Assists" },
      { id: "Revives", title: "Revives" },
      { id: "Accuracy", title: "Accuracy" },
      { id: "Hits", title: "Hits" },
      { id: "Head Shots", title: "Head Shots" },
      { id: "Distance Traveled", title: "Distance Traveled" },
      { id: "Materials Gathered", title: "Materials Gathered" },
      { id: "Materials Used", title: "Materials Used" },
      { id: "Damage Taken", title: "Damage Taken" },
      { id: "Damage to Players", title: "Damage to Players" },
      { id: "Damage to Structures", title: "Damage to Structures" },
    ],
  });

  try {
    (async function () {
      await csvWriter.writeRecords(datas);
    })();
  } catch (err) {
    res.end(`${err}`);
  }
  res.end("1");
};
