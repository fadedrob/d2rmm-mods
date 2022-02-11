if (config.statCheck) {
  const charstatsFilename = "global\\excel\\charstats.txt";
  const charstats = D2RMM.readTsv(charstatsFilename);
  charstats.rows.forEach((row) => {
    if (row["StatPerLevel"] !== "") {
      row.StatPerLevel = config.statPoints;
    }
  });

  D2RMM.writeTsv(charstatsFilename, charstats);
}

if (config.skillCheck) {
  const charstatsFilename = "global\\excel\\charstats.txt";
  const charstats = D2RMM.readTsv(charstatsFilename);
  charstats.rows.forEach((row) => {
    if (row["SkillsPerLevel"] !== "") {
      row.SkillsPerLevel = config.skillPoints;
    }
  });

  D2RMM.writeTsv(charstatsFilename, charstats);
}
