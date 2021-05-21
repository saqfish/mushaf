const mushafs = {
  duri: "abu_amr/duri",
  susi: "abu_amr/susi",
};

class Mushaf {
  constructor(r) {
    this.rawi = r;
    this.load(r);
  }
  get rawi() {
    return this.rawi;
  }
  set rawi(r) {
    this.load(r);
  }

  load = (r) => {
    try {
      this.chapters = require(`./${mushafs[r]}/chapters.json`);
      this.verses = require(`./${mushafs[r]}/verses.json`);
      this.raw = require(`./${mushafs[r]}/raw.json`);
      this.parts = require(`./${mushafs[r]}/sections.json`);
      this.sections = [];
      if (this.parts) {
        for (let p of this.parts) {
          this.sections = this.sections.concat(p);
        }
      }
    } catch (e) {
      this.chapters = this.verses = this.raw = this.sections = [];
    }
  };

  surahs = () => this.chapters;
  surah = (n) => this.chapters?.[n - 1];
  chapter = (n) => this.surah(n);

  ayahs = () => this.verses;
  ayah = (c, n) => this.chapters?.[c]?.verses?.[n - 1];
  verse = (c, n) => this.ayah(c, n);

  juz = (n) => this.parts[n - 1];
  juzs = () => this.parts;

  maqras = () => this.sections;
  maqra = (j, m) => this.parts[j - 1][m - 1];
  section = (j, m) => this.maqra(j, m);

  rawLine = (l) => this.raw[l - 1];
}

const mushaf = new Mushaf("duri");

module.exports.mushaf = mushaf;
module.exports.mushafs = mushafs;
