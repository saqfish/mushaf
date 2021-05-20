const mushafs = {
  duri: "abu_amr/duri",
  susi: "abu_amr/susi",
};

const check = (check, r) => {
  if (!check || !check.length) {
    throw 'Check your rawi selection!';
    return null;
  }
  return r;
};

class Mushaf {
  constructor(r) {
    this.c = 0;
    this.j = 0;
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
      this.pages = require(`./${mushafs[r]}/pages.json`);
      this.raw = require(`./${mushafs[r]}/raw.json`);
      this.verses = require(`./${mushafs[r]}/verses.json`);
      this.sections = require(`./${mushafs[r]}/sections.json`);
    } catch (e) {
      this.chapters = this.pages = this.raw = this.verses = this.sections = [];
    }
  };
  surahs = () => check(this.chapters, this.chapters);
  surah = (n) => {
    this.c = n - 1;
    const c = this.chapters?.[n - 1];
    return check(this.chapters, c);
  };
  ayahs = () =>
    check(this.chapters, this.chapters ? this.chapters[this.c].verses : null);
  ayah = (n) => {
    const v = this.chapters?.[this.c]?.verses?.[n - 1];
    return check(this.chapters, v);
  };
  juz = (n) => {
    this.j = n - 1;
    return check(this.chapters, this.sections[n - 1]);
  };
  juzs = () => check(this.sections, this.sections);
  maqras = (j) => check(this.sections, this.sections[j - 1]);
  maqra = (j, m) =>
    check(this.sections, this.sections ? this.sections[j - 1][m - 1] : null);
  page = (p) => check(this.pages, this.pages[p - 1]);
  line = (p, l) => check(this.pages, this.pages[p - 1][l - 1]);
  rawLine = (l) => check(this.raw, this.raw[l - 1]);
  static mushafs() {
    return mushafs;
  }
}

const mushaf = new Mushaf("duri");

module.exports.mushaf = mushaf;
module.exports.mushafs = mushafs;
