const charstatsFilename = "global\\excel\\charstats.txt";
const charstats = D2RMM.readTsv(charstatsFilename);

if (config.statCheck) {
  charstats.rows.forEach((row) => {
    if (row.StatPerLevel !== "") {
      row.StatPerLevel = config.statPoints;
    }
  });
}

if (config.skillCheck) {
  charstats.rows.forEach((row) => {
    if (row.SkillsPerLevel !== "") {
      row.SkillsPerLevel = config.skillPoints;
    }
  });
}

D2RMM.writeTsv(charstatsFilename, charstats);
