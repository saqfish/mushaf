const { getJuzIndex, getMaqraIndex, generatePageNumbers } = require("./util");

const mushaf = ({ chapters, verses, raw, parts, sections }) => {
  return {
    // Data
    chapters,
    verses,
    raw,
    parts,
    sections,

    surahs: () => chapters,
    surah: (n) => chapters?.[n - 1],
    ayahs: () => verses,
    ayah: (c, n) => chapters?.[c]?.verses?.[n - 1],
    juz: (n) => parts[n - 1],
    juzs: () => parts,
    maqras: () => sections,
    maqra: (j, m) => parts[j - 1][m - 1],
    rawLine: (l) => raw[l - 1],

    // English aliases
    chapter: (n) => surah(n),
    verse: (c, n) => ayah(c, n),
    section: (j, m) => maqra(j, m),

    // Exposed util
    generatePages: (maqra, offset) => {
      let pages = generatePageNumbers(
        sections[maqra].page.start + offset,
        sections[maqra].page.end + offset
      );
      return pages.flat();
    },
    getJuzIndex,
    getMaqraIndex,

  };
};

module.exports = mushaf;
