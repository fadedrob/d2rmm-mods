const treasureclassexFilename = "global\\excel\\treasureclassex.txt";
const treasureclassex = D2RMM.readTsv(treasureclassexFilename);

treasureclassex.rows.forEach((row) => {
  if (row["Treasure Class"] == "Countess Rune") {
    row.Item1 = config.countessNormalRunes;
  }
  else if (row["Treasure Class"] == "Countess Rune (N)") {
    row.Item1 = config.countessNightmareRunes;
  }
  else if (row["Treasure Class"] == "Countess Rune (H)") {
    row.Item1 = config.countessHellRunes;

    return false;
  }
})

D2RMM.writeTsv(treasureclassexFilename, treasureclassex);
